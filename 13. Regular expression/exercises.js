//ex1 - Format with placeholders
    
//window.onload = function(){
//    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//  
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    formatWithPlaceholders(inputBox.value);
//});
//    
//    var jsontext = '{"name": "John", "age":"13"}',
//        template = document.getElementById('list-item').innerHTML;
//    
//    var regexTemplate = /[\#].(name\})/g,
//        regexTemplate2 = /[\#].(age\})/g;
//      
//        function formatWithPlaceholders(s) {
//            str = inputBox.value.replace("", '');
//            var contact = JSON.parse(jsontext);
//
//                document.write(str.replace(regexTemplate, contact.name).replace(regexTemplate2, contact.age).replace(/"/g,"'"));
//        } 
//}

//ex by other
//function createPersons() {
//    var options = {name: 'John', age: 13};
//    var string = "'My name is #{name} and I am #{age}-years-old'.format(options)";
// 
//    var isFormatRegex = /.+\.format(.+)/;
//    var isMatch = string.match(isFormatRegex);
// 
//    if (isMatch !== null) { //if the given string is a match
//        for (var prop in options) {
//            var regexExp = new RegExp('#{[' + prop + ']+}');
//           
//            string = string.replace(regexExp, options[prop]);
//        }
// 
//        var regexToRemove = /.format(.+)$/;
//        string = string.replace(regexToRemove, '');
//    }
//    console.log(string);
//}
//
//createPersons();

             
//ex2 - HTML binding

window.onload = function(){
    
//inputBox =document.getElementById("myText");
//btn = document.getElementById('sub');
//inputBox2 = document.getElementById("myText2");
//btn2 = document.getElementById('sub2');    
//
//btn.addEventListener("click",function(event){
//event.preventDefault();
//    binding();
//});
//    
    var option1 = [
            '{ name: "Steven" }',
            '<div data-bind-content="name"></div>'
        ],
        
        option2 = [
            '{ "name": "Elena", "link": "http://telerikacademy.com" }',
            '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
        ];
    
    console.log(option2);
    
    function binding(){
        
    }
}   
    