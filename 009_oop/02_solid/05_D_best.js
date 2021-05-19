/* Принцип інверсії залежностей  (Dependency inversion principle) */

class Fetch {
    request(url) {
        // return fetch(url.then(r=>r.json()));
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = "data from local storage";
        return dataFromLocalStorage;
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }
    clientGet() {
        return this.fetch.request('http:localhost:3000');
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }
    clientGet() {
        return this.localStorage.get('key')
    }
}

class Database {
    constructor(client) {
      //  this.fetch = new Fetch()
        this.client = client
    }
    getData(url) {
        // return this.fetch.request('http:localhost:3000');
        return this.client.clientGet(url)
    }
}

const db = new Database(new LocalStorageClient());
const db2 = new Database(new FetchClient());

console.log(db.getData('rand'));
console.log(db2.getData('rand'));