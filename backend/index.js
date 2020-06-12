const express = require('express');

const app = express();

app.get('/users', (request, response) => {
    return response.json({ 
        evento:' Semana OmniStack 11',
        aluno: 'Luiz Miguel',
    });
});

app.listen(3333);
