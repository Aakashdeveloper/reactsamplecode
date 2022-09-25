import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

function App(){
    return(
        <>
            <Header/>
            <Home/>
            <Footer year="2022"/>
        </>
    )
}

export default App;