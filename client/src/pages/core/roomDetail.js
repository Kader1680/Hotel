import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Roomdetail() {

  const [room, setRomDetail] = useState([])
  useEffect(() => {
      let id = 3;
      const room= async () => {
       try {
        const response = await axios.get(`http://127.0.0.1:8000/api/room/${id}`)
        console.log(response.data.room.id)
        setRomDetail(response.data.room)
       } catch (error) {
        console.log(error)
       }
      }
      room();

  }, []);
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <img
            src={`http://127.0.0.1:8000/storage/${room.image}`}
                    alt={room.title}
                    className="w-full h-48 object-cover" />
        <h2 className="text-2xl font-bold mb-2">{room.title}</h2>
        <p className="text-gray-700">Type: {room.type}</p>
        <p className="text-gray-700">Max Occupation: {room.max_occupation}</p>
        <p className="text-gray-900 font-semibold text-lg mt-2">${room.price} per night</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Roomdetail