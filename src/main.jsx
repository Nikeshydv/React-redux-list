import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from '../store.jsx'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={Store}>
<App />
</Provider>
    

)
