var eventEmitter=require('events');
var util=require('util');

function Greetr(){
    eventEmitter.call(this);
    this.greeting='Hello World!';
}

util.inherits(Greetr,eventEmitter);

Greetr.prototype.greet=function(data){
    console.log(this.greeting+' '+ data);
    this.emit('greet',data);
}
var greetr1=new Greetr();

greetr1.on('greet',function(data){
    console.log('someone greeted! '+data);
});

greetr1.greet('Boss Baby!');