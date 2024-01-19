const Lead = require('../models/LeadModel') 
const mongoose = require('mongoose')
const path = require('path');

const getLeads = async(req,res) => {
    // const leads = await Lead.find({}).sort({createdAt: -1})  //sorting according to dates but -a makes it from newest date to the oldest
    // res.status(200).json(leads)
    
    res.sendFile(path.join(__dirname, '../views', 'form.html'));
}

const saveLead = async (req, res) => {
     const { name, email, phone } = req.body;
    
     console.log('name:', name, 'email:', email, 'phone:', phone);

  try {
    const newLead = new Lead({ name, email, phone });
    await newLead.save();
    console.log('Lead saved to the database:', newLead);
    // Send a success response
    res.send(`Form submitted successfully!<br>Name: ${name}<br>Email: ${email}<br>Phone: ${phone}`);
    return newLead;
  } catch (error) {
    console.error('Error saving lead to the database:', error);
    throw error;
  }
};

module.exports = {
  getLeads,
  saveLead,
};