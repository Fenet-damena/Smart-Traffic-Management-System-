import React from 'react';
import { Bell, Settings } from 'lucide-react';

export default function HomePage() {
  const vehicleCounts = {
    lane_1: 12,
    lane_2: 9,
    lane_3: 15,
    lane_4: 7,
  };

  const currentGreen = 'lane_2'; // Example: lane_2 is green

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-[#101d3d] text-white w-60 p-6 space-y-10">
        <div className="text-2xl font-bold">Home</div>
        <div className="text-lg">Filters</div>
        <div className="text-lg">Profile</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#1E2A4A] mb-1">Smart Traffic Dashboard</h1>
            <p className="text-gray-600 text-lg">Data for April 2025</p>
          </div>
          <div className="flex gap-4">
            <Bell className="text-gray-700" />
            <Settings className="text-gray-700" />
          </div>
        </header>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <video
            src="/assets/lane1.mp4"
            className="rounded shadow w-full h-64 object-cover"
            autoPlay loop muted playsInline
          />
          <video
            src="/assets/lane2.mp4"
            className="rounded shadow w-full h-64 object-cover"
            autoPlay loop muted playsInline
          />
          <video
            src="/assets/lane3.mp4"
            className="rounded shadow w-full h-64 object-cover"
            autoPlay loop muted playsInline
          />
          <video
            src="/assets/lane4.mp4"
            className="rounded shadow w-full h-64 object-cover"
            autoPlay loop muted playsInline
          />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Traffic Light Status */}
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-blue-800 text-xl font-semibold mb-4">Traffic Light Status</h3>
            {[1, 2, 3, 4].map((lane) => (
              <div key={lane} className="flex justify-between mb-3">
                <span>Lane {lane}</span>
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                  currentGreen === `lane_${lane}`
                    ? 'bg-green-200 text-green-800'
                    : 'bg-red-200 text-red-800'
                }`}>
                  {currentGreen === `lane_${lane}` ? 'Green' : 'Red'}
                </span>
              </div>
            ))}
          </div>

          {/* Vehicle Count */}
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-blue-800 text-xl font-semibold mb-4">Vehicle Count</h3>
            {[1, 2, 3, 4].map((lane) => (
              <div key={lane} className="flex justify-between mb-3">
                <span>Lane {lane}</span>
                <span className="font-medium">{vehicleCounts[`lane_${lane}`]}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
