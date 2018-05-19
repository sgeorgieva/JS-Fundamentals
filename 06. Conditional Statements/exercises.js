//ex1 - Exchange if greater

//let a = ['5', '3', '5.5'];
//let b = ['2', '4', '4.5'];
//
//function solve() {
//  
//        for (let i=0; i<a.length; i+=1) {
//            for (let j=i; j<b.length; j+=1){
//            
//                if (a[i] > b[i]) {
//                    console.log(b[i] + ' ' + a[i]);
//                }
//                else {
//                    console.log(a[i]+ ' ' +b[i]);
//                }
//            }
//        }
//}
//
//solve();


//ex2 - Multiplication Sign

//let a = ['5', '-2', '-2', '0', '-1'];
//let b = ['2', '-2', '4', '-2.5', '-0.5'];
//let c = ['2', '1', '3', '4', '-5.1'];
//
//function solve() {
//    for (let i=0; i<=a.length; i+=1) {
//        
//            if ((parseFloat(a[i]) > 0) && (parseFloat(b[i]) > 0) && (parseFloat(c[i]) > 0)){
//                    console.log("+");
//            }
//        
//            if (((parseFloat(a[i]) < 0) && (parseFloat(b[i]) < 0) && (parseFloat(c[i]) > 0)) || ((parseFloat(a[i]) < 0) && (parseFloat(c[i]) < 0) && (parseFloat(b[i]) > 0)) || ((parseFloat(b[i]) < 0) && (parseFloat(c[i]) < 0) && (parseFloat(a[i]) > 0))){
//                    console.log("+");
//            }
//        
//            if (((parseFloat(a[i]) < 0) || (parseFloat(b[i]) < 0) || (parseFloat(c[i]) < 0)) || ((parseFloat(a[i]) < 0) && (parseFloat(b[i]) < 0) && (parseFloat(c[i]) < 0))) {
//                    console.log("-");
//            }
//        
//            if ((parseFloat(a[i]) == 0) || (parseFloat(b[i]) == 0) && (parseFloat(c[i]) == 0)) {
//                    console.log("0");
//            }
//            
//    }
//
//}
//        
//solve();


//ex3 - The biggest of Three

//let a = ['5', '-2', '-2', '0', '-0.1'];
//let b = ['2', '-2', '4', '-2.5', '-0.5'];
//let c = ['2', '1', '3', '5', '-1.1'];
//
//function solve() {
//    for (let i=0; i<= a.length; i+=1) {
//        
//            if ((parseFloat(a[i]) > parseFloat(b[i])) && (parseFloat(a[i]) > parseFloat(c[i]))){
//                    console.log(a[i]);
//            }
//            
//            if ((parseFloat(b[i]) > parseFloat(a[i])) && (parseFloat(b[i]) > parseFloat(c[i]))){
//                    console.log(b[i]);
//            }
//        
//            if ((parseFloat(c[i]) > parseFloat(a[i])) && (parseFloat(c[i]) > parseFloat(b[i]))) {
//                    console.log(c[i]);
//            }
//    }
//
//}
//        
//solve();

//ex4 - Sort 3 numbers

