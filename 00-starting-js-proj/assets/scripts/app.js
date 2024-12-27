import { apikey } from "./util";
console.log(apikey);
function greet(userName,message){
    console.log(`${message} ${userName}`);
}
greet("vishnu","hello");
function calculate(a,b,c){
    return a*b/c;
}
let value=calculate(2,3,4);
console.log(value);
class user{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello ${this.name} my age is ${this.age}`);
    }
}
const user1=new user("vishnu",21);
user1.greet();
const subjects=["DSF","HCI","OS","Logic"];
for(var sub of subjects){
    console.log(sub);
}
console.log(subjects.findIndex(sub=>sub==="OS"));
const newSubjects=subjects.map(sub=>sub+" bugga");
console.log(newSubjects);
const [fName,sName]=["vishnu","kotha"];
console.log(fName,sName);
const greet2=()=>{
    console.log("You are timed out");
};
setTimeout(greet2,2000);
