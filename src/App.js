import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted) {
      setSubmittedData({ email, fullName, address1, address2, city, province, postalCode });
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="form-container">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        
        <input type="text" placeholder="Address" value={address1} onChange={(e) => setAddress1(e.target.value)} />
        <input type="text" placeholder="Address 2" value={address2} onChange={(e) => setAddress2(e.target.value)} />
        
        <div className="form-row">
          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <select value={province} onChange={(e) => setProvince(e.target.value)}>
            <option value="">Choose...</option>
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
          </select>
          <input type="text" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </div>
        
        <div className="form-row">
          <label>
            <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
            Agree Terms & Conditions?
          </label>
        </div>
        
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Entered Information</h2>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address1}</p>
          <p>Address 2: {submittedData.address2}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