//let a = ['5', '-2', '-2', '0', '-1.1', '30', '1'];
//let b = ['1', '-2', '4', '-2.5', '-0.5', '20', '1'];
//let c = ['2', '1', '3', '5', '-0.1', '10', '1'];
//
//function solve() {
//    
//    for (let i=0; i<=a.length; i+=1) {
//        
//            if ((parseFloat(a[i]) > parseFloat(b[i])) && (parseFloat(a[i]) > parseFloat(c[i])) && (parseFloat(b[i]) > parseFloat(c[i]))){
//                    console.log(a[i], b[i], c[i]);
//                }
//                    else if ((parseFloat(a[i]) > parseFloat(b[i])) && (parseFloat(a[i]) > parseFloat(c[i])) && (parseFloat(c[i]) > parseFloat(b[i]))) {
//                        console.log(a[i], c[i], b[i]);
//                    }
//             if ((parseFloat(b[i]) > parseFloat(a[i])) && (parseFloat(b[i]) > parseFloat(c[i])) && (parseFloat(a[i]) > parseFloat(c[i]))){
//                    console.log(b[i], a[i], c[i]);
//                }
//                    else if ((parseFloat(b[i]) > parseFloat(a[i])) && (parseFloat(b[i]) > parseFloat(c[i])) && (parseFloat(c[i]) > parseFloat(a[i]))) {
//                        console.log(b[i], c[i], a[i]);
//                    }
//             if ((parseFloat(c[i]) > parseFloat(a[i])) && (parseFloat(c[i]) > parseFloat(b[i])) && (parseFloat(a[i]) > parseFloat(b[i]))){
//                        console.log(c[i], a[i], b[i]);
//                    }
//                        else if ((parseFloat(c[i]) > parseFloat(a[i])) && (parseFloat(c[i]) > parseFloat(b[i])) && (parseFloat(b[i]) > parseFloat(a[i]))) {
//                            console.log(c[i], b[i], a[i]);
//                        }
//    }
//}
//        
//solve();

//ex5 - Digit as word

//let number = ['2', '1', '0', '5', '-0.1', 'hi', '9','10'];
//
//function solve() {
//
//     for (let i=0; i<=number.length; i+=1) {
//         switch (i) {
//            case 0:
//                console.log("two");
//                break;     
//            case 1:
//                console.log("one");
//                break;
//            case 2:
//                console.log("zero");
//                break;
//            case 3:
//                console.log("five");
//                break;
//            case 4:
//                console.log("not a digit");
//                break;
//            case 5:
//                console.log("not a digit");
//                break;
//            case 6:
//                console.log("nine");
//                break;
//            case 7:
//                console.log("not a digit");
//                break;
//        }
//     }
//}
//    
//solve();


//ex6 - Quadratic equation

//let a = ['2', '-1', '-0.5', '5', '0.2'];
//let b = ['5', '3', '4', '2', '9.572'];
//let c = ['-3', '0', '-8', '8', '0.2'];
//let x1 = [];
//let x2 = [];
//let D = 0;
//
//function solve() {
//
//     for (let i=0; i<a.length; i+=1) {
//         D = parseFloat(b[i]*b[i] - 4*a[i]*c[i]).toFixed(2);
////         console.log(D);
//         if (D > 0) {
//             x1 = (-(parseFloat(b[i]) + parseFloat(Math.sqrt(D)))/(parseFloat(2)*parseFloat(a[i]))).toFixed(2);
//             x2 = (-(parseFloat(b[i]) - parseFloat(Math.sqrt(D)))/(parseFloat(2)*parseFloat(a[i]))).toFixed(2);
//            
//             console.log('x1=' + x1);
//             console.log('x2=' + x2);
//         }
//         
//         if (D == 0) {
//             x1 = (-(parseFloat(b[i]))/(parseFloat(2)*parseFloat(a[i]))).toFixed(2);
//         
//             console.log('x1=x2=' + x1);
//         }
//         
//         if (D < 0) {
//             console.log("no real roots");
//         }
//    }
//}
//    
//solve();

//ex7 - The biggest of five numbers

