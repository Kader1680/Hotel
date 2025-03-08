import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

 

  export default function Bookingrecepsionist() {


    const [room, setRomDetail] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [bookings, setBookings] = useState([]);
  const [user, setuser] = useState("")
  const [guests, setguest] = useState([]);


  useEffect(() => {
    const guests = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/respsioniste/all-guest"
        );
        console.log(response.data)
        setguest(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    guests();
  }, []);
 
  const navigate = useNavigate();

  let { id } = useParams();
  let RoomId = parseInt(id);
  console.log(parseInt(id));
  useEffect(() => {
    const room = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/room/${RoomId}`
        );
         
        setRomDetail(response.data.room);
      } catch (error) {
        console.log(error);
      }
    };
    room();
  }, []);

  const handelSubmitBooking = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/bookings", {
        id_user: user,
        id_room: RoomId,
        checkin: checkIn,
        checkout: checkOut,
        total_price: 50.99,
        status: "pending",
      });

      if (response.status == 201) {
        navigate("/bookings");
      } else {
        navigate(`/room/${RoomId}`);
      }
       
      setRomDetail(response.data.room);
    } catch (error) {
      console.log(error);
    }
  };


  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <img
        src={`http://127.0.0.1:8000/storage/${room.image}`}
        alt={room.title}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-2xl font-bold mb-2">{room.title}</h2>
      <p className="text-gray-700">Type: {room.type}</p>
      <p className="text-gray-700">Max Occupation: {room.max_occupation}</p>
      <p className="text-gray-900 font-semibold text-lg mt-2">
        ${room.price} per night
      </p>

     
     
      <div>
          <label className="block mb-2">Check-in Date:</label>
          <input
            type="date"
            className="px-3 py-2 border rounded-md"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2">Check-out Date:</label>
          <input
            type="date"
            className="px-3 py-2 border rounded-md"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

         <label className="block mb-2">Select Guest:</label>
         <select
            className="border p-2 w-full rounded"
            onChange={(e) => setuser(e.target.value)}  
          >
            <option value="">Select a user</option>
            {guests.map((guest) => (
              <option key={guest.id} value={guest.id}>
                {guest.first_name}
              </option>
            ))}
        </select>


        
      <button
        onClick={handelSubmitBooking}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Book Now 
      </button> 
    </div>
  </div>
  )
}


