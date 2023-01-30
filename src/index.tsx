import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from "i18next";
import resources from "./lang/resources";
import lang from "./lang/lang";
import 'semantic-ui-css/semantic.min.css'

i18n.init({
    resources,
    lng: lang.get()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);