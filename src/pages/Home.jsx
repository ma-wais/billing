import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className='inputs'>
        <form className="item-form">
          <input type="text" placeholder="(F1) Search Item By Name / Code / Unit" className="search-input" />
          <input type="number" placeholder="S.Price" className="price-input" />
          <input type="number" placeholder="Qty" className="qty-input" />
          <input type="number" placeholder="Disc." value="0" className="disc-input" readOnly />
          <input type="number" placeholder="Stock" className="stock-input" />
          <input type="number" placeholder="Qty.Pack" className="qty-pack-input" />
        </form>
      </div>

    </div>
  )
}

export default Home