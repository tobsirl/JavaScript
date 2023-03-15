import React from 'react';
import useListings from '../hooks/useListings';

export const ListingsContext = React.createContext(null);

export function useListingsContext() {
  const context = React.useContext(ListingsContext);

  if (!context) {
    throw new Error(
      'useListingsContext must be used within a ListingsProvider'
    );
  }

  return context;
}

export function ListingsProvider(props) {
  const listings = useListings();

  return (
    <ListingsContext.Provider value={listings}>
      {props.children}
    </ListingsContext.Provider>
  );
}
