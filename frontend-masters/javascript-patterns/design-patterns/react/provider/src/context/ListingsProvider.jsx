import React from 'react';
import useListings from '../hooks/useListings';

export const ListingsContext = React.createContext(null);

export function ListingsProvider(props) {
  const listings = useListings();

  return (
    <ListingsContext.Provider value={listings}>
      {props.children}
    </ListingsContext.Provider>
  );
}
