import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProviderList from './pages/ProviderList';
import ProviderProfile from './pages/ProviderProfile';
import BookingForm from './pages/BookingForm';
import Confirmation from './pages/Confirmation';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProviderList />} />
      <Route path="/provider/:id" element={<ProviderProfile />} />
      <Route path="/book/:id" element={<BookingForm />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}