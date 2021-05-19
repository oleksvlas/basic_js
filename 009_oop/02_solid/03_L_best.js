/* Принцип заміщення Лісков (Liskov Substitution Principle) */

class Person {
}

class Member extends Person {
    access() {
        console.log('Ти маєш доступ');
    }
}

class Guest extends Person {
   isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
access() {
    throw new Error('У тебе не має доступу');
}
}

function openSecretDoor(member) {
    member.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
//openSecretDoor(new PersonFromDifferentCompany()); // Повинен буди співробітником