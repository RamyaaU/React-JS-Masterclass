import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppForArrayuse from "../src/components/AppForArrayusestate";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

//rendering the component
root.render(
   < React.StrictMode>
        {/* <App /> */}
        <AppForArrayuse />
   </React.StrictMode>
)
