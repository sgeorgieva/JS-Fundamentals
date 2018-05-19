//ex1 - Say Hello

//var person = prompt("What's your name? ");
//
//function sayHello() {
//    if (person != null) {
//        console.log("Hello, " + person + "!");
//    }
//}
//
//sayHello();

//ex2 - Get largest number

//function GetMax(a, b) {
//    
//var maxNum;
//    
//    if (a > b) {
//        maxNum=a; 
//        
//    }else {
//        maxNum =b;
//    }
//    console.log(maxNum);
//}
//
//function getLargestNumber() {
//    GetMax(8,3,6);
//    GetMax(7,19,19);
//}
//
//getLargestNumber();

//ex3 - Get largest number
//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//
//btn.addEventListener("click",function(event){
//    event.preventDefault();
//    
//    printLastDigit(getLastDigit(inputBox.value));
//});
//
//    function getLastDigit(number){
//        return number[number.length-1];
//    }
//    
//    function printLastDigit(number) {
//        var word = '';
//
//        switch (+number) {
//            case 0:
//                word = "zero";
//                break;
//            case 1:
//                word = "one";
//                break;
//            case 2:
//                word = "two";
//                break;
//            case 3:
//                word = "three";
//                break;
//            case 4:
//                word = "four";
//                break;
//            case 5:
//                word += "five";
//                break;
//            case 6:
//                word = "six";
//                break;
//            case 7:
//                word = "seven";
//                break;
//            case 8:
//                word = "eight";
//                break;
//            case 9:
//                word = "nine";
//                break;
//            default: word='error';
//                break;
//        }
//           console.log(word);
//    }
//}

//ex4 - Appearance count
    
//window.onload = function(){
//    
//inputBox = document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');
////    
////btn.addEventListener("click",function(event){
////event.preventDefault();
////    
////  printNumber(getArrayLenght(inputBox.value));
////
////});
//    
//btn2.addEventListener("click",function(event){
//event.preventDefault();
//    
//    findNumber(getArrayLenght(inputBox.value), inputBox2.value);
//    
//});
//
//    function getArrayLenght(number){
//            console.log(number.split(" "))
//        return number.split(" ");
//    }
//
//    function printNumber(number) {
//            
//        console.log(number);
//    }
//    
//    /**
//    * @param array -> numbers , string -> searchedNumber
//    */
//    function findNumber(numbers, searchedNumber) {
//        
//        var count=0;
//        for (var i = 0; i<=numbers.length; i++) {
//            if (numbers[i] === searchedNumber.trim()) {
//                count++; 
//            }
//        }
//        console.log(count);
//        count=0;
//    }
//}

//ex5 - Larger than neighbours

//window.onload = function(){
//    
//inputBox = document.getElementById("myText");
//btn = document.getElementById('sub');
//
//   
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    
//  findNumber(getArrayLenght(inputBox.value));
//
//});
//
//    function getArrayLenght(number){
//        return number.split(" ");
//    }
//
//    function findNumber(numbers) {
//        
//        var count=0;
//        for (var i = 0; i<=numbers.length; i++) {
//            if (+numbers[i] >= +numbers[i-1] && +numbers[i] >= +numbers[i+1]) {
//                count++;
////                console.log(numbers[i]);
//            }
//        }
//        console.log(count);
//        count=0;
//    }
//}
//

//ex6 - First larger than neighbours

// window.onload = function(){
    
// inputBox = document.getElementById("myText");
// btn = document.getElementById('sub');

   
// btn.addEventListener("click",function(event){
// event.preventDefault();
    
//   findNumber(getArrayLenght(inputBox.value));

// });

//     function getArrayLenght(number){
//         return number.split(" ");
// //        console.log(number.split(" "));
//     }

//     function findNumber(numbers) {
        
//         var count = 0,

//             maxNum = numbers[0];

//             if ((parseInt(maxNum) >= parseInt(numbers[1])) || (parseInt(maxNum) <= parseInt(numbers[1]))){

//               for (var i = 1; i <= numbers.length; i++) {
                  
//                   if ((parseInt(maxNum) <= parseInt(numbers[i])) && (parseInt(numbers[i+1]) <= parseInt(numbers[i]))){
//                         maxNum = numbers[i];
//                         console.log(i);
//                         console.log(maxNum);
//                         break;
//                   }
    
//                  else if ((parseInt(maxNum) <= parseInt(numbers[i])) && (parseInt(numbers[i-1]) <= parseInt(numbers[i])) && (parseInt(numbers[i+1]) <= parseInt(numbers[i]))){
//                         maxNum = numbers[i];
//                         console.log(i);
//                         console.log(maxNum);
//                         break;
//                   }
                
//                 else if ((parseInt(maxNum) != parseInt(numbers[i])) && (parseInt(numbers[i+1]) != parseInt(numbers[i])) && (parseInt(maxNum) <= parseInt(numbers[i])) && (parseInt(numbers[i-1]) != parseInt(numbers[i]))) {
//                       return console.log(-1);
//                 }
//             }
//         }
//       }
//     }
    

        
    


