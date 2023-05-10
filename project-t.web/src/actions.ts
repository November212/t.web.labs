import { action } from 'mobx';

export const increment = action(() => {
    localStorage.counter++;
});

export const decrement = action(() => {
    localStorage.counter--;
});
