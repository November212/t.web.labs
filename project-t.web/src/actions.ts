import { action } from 'mobx';

export const increment = action(() => {
    store.counter++;
});

export const decrement = action(() => {
    store.counter--;
});
