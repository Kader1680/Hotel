import React from 'react'

function Dashboard() {
  return (
    <div class="flex flex-col md:flex-row min-h-screen">

  
    <aside class="bg-[#0F172B] text-white w-full md:w-64">
      <div class="p-4">
        <h1 class="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav class="mt-4">
        <a href="/admin" class="block py-2 px-4 hover:bg-blue-700">Admin Panel</a>
        <a href="/admin/add-room" class="block py-2 px-4 hover:bg-blue-700">Rooms Actions</a>
        <a href="#" class="block py-2 px-4 hover:bg-blue-700">Settings</a>
        <a href="#" class="block py-2 px-4 hover:bg-blue-700">Profile</a>
      </nav>
    </aside>

    <main class="flex-1 p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Total Users</h2>
          <p class="text-gray-700">1,234</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Revenue</h2>
          <p class="text-gray-700">$12,345</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Active Projects</h2>
          <p class="text-gray-700">45</p>
        </div>

      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Recent Orders</h2>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4">#12345</td>
                <td class="px-6 py-4">John Doe</td>
                <td class="px-6 py-4">$199.99</td>
                <td class="px-6 py-4 text-green-500">Completed</td>
              </tr>
              <tr>
                <td class="px-6 py-4">#12346</td>
                <td class="px-6 py-4">Jane Smith</td>
                <td class="px-6 py-4">$299.99</td>
                <td class="px-6 py-4 text-yellow-500">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
 
   

 
    </main>

  </div>
  )
}

export default Dashboard
