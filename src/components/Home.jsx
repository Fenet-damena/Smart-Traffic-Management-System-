import React from 'react';
import { Bell, Settings } from 'lucide-react';

export default function HomePage() {
  const vehicleCounts = {
    intersection_1: 12,
    intersection_2: 9,
    intersection_3: 15,
    intersection_4: 7,
  };

  const currentGreen = 'intersection_2'; // Example: intersection_2 is green

  const videoURLs = [
    "https://videos.pexels.com/video-files/2109463/2109463-uhd_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/3727445/3727445-sd_640_360_30fps.mp4",
    "https://media.istockphoto.com/id/1419468638/video/101-freeway-traffic-in-los-angeles-close.mp4?s=mp4-640x640-is&k=20&c=NvHDZFj19jdlMIrLxOotWRWQsJFBLphel9kvJu96Bng=",
    "https://videos.pexels.com/video-files/1721294/1721294-sd_640_360_25fps.mp4",
  ];

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

        {/* Live Traffic Feed - Videos */}
        <section className="bg-white rounded-xl p-6 shadow mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Live Traffic Feed</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full overflow-hidden rounded-xl">
            {videoURLs.map((url, index) => (
              <video
                key={index}
                src={url}
                className="w-full h-64 object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ))}
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Traffic Light Status */}
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-blue-800 text-xl font-semibold mb-4">Traffic Light Status</h3>
            {[1, 2, 3, 4].map((intersection) => (
              <div key={intersection} className="flex justify-between mb-3 items-center">
                <span>Intersection {intersection}</span>
                <img
                  src={`/assets/light/${currentGreen === `intersection_${intersection}` ? 'green.png' : 'red.png'}`}
                  alt={currentGreen === `intersection_${intersection}` ? 'Green Light' : 'Red Light'}
                  className="w-12 h-12 object-contain" // Adjusted width and height for better sizing
                />
              </div>
            ))}
          </div>

          {/* Vehicle Count */}
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-blue-800 text-xl font-semibold mb-4">Vehicle Count</h3>
            {[1, 2, 3, 4].map((intersection) => (
              <div key={intersection} className="flex justify-between mb-3">
                <span>Intersection {intersection}</span>
                <span className="font-medium">{vehicleCounts[`intersection_${intersection}`]}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
