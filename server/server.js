const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose=require('mongoose');
const MakaleModel = require('./models/MakaleModel');

const DB_URI = 'mongodb+srv://gkhn:1234@blogcluster.dafwe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const typeDefs=gql`

    type Makale{
        id:ID!,
        baslik:String!,
        icerik:String!,
    }

    type Query{
        makalelerGetir:[Makale]!
        makaleGetir(id:ID!):Makale!
    }

    type Mutation{
        makaleOlustur(baslik:String!,icerik:String!):Makale!
    }

`;

const resolvers={

    Query:{
        async makalelerGetir(){
            const makaleler=await MakaleModel.find();
            return makaleler;
        },
        async makaleGetir(parent,args){
            try{
                const {id}=args;
                return await MakaleModel.findById(id);
            }catch{
                throw new error
            }
        }
    },
    Mutation:{
        makaleOlustur:async (parent,args)=>{
            try{
                const makale={
                    baslik:args.baslik,
                    icerik:args.icerik
                };
                return await MakaleModel.create(makale); 
            } catch(error) {
                throw new error;
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(DB_URI,{useNewrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('mongodb bağlantısı başarılı');
    return server.listen({port:5000})
}).then((res)=>{
    console.log(`server ${res.url} adresinde çalışıyor `);
})
