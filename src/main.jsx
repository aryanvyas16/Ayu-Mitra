import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import {PrivyProvider} from '@privy-io/react-auth';
import { StateContextProvider } from './context'

//create root element where our app will be mounted so we 
//create a const variable name root
const root = ReactDOM.createRoot(document.getElementById("root"))

//to render our app to root element
//before doing anything else wrap it to privy provider
root.render(
    <PrivyProvider
    appId="clzq44g0a06ts6jd0dsiw5u3h"
    config={{
      // Customize Privy's appearance in your app
      appearance: {
        theme: 'dark',
      },
 
    }}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider> 
    </Router>
  </PrivyProvider>

)