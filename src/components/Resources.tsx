import React from 'react';
import { Monitor, Projector, Tv, PlusCircle, Battery, WifiOff } from 'lucide-react';

interface ResourcesProps {
  isDark: boolean;
}

export default function Resources({ isDark }: ResourcesProps) {
  const resources = [
    {
      id: 1,
      name: "Computer Lab 1",
      type: "computer",
      status: "available",
      location: "Room 101",
      lastMaintenance: "2024-03-15",
      nextMaintenance: "2024-04-15",
      health: "95%"
    },
    {
      id: 2,
      name: "Smart Board A",
      type: "smartboard",
      status: "in-use",
      location: "Room 203",
      lastMaintenance: "2024-03-10",
      nextMaintenance: "2024-04-10",
      health: "88%"
    },
    {
      id: 3,
      name: "Projector System B",
      type: "projector",
      status: "maintenance",
      location: "Room 305",
      lastMaintenance: "2024-03-20",
      nextMaintenance: "2024-03-22",
      health: "75%"
    }
  ];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'computer':
        return <Monitor className="w-6 h-6" />;
      case 'projector':
        return <Projector className="w-6 h-6" />;
      case 'smartboard':
        return <Tv className="w-6 h-6" />;
      default:
        return <Monitor className="w-6 h-6" />;
    }
  };

  const getStatusColor = (status: string, isDark: boolean) => {
    switch (status) {
      case 'available':
        return isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'in-use':
        return isDark ? 'bg-primary-900/30 text-primary-300' : 'bg-primary-100 text-primary-800';
      case 'maintenance':
        return isDark ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800';
      default:
        return isDark ? 'bg-gray-900/30 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="px-6 max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className={`text-3xl font-bold bg-gradient-to-r ${isDark ? 'from-primary-400 to-secondary-400' : 'from-primary-600 to-secondary-600'} text-transparent bg-clip-text transition-colors duration-300`}>
          Resources
        </h1>
        <button className={`flex items-center px-4 py-2 rounded-lg ${isDark ? 'bg-primary-600 hover:bg-primary-700' : 'bg-primary-500 hover:bg-primary-600'} text-white transition-all duration-300 transform hover:scale-[1.02]`}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Resource
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className={`rounded-xl p-6 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} ${isDark ? 'shadow-lg shadow-gray-900/30' : 'shadow-soft'} transition-all duration-300 transform hover:scale-[1.02] cursor-pointer`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${isDark ? 'bg-gray-700 text-primary-400' : 'bg-primary-100 text-primary-600'}`}>
                {getResourceIcon(resource.type)}
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(resource.status, isDark)}`}>
                {resource.status}
              </span>
            </div>

            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              {resource.name}
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
              {resource.location}
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Health Status</span>
                <div className="flex items-center">
                  <Battery className={`w-4 h-4 mr-2 ${
                    parseInt(resource.health) > 90
                      ? isDark ? 'text-green-400' : 'text-green-600'
                      : parseInt(resource.health) > 80
                      ? isDark ? 'text-yellow-400' : 'text-yellow-600'
                      : isDark ? 'text-red-400' : 'text-red-600'
                  }`} />
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                    {resource.health}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Network Status</span>
                <div className="flex items-center">
                  {resource.status !== 'maintenance' ? (
                    <div className={`w-2 h-2 rounded-full mr-2 ${isDark ? 'bg-green-400' : 'bg-green-600'}`} />
                  ) : (
                    <WifiOff className={`w-4 h-4 mr-2 ${isDark ? 'text-red-400' : 'text-red-600'}`} />
                  )}
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                    {resource.status !== 'maintenance' ? 'Connected' : 'Offline'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}