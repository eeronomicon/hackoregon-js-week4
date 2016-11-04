"use strict";

function getMethods( obj ) {
  var ret = [];
  for ( var prop in obj ) {
    if ( obj[ prop ] && obj[ prop ].constructor &&
          obj[ prop ].call && obj[ prop ].apply ) {
      ret.push( prop );
    }
  }
  return ret;
};

console.log(getMethods(String));
console.log(Object.getOwnPropertyNames(String));

String.prototype.repeatify = function(times) {
  var returnString = "";
  for (var i = 0; i < times; i++) {
    returnString += this + " ";
  };
  return returnString;
};

console.log("Hello".repeatify(3));


// var fullname = 'John Doe';
// var obj = {
//   fullname: 'Colin Ihrig',
//    prop: {
//     fullname: 'Aurelio De Rosa',
//     getFullname: function() {
//       return this.fullname;
//     }
//   }
// };
//
// console.log(obj.prop.getFullname());
// var test = obj.prop.getFullname;
// console.log(test());


var Person = function() {
};
Person.prototype.describe = function() {
  console.log(this.name);
  console.log(this.age);
};
Person.prototype.initialize = function(name, age) {
  this.name = name;
  this.age = age;
}

var bob = new Person();
bob.initialize("Bob", 30);
bob.describe();

var Student = function() {
}
Student.prototype = new Person();
Student.prototype.learn = function(subject) {
  console.log(this.name + " learned " + subject);
};
var neo = new Student();
neo.initialize("Neo", 20);
neo.describe();
neo.learn("karate");
