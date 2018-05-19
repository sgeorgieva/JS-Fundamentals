//ex1 - Numbers

//let numbers = ['5', '1'],
//    number = '',
//    j = 1;
//
//function solve() {
//  
//         for (let i=0; i<numbers.length; i+=1) {
//              j=1;
//              while (j <= numbers[i]) {
//                number += " " + j;
//                j++
//              }
//              console.log(number);
//              number = '';
//         }
//}
//
//solve();

//ex2 - MMSA

//let a = ['2','2'],
//    b = ['5','-1'],
//    c = ['1','4'],
//    min = '',
//    max = '',
//    sum = '',
//    avg = '';
//
//function solve() {
//  
//         for (let i=0; i<a.length; i+=1) {
//             min = Math.min(a[i],b[i],c[i]);
//             max = Math.max(a[i],b[i],c[i]);
//             sum = (parseFloat(a[i])+parseFloat(b[i])+parseFloat(c[i])).toFixed(2);
//             avg = ((parseFloat(a[i])+parseFloat(b[i])+parseFloat(c[i]))/parseFloat(3)).toFixed(2);
//             console.log("min=" + min);
//             console.log("max=" + max);
//             console.log("sum=" + sum);
//             console.log("avg=" + avg);
//         }
//
//}
//
//solve();

//ex3 - Matrix of Numbers

//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//
//btn.addEventListener("click",function(event){
//    event.preventDefault();
//    
//    solve(inputBox.value);
//});
//
//
//function solve(number) {
//         for (let i=1; i <= number; i+=1) {
//             var buff= i;
//             ans="";
//             for (let j=0; j < number; j+=1) {
//                 ans+= buff;
//                 buff++;
//             }
//             console.log(ans);
//         }
//}

//ex4 - Lexicographically smallest

//function FindMinAndMax(obj) {
//              
//var min = "z";
//var max = "a";
//               
//      for (var prop in obj) {
//                    
//          if (prop > max) {
//              max = prop;
//          }
//                 
//          if (prop < min) {
//              min = prop;
//          }
//       }
//               
//        console.log("Object: " + obj);
//        console.log("Min: " + min);
//        console.log("Max: " + max);
//        console.log();
//}
//            
//FindMinAndMax(document);
//FindMinAndMax(window);
//FindMinAndMax(navigator);

//ex5 - Hex to Decimal
       
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//
//btn.addEventListener("click",function(event){
//    event.preventDefault();
//    
//    hexToDecimal(inputBox.value);
//});
//
//function hexToDecimal(number) {
//
//    dec = parseInt(number, 16);
//    console.log(dec);
//}
