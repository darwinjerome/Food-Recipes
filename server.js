const express = require('express');
const app = express();

router.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
})

router.get('/', (req, res) => {
    res.send("You're not allowed here.");
})

// app.get('/api/customers', (req, res) => {
//     const customers = [
//         {id: 1, firstName: 'Dylan', lastName: 'Jacob'},
//         {id: 2, firstName: 'Mark', lastName: 'John'},
//         {id: 3, firstName: 'Joni', lastName: 'Sanders'},
//     ];

// res.json(customers);
// });
  

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));