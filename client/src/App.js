import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import React from 'react'
import MakaleListesi from './components/MakaleListesi';
import MakaleEkle from './components/MakaleEkle';
import Baslik from './components/Baslik';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri : 'http://localhost:5000/'
});

function App() {
  return (
    <ApolloProvider client={client}> {/* aşağıda tanımlı her dosya içinde kullanılabilir */}
       <BrowserRouter>
       <Baslik/>
        <Switch>
            <Route exact path='/' component={MakaleListesi}/>
            <Route exact path='/ekle' component={MakaleEkle}/>
        </Switch>
       </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
