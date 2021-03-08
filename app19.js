function greet(callback){
    console.log('Hello!');
    var data={
        name:'john doe'
    };
    callback(data);
}
greet(function(data){
    console.log('The call back was involked!');
    console.log(data);
});

greet(function(data){
    console.log('A different callback was involked!');
    console.log(data.name);
});