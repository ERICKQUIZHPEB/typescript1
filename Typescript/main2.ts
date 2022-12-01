/*function add (x:number | string , y:number | string){
    if(typeof x ==="number" && typeof y ==="number"){
        return x + y;
    }
    if(typeof x === "string" && typeof y === "string"){
        return x.concat(y);
    }
    else{
        console.log('Parameters must be numbers or strings')
    }
}
console.log(add( 8, 4));
console.log (add('ocho','cuatro'));
console.log(add(8,'ocho'));

//Clase 2

interface Employee {
    employeeID: number;
    age: number;
}

interface Manager{
    stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 1234,
    age: 34,
    stockPlan: true
};

//Clase

interface Citizen {
    citizenID: number;
    name: string;
    age: number;
    city: string
}

interface President{
    name: String
    stockPlan: boolean;
}

type PresidentCitizen = Citizen & President;
let newPresident: PresidentCitizen = {
    citizenID: 1234,
    name: 'Juan',
    age: 34,
} 

//Clase 3 tipo literal

type testResult= "pass" | "fail" |"incomplete";
let myResult: testResult ;
myResult = "incomplete";
myResult = "pass";
myResult = "failure";

interface City{
    name: string;
    population: number;

}

type dangerLevel= 'low' | 'high' | 'medium';
let myLevel: dangerLevel;
    myLevel = 'low';
    myLevel = 'high';
    myLevel = 'medium';

interface Capital{
    country: string;
}


type CapitalCity = City & Capital;
let newCity: CapitalCity = {
    name: 'Cuenca',
    population: 123456,
    country: 'string',
} 

let person1: [string, number] = ['Marcia', 35]*/