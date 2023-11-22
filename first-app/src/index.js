import React from 'react';
import ReactDOM from 'react-dom/client';

//importar o meu componente
import Header from './components/Header'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
);