//let a = ['5', '-2', '-2', '0', '-3'];
//let b = ['2', '-22', '4', '-2.5', '-0.5'];
//let c = ['2', '1', '3', '0', '-1.1'];
//let d = ['4', '0', '2', '5', '-2'];
//let e = ['1', '0', '0', '5', '-0.1'];
//
//function solve() {
//    for (let i=0; i<= a.length; i+=1) {
//        
//            if ((parseFloat(a[i]) > parseFloat(b[i])) && (parseFloat(a[i]) > parseFloat(c[i])) && (parseFloat(a[i]) > parseFloat(d[i])) && (parseFloat(a[i]) > parseFloat(e[i]))){
//                    console.log(a[i]);
//            }
//            
//            if ((parseFloat(b[i]) > parseFloat(a[i])) && (parseFloat(b[i]) > parseFloat(c[i])) && (parseFloat(b[i]) > parseFloat(d[i])) && (parseFloat(b[i]) > parseFloat(e[i]))){
//                    console.log(b[i]);
//            }
//        
//            if ((parseFloat(c[i]) > parseFloat(a[i])) && (parseFloat(c[i]) > parseFloat(b[i])) && (parseFloat(c[i]) > parseFloat(d[i])) && (parseFloat(c[i]) > parseFloat(e[i]))) {
//                    console.log(c[i]);
//            }
//        
//            if ((parseFloat(d[i]) >= parseFloat(a[i])) && (parseFloat(d[i]) >= parseFloat(b[i])) && (parseFloat(d[i]) >= parseFloat(c[i])) && (parseFloat(d[i]) >= parseFloat(e[i]))) {
//                    console.log(d[i]);
//            }
//        
//            if ((parseFloat(e[i]) > parseFloat(a[i])) && (parseFloat(e[i]) > parseFloat(b[i])) && (parseFloat(e[i]) > parseFloat(c[i])) && (parseFloat(e[i]) > parseFloat(d[i]))) {
//                    console.log(e[i]);
//            }
//    }
//
//}
//        
//solve();

//ex8 - Number as words

// let digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// let double_digit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
// let double_digit2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
// let three_digit = ['', '', '', '', '', '', '', '', '', 'hundred'];
// let numbers = ['0', '9', '10', '12', '19','25', '98', '273', '400', '501', '617', '711', '999'];
// let temp = 0;

// function solve() {
    
//    for (let i=0; i<=numbers.length; i+=1) {
       
//        if (numbers[i] <= 999) {   //<-- range [0...999]

//                 if (numbers[i] == 0) {  //<-- only zero
//                     console.log("zero");
//                 }
         
//                 else if (numbers[i] !== 0 && numbers[i] < 10) {  // <-- range[1...9]<-- digit
//                     console.log(digits[numbers[i]]);
//                 }
                
//                 else if (numbers[i] >= 10 && numbers[i] <= 20) {  // <-- range[10...20]<-- digit
//                      temp = numbers[i] % 10;
                    
//                      console.log(double_digit[temp]);
//                 }
         
//                 else if (numbers[i] > 20 && numbers[i] < 30) {  // <-- range[21...29]<-- digit
//                      console.log('twenty ' + '' + digits[i]);
//                 }
         
//                 else if (numbers[i] >= 30 && numbers[i] <= 99) { // <-- range[30...99]<-- digit
//                     let answer=[double_digit2, digits];
// //                    console.log(answer);
//                     ans = "";
// //                console.log(numbers[i].length);
//                     for (let j=0; j<numbers[i].length; j+=1){
//                         ans += answer[j][numbers[i][j]] + " ";
//                     }
//                     console.log(ans);
//                 }
         
//                 else if (numbers[i] >= 100 && numbers[i] <= 999) {
//                      let answer=[digits, three_digit, double_digit2, digits];
//                      ans = "";
//                         for (let j=0; j<numbers[i].length; j+=1){
//                             if (j==0){
//                                 ans += digits[numbers[i][j]] + ' hundred';
//                             }

//                             else if (j==1 && numbers[i][j]==1) {
//                                  ans += " and " + double_digit[numbers[i][j+1]];
//                                 break;
//                             }

//                             else if (j!=1 && numbers[i][j]==1) {
//                                     ans += "" + digits[numbers[i][j]];
//                                     break;
//                             }
    
//                             else if (j!=1 && numbers[i][j]!=1) {
//                                     ans += " " + digits[numbers[i][j]];
//                                     break;
//                             }
                            
//                            else if (j==1 && numbers[i][j]==0 && numbers[i][j+1]==0) {
//                               ans += " " + digits[numbers[i][j]]; 
//                               break;   
//                            } 

//                            else if (j==1 && numbers[i][j]==0 && numbers[i][j+1]!=0) {
//                                ans += " and " + digits[numbers[i][j]];
//                            }

//                            else if (j==1 && numbers[i][j]!=0 && numbers[i][j+1]!=0) {
//                                ans += "" + " and " + "" + double_digit2[numbers[i][j]];
//                            }
//                         }
//                     console.log(ans);
//                 }
//             }
//        } 
//    }

// solve();


