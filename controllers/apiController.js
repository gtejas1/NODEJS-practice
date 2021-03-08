var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
module.exports = function (app) {
    app.get('/api/person/:id', function (req, res) {
        //get that data from the database
        res.json({ firstname:'john',lastname:'doe' });
    });
    
    app.post('/api/person', function (req,res) {
        //save to data base
        
    });
    
    app.delete('/api/person/:id', function (req, res) {
        //delete from data base
    });
}