import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Download, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ReportsProps {
  isDark: boolean;
}

export default function Reports({ isDark }: ReportsProps) {
  const performanceData = {
    labels: ['Math', 'Science', 'English', 'History', 'Art', 'Physics'],
    datasets: [
      {
        label: 'Average Score',
        data: [85, 92, 78, 88, 95, 82],
        backgroundColor: isDark ? 'rgba(56, 189, 248, 0.5)' : 'rgba(14, 165, 233, 0.5)',
        borderColor: isDark ? 'rgb(56, 189, 248)' : 'rgb(14, 165, 233)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: isDark ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        titleColor: isDark ? '#f3f4f6' : '#1e293b',
        bodyColor: isDark ? '#f3f4f6' : '#1e293b',
        borderColor: isDark ? '#374151' : '#e2e8f0',
        borderWidth: 1,
        padding: 12,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDark ? '#374151' : '#f1f5f9',
        },
        ticks: {
          color: isDark ? '#9ca3af' : '#64748b',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? '#9ca3af' : '#64748b',
        },
      },
    },
  };

  const reports = [
    {
      id: 1,
      name: "Monthly Performance Report",
      date: "March 2024",
      size: "2.4 MB",
      trend: "up",
      change: "+5.2%"
    },
    {
      id: 2,
      name: "Attendance Analysis",
      date: "March 2024",
      size: "1.8 MB",
      trend: "down",
      change: "-2.1%"
    },
    {
      id: 3,
      name: "Resource Utilization Report",
      date: "March 2024",
      size: "3.1 MB",
      trend: "up",
      change: "+3.7%"
    }
  ];

  return (
    <div className="px-6 max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className={`text-3xl font-bold bg-gradient-to-r ${isDark ? 'from-primary-400 to-secondary-400' : 'from-primary-600 to-secondary-600'} text-transparent bg-clip-text transition-colors duration-300`}>
          Reports
        </h1>
        <div className="flex gap-4">
          <button className={`flex items-center px-4 py-2 rounded-lg ${isDark ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} border transition-all duration-300`}>
            <Calendar className="w-4 h-4 mr-2" />
            Select Period
          </button>
          <button className={`flex items-center px-4 py-2 rounded-lg ${isDark ? 'bg-primary-600 hover:bg-primary-700' : 'bg-primary-500 hover:bg-primary-600'} text-white transition-all duration-300 transform hover:scale-[1.02]`}>
            <Download className="w-4 h-4 mr-2" />
            Export All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className={`lg:col-span-2 rounded-xl p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} ${isDark ? 'shadow-lg shadow-gray-900/30' : 'shadow-soft'} transition-all duration-300`}>
          <h2 className={`text-xl font-semibold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Subject Performance Overview
          </h2>
          <Bar data={performanceData} options={chartOptions} />
        </div>

        <div className={`rounded-xl p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} ${isDark ? 'shadow-lg shadow-gray-900/30' : 'shadow-soft'} transition-all duration-300`}>
          <h2 className={`text-xl font-semibold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Recent Reports
          </h2>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className={`p-4 rounded-xl ${isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                    {report.name}
                  </h3>
                  {report.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {report.date}
                    </span>
                  </div>
                  <button className={`opacity-0 group-hover:opacity-100 text-sm ${isDark ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-500'} transition-all duration-300`}>
                    Download
                  </button>
                </div>
                <div className="mt-2">
                  <span className={`text-sm ${report.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {report.change}
                  </span>
                  <span className={`text-sm ml-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    vs last month
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}