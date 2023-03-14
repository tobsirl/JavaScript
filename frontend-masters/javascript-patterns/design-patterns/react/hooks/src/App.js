import * as React from 'react';
import './style.css';
import { Listings } from './components/presentational/Listings';
import useListings from './hooks/useListings';

export default function App() {
  const listings = useListings();
  if (!listings) return null;
  return <Listings listings={listings.listings} />;
}
