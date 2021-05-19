/* Принцип розділення інтерфейсу (Interface segregation principle) */

class Animal {
    constructor(name) {
        this.name = name
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} вміє плавати`);
    }
}

const flier = {
    fly() {
        console.log(`${this.name} вміє літати`);
    }
}

const walker = {
    walk() {
        console.log(`${this.name} вміє ходити`);
    }
}

class Dog extends Animal {
}

class Eagle extends Animal {
}

class Whale extends Animal {
}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Шарік');

dog.walk();
dog.swim();


const eagle = new Eagle('Орел');

eagle.walk();
eagle.fly();

const whale = new Whale('Великий синій кіт');

whale.swim();
