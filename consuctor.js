/*^^^^^^*/
function person(first, last, age){
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.fullName = function(){
    return this.firstname + " " + this.lastname;
  }
}

var p1 = new  person(nguyen, huyen, 20);
var p2 = new person(tran, hong, 25);

class Student{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}12355
1234
234


function countDown(num){
  if(num>0){
    console.log(num);
    return countDown(num-1);
  }
  return num;
}

countDown(10);
