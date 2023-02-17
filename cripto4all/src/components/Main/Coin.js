import React from 'react'
import "./Coin.css"

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <div className="coin-vol-mkt">
                        <p className="coin-volume">${volume.toLocaleString()}</p>
                        <p className="coin-marketcap">
                            Mkt Cap: ${marketcap.toLocaleString()}
                        </p>
                    </div>
                    <div className="coin-per-price-but">
                        <div className="coin-percent-price">
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{Number(priceChange).toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{Number(priceChange).toFixed(2)}%</p>
                    )}
                    
                    <p className="coin-price">${price.toLocaleString()}</p>
                    </div>
                    <input className="coin-button" type="button" value="add to wallet"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coin