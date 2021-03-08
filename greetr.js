'use strict';
var eventEmitter=require('events');
var util=require('util');
module.exports=class Greetr extends eventEmitter{
    constructor(){
        super();
        this.greeting='Hello World!';
    }
    greet(data){
        console.log(`${this.greeting}:${data}`);
        this.emit('greet',data);
    }
}