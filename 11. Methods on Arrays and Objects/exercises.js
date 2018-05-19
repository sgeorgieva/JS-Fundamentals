//ex1 - Make person

//var person = [
//    
//    { firstname: 'Gosho', lastname: 'Petrov', age: 32, gender: 'male' },
//    { firstname: 'Bay', lastname: 'Ivan', age: 81, gender: 'male' },
//    { firstname: 'John', lastname: 'Doe', age: 42, gender: 'male' },
//    { firstname: 'Penka', lastname: 'Hristova', age: 61,  gender: 'famale'},
//    { firstname: 'Alisiya', lastname: 'Georgieva', age: 88,  gender: 'famale' },
//    { firstname: 'Bat', lastname: 'Man', age: 16,  gender: 'male' },
//    { firstname: 'Malko', lastname: 'Kote', age: 72, gender: 'famale' },
//    { firstname: 'Pesho', lastname: 'Peshev', age: 16, gender: 'male' },
//    { firstname: 'Mariya', lastname: 'Simeonova', age: 25, gender: 'famale' },
//    { firstname: 'Vqra', lastname: 'Marcheva', age: 100, gender: 'famale' },
//    
//];
//
//var mappedArray = person.map(function(obj){ 
//   var rObj = {};
//
//   if (obj.gender === 'famale') {
//       obj.gender = true;
//   }
//    
//   else {
//        obj.gender = false;
//    }
//    
//   rObj= obj.firstname + ' ' + obj.lastname + ' is ' + obj.gender + '.';
//   return (console.log(rObj));
//   
//});
             
//ex2 - People of age

//var person = [
//    
//    { firstname: 'Gosho', lastname: 'Petrov', age: 32, gender: 'male' },
//    { firstname: 'Bay', lastname: 'Ivan', age: 81, gender: 'male' },
//    { firstname: 'John', lastname: 'Doe', age: 42, gender: 'male' },
//    { firstname: 'Penka', lastname: 'Hristova', age: 61,  gender: 'famale'},
//    { firstname: 'Alisiya', lastname: 'Georgieva', age: 88,  gender: 'famale' },
//    { firstname: 'Bat', lastname: 'Man', age: 16,  gender: 'male' },
//    { firstname: 'Malko', lastname: 'Kote', age: 72, gender: 'famale' },
//    { firstname: 'Pesho', lastname: 'Peshev', age: 15, gender: 'male' },
//    { firstname: 'Mariya', lastname: 'Simeonova', age: 25, gender: 'famale' },
//    { firstname: 'Vqra', lastname: 'Marcheva', age: 100, gender: 'famale' },
//    
//];
//    
//person.forEach(person => console.log(person.age >= 18));  


//ex3 - Underage people

//var person = [
//    
//    { firstname: 'Gosho', lastname: 'Petrov', age: 32, gender: 'male' },
//    { firstname: 'Bay', lastname: 'Ivan', age: 81, gender: 'male' },
//    { firstname: 'John', lastname: 'Doe', age: 42, gender: 'male' },
//    { firstname: 'Penka', lastname: 'Hristova', age: 61,  gender: 'famale'},
//    { firstname: 'Alisiya', lastname: 'Georgieva', age: 88,  gender: 'famale' },
//    { firstname: 'Bat', lastname: 'Man', age: 16,  gender: 'male' },
//    { firstname: 'Pesho', lastname: 'Peshev', age: 72, gender: 'famale' },
//    { firstname: 'Malko', lastname: 'Kote', age: 15, gender: 'male' },
//    { firstname: 'Mariya', lastname: 'Simeonova', age: 2, gender: 'famale' },
//    { firstname: 'Vqra', lastname: 'Marcheva', age: 100, gender: 'famale' },
//    
//];

//exemple 1
//var newArr = [];
//
//person.forEach(function(person){ 
//    if (person.age <= 17){
//        newArr.push(person.firstname + ' ' + person.lastname + ' is ' + person.gender + ' and is ' + person.age + ' old ');
//    }
//    
//    return newArr;
//});
//
//console.log(newArr);

//exemple 2

//var filteredPerson =
//    person.
//    filter(function(person) {
//        return person.age <= 17;
//    }).
//    map(function(person){
//        return person.firstname;
//    });
//
//filteredPerson.forEach(function(firstname){
//    console.log(firstname);
//});


//ex4 - Average age of females

//var person = [
//    
//    { firstname: 'Gosho', lastname: 'Petrov', age: 32, gender: 'male' },
//    { firstname: 'Bay', lastname: 'Ivan', age: 81, gender: 'male' },
//    { firstname: 'John', lastname: 'Doe', age: 42, gender: 'male' },
//    { firstname: 'Penka', lastname: 'Hristova', age: 61,  gender: 'famale'},
//    { firstname: 'Alisiya', lastname: 'Georgieva', age: 88,  gender: 'famale' },
//    { firstname: 'Bat', lastname: 'Man', age: 16,  gender: 'male' },
//    { firstname: 'Malko', lastname: 'Kote', age: 72, gender: 'famale' },
//    { firstname: 'Pesho', lastname: 'Peshev', age: 15, gender: 'male' },
//    { firstname: 'Mariya', lastname: 'Simeonova', age: 12, gender: 'famale' },
//    { firstname: 'Vqra', lastname: 'Marcheva', age: 100, gender: 'famale' },
//    
//];
//var newArr = [],
//    sum = 0;
//
//var filteredPerson =
//    person.
//    filter(function(person) {
//        if (person.gender === 'famale'){
//           return person.firstname;
//        }
//    }).
//    map(function(person){
//        newArr.push(person.age);
//    });        
////       console.log(newArr); 
//
//        newArr.forEach(function(newArr) {
//            sum += newArr;
//        });
//        
//console.log('The average age of females is ' + sum/2);

