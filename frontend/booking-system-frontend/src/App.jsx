// src/App.jsx
import { useState } from 'react';
import './App.css';
import SlotCard from './components/SlotCard';
import { mockSlots } from './data/slots';
import Header from './components/Header';

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from '@clerk/clerk-react';

function App() {
  const [slots, setSlots] = useState(mockSlots);

  const handleBook = (time, name) => {
    const updated = slots.map(slot =>
      slot.time === time ? { ...slot, isBooked: true, name } : slot
    );
    setSlots(updated);
  };

  const handleCancel = (time) => {
    const updated = slots.map(slot =>
      slot.time === time ? { ...slot, isBooked: false, name: '' } : slot
    );
    setSlots(updated);
  };

  return (
    <div className="w-full h-screen z-20">
      <Header />
      
      {/* Show only when user is signed in */}
      <SignedIn>
        <div className="flex justify-end p-4">
          <UserButton />
        </div>

        <div className="grid grid-cols-3 gap-4 p-6">
          {slots.map((slot) => (
            <SlotCard
              key={slot.time}
              slot={slot}
              onBook={handleBook}
              onCancel={handleCancel}
            />
          ))}
        </div>
      </SignedIn>

      {/* Show sign in/up buttons when signed out */}
      <SignedOut>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl mb-6">Please sign in to book slots</h1>
          <div className="flex gap-4">
            <SignInButton />
            <SignUpButton />
          </div>
        </div>
      </SignedOut>
    </div>
  );
}

export default App;