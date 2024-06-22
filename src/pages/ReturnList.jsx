import React  from 'react';
import './list.scss';

const ReturnList = () => {
  
  return (
    <div className="search-form-container">
      <form className="search-form">
        <div className="form-group">
          <label>From Date</label>
          <input type="date" name="fromDate"
        //    value={formData.fromDate} onChange={handleChange} 
           />
        </div>
        <button type="button" 
        // onClick={handleSearch}
        >Search</button>
      </form>

      <table className="result-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Sale Return#</th>
            <th>Total Amount</th>
            <th>Discount</th>
            <th>Net Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="9">No record found</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.sale}</td>
                <td>{item.loginName}</td>
                <td>{item.salesmanName}</td>
                <td>{item.customerName}</td>
                <td>{item.saleValue}</td>
                <td>{item.discount}</td>
                <td>{item.netValue}</td>
                <td>{item.action}</td>
              </tr>
            ))
          )}
        </tbody> */}
      </table>
    </div>
  );
};

export default ReturnList;
