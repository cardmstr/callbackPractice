/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/


function first (list, doToList){
  doToList(list[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




function last(list, doToList){
  var lastIndex = list.length -1;
  doToList(list[lastIndex]);
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


function multiply(num1, num2, displayAns){
  displayAns(num1*num2);
}

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


function contains(list, searchFor, finalAction){
  var resIndex = list.indexOf(searchFor);
  var result=false;
  if(resIndex>=0){
    result=true;
  }
  finalAction(result);
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


function uniq(list, func){
  var newArray = [];
  list.forEach(function(item){
    if(newArray.indexOf(item)===-1){
      newArray.push(item);
    }
  });
  func(newArray);
}

uniq(names, function(uniqArr){
  console.log('original array',names);
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


function each(list, doToList){
  list.forEach(function(item, index){
    doToList(item,index);
  });
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


// getUserById(list, id, action){
//   //find id in list and then post perform action with that user data
//   list.forEach(function(user,index){
//     if(user[index].id===id){
//       action(user[index]);
//     }
//   });
// };

function getUserById(list, id, action){
  list.forEach(function(user,index){
    if(user.id===id){
      action(list[index]);
    }
  });
}
// Jake Guss's code **annotated**
// function getUserById(object, id, cb) {
//   var user = {};
//     for (var i = 0; i < object.length; i++) {
//       //for (var users.id in object) { //when i=0 you're already able to access the first user using: object[i], this loop isn't needed.
//       if(object[i].id === id){
//         cb(object[i]); //by returning the object at index i you don't need to worry about pushing it all to a new object
//       }
//       //   if (users.id == id) {
//       //     user.push(object.email);
//       //     user.push(object.name);
//       //     user.push(object.address);
//       //     return user;
//       //   }
//       // }
//     }
//     // cb(user); //the callback placed in the if statement above will prevent the callback from being run on an undefined object
// }

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
