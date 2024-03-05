import React from 'react'

const Header = ({ current, mode, prev, next, onClickPrev, onClickNext }) => {
    //const { current, mode, prev, next, onClickPrev, onClickNext } = this.props;
    // You can customize your header component based on the props passed
    let headerContent;
    switch (mode) {
        case 'dailyMode':
            headerContent = `${current.year}-${current.month}-${current.day}`;
            break;
        case 'monthlyMode':
            headerContent = `${current.year}-${current.month}`;
            break;
        case 'yearlyMode':
            headerContent = `${current.year}`;
            break;
        default:
            headerContent = '';
            break;
    }

    return (
        <div>
            <button onClick={onClickPrev}>Prev</button>
            <span>{headerContent}</span>
            <button onClick={onClickNext}>Next</button>
        </div>
    );
}

export {Header}