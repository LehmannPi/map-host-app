import { useState } from 'react';

interface MapPoint {
  id: string;
  name: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface MapPointRegistrationProps {
  onPointAdded?: (point: MapPoint) => void;
}

export function MapPointRegistration({
  onPointAdded,
}: MapPointRegistrationProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    lat: '',
    lng: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPoint: MapPoint = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      coordinates: {
        lat: parseFloat(formData.lat),
        lng: parseFloat(formData.lng),
      },
    };

    onPointAdded?.(newPoint);

    // Reset form
    setFormData({
      name: '',
      description: '',
      lat: '',
      lng: '',
    });
  };

  return (
    <div className="bg-canyon-800/60 backdrop-blur-sm rounded-xl border border-canyon-600/30 shadow-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-canyon-100 mb-2 flex items-center">
          <div className="w-3 h-3 bg-gradient-to-r from-ethereal-teal to-ethereal-purple rounded-full mr-3 animate-glow-pulse"></div>
          Register New Map Point
        </h3>
        <p className="text-sm text-canyon-200">
          Add a new destination to the map
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-canyon-100 mb-1"
          >
            Point Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full px-3 py-2 bg-canyon-700/50 border border-canyon-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ethereal-teal focus:border-transparent text-canyon-100 placeholder-canyon-300 backdrop-blur-sm transition-all duration-200"
            placeholder="Enter point name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-canyon-100 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            className="w-full px-3 py-2 bg-canyon-700/50 border border-canyon-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ethereal-teal focus:border-transparent text-canyon-100 placeholder-canyon-300 backdrop-blur-sm transition-all duration-200"
            placeholder="Enter description"
            rows={3}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="lat"
              className="block text-sm font-medium text-canyon-100 mb-1"
            >
              Latitude
            </label>
            <input
              type="number"
              id="lat"
              value={formData.lat}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, lat: e.target.value }))
              }
              className="w-full px-3 py-2 bg-canyon-700/50 border border-canyon-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ethereal-teal focus:border-transparent text-canyon-100 placeholder-canyon-300 backdrop-blur-sm transition-all duration-200"
              placeholder="40.7128"
              step="any"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lng"
              className="block text-sm font-medium text-canyon-100 mb-1"
            >
              Longitude
            </label>
            <input
              type="number"
              id="lng"
              value={formData.lng}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, lng: e.target.value }))
              }
              className="w-full px-3 py-2 bg-canyon-700/50 border border-canyon-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ethereal-teal focus:border-transparent text-canyon-100 placeholder-canyon-300 backdrop-blur-sm transition-all duration-200"
              placeholder="-74.0060"
              step="any"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-ethereal-teal to-ethereal-purple text-canyon-50 py-3 px-4 rounded-lg hover:from-ethereal-purple hover:to-ethereal-teal focus:outline-none focus:ring-2 focus:ring-ethereal-teal focus:ring-offset-2 focus:ring-offset-canyon-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 animate-glow-pulse"
        >
          Add Map Point
        </button>
      </form>
    </div>
  );
}

export default MapPointRegistration;
