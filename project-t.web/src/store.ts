import { makeAutoObservable } from "mobx";

class Store {
    counter = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }
}

export const store = new Store();
