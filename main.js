"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello Everyone there';
console.log(message);
/**types */
var x = 30;
var y = 20;
var value = true;
var total = 300;
var name = 'piku';
var sentence = "My name is " + name + "\nI am a beginner in typescript";
console.log(sentence);
var isNew = null;
var newName = undefined;
/**Array */
var List1 = [1, 2, 3];
var List2 = [1, 2, 3];
var List3 = ['Sakshi', 22];
/**enum */
var color;
(function (color) {
    color[color["Red"] = 4] = "Red";
    color[color["Green"] = 5] = "Green";
    color[color["Blue"] = 6] = "Blue";
})(color || (color = {}));
var c = color.Green;
console.log(c);
/**any type */
var randomvalue = true;
randomvalue = 20;
randomvalue = 'Priyanka';
/**unknown */
var myvariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myvariable)) {
    console.log(myvariable.name);
}
/**Union type */
var a;
a = 10;
;
a = true;
var b = 20;
var multitype;
multitype = 20;
multitype = true;
var anytype;
anytype = 20;
anytype = true;
/**function */
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
function mul(num1, num2) {
    if (num2)
        return num1 * num2;
    else
        return num1;
}
mul(5, 10);
mul(5);
function fullName(person) {
    console.log(person.firstName + "  " + person.lastName);
}
var p = {
    firstName: 'Priyanka',
    lastName: 'Sakshi'
};
fullName(p);
/**Class */
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeeName = name;
    }
    employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return employee;
}());
var emp = new employee('Priyanka');
console.log(emp.employeeName);
emp.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managrName) {
        return _super.call(this, managrName) || this;
    }
    manager.prototype.delegatework = function () {
        console.log("Manager delegating task");
    };
    return manager;
}(employee));
var m1 = new manager('Priyaka');
m1.delegatework();
m1.greet();
console.log(m1.employeeName);
/**Access Modifier */
/**it sets the accebility of properties and methods in class
 * Public :- by default each class member is public. we can access them throughout the program.
 * private:- can't be access from outside. We can not access the private member even in derive class.
 * protected :- we can access members in derive class.
 */ 
