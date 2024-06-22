import React, { useState } from "react";
import "./home.scss";

const Return = () => {
  const [totalAmount, setTotalAmount] = useState(0);
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
            className="disc-input"
          />
          <button>Add to table</button>
        </form>
      </div>
      <div className="list-container">
        <div style={{ width: "72%" }} className="list">
          <table>
            <thead>
              <tr>
                <td style={{ width: "30%" }}>Name</td>
                <td style={{ width: "7%" }}>Qty</td>
                <td style={{ width: "7%" }}>S. Price</td>
                <td style={{ width: "7%" }}>Total Price</td>
                <td style={{ width: "7%" }}>Action</td>
              </tr>
            </thead>
          </table>
        </div>
        <div style={{ width: "20%" }} className="billing-form">
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
              <label>Discount Percent</label>
              <input type="number" value={discountPrice} readOnly />
            </div>
            <div className="form-group">
              <label>Discount Price</label>
              <input type="number" value={netPrice} readOnly />
            </div>
            <div className="form-group">
              <label>Price after discount</label>
              <input type="number" value={change} readOnly />
            </div>
          </form>
        </div>
      </div>
      <div className="remarks">
        <h3>Remarks</h3>
        <textarea
          name=""
          id="remarks"
          placeholder="Enter remarks"
        ></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Return;
