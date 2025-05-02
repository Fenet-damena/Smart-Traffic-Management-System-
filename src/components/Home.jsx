import React, { useState } from 'react';
import { Bell, Settings } from 'lucide-react';
import Sidebar from "./Sidebar";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const vehicleCounts = {
    intersection_1: 12,
    intersection_2: 9,
    intersection_3: 15,
    intersection_4: 7,
  };

  const currentGreen = 'intersection_2';

  const videoURLs = [
    "https://videos.pexels.com/video-files/2109463/2109463-uhd_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/3727445/3727445-sd_640_360_30fps.mp4",
    "https://media.istockphoto.com/id/1419468638/video/101-freeway-traffic-in-los-angeles-close.mp4?s=mp4-640x640-is&k=20&c=NvHDZFj19jdlMIrLxOotWRWQsJFBLphel9kvJu96Bng=",
    "https://videos.pexels.com/video-files/1721294/1721294-sd_640_360_25fps.mp4",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="ml-60 flex-1 flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-60 right-0 bg-[#f3f4f6] z-20 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#1E2A4A] mb-1">Smart Traffic Dashboard</h1>
              <p className="text-gray-600 text-lg">
                Data for {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Bell className="text-gray-700" />
              <Settings className="text-gray-700" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className={`mt-32 p-8 flex-1 overflow-y-auto transition duration-300 ${isModalOpen ? 'blur-sm' : ''}`}>
          {/* Live Traffic Feed */}
          <section className="bg-white rounded-xl p-6 shadow mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Live Traffic Feed</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full overflow-hidden rounded-xl">
              {videoURLs.map((url, index) => (
                <video
                  key={index}
                  src={url}
                  className="w-full h-64 object-cover cursor-pointer"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={() => {
                    setSelectedVideo(url);
                    setIsModalOpen(true);
                  }}
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
                    className="w-12 h-12 object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Vehicle Count */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-blue-800 text-xl font-semibold mb-4">Vehicle Count</h3>
              {[1, 2, 3, 4].map((intersection) => (
                <div key={intersection} className="flex justify-between mb-10">
                  <span>Intersection {intersection}</span>
                  <span className="font-medium">{vehicleCounts[`intersection_${intersection}`]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Trends */}
          <div className="bg-white rounded-xl p-6 shadow mt-8">
            <h3 className="text-blue-800 text-xl font-semibold mb-4">Traffic Trends</h3>
            <img
              src="/assets/graph/graph1.png"
              alt="Traffic Trends Graph"
              className="w-full h-64 object-contain"
            />
          </div>
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-70 rounded-full px-3 py-1"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="max-w-[90vw] max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
