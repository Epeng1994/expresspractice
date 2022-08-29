const express = require('express');
const route = express.Router();

//CRUD
route.get('/',(req,res)=>{//R
    res.json('Getting nothing at the moment')
});
route.post('/',(req,res)=>{//C
    res.json('Getting nothing at the moment')
});
route.put('/',(req,res)=>{//U
    res.json('Getting nothing at the moment')
});
route.delete('/',(req,res)=>{//D
    res.json('Getting nothing at the moment')
});

module.exports = router;



