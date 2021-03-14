import React from 'react'
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import {Link} from 'react-router-dom'

const MAKALELER_GETIR=gql`
    {
        makalelerGetir{
            id,
            baslik,
            icerik
        }
    }
`;

export default function MakaleListesi() {

    const{data,loading,error}=useQuery(MAKALELER_GETIR);

    let makaleTemp;
    if(loading){
        makaleTemp=<p>makaleler yükleniyor</p>
    }
    else if(data){
        makaleTemp=data.makalelerGetir.map(makale=>{
            return(
                <div>   
                    <Link to={`/makale/${makale.id}`}>
                        {makale.baslik}
                    </Link>
                </div>
            )
        })
    }
    console.log(data);

    return (
        <div>
            {makaleTemp}
        </div>
    )
}
