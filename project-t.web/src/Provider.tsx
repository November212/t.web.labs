import React, { createContext, FC } from 'react';
import { store } from './store';

export const StoreContext = createContext(store);

export const Provider: FC = ({ children }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
