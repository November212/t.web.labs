import { makeAutoObservable } from "mobx";

class Store {
    counter = 0;

    constructor() {
        makeAutoObservable(this);
        this.loadState();
    }

    increment() {
        this.counter++;
        this.saveState();
    }

    decrement() {
        this.counter--;
        this.saveState();
    }

    private saveState() {
        localStorage.setItem("counter", JSON.stringify(this.counter));
    }

    private loadState() {
        const counter = localStorage.getItem("counter");
        if (counter) {
            this.counter = JSON.parse(counter);
        }
    }
}

export default Store;
