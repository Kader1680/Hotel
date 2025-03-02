import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRoom() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    price: "",
    max_occupation: "",
    image: null, // Store the file object, not a string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const addroom = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("max_occupation", formData.max_occupation);
      formDataToSend.append("image", formData.image);

      const response = await fetch("http://127.0.0.1:8000/api/admin/add-room", {
        method: "POST",
        body: formDataToSend, 
      });

      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      navigate("/admin/add-room");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="bg-[#0F172B] text-white w-full md:w-64">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-4">
         <a href="/admin" class="block py-2 px-4 hover:bg-blue-700">Admin Panel</a>
          
          <a href="/admin/add-room" className="block py-2 px-4 hover:bg-blue-700">Rooms Actions</a>
          <a href="#" className="block py-2 px-4 hover:bg-blue-700">Settings</a>
          <a href="#" className="block py-2 px-4 hover:bg-blue-700">Profile</a>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Room</h2>

            <form onSubmit={addroom} encType="multipart/form-data">
              <div className="mb-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Luxury Suite"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Room Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="" disabled>Select Room Type</option>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Suite">Suite</option>
                  <option value="Family">Family</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price per Night ($)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="200"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="max_occupation" className="block text-sm font-medium text-gray-700">Max Occupation</label>
                <input
                  type="number"
                  id="max_occupation"
                  name="max_occupation"
                  placeholder="4"
                  value={formData.max_occupation}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Room Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add Room
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddRoom;
