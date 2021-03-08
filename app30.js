var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cdCENTIXO:gw2ksoft@cluster0.6vkmg.mongodb.net/dbCENTIXO?retryWrites=true&w=majority');
//mongoose.connect('mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});
var Person = mongoose.model('Person', personSchema);
var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.'
});

//save the user
john.save(function (err) {
    if (err) throw err;
    console.log('person saved!');
});

var jane = Person({
    firstname: 'jane',
    lastname: 'Doe',
    address: '555 Main St.'
});

//save the user
jane.save(function (err) {
    if (err) throw err;
    console.log('person saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res,next) {
    console.log('Request URL: ' + req.url);
    var con = mysql.createConnection({
        host: "localhost",
        user: "TEJAS-PC\Tejas",
        password: "",
        database:"master"
    });

    con.query('SELECT People.ID,Firstname, Lastname,Address FROM People INNER JOIN PersonAddresses ON People.ID=PersonAddresses.PersonID INNER JOIN Address ON PersonAddresses.AddressID=Addresses.ID', function (err, rows) {
        if (err) throw err;
        console.log(rows[0].Firstname);
    });

    next();
});

htmlController(app);
apiController(app);

app.listen(port);