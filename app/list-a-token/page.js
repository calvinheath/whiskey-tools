'use client';
import React, { useState } from 'react';
import '../styles/listtoken.css'; // You can create a corresponding CSS file
import '../globals.css'
import Sidebar from '../components/sidebar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ListToken = () => {
    const [formData, setFormData] = useState({
      inPresale: 'no',
      wantPromo: 'no',
      tokenName: '',
      tokenSymbol: '',
      tokenImageUrl: '',
      chain: '',
      contractAddress: '',
      description: '',
      website: '',
      twitter: '',
      telegram: '',
      discord: '',
      reddit: '',
      facebook: '',
      github: '',
      presaleDate: '',
      launchDate: ''
    });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const [submissionStatus, setSubmissionStatus] = useState(null);

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://submit-form.com/ARCkt2DO', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('The listing has been submitted and will be reviewed within 24 hours.\n\nYou will be redirected to the home page in 5 seconds.', {
          onClose: () => window.location.href = '/',
          autoClose: 5000
        });
      } else {
        toast.error('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };
  

  return (
    <div className='container'><Sidebar/>
            <h2 className='sectionHeader'>List Your Token</h2>

<div className="listTokenContainer">
  <form onSubmit={handleSubmit}>
    <div className="formGroup">
      <label>Is Token in Presale?</label>
      <select name="inPresale" onChange={handleChange} required>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
    </div>

    <div className="formGroup">
      <label>Are you interested in Promoting your token on the main page?</label>
      <select name="wantPromo" onChange={handleChange} required>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
    </div>

    <div className="formGroup">
      <label>Token Name *</label>
      <input type="text" name="tokenName" pattern="\S(.*\S)?" onChange={handleChange} required />
    </div>

    <div className="formGroup">
      <label>Token Symbol *</label>
      <input type="text" name="tokenSymbol" pattern="\S(.*\S)?" onChange={handleChange} required />
    </div>

    <div className="formGroup">
      <label>Token Image URL *</label>
      <input type="url" name="tokenImageUrl" onChange={handleChange} required />
      <div className="imagePreview">
        {formData.tokenImageUrl && <img src={formData.tokenImageUrl} alt="Preview" />}
      </div>
    </div>

    <div className="formGroup">
    <label>Chain *</label>
    <select name="chain" onChange={handleChange} required>
      <option value="ETH">Ethereum</option>
      <option value="BSC">Binance Smart Chain</option>
      <option value="BASE">BASE Chain</option>
    </select>
  </div>

    <div className="formGroup">
      <label>Contract Address *</label>
      <input type="text" name="contractAddress" onChange={handleChange} required />
    </div>

    <div className="formGroup">
      <label>Description *</label>
      <textarea name="description" onChange={handleChange} required></textarea>
    </div>

    <div className="formGroup">
      <label>Website *</label>
      <input type="url" name="website" onChange={handleChange} required />
    </div>

    {/* Optional Fields */}
    <div className="formGroup">
      <label>Twitter (Optional)</label>
      <input type="url" name="twitter" onChange={handleChange} />
    </div>
    <div className="formGroup">
      <label>Telegram (Optional)</label>
      <input type="url" name="telegram" onChange={handleChange} />
    </div>
    {/* ... Other optional fields like Discord, Reddit, Facebook, Github ... */}

    {formData.inPresale === 'yes' ? (
      <div className="formGroup">
        <label>Presale Date *</label>
        <input type="date" name="presaleDate" onChange={handleChange} required />
      </div>
    ) : (
      <div className="formGroup">
        <label>Launch Date *</label>
        <input type="date" name="launchDate" onChange={handleChange} required />
      </div>
    )}

    <button type="submit">Submit</button>
  </form>
</div>
<ToastContainer/>
</div>
  );
};

export default ListToken;
