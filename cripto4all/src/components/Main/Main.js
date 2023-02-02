import React, { useState, useEffect } from 'react'
import { BASE_URL } from "../../constant/url"
import axios from "axios"
import Coin from './Coin'

const Main = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get(`${BASE_URL}`)
            .then(res => {
                setCoins(res.data)
            }).catch(error => alert(error))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()))

        console.log(filteredCoins)

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <form>
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                     <Coin 
                    key={coin.id}
                    name={coin.name} 
                    image={coin.image}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume}
                    />
                )
            })}
        </div>
    )
}

export default Main