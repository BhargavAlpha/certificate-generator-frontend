import React, { useState } from 'react';
import fillPDF from './FillPdf';
import '../index.css';

const AdminInterface = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    date: '',
    certificateId: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateCertificateId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let certificateId = '';
    for (let i = 0; i < 10; i++) {
      certificateId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return certificateId;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.course || !formData.date) {
      alert('Please fill in all fields');
      return;
    }

    const certificateId = generateCertificateId();
    formData.certificateId = certificateId;
    fillPDF(formData);
  };

  return (
    <div className='form-div'>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Generate Certificate</h2>
        <input type="text" name="name" placeholder="Name" className="form-input" value={formData.name} onChange={handleChange} />
        <input type="text" name="email" placeholder="Students's Email" className="form-input" value={formData.email} onChange={handleChange} />
        <input type="text" name="course" placeholder="Course" className="form-input" value={formData.course} onChange={handleChange} />
        <input type="date" name="date" placeholder="Date of Approval" className="form-input" value={formData.date} onChange={handleChange} />
        <button type="submit" className="form-submit">Generate Certificate</button>
      </form>
    </div>
  );
};

export default AdminInterface;
