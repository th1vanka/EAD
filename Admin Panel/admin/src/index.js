import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./theme/colors.css"
import "./theme/fonts.css";
import reportWebVitals from './reportWebVitals';
import PageRoutes from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageRoutes/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


