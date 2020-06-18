import React, { useState } from 'react';
import './App.css';
import './styles/index.scss';
// import MyImage from 'utilities/component/image';

function App() {
    const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

    return (
        <div className={`App ${isDarkTheme ? 'dark' : ''}`}>
            {/* <div className="grid--container">
                <div className="item box--1">A</div>
                <div className="item box--2">B</div>
                <div className="item">C</div>
                <div className="item">D</div>
                <div className="item">E</div>
                <div className="item">F</div>
                <div className="item">G</div>
                <div className="item">H</div>
                <div className="item box--3">I</div>
                <div className="item">J</div>
                <div className="item">K</div>
                <div className="item">L</div>
                <div className="item">M</div>
                <div className="item">N</div>
                <div className="item">oO</div>
            </div> */}

            {/* <MyImage src="" /> */}

            <code>const myFunction = () => {}</code>

            <button className="button">Click Me!</button>

            <button className="button-2">Click YOU!</button>

            <br />
            <br />
            <div className="box-1">Box 1</div>
            <br />
            <br />
            <div className="box-2">Box 2</div>
            <br />
            <br />
            <div className="box-3">Mixin using variable</div>
            <br />
            <br />
            <div className="box-4">Mixin using variable with default value</div>
            <br />
            <br />
            <button className="button-basic">Basic button</button>
            <button className="button-danger">Danger button</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <button onClick={() => setDarkTheme(!isDarkTheme)}>Toggle dark theme</button>
        </div>
    );
}

export default App;
