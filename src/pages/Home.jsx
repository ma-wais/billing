import React, { useState } from "react";
import "./home.scss";

const Home = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [netPrice, setNetPrice] = useState(0);
  const [specialDiscount, setSpecialDiscount] = useState(0);
  const [received, setReceived] = useState(0);
  const [change, setChange] = useState(0);

  const calculateNetPrice = () => {
    const discount = (totalAmount * discountPercent) / 100;
    setDiscountPrice(discount);
    const priceAfterDiscount = totalAmount - discount;
    const net = priceAfterDiscount - specialDiscount;
    setNetPrice(net);
    const changeAmount = received - net;
    setChange(changeAmount);
  };

  return (
    <div className="home">
      <div className="inputs">
        <form className="item-form">
          <input
            type="text"
            placeholder="(F1) Search Item By Name / Code / Unit"
            className="search-input"
          />
          <input type="number" placeholder="S.Price" className="price-input" />
          <input
            type="number"
            min={0}
            placeholder="Qty"
            className="qty-input"
          />
          <input
            type="number"
            placeholder="Disc."
            value="0"
            className="disc-input"
            readOnly
          />
          <input type="number" placeholder="Stock" className="stock-input" />
          <input
            type="number"
            placeholder="Qty.Pack"
            className="qty-pack-input"
          />
        </form>
      </div>
      <div className="list-container">
        <div className="list">
          <table>
            <thead>
              <tr>
                <td style={{ width: "30%" }}>Name</td>
                <td style={{ width: "7%" }}>Unit</td>
                <td style={{ width: "7%" }}>Qty</td>
                <td style={{ width: "7%" }}>Rate</td>
                <td style={{ width: "7%" }}>Value</td>
                <td style={{ width: "6%" }}>Disc%</td>
                <td style={{ width: "5%" }}>Disc.</td>
                <td style={{ width: "6%" }}>Net</td>
                <td style={{ width: "7%" }}  >P%</td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="billing-form">
          <div>
            <span>{new Date().toLocaleString()}</span>
            <h2>Current Bill (1)</h2>
          </div>
          <form>
            <div className="form-group">
              <label>Total Amount</label>
              <input
                type="number"
                value={totalAmount}
                onChange={(e) => setTotalAmount(Number(e.target.value))}
                onBlur={calculateNetPrice}
              />
            </div>
            <div className="form-group">
              <label>Discount%</label>
              <input
                type="number"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(Number(e.target.value))}
                onBlur={calculateNetPrice}
              />
            </div>
            <div className="form-group">
              <label>Discount Price</label>
              <input type="number" value={discountPrice} readOnly />
            </div>
            <div className="form-group net-price">
              <label>Net Price</label>
              <input type="number" value={netPrice} readOnly />
            </div>
            <div className="form-group">
              <label>Special Discount (F3)</label>
              <input
                type="number"
                value={specialDiscount}
                onChange={(e) => setSpecialDiscount(Number(e.target.value))}
                onBlur={calculateNetPrice}
              />
            </div>
            <div className="form-group">
              <label>Received</label>
              <input
                type="number"
                value={received}
                onChange={(e) => setReceived(Number(e.target.value))}
                onBlur={calculateNetPrice}
              />
            </div>
            <div className="form-group">
              <label>Change</label>
              <input type="number" value={change} readOnly />
            </div>
            <div className="form-actions">
              <button type="button" onClick={() => alert("Save & Print")}>
                Save & Print (F12)
              </button>
              <button type="button" onClick={() => alert("Save")}>
                Save (F9)
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="info">
        <div><h4>Total Items:</h4> <input className="w40" type="text" value="0" /></div>
        <div><h4>Customer: </h4> <input type="text" value="" /></div>
        <div><h4>Customer Phone </h4> <input type="text" value="" /></div>
        <div><h4>Doctor Name </h4> <input type="text" value="" /></div>
        <div>
          <h4>User:(F7)</h4> 
          <select name="Abdullah" id="">
            <option value="Abdullah">Abdullah</option>
            <option value="Abdullah">Abdullah</option>
            <option value="Abdullah">Abdullah</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
