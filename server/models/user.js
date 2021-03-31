'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHashAndSalt: {
    type: String
  },
  campus: {
    type: String,
    required: true,
    enum: [
      'Madrid',
      'Barcelona',
      'Miami',
      'Paris',
      'Berlin',
      'Amsterdam',
      'México',
      'Sao Paulo',
      'Lisbon'
    ]
  },
  course: {
    type: String,
    required: true,
    enum: ['Web Dev', 'UX/UI', 'Data Analytics', 'Cyber Security']
  },
  image: {
    type: String,
    default:
      'https://res.cloudinary.com/dny9keold/image/upload/v1612216532/lab-file-upload/yrydcl73mdtdutdsej0b.jpg'
  }
});

module.exports = mongoose.model('User', schema);
