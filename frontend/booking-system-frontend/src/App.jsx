// src/App.jsx
import { useState } from 'react';
import './App.css';
import SlotCard from './components/SlotCard';
import { mockSlots } from './data/slots';
import Header from './components/Header';

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
    <div className=' w-full h-screen z-20'>
    <Header></Header>
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

    </div>
    
  );
}

export default App;