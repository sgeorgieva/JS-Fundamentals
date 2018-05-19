//ex1 - Odd or Even

//function solve() {
//    let numbers = [3, 2, -2, -1, 0];
//
//        for (let i = 0; i < numbers.length; i+=1) {
//            
//            if (numbers[i] % 2 === 0) {
//                console.log(numbers[i] + " even");
//            }
//            else {
//                console.log(numbers[i] + " odd");
//            }
//        }
//}
//solve();

//ex2 - Divide by 7 and 5

//function solve() {
//    let numbers = [3, 0, 5, 7, 35, 140];
//
//        for (let i = 0; i < numbers.length; i+=1) {
//            
//            if ((numbers[i] % 7 === 0) && (numbers[i] % 5 === 0) ) {
//                console.log(numbers[i] + " true");
//            }
//            else {
//                console.log(numbers[i] + " false");
//            }
//        }
//}

//solve();

//ex3 - Rectangles 

//function solve() {
//    let width = ['2.5',"5","6"];
//    let height = ['3','4','9'];
//    let area = [];
//    let perimeter = [];
//
//        for (let i = 0; i < width.length; i+=1) {
//           
//             for (let j = i; j < height.length; j+=1)  {
//                
//                console.log((2*width[i]) + (2*height[j]));
//               
//                area.push([width, height]);
//                perimeter.push([width, height]);
//                console.log(area, perimeter);
//                break;
//           }
//       }
//}

//solve();

//ex4 - Third digit

//function thirdDigit() {
//     let digits = ['5', '701', '9703', '877', '777877','9999799'];
//        
////    digits.reverse(); 
//        for (let i=0; i<digits.length; i++) {
//                  //  console.log(digits[i][2]);
//            
//          for(let letter_index = digits[i].length-1; letter_index >= 0; letter_index--){
////                n = digits[i].length-3;
////               console.log(digits[i][j])
//                if (digits[i][2] == 7){
//                    console.log(digits[i] + " true");
//                }
//                else {
////                    console.log('false' + digits[i]);
//                }
//         
//        }
//     }
//}

//thirdDigit();

//ex6 - Point in a circle 
// r in condition = 2

//function pointCircle() {
//    let x = ['-2', '-1', '1.5', '-1.5', '100', '0', '0.2', '0.9', '1', '0'];
//    let y = ['0', '2', '-1', '-1.5', '-30', '0', '-0.8', '-1.93', '1.655', '1'];
//    let point = [];
//    
//    for (let i=0; i<x.length; i+=1) {
//        point = parseFloat(Math.sqrt(((Math.abs(x[i]))*(Math.abs(x[i])) + (Math.abs(y[i]))*(Math.abs(y[i])))));
//        
//        if (point<=2.00) {
//            console.log('yes ' + point.toFixed(2));
//        }
//        else {
//             console.log('no ' + point.toFixed(2));
//        }
//    }
//        
//}
//
//pointCircle();

//ex7 - Prime check

//let numbers = ['2', '23', '-3', '0', '1'];
// 
//function primeCheck(){ 
//     
//        for(let i=0; i<numbers.length; i+=1){
//            
//            if (numbers[i] == 2) {
//                console.log(numbers[i] + ' true');
//            }
//            
//            else if ((numbers[i] == 1) || (numbers[i] == 0)) {
//                console.log(numbers[i] + ' false');
//            }
//       
//            else if (numbers[i] < 0)  {
//                console.log(numbers[i] + ' false');
//            }
//            
//            else if ((numbers[i] % 2 ==0) || (numbers[i] % 3 ==0) || (numbers[i] % 5  ==0) || (numbers[i] % 7 ==0) || (numbers[i] % 11 ==0 )) {
//                console.log(numbers[i] + ' false');
//            }
//            
//            else {
//                console.log(numbers[i] + ' true');
//            }
//        }
// }
//
// primeCheck();

//ex8  - Trapezoids

//function calculateTrapezoids() {
//    let a =['5','2','2','8.5','100','0.222'];
//    let b = ['7','1','1','4,3','200','0.333'];
//    let h = ['12','33','33','2.7','300','0.555'];
//    let S = [];
//    
//    for (let i=0; i<a.length; i+=1){
//        S = parseFloat((((parseFloat(a[i]) + parseFloat(b[i])) * parseFloat(h[i]))/2));
////        S.push([ parseFloat((((parseFloat(a[i]) + parseFloat(b[i])) * parseFloat(h[i]))/2))]).toFixed(7);
//        console.log(S.toFixed(7));
//        
//        //      parseFloat(console.log (parseFloat(a[i]).toFixed(7) + parseFloat(b[i]).toFixed(7)));
//    }
//}

//calculateTrapezoids();

//ex9 - Point, Circle, Rectangle

// r in condition = 1.5 (for the circle)
// R need to find --> R=2*r (for the rectangle)
// R in condition with cordinates(top=1, left=-1, width=6, height=2)

//function pointCircleRectangle() {
//    let x = ['2.5', '0', '2.5', '1'];
//    let y = ['2', '1', '1','2'];
//    let r = '1.5';
//    let pointInCircle = [];
//    
//    let w = '6';
//    let h = '2';
//    let R = 0;
//    let r2 = 0;
//    let pointInRectangle = [];
//    
//        for (let i=0; i<x.length; i+=1) {
//            
//            r2 = (((Math.sqrt(Math.pow(w,2))) + (Math.sqrt(Math.pow(h,2))))/2);
//            R = 2*r2;
//            
//            pointInCircle = parseFloat((((Math.abs(1-(Math.abs(x[i]))))*((Math.abs(1-(Math.abs(x[i])))))) + ((Math.abs(1-(Math.abs(y[i]))))*(Math.abs(1-(Math.abs(y[i])))))));
//
//            pointInRectangle = parseFloat((((Math.abs(-1+(Math.abs(-x[i]))))*((Math.abs(-1+(Math.abs(-x[i])))))) + ((Math.abs(1+(Math.abs(y[i]))))*(Math.abs(1+(Math.abs(y[i])))))));
//
//            if (pointInCircle <= (r*r)) {
//                console.log('inside circle ');
//            }
//            else {
//                console.log('outside circle ');
//            }
//            if (pointInRectangle<=R) {
//                 console.log('inside rectangle ' + pointInRectangle.toFixed(2));
//            }
//            else {
//                console.log('outside rectangle ' + pointInRectangle.toFixed(2));
//            }
//        }
//}
//pointCircleRectangle();


