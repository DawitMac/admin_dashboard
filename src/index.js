import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { ContextProvider } from './contexts/ContextProvider'
import './index.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
//import { BrowserRouter} from 'react-router-dom';

const client = new ApolloClient({
 // uri : 'https://rickandmortyapi.com/graphql' ,
  uri: 'https://api.ashewa.com/graphql/',
  cache : new InMemoryCache()
})


ReactDom.render(<ContextProvider>
                <ApolloProvider  client={client}>
                   <App />
                </ApolloProvider>
               </ContextProvider> , 
document.getElementById('root'))