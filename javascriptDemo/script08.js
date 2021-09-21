//Objects Literals (JSON)

let emp1 = {id:101,name:"Vamsy",sal:45600,ta:()=>this.sal*0.2};
console.log(emp1);
console.log(emp1.ta())

//constructor functions: a function that accepts proeprties and assigns them onto 'this'

const Employee = function(id,name,sal){
    this.id=id;
    this.name=name;
    this.sal=sal;
    this.ta = ()=>this.sal*0.2
}

let emp2 = new Employee(102,'Sagar',56700);
console.log(emp2);
console.log(emp2.ta())

//classes

class Emp{
    constructor(id,name,sal){
        this.id=id;
        this.name=name;
        this.sal=sal;
    }

    ta(){
        return this.sal*0.2;
    }
}

let emp3 = new Emp(3,"Srinu",89000);
console.log(emp3);
console.log(emp3.ta())