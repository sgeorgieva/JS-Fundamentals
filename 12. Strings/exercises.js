//ex1 - Reverse string
    
//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    reverseString(inputBox.value, inputBox2.value);
//});
//        function reverseString(s) {
//            inputBox2.value = (s.split('').reverse().join(''));
//        }
//}
             
//ex2 - Correct brackets

//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    checkBrackets(inputBox.value, inputBox2.value);
//});
//    
//    function checkBrackets(str){
//    // depth of the parenthesis
//    // ex : ( 1 ( 2 ) ( 2 ( 3 ) ) )
//    var depth = 0;
//        
//    // for each char in the string : 2 cases
//    for(var i in str){   
//        if(str[i] == '('){
//            // if the char is an opening parenthesis then we increase the depth
//            depth ++;
//        } else if(str[i] == ')') {
//            // if the char is an closing parenthesis then we decrease the depth
//            depth --;
//        }  
//        //  if the depth is negative we have a closing parenthesis 
//        //  before any matching opening parenthesis
//        if (depth < 0) 
//            return inputBox2.value = "Incorrect";
//        }
//    // If the depth is not null then a closing parenthesis is missing
//    if(depth > 0) 
//        return inputBox2.value = "Incorrect";
//    // OK !    
//    return inputBox2.value = "Correct";
//    }
//} 

//ex3 - Sub-string in text

//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    searchedString(inputBox.value, inputBox2.value);
//});
//    
//    function searchedString(str) {
//        var count = 0;
//        var str = inputBox.value;
//        var n = inputBox2.value;
//        
//        searchFor = n,
//        pos = str.indexOf(searchFor);
//
//         while (pos > -1) {
//           count++;
//           pos = str.indexOf(searchFor, ++pos);
//         }
//
//         console.log(count-1);
//    }
//}

//ex4 - Parse tags  don't\ ???

//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    parseTags(inputBox.value, inputBox2.value);
//});
//    str = inputBox.value;
//    
//    function parseTags(str) {
//        var res;
//        
//            res = str.replace(/\/|'|/g, "").replace(/<orgcase>/g, "");
//            res = (str.replace(/\/|'/g, "").replace(/<upcase>/g, "").replace(/<orgcase>/g, "").replace(/<lowcase>/g, ""));
//            var strReplaceAll = res;
//            var intIndexOfMatch = strReplaceAll.indexOf("yellow");
//
//            // Loop over the string value replacing out each matching
//            // substring.
//            while (intIndexOfMatch != -1){
//                // Relace out the current instance.
//                strReplaceAll = strReplaceAll.replace("yellow submarine", "YELLOW SUBMARINE");
//
//                // Get the index of any next matching substring.
//                intIndexOfMatch = strReplaceAll.indexOf("yellow submarine");
//            }
//        inputBox2.value = strReplaceAll;
//    inputBox2.value = res;     
//    var strReplaceAll = res;
//    for (var i=0; i<strReplaceAll.length-1; i++) {
////        console.log(strReplaceAll[i]);
//        var intIndexOfMatach = strReplaceAll.indexOf("upcase");
//        console.log(intIndexOfMatach);
//        while (intIndexOfMatach != -1) {
//            intIndexOfMatach[i].toUpperCase();    
//        }
//    }
////        console.log(intIndexOfMatach[i]);
//    }
    
//        var count = 0;
//        var betweenChars = ' '; // a space
//        words = res.split(" ");
//        words2 = res.split("");
//        for (i=0; i < words2.length; i++){
//           // inner loop -- do the count
//           if ((words2[i] === '>') && (words2[i+1] !== " ") && (words2[i+1] !== '.')){
//                count++; 
//                words2[i].split('').join(betweenChars);
////                console.log(words2[i]);
//                console.log(words2);
//           }
////            console.log(words2);  
//        }
////        inputBox2.value = words;
////        console.log(count);
//    }
//}

//ex5 - nbsp

//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    replaceAll(inputBox.value, inputBox2.value);
//});
//    
//       function replaceAll(str) {
//            inputBox2.value = (str.split(' ').join("&nbsp;"));
//       }
//}

//ex6 - Extract text from HTML

//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    extractText(inputBox.value, inputBox2.value);
//});
//
//    str = inputBox.value;
//    
//    function extractText(str) {
//
//        var res;
//        
//        res = (str.replace(/\/|,|'/g, "").replace(/<html>/g, "").replace(/<head>/g, "").replace(/<title>/g, "").replace(/<body>/g, "").replace(/<div>/g, "").replace(/\s+/g," "));
//        inputBox2.value = res;
//    }
//}

//ex7 - Parse URL
      
//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    parseURL(inputBox.value, inputBox2.value);
//});
//
////    str = inputBox.value; 
//    
//    function parseURL() {
//        var a = document.createElement('a')
//        a.href = 'http://telerikacademy.com/Courses/Courses/Details/239';
//    
//        
//        inputBox2.value = "protocol: " + a.protocol + " " + "server: " + a.hostname + " " + "resource: " + a.pathname;
//    }
//}

