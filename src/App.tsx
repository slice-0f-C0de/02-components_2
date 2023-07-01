import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
        <AppTitle/>
        <Rating/>
        <Accordion/>
    </div>
  );
}

function AppTitle() {
    return <div>This is app component</div>
}

export default App;
