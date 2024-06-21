import React, { useState } from 'react';
import './list.scss';

const List = () => {
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    invoiceRef: '',
    customerName: '',
    customerPhone: '',
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    const dummyData = [
      {
        date: '06/20/2024',
        sale: '001',
        loginName: 'user1',
        salesmanName: 'John Doe',
        customerName: 'Jane Smith',
        saleValue: '100.00',
        discount: '5.00',
        netValue: '95.00',
        action: 'View',
      },
      // Add more dummy data as needed
    ];

    setData(dummyData);
  };

  return (
    <div className="search-form-container">
      <form className="search-form">
        <div className="form-group">
          <label>From Date</label>
          <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>To Date</label>
          <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Invoice Ref#</label>
          <input type="text" name="invoiceRef" value={formData.invoiceRef} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Customer Name</label>
          <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Customer Phone</label>
          <input type="text" name="customerPhone" value={formData.customerPhone} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSearch}>Search</button>
      </form>

      <table className="result-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Sale#</th>
            <th>Login Name</th>
            <th>Salesman Name</th>
            <th>Customer Name</th>
            <th>Sale Value</th>
            <th>Discount</th>
            <th>Net Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default List;
