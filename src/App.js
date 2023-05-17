import React from 'react';
import './App.css';

function App() {

    return (
        <div className='container'>
            <MenuOptions />
            <MenuOptions />
            <MenuOptions />
            <MenuOptions />
            <MenuOptions />
            <MenuOptions />
        </div>
    );

}

export default App;



function MenuOptions({ optionList }) {

    const options = optionList || [
        'New',
        'Open...',
        '-',
        'Save',
        'Save as...',
        '-',
        'Close',
    ];

    return (
        <div className='menu-container'>
            <div className='menu-options-contianer'>
                {options.map(option =>
                    <MenuOption text={option} key={option} onClick={() => alert(`Clicked ${option}!`)} />
                )}
            </div>
        </div>
    );

};

function MenuOption({ text, onClick }) {

    const handleOnClick = () => {
        if (onClick) onClick();
    };

    return (
        <div>
            {text === '-'
                ? <div className='option-separator'></div>
                : <div className='option-container' onClick={handleOnClick}>
                    <span className='option-text'>{text}</span>
                </div>
            }
        </div>
    );

};