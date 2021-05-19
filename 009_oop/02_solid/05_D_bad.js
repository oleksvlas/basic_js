/* Принцип інверсії залежностей  (Dependency inversion principle) */

class Fetch {
    request(url) {
        // return fetch(url.then(r=>r.json()));
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        const dataFromLovalStorage = "data from local storage";
        return dataFromLovalStorage;
    }
}

class Database {
    constructor() {
      //  this.fetch = new Fetch()
        this.localStorage = new LocalStorage()
    }
    getData() {
        // return this.fetch.request('http:localhost:3000');
        return this.localStorage.get('key')
    }
}

const db = new Database();

console.log(db.getData());