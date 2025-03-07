import axios from "axios";
import { useEffect, useState } from "react";



const rooms = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Deluxe Room",
    type: "Double Bed",
    price: "$120 per night",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Suite Room",
    type: "King Bed",
    price: "$200 per night",
  },
];

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

export default function BookingGuest() {

    const [rooms, setrooms] = useState([])

    const [guests, setguest] = useState([])
    useEffect( () => {
  
        const getRooms = async () => {
        
          try {
            const response = await axios.get('http://127.0.0.1:8000/api/rooms');
            const allRooms = response.data.rooms;
            setrooms(allRooms);
            console.log(allRooms)
            
          } catch (error) {
            console.error('Error fetching allRooms:', error);
          }
        
        }
        
        getRooms();
         
          }, [])

    useEffect( () => {

    const getGuests = async () => {
    
        try {
        const response = await axios.get('http://127.0.0.1:8000/api/respsioniste/all-guest');
        const allguests = response.data;
        setguest(allguests);
        console.log(allguests)
        
        } catch (error) {
        console.error('Error fetching allguests:', error);
        }
    
    }
    
    getGuests();
        
        }, [])
    
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBooking = (roomId) => {
    if (!selectedUser) {
      alert("Please select a user first.");
      return;
    }
    setSelectedRoom(roomId);
    alert(`Room ${roomId} booked for user ${selectedUser}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Room Booking</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rooms.map((room) => (
          <div key={room.id} className="border p-4 rounded-lg shadow-md">
            <img src={`http://127.0.0.1:8000/storage/${room.image}`}
                    alt={room.title} className="w-full h-40 object-cover rounded" />
            
            <h3 className="text-lg font-semibold mt-2">{room.title}</h3>
            <p className="text-gray-600">{room.type}</p>
            <p className="text-green-600 font-bold">{room.price}</p>
            <button
              onClick={() => handleBooking(room.id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Book Now
            </button>
            <div className="mb-4">
        <label className="block mb-2">Select Guest:</label>
        <select
          className="border p-2 w-full rounded"
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Select a user</option>
          {guests.map((guest) => (
            <option key={guest.id} value={guest.id}>
              {guest.first_name}
            </option>
          ))}
        </select>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
}
