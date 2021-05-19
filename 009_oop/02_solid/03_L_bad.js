/* Принцип заміщення Лісков (Liskov Substitution Principle) */

class Person {
    access() {
        console.log('Ти маєш доступ');
    }
}

class Frontend extends Person {
    canCreateFrontend() {

    }
}

class Backend extends Person {
    canCreateBackend() {

    }
}

class PersonFromDifferentCompany extends Person {
access() {
    throw new Error('У тебе не має доступу');
}
}

function openSecretDoor(person) {
    person.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
openSecretDoor(new PersonFromDifferentCompany());
