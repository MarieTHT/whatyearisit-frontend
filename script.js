//const { response } = require("express")

fetch('https://whatyearisit-backend-mxr7.vercel.app/year')
    .then(response => response.json())
    .then((data) => {
        console.log(data.year);
        console.log(document.querySelector('#year').textContent); 
        document.querySelector('#year').textContent = data.year;
    });

