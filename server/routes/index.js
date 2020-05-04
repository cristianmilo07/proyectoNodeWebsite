const express = require('express');
const router = express.Router();

module.exports = function() {
    router.get('/', (req, res) =>{
        res.render('inicio');
    });

    router.get('/nosotros', (req, res) => {
        res.render('nosotros', {
            pagina: 'Sobre Nosotros'
        });
    })

    return router;
}