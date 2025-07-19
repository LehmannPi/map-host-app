import { useState } from 'react';
import MapPointRegistration from './components/MapPointRegistration';

// Mock data for destinations - this would typically come from an API
const mockDestinations = [
  {
    id: 1,
    name: 'Central Park',
    coordinates: { lat: 40.7829, lng: -73.9654 },
    description: 'Famous urban park in Manhattan',
  },
  {
    id: 2,
    name: 'Times Square',
    coordinates: { lat: 40.758, lng: -73.9855 },
    description: 'Major commercial intersection',
  },
  {
    id: 3,
    name: 'Brooklyn Bridge',
    coordinates: { lat: 40.7061, lng: -73.9969 },
    description: 'Iconic suspension bridge',
  },
  {
    id: 4,
    name: 'Statue of Liberty',
    coordinates: { lat: 40.6892, lng: -74.0445 },
    description: 'Famous landmark and symbol',
  },
  {
    id: 5,
    name: 'Empire State Building',
    coordinates: { lat: 40.7484, lng: -73.9857 },
    description: 'Iconic skyscraper',
  },
];

function App() {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(
    null
  );
  const [destinations, setDestinations] = useState(mockDestinations);

  const handleNewPointAdded = (newPoint: any) => {
    // This would typically be handled by the Module Federation component
    console.log('New point added:', newPoint);
    // For now, we'll add it to our local state
    setDestinations((prev) => [...prev, { ...newPoint, id: prev.length + 1 }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-canyon-900 via-canyon-800 to-canyon-700">
      {/* Header */}
      <header className="border-b shadow-lg backdrop-blur-sm bg-canyon-800/80 border-canyon-600/30">
        <div className="px-6 py-4">
          <h1 className="flex items-center text-2xl font-bold text-canyon-50">
            <div className="flex justify-center items-center mr-3 w-8 h-8 bg-gradient-to-r rounded-lg from-ethereal-teal to-ethereal-purple animate-glow-pulse">
              <svg
                className="w-5 h-5 text-canyon-50"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            Map Interface
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col h-[calc(100vh-80px)]">
        {/* Top Section - Map and Destinations List */}
        <div className="flex flex-1 gap-6 p-6">
          {/* Map Placeholder - Top Left */}
          <div className="flex-1 rounded-xl border shadow-xl backdrop-blur-sm bg-canyon-800/60 border-canyon-600/30">
            <div className="flex overflow-hidden relative justify-center items-center h-full bg-gradient-to-br rounded-xl from-canyon-700/50 via-canyon-600/30 to-ethereal-teal/20">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20 bg-ethereal-glow animate-float"></div>
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-ethereal-teal animate-glow-pulse"></div>
              <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-ethereal-glow animate-float"></div>
              <div className="absolute bottom-6 left-8 w-1 h-1 rounded-full bg-canyon-100 animate-glow-pulse"></div>

              <div className="relative z-10 text-center">
                <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 bg-gradient-to-br rounded-2xl shadow-2xl from-ethereal-teal to-ethereal-purple animate-glow-pulse">
                  <svg
                    className="w-10 h-10 text-canyon-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-canyon-100">
                  Map Placeholder
                </h3>
                <p className="mb-4 text-canyon-200">
                  Interactive map will be displayed here
                </p>
                {selectedDestination && (
                  <div className="p-4 mt-6 rounded-xl border backdrop-blur-sm bg-canyon-600/30 border-canyon-500/30">
                    <p className="font-medium text-canyon-100">
                      Selected:{' '}
                      <span className="text-ethereal-teal">
                        {
                          destinations.find((d) => d.id === selectedDestination)
                            ?.name
                        }
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* List of Destinations - Top Right */}
          <div className="w-80 rounded-xl border shadow-xl backdrop-blur-sm bg-canyon-800/60 border-canyon-600/30">
            <div className="p-4 border-b border-canyon-600/30">
              <h2 className="flex items-center text-lg font-semibold text-canyon-100">
                <div className="mr-3 w-2 h-2 rounded-full bg-ethereal-teal animate-glow-pulse"></div>
                List of Destinations
              </h2>
            </div>
            <div className="p-4 max-h-[calc(100vh-300px)] overflow-y-auto">
              <div className="space-y-3">
                {destinations.map((destination) => (
                  <div
                    key={destination.id}
                    onClick={() => setSelectedDestination(destination.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedDestination === destination.id
                        ? 'border-ethereal-teal bg-canyon-600/40 shadow-lg shadow-ethereal-teal/20'
                        : 'border-canyon-600/30 hover:border-canyon-500/50 hover:bg-canyon-700/30'
                    }`}
                  >
                    <h3 className="mb-2 font-medium text-canyon-100">
                      {destination.name}
                    </h3>
                    <p className="mb-3 text-sm text-canyon-200">
                      {destination.description}
                    </p>
                    <div className="flex items-center text-xs text-canyon-300">
                      <div className="mr-2 w-1 h-1 rounded-full bg-ethereal-teal"></div>
                      {destination.coordinates.lat.toFixed(4)},{' '}
                      {destination.coordinates.lng.toFixed(4)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Registering New Map Points */}
        <div className="p-6 border-t backdrop-blur-sm bg-canyon-800/40 border-canyon-600/30">
          <MapPointRegistration onPointAdded={handleNewPointAdded} />
        </div>
      </div>
    </div>
  );
}

export default App;
