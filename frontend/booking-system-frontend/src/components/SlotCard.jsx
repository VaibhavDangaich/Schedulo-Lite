import { useState } from 'react';
import TiltedCard from './TiltedCard';

const SlotCard = ({ slot, onBook, onCancel }) => {
  const [name, setName] = useState('');

  const handleBooking = () => {
    if (!name.trim()) return alert("Please enter your name");
    onBook(slot.time, name);
    setName('');
  };

  const handleCancel = () => {
    onCancel(slot.time);
  };

  return (
    <div
    
      className={`border p-4 rounded-xl shadow-md flex flex-col justify-between ${
        slot.isBooked ? 'bg-red-100' : 'bg-green-100'
      }`}
    >
    <div>

    </div>
    <TiltedCard
  imageSrc=""
  altText=""
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <div className="flex flex-col items-center justify-center h-full mt-5 text-center">
    <h3 className="text-xl font-semibold">{slot.time}</h3>
      <p className="mb-2">
        Status:{" "}
        <span className={`font-bold ${slot.isBooked ? 'text-red-600' : 'text-green-600'}`}>
          {slot.isBooked ? `Booked by ${slot.name}` : 'Available'}
        </span>
      </p>

      {!slot.isBooked ? (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            className="border px-2 py-1 rounded mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
            onClick={handleBooking}
          >
            Book Slot
          </button>
        </>
      ) : (
        <button
          className="bg-red-500 text-white py-1 rounded hover:bg-red-600"
          onClick={handleCancel}
        >
          Cancel Booking
        </button>
      )}

  
    </div>

  }

/>
      
    </div>
  );
};

export default SlotCard;