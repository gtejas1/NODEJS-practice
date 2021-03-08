var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhh');

// sign with RSA SHA256
var privateKey = fs.readFileSync('private.key');
var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });

jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: 'foobar'
}, 'secret');
  

jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: 60 * 60 });
   
  //or even better:
   
  jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: '1h' });