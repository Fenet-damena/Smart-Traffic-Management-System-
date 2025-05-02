// home.jsx
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';


export default function Home() {
  const [lightStatus, setLightStatus] = useState({});
  const [vehicleCount, setVehicleCount] = useState({});

  useEffect(() => {
    const db = getDatabase();

    const lightRef = ref(db, 'trafficLights');
    const vehicleRef = ref(db, 'vehicleCounts');

    // Listen for traffic light updates
    onValue(lightRef, (snapshot) => {
      const data = snapshot.val();
      setLightStatus(data);
    });

    // Listen for vehicle count updates
    onValue(vehicleRef, (snapshot) => {
      const data = snapshot.val();
      setVehicleCount(data);
    });
  }, []);

  const getLightColor = (status) => {
    switch (status) {
      case 'green': return 'bg-green-400';
      case 'red': return 'bg-red-400';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-blue-900 text-white w-64 p-6 flex flex-col rounded-r-3xl">
        <h2 className="text-2xl font-bold mb-10">Smart Traffic Dashboard</h2>
        <ul className="space-y-6 text-lg">
          <li className="text-white font-semibold">Home</li>
          <li className="opacity-70">Filters</li>
          <li className="opacity-70">Profile</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">Smart Traffic Dashboard</h1>
            <p className="text-gray-500">Data for April 2025</p>
          </div>
          <div className="flex space-x-4">
            <button className="relative">
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M19 13V8a7 7 0 10-14 0v5l-1.405 1.405A2.032 2.032 0 004 19h16a2.032 2.032 0 00.405-1.595L19 13z" />
              </svg>
            </button>
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m0 14v1m8.485-8.485l-.707.707M4.222 19.778l-.707-.707M4 12H3m18 0h1M4.222 4.222l.707.707M19.778 4.222l-.707.707" />
            </svg>
          </div>
        </header>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Live Traffic Feed</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[1, 2, 3, 4].map((n) => (
              <Image
                key={n}
                src="/traffic-placeholder.jpg"
                alt={`Traffic feed ${n}`}
                width={400}
                height={200}
                className="rounded shadow"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Traffic Light Status</h3>
              {Object.entries(lightStatus).map(([intersection, status]) => (
                <div key={intersection} className="flex justify-between items-center py-1">
                  <span>{intersection}</span>
                  <span className={`w-4 h-4 rounded-full ${getLightColor(status)}`}></span>
                  <span className="capitalize text-sm text-gray-600">{status}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Vehicle Count</h3>
              {Object.entries(vehicleCount).map(([intersection, count]) => (
                <div key={intersection} className="flex justify-between py-1">
                  <span>{intersection}</span>
                  <span className="font-medium">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
