import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <AppTitle/>
        <Rating/>
        <Accordion/>
    </div>
  );
}

function Star() {
    return <div>star</div>
}

export function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function AccordionTitle() {
    return <h3>Menu</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AppTitle() {
    return <div>This is app component</div>
}

export default App;