//ex8 - Replace tags

//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    parseTags(inputBox.value, inputBox2.value);
//});
//
//    str = inputBox.value; 
//    
//    function parseTags(str) {
//
//        var res,  
//            count;
//        
//        res = (str.replace(/'/g, "").replace(/<a>/g, "").split(" "));
//    
//        for (i=0; i < res.length; i++){
//           // inner loop -- do the count
//            if ((res[i] === '<a') && (res[i+1].includes("http") === true)) {
//                res[i] = res[i].replace("<a", "[our site]");
//            }
//            else if ((res[i] === '<a') && (res[i+1].includes("www") === true)) {
//                res[i] = res[i].replace("<a", "[our forum]");
//            }
//            else if ((res[i].includes("href=") === true)) {
//                res[i].split("");
//                res[i] = res[i].replace(res[3], "(" + (res[3].substr(res[3].indexOf('http'), res[3].indexOf('.com"')-2)) +")");
//                res[i] = res[i].replace(res[13], "(" + (res[13].substr(res[13].indexOf('www'),  res[13].indexOf('.org"')-2))+ ")");
//            }
//            else if (res[i].includes("</a>")) {
//                res[i]=res[i].replace("site</a>", " ");
//                res[i]=res[i].replace("forum</a>", " ");
//            }
//        }
//        
//        console.log(res.join(" "));
////        inputBox2.value = res.join(" ");
//    }
//}

//ex9 - Extract e-mails

//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    extractEmails(inputBox.value, inputBox2.value);
//});
//
//    str = inputBox.value;
//    
//    function extractEmails(str){
//        
//        return inputBox2.value = (str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi));
//    }
//}

//ex10 - Find palindromes

//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    findPalindromes(inputBox.value, inputBox2.value);   
//});
//
//    str = inputBox.value;
//    
//    function findPalindromes(str) { 
//     
//        var words = str.split(" "),
//            newString = [];
//        
//        for (var i = 0; i < words.length - 1; i++) {
//            if ((words[i] === words[i].split('').reverse().join('')) === true) {
//                newString.push(words[i]);
//            }
//        }
//        console.log(newString);
//
//        var newString = []; //reverse words stirng in a reverse array newString
//            for (var i = words.length - 1; i >= 0; i--) {
//                newString.push(words[i].split('').reverse().join(''));
//            }
//        
//        var count = 0; 
//        for (var i = 0; i < words.length - 1; i++) { //try to compare the two arrays newString and words
//            for (var j = i; j < newString.length - 1; j++){
//                if (words[i] === newString[j]) {
//                    count++;
//                }
//            }
//        }
//        console.log(words, newString);
//        console.log(count);
        
//        input array: Lorem ipsum dolor sit amet, consectetur ABBA adipisicing elit. Corrupti, neque. Beatae tempore rerum aspernatur nemo, aliquid sit voluptatum quod corporis qui lamal molestias reprehenderit, exe temporibus delectus debitis suscipit? Id, distinctio, quaerat.
//    }
//}

//ex11 - String format

//window.onload = function(){
//    
//inputBox = document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    stringFormat(inputBox.value);   
//});
//
//    str = inputBox.value;
//    
//    var format = '{0} is so {1} with {2} sky, {1} nature and house next to the {2} pacific ocean...';
//    
//    function stringFormat(str, words) {
//       
//        var words = document.getElementById("myText").placeholder.split(",");  
//
//        words.forEach(function(word, index) {
//            // (Have to escape `{` because it's a quantifier)
//            str = str.replace(new RegExp("\\{" + index + "}", "g"), word);
//          });
//          return str;
//        
////        return str.replace(/\{(\d+)\}/g, function(m, c0) {
////            return words[c0] || "";
////        });
//    }
//
//    console.log (stringFormat(format));
//}   
//    

//ex12 - Generate list

//window.onload = function(){
//    
//inputBox = document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    generateList();   
//});
//
//    var people = [
//    {name: 'Santiya', age: - 21},
//    {name: 'Emiliyan', age: - 30},
//    {name: 'Gena', age: - 48},
//    {name: 'Oleg', age: - 45},
//    {name: 'Iskren', age: - 35}],
//	template = document.getElementById('list-item').innerHTML;
//
//    function generateList() {
//        var ul = document.createElement('ul');
//
//        for (var index in people) {
//            var li = document.createElement('li');
//            li.innerHTML = format(template, people[index]);
//            ul.appendChild(li);
//        }
//        document.body.appendChild(ul);
//    };
//
//    function format(string, person){
//        return string.replace(/\-{(\w+)\}-/g, function (match, prop) {
//            return person[prop] || '';
//        });
//    }
//}