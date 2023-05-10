import React, { createContext, FC, ReactNode } from 'react';
import { store } from './store';

export const StoreContext = createContext(store);

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
