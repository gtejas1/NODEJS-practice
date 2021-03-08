function greet(callback) {
    console.log('hello!');
    var data={
        name:'John Doe'
    }
    callback(data);
}

greet(function(data){
    console.log('the call back was involked!');
    console.log(data);
});

greet(function(data){
    console.log('A different call back was involked!');
    console.log(data.name);
});