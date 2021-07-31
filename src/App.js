import React from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './components/Header';
import AppRouter from "./components/AppRouter";

function App() {
   return (
       <div className="wrapper">
          <HashRouter>
                <Header/>
                <div className="container">
                   <AppRouter/>
                </div>
          </HashRouter>
       </div>
   );
}

export default App;
