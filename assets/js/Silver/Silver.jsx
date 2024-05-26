import React from 'react';

import './Silver.css';

import bibaImage from '../../Shared/Images/biba.png'

const coins = [
    {
        name: 'SOLANA - BODEN',
        img: bibaImage,
        change: '+14%',
    },
];

function App() {
    return (
        <div className="app">
            <header className="header">
                <nav className="navbar">
                    <a href="/memepro/logged_out" className="nav-link">Logged in</a>
                </nav>
                <h1>Memepro</h1>
                <a href="/memepro/silver" className="cta-button">Add $USDT 100+ to gain 5% / month</a>
                <p className="deposit-fee">Deposit fee - Y%</p>
            </header>
            <main>
                <h2>Gainer of the day</h2>
                <div className="coins">
                    {coins.map((coin, index) => (
                        <div className="coin" key={index}>
                            <img src={coin.img} alt={coin.name} />
                            <h3>{coin.name}</h3>
                            <p className="change">{coin.change}</p>
                        </div>
                    ))}
                </div>
            </main>
            <a href='/memepro/gold' className="cohort">Cohort: Silver</a>
        </div>
    );
}

export default App;
