import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Users,
  BookOpen,
  Bell,
  Monitor,
  AlertTriangle,
  Calendar,
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface DashboardProps {
  isDark: boolean;
}

export default function Dashboard({ isDark }: DashboardProps) {
  const attendanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Attendance Rate',
        data: [95, 92, 88, 94, 91],
        borderColor: isDark ? '#38bdf8' : '#0ea5e9',
        backgroundColor: isDark ? '#38bdf8' : '#0ea5e9',
        tension: 0.4,
        fill: false,
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
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 80,
        max: 100,
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

  return (
    <div className="px-6 max-w-7xl mx-auto">
      <h1 className={`text-3xl font-bold bg-gradient-to-r ${isDark ? 'from-primary-400 to-secondary-400' : 'from-primary-600 to-secondary-600'} text-transparent bg-clip-text mb-8 transition-colors duration-300`}>
        Classroom Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={<Users className="w-6 h-6" />}
          title="Total Students"
          value="32"
          change="+2 this week"
          trend="up"
          isDark={isDark}
        />
        <StatCard
          icon={<BookOpen className="w-6 h-6" />}
          title="Average Performance"
          value="87%"
          change="+5% this month"
          trend="up"
          isDark={isDark}
        />
        <StatCard
          icon={<Monitor className="w-6 h-6" />}
          title="Active Resources"
          value="8/10"
          change="2 in maintenance"
          trend="neutral"
          isDark={isDark}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl ${isDark ? 'shadow-lg shadow-gray-900/30' : 'shadow-soft'} transition-all duration-300`}>
          <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-800'} transition-colors duration-300`}>
            Attendance Trends
          </h2>
          <Line data={attendanceData} options={chartOptions} />
        </div>

        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl ${isDark ? 'shadow-lg shadow-gray-900/30' : 'shadow-soft'} transition-all duration-300`}>
          <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-800'} transition-colors duration-300`}>
            Recent Alerts
          </h2>
          <div className="space-y-4">
            <Alert
              type="security"
              message="Unauthorized access attempt in Lab 2"
              time="10 minutes ago"
              isDark={isDark}
            />
            <Alert
              type="maintenance"
              message="Projector maintenance scheduled"
              time="1 hour ago"
              isDark={isDark}
            />
            <Alert
              type="emergency"
              message="Fire drill scheduled for tomorrow"
              time="2 hours ago"
              isDark={isDark}
            />
          </div>
        </div>
      </div>

      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl ${isDark ? 'shadow-lg shadow-gray-900/30' : 'shadow-soft'} transition-all duration-300`}>
        <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-800'} transition-colors duration-300`}>
          Upcoming Schedule
        </h2>
        <div className="space-y-4">
          <ScheduleItem
            time="09:00 AM"
            title="Mathematics"
            room="Room 101"
            teacher="Dr. Smith"
            isDark={isDark}
          />
          <ScheduleItem
            time="10:30 AM"
            title="Physics Lab"
            room="Lab 2"
            teacher="Prof. Johnson"
            isDark={isDark}
          />
          <ScheduleItem
            time="01:00 PM"
            title="Computer Science"
            room="Room 203"
            teacher="Ms. Davis"
            isDark={isDark}
          />
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  trend?: 'up' | 'down' | 'neutral';
  isDark: boolean;
}

function StatCard({
  icon,
  title,
  value,
  change,
  trend = 'neutral',
  isDark,
}: StatCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return isDark ? 'text-green-400' : 'text-green-600';
      case 'down':
        return isDark ? 'text-red-400' : 'text-red-600';
      default:
        return isDark ? 'text-gray-400' : 'text-gray-600';
    }
  };

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl ${isDark ? 'shadow-lg shadow-gray-900/30' : 'shadow-soft'} transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 ${isDark ? 'bg-gray-700 text-primary-400' : 'bg-primary-100 text-primary-600'} rounded-xl transition-colors duration-300`}>
          {icon}
        </div>
      </div>
      <h3 className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm font-medium transition-colors duration-300`}>
        {title}
      </h3>
      <p className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'} mb-1 transition-colors duration-300`}>
        {value}
      </p>
      <p className={`text-sm ${getTrendColor()} transition-colors duration-300`}>
        {change}
      </p>
    </div>
  );
}

interface AlertProps {
  type: 'security' | 'maintenance' | 'emergency';
  message: string;
  time: string;
  isDark: boolean;
}

function Alert({
  type,
  message,
  time,
  isDark,
}: AlertProps) {
  const getAlertStyle = () => {
    if (isDark) {
      switch (type) {
        case 'security':
          return 'bg-yellow-900/30 text-yellow-100 border-yellow-800/50 hover:bg-yellow-900/50';
        case 'maintenance':
          return 'bg-primary-900/30 text-primary-100 border-primary-800/50 hover:bg-primary-900/50';
        case 'emergency':
          return 'bg-red-900/30 text-red-100 border-red-800/50 hover:bg-red-900/50';
        default:
          return 'bg-gray-900/30 text-gray-100 border-gray-800/50 hover:bg-gray-900/50';
      }
    }
    
    switch (type) {
      case 'security':
        return 'bg-yellow-50 text-yellow-800 border-yellow-200 hover:bg-yellow-100';
      case 'maintenance':
        return 'bg-primary-50 text-primary-800 border-primary-200 hover:bg-primary-100';
      case 'emergency':
        return 'bg-red-50 text-red-800 border-red-200 hover:bg-red-100';
      default:
        return 'bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100';
    }
  };

  return (
    <div className={`flex items-center p-4 border rounded-xl ${getAlertStyle()} transition-all duration-300 cursor-pointer`}>
      <AlertTriangle className="w-5 h-5 mr-3" />
      <div>
        <p className="font-medium">{message}</p>
        <p className="text-sm opacity-75">{time}</p>
      </div>
    </div>
  );
}

interface ScheduleItemProps {
  time: string;
  title: string;
  room: string;
  teacher: string;
  isDark: boolean;
}

function ScheduleItem({
  time,
  title,
  room,
  teacher,
  isDark,
}: ScheduleItemProps) {
  return (
    <div className={`flex items-center p-4 border rounded-xl ${
      isDark 
        ? 'bg-gray-700/50 hover:bg-gray-700 border-gray-600' 
        : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
    } transition-all duration-300 cursor-pointer group`}>
      <div className={`p-3 ${
        isDark 
          ? 'bg-gray-600 text-primary-400 group-hover:bg-gray-600/70' 
          : 'bg-primary-100 text-primary-600 group-hover:bg-primary-200'
      } rounded-xl mr-4 transition-colors duration-300`}>
        <Calendar className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className={`font-medium ${isDark ? 'text-gray-100' : 'text-gray-800'} transition-colors duration-300`}>
          {title}
        </p>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
          {room} • {teacher}
        </p>
      </div>
      <p className={`text-sm font-medium ${isDark ? 'text-primary-400' : 'text-primary-600'} transition-colors duration-300`}>
        {time}
      </p>
    </div>
  );
}