import React from 'react';

import './LoggedOut.css';

import aktuImage from '../../Shared/Images/aktu.png'
import bibaImage from '../../Shared/Images/biba.png'
import zuzuImage from '../../Shared/Images/zuzu.png'

const coins = [
    {
        name: 'ETH - PONKE',
        img: aktuImage,
        change: '+8%',
    },
    {
        name: 'BASE - ZAZU',
        img: zuzuImage,
        change: '+3%',
    },
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
                        <a href="/memepro/logged_out" className="nav-link">Logged Out</a>
                    </nav>
                    <h1>Memepro</h1>
                    <a href="/memepro/silver" className="cta-button">Connect MetaMask / Phantom Wallet</a>
                </header>
                <main>
                    <h2>Coins of the day + Backtest stats</h2>
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
            </div>
    );
}

export default App;
