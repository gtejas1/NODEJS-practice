var person={
    firstname:'',
    lastane:'',
    greet:function(){
        return this.firstname+' '+this.lastane;
    }
}
var john=Object.create(person);
john.firstname='John';
john.lastane="doe";

var jane=Object.create(person);
jane.firstname='Jane';
jane.lastane="doe";

console.log(john.greet());
console.log(jane.greet());