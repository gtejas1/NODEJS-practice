var obj={
    name:'john doe',
    greet:function(){
        console.log(`hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name:'Jane Doe'});
obj.greet.apply({name:'Jane Doe'});