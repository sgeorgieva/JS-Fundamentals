//ex2 - Remove elements

//window.onload = function(){
//   
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');
//
//btn.addEventListener("click",function(event){
//   event.preventDefault();
//
//   saveArr(inputBox.value);
//});
//
//btn2.addEventListener("click",function(event){
//   event.preventDefault();
//   removeItemAndprintNewArray(inputBox.value, inputBox2.value);
//});

//var arrNum = ['1', '2', '3', '2', '1', '2', '3', '2' ],
//    arrStr = ['_h/_', '^54F#', 'V', '^54F#', 'Z285','kv?tc`', '^54F#', '_h/_','Z285', '_h/_', 'kv?tc`', 'Z285', '^54F#', 'Z285', 'Z285', '_h/_', '^54F#', 'kv?tc`', 'kv?tc`','Z285'];
//
//    Array.prototype.remove = function(del) {
//    len = this.length;     // len = dyljina na masiva
//        while(len){        // dokato len syshtestvuva 
//            if (this[len-1] != del){ /* len-1 e vsyshtonst tekushiq indeks ot masiva, kojto e razlichen ot                                  del(zadadeniya po uslovie)*/
//                console.log(this[len-1]); /* printirai mi vsqko edno, koeto ne syotvetstva na neshtoto koeto sym*/
//            }                             /* postavila kato atribut (del) */                    
//        len--; 
//        }
//    }
//    
//   arrNum.remove('1');
//   arrStr.remove('_h/_');

//ex3 - Deep copy

//1-st exemple
// recursive function to clone an object. If a non object parameter
// is passed in, that parameter is returned and no recursion occurs.
 
//function cloneObject(obj) {
//    
//    if (obj === null || typeof obj !== 'object') {
//        return obj;
//    }
// 
//    var temp = obj.constructor(); // give temp the original obj's constructor
//    for (var key in obj) {
//        temp[key] = cloneObject(obj[key]);
//    }
// 
//    return temp;
//}
// 
//var bob = {
//    name: "Bob",
//    age: 32
//};
// 
//var bill = (cloneObject(bob));
//bill.name = "Bill";
////bill.age = 20;
// 
//console.log(bob);
//console.log(bill);

//ex4 - Has property

//1-st exemple
//var obj = {
//    newprop: ''
//};
//obj.prop = 'exists';
//
//function changeO() {
//  obj.newprop = obj.prop;
////  console.log(obj.newprop);
//  delete obj.prop;
//}
//
//console.log(obj.hasOwnProperty('prop'));   // returns true
//changeO();
//console.log(obj.hasOwnProperty('prop'));   // returns false

//2-nd exemple
//o = new Object();
//o.prop = 'exists';
//
//function changeO() {
//  o.newprop = o.prop;
//  delete o.prop;
//}
//
//console.log(o.hasOwnProperty('prop'));   // returns true
//changeO();
//console.log(o.hasOwnProperty('prop'));   // returns false

//ex5 - Youngest person

// var people = [
//    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
//    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
//    { firstname: 'John', lastname: 'Doe', age: 42 }
//];

//var people = [
//    { firstname: 'Penka', lastname: 'Hristova', age: 61},
//    { firstname: 'System', lastname: 'Failiure', age: 88 },
//    { firstname: 'Bat', lastname: 'Man', age: 16 },
//    { firstname: 'Malko', lastname: 'Kote', age: 72 }
//];

//function printTheYoungestPerson(people) {
//
//var arr = [],
//    arr2 = [],
//    arr3 = [],
//    index = 0;
//    minYears = 0;
//    
//    for (var i in people) {
//        arr.push(people[i].firstname);
//        arr2.push(people[i].lastname);
//        arr3.push(people[i].age);
//    }
//
//    minYears = arr3[0];
//    
//    for (var i=1; i<=arr.length; i++) {
//        if (minYears >= arr3[i]) {
//            minYears = arr3[i];
//            minYears = arr2[i];
//            minYears =  arr[i];
//            index = i;
//        }
//    }
//    console.log(arr[index] + ' '+ arr2[index]);
//}
//
//printTheYoungestPerson(people);

//ex6 - Group people

//var people = [
//  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
//  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
//  { firstname: 'John', lastname: 'Doe', age: 42 },
//  { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
//  { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
//  { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
//];
//
////var groupedByAge = group(people);
//
//function printGroupPeople(people) {
//    
//    var arr = [],
//    arr2 = [],
//    arr3 = [],
//    index = 0,
//    newArr = [],
//    minYears = 0;
//    
//    for (var i in people) {
//        arr.push(people[i].firstname);
//        arr2.push(people[i].lastname);
//        arr3.push(people[i].age);
//    }
//    
//       arr3.sort(function(a, b){
//        return a - b;	
//    });
//    
//    function groupByAge(people) {
//        for (var i=0; i < arr3.length; i++){
//          
//            console.log (arr3[i] + ":" );
//            console.log(" firstname: " + arr[i] + "," + " lastname: " + arr2[i] + "," + " age: " + arr3[i]);
//            
//           if (arr3[i] === arr3[i+1]){
//                console.log(" firstname: " + arr[i+1] + "," + " lastname: " + arr2[i+1] + "," + " age: " + arr3[i+1]);
//                i++;
//            }
//        }
//    }
//    groupByAge(people);
//}
//printGroupPeople(people);