//ex5 - Youngest person

//var person = [
//    
//    { firstname: 'Gosho', lastname: 'Petrov', age: 32, gender: 'male' },
//    { firstname: 'Bay', lastname: 'Ivan', age: 81, gender: 'male' },
//    { firstname: 'John', lastname: 'Doe', age: 42, gender: 'male' },
//    { firstname: 'Penka', lastname: 'Hristova', age: 61,  gender: 'famale'},
//    { firstname: 'Alisiya', lastname: 'Georgieva', age: 88,  gender: 'famale' },
//    { firstname: 'Bat', lastname: 'Man', age: 16,  gender: 'male' },
//    { firstname: 'Malko', lastname: 'Kote', age: 72, gender: 'famale' },
//    { firstname: 'Pesho', lastname: 'Peshev', age: 15, gender: 'male' },
//    { firstname: 'Mariya', lastname: 'Simeonova', age: 12, gender: 'famale' },
//    { firstname: 'Vqra', lastname: 'Marcheva', age: 100, gender: 'famale' },
//    
//];
//var newArr = [],
//    newArr2 = [];
//
//var filteredPerson =
//    person.
//    filter(function(person) {
//        if (person.gender === 'male'){
//           return person.firstname;
//        }
//    }).
//    map(function(person){
//        newArr.push(person.firstname + ' ' + person.lastname);
//        newArr2.push(person.age);
//    });
//
//    function arrayMin(newArr2) {
//        return newArr2.reduce(function(a, b) {
//            return Math.min(a, b);
//        });
//    }
//
//    var min = arrayMin(newArr2);            // the value of the years on the youngest male person

//    console.log(newArr2.indexOf(min));
//    
//    Array.prototype.find = callback => {
//        for (var i in newArr2) {
//            if  (callback(newArr2[i], i, min)){          with loop 
//                return newArr[i];                                     
//            }
//        }
//    }
//    console.log('The youngest male person is ' + newArr.find(x => x === min) + '.');
    
//    filteredPerson.every(function() {       //without loop
//        var idxMin = newArr2.indexOf(min);      // index of the value min
//
//        if (newArr2[idxMin] === min) {      //check the value of min = value of the array with years of males
//            console.log('The youngest male person is ' + newArr[idxMin] + '.');   //print his name with this index
//        }
//
//    });

//ex6 - Group people

//var people = [
//
//    { firstname: 'Gosho', lastname: 'Petrov', age: 32 }, //item -> pri 1-va interaciya
//    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
//    { firstname: 'John', lastname: 'Doe', age: 42 },
//    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
//    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
//    { firstname: 'Gosho', lastname: 'Gosho', age: 22 },
//    { firstname: 'Bay', lastname: 'Ivan', age: 81, gender: 'male' },
//    { firstname: 'John', lastname: 'Doe', age: 42, gender: 'male' },
//    { firstname: 'Penka', lastname: 'Hristova', age: 61,  gender: 'famale'},
//    { firstname: 'Alisiya', lastname: 'Georgieva', age: 88,  gender: 'famale' },
//    { firstname: 'Bat', lastname: 'Man', age: 16,  gender: 'male' },
//    { firstname: 'Malko', lastname: 'Kote', age: 72, gender: 'famale' },
//    { firstname: 'Pesho', lastname: 'Peshev', age: 15, gender: 'male' },
//    { firstname: 'Mariya', lastname: 'Simeonova', age: 12, gender: 'famale' },
//    { firstname: 'Vqra', lastname: 'Marcheva', age: 100, gender: 'famale' },
//];
//
//function printGroupPeople(people) {
//    
//    var arr = [],
//        arr2 = [],
//        arr3 = [],
//        newArr = [];
//    
//    var filteredPerson =
//    people.
//    map(function(person){
//        arr.push(person.firstname);
//        arr2.push(person.lastname);
//        arr3.push(person.age);
//    }).
//    map(function(person){ 
//        arr.sort(function (a, b) {
//            return a.localeCompare(b);  //if strings are from languages other than English: use String.localeCompare
//        });
//        arr2.sort(function (a, b) {
//            return a.localeCompare(b);  
//        });
//        arr3.sort(function (a, b) {
//            return a - b;  
//        });
//    });
//
//    var groupByLetter =
//        arr.reduce(function(previousValue, currentValue, currentIndex, arr) {
//            var string = arr[currentIndex];
//
//            if (string.charAt(currentValue) === string.charAt(previousValue)){
//                newArr[string.charAt(currentValue).toLowerCase()] = []; //newArr = ["a" = [], 'b' = []]
//                
//                return newArr;
//            }
//            
//        });
//    
//    var neshto = 
//    people.map(function(item) {       //item -> callback ->  
//        newArr[item.firstname[0].toLowerCase()].push(item); //
//        return newArr;
//    });
//    
//    var result = 'result = ' ;
//    console.log(result, newArr);
//}
//
//printGroupPeople(people);  