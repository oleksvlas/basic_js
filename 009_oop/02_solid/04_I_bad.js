/* Принцип розділення інтерфейсу (Interface segregation principle) */

class Animal {
    constructor(name) {
        this.name = name
    }
    walk(){
        console.log(`${this.name} вміє ходити`);
    }
    swim(){
        console.log(`${this.name} вміє плавати`);
    }
    fly(){
        console.log(`${this.name} вміє літати`);
    }
}

class Dog extends Animal {
    fly() {
        return null
    }
}

class Eagle extends Animal {
swim() {
    return null
}
}

class Whale extends Animal {
    fly() {
        return null
    }
    walk() {
        return null
    }
}

const dog = new Dog('Шарік');

dog.walk();
dog.swim();
dog.fly();

const eagle = new Eagle('Орел');

eagle.walk();
eagle.swim();
eagle.fly();

const whale = new Whale('Великий синій кіт');

whale.walk();
whale.swim();
whale.fly();