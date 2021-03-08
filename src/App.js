import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <AppRouter/>
                {/*<img*/}
                {/*    src="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-0/p640x640/892253_489828351070614_1400702268_o.jpg?_nc_cat=111&ccb=3&_nc_sid=d2e176&_nc_ohc=Ddl5n58oeCoAX8DpCfh&_nc_ht=scontent-lht6-1.xx&tp=6&oh=62cc3541abbfb0064b4a2f50fb34e60d&oe=6058EA84"*/}
                {/*    alt="main"*/}
                {/*/>*/}
            </BrowserRouter>
        </div>
    );
}

export default App;
