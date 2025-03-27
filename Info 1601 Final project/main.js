require('dotenv').config(); 
const express = require('express');
const multer = require('multer'); 
const fs = require('fs'); 
const pdfParse = require('pdf-parse'); const axios = require('axios'); 

const app = express();
const upload = multer({ dest: 'uploads/' }); 

app.use(express.json());

async function analyzeResume( text, jobDescription){
     const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
    
{
    model: "gpt-3.5-turbo"
}