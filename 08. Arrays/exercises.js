//ex1 - Increase array members

//function increaseNumber(){
//
//    var arr = [],
//    n = 5,
//    i;
//
//    for (i = 0; i < n; i +=1) {
//        arr[i] = i * 5;
//    }
//
//    console.log(arr.join('\r\n'));
//}
//
//increaseNumber();


//ex2 - Lexicographically compare

//function lexicographicallyCompare() {
//
// var firstArr = ['hello', 'food'],
//     secondArr = ['halo', 'food'],
//     n,
//     m,
//     i;
//    
//    for (i=0; i<firstArr.length; i+=1) {
//        
//        n = firstArr[i].length,
//        m = secondArr[i].length;
//        
//        if (n <= 128 && m <= 128) {
//            
//            if (firstArr[i].length > secondArr[i].length) {
//                console.log(">");
//            }
//
//            else if (firstArr[i].length < secondArr[i].length){
//                console.log("<");
//            }
//
//            else if (firstArr[i].length = secondArr[i].length) {
//                console.log("=");
//            }
//        }
//        
//        else {
//            console.log("Please set a string in the range of 128! ");
//        }
//    }
//}
//
//lexicographicallyCompare();


//ex3 - Maximal sequence

//function maximalSequence() {
//    var arr = ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1'],
//        index,
//        ans=[],
//        n=0;
//    
//    for (i=0; i<arr.length; i+=1) {
//        index = i;
//        n=0;
//        while (index >= 0) {
//            
//            if (arr[i] === arr[index]) {
//                n++;
//            }else{
//                ans.push(n);
//                break;
//            }
//            index++;
//        }
//    }
//     console.log(Math.max.apply(Math, ans));
//
//}
//
//maximalSequence();

//ex4 - Maximal sequence

//function maximalIncreasingSequence() {
//    var arr = ['8', '7', '3', '2', '3', '4', '2', '2', '4'],
//        index,
//        ans=[],
//        n=0;
//    
//    for (i=0; i<arr.length; i+=1) {
//        n=1;
//       
//      for (j=i; j<arr.length; j+=1) {
//// console.log(arr[j]+1)
//            if (parseInt(arr[j]) + 1 == arr[j+1]) {
//               
//                n++;
//            }else{
//                ans.push(n);
//                i=j;
//                break;
//            }
//          }
//    
//    }
//     console.log(Math.max.apply(Math, ans));
//
//}
//
//maximalIncreasingSequence();


//ex5 - Selection sort

//var disorderedArray = ['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'],
//    disorderedArray2 = ['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20'],
//    i,
//    sorted_arr = [];
//    
//function selectionSort(arr) {
//    var results = [],
//        results2 = [];
//        
//sorted_arr = arr.slice().sort();
//
//    for (i = 0; i < arr.length; i++) {
//    
//        if (sorted_arr[i + 1] === sorted_arr[i]) {
//            results.push(sorted_arr[i]);
//        }else{
//            results2.push(sorted_arr[i]);        
//        }
//    }
//    
//    console.log(results2.join('\r\n'));
//}
//
//selectionSort(disorderedArray);
//selectionSort(disorderedArray2);

//ex6 - Frequent numbers

//var array = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];
//
//function frequentNumber(arr){
//
//if (arr.length <= 0 && arr.length <= 1024){
//    return null;
//}
//    var invertory = []; //ot koe kolko broya ima
//    var maxEl = arr[0], // v nachaloto za max element se priema pyrviya v masiva
//        maxCount = 1; // broi interacii na naj-chesto sreshtaniya element do momenta
//    
//    for(var i = 0; i < arr.length; i++){
//
//        var el = arr[i];
//    	if (invertory[el] == null){
//    		invertory[el] = 1;
//        }else{
//    		invertory[el]++;	
//        }
//        
//    	if (invertory[el] > maxCount){
//    		maxEl = el;
//    		maxCount = invertory[el];
//    	}
//    }
//    console.log(maxEl, "(" + maxCount + " times)");
//}
//
// frequentNumber(array);

//ex7 - Binary search

//var array = ['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'];
//
//function sortNumber(a, b) { 
//     return a - b;
//}
//
//function binarySearch(array, searchedElement) {
//
//    var high = array.length - 1,
//        low = 0;
//            
//    while (high >= low){
//        
//        var midpoint = parseInt((low + high) / 2); 
//        
//        if (array[midpoint] < searchedElement){
//            low = midpoint + 1;
//        }
//        else if (array[midpoint] > searchedElement){
//            high = midpoint - 1;
//        }
//        else {
//            return midpoint;
//        }
//    }
//    return -1;
//}
//        
//console.log(binarySearch(array, 31));
