//*************************** -1- ******************************/

function User(name, sure_name, age) {
    this.Id = Math.floor(Math.random() * 11);
    this.name = name;
    this.sure_name = sure_name;
    this.age = age;
}

User.prototype.toString = function () {
    return `{
        User: {  
         "id": "${this.Id}",
         "name": "${this.name}",
         "sure_name": "${this.sure_name}",
         "age": ${this.age}
       }
    }`;
}

//*************************** -2- ******************************/
User.prototype.setName = function (name) {
    this.name = name;
}


User.prototype.setSureName = function (sure_name) {
    this.sure_name = sure_name;
}

User.prototype.setAge = function (age) {
    this.age = age;
}

User.prototype.toString = function () {
    return `{
        User: {  
         "id": "${this.Id}",
         "name": "${this.name}",
         "sure_name": "${this.sure_name}",
         "age": ${this.age}
       }
    }`;
}


let user1 = new User('sd', 's', 20);
let user2 = new User('sd', 's', 30);

console.log(user1.toString())
console.log(user2.toString())

user1.setAge(15);
user1.setName('Andrei')

console.log(user1.toString())

//*************************** -3- ******************************/

function Figure(length, width) {
    this.length = length;
    this.width = width;

};

Figure.prototype.calculateSquare = function () {
    Object.defineProperty(this, 'square', {
        value: this.length * this.length,
        enumerable: true,
        writable: true,
        configurable: false
    });
};

Figure.prototype.calculatePerimeter = function () {
    Object.defineProperty(this, 'perimeter', {
        value: 2 * (this.length + this.width),
        enumerable: true,
        writable: true,
        configurable: false
    });
};

Figure.prototype.calculateDiagonal = function () {
    Object.defineProperty(this, 'diagonal', {
        value: Math.sqrt(Math.pow(this.length, 2) + Math.pow(this.width, 2)).toFixed(2),
        enumerable: true,
        writable: true,
        configurable: false
    })
};

let figure = new Figure(4, 10);
figure.calculateSquare();
figure.calculatePerimeter();
figure.calculateDiagonal();
console.log(figure);

//*************************** -4- ******************************/

function firstLastUpperCase(name) {
    let n = name.split("");
    n[0] = n[0].toUpperCase();
    n[n.length - 1] = n[n.length - 1].toUpperCase();
    return n.join("");
}


console.info(firstLastUpperCase('Andrei'));

//*************************** -5- ******************************/

function removeLast10Light(str) {
    str = str.toString()
    .trimStart()
    .trimEnd();
    return str.length <= 10
        ? str
        : str.split("")
            .slice(0, 10)
            .join("")
            .concat("...");
}

console.log(removeLast10Light("AndreiRubin"))
console.log(removeLast10Light("   Andrei   "))
console.log(removeLast10Light(11111111111111))