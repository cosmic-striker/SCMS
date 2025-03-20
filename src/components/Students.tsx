import React from 'react';
import { Search, Filter, MoreVertical, UserPlus } from 'lucide-react';

interface StudentsProps {
  isDark: boolean;
}

export default function Students({ isDark }: StudentsProps) {
  const students = [
    {
      id: 1,
      name: "Emma Thompson",
      grade: "A",
      attendance: "95%",
      performance: "92%",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      status: "Active",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "James Wilson",
      grade: "B+",
      attendance: "88%",
      performance: "85%",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80",
      status: "In Class",
      lastActive: "5 mins ago"
    },
    {
      id: 3,
      name: "Sophie Chen",
      grade: "A-",
      attendance: "92%",
      performance: "89%",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
      status: "Active",
      lastActive: "1 hour ago"
    }
  ];

  return (
    <div className="px-6 max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className={`text-3xl font-bold bg-gradient-to-r ${isDark ? 'from-primary-400 to-secondary-400' : 'from-primary-600 to-secondary-600'} text-transparent bg-clip-text transition-colors duration-300`}>
          Students
        </h1>
        <button className={`flex items-center px-4 py-2 rounded-lg ${isDark ? 'bg-primary-600 hover:bg-primary-700' : 'bg-primary-500 hover:bg-primary-600'} text-white transition-all duration-300 transform hover:scale-[1.02]`}>
          <UserPlus className="w-4 h-4 mr-2" />
          Add Student
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className={`flex-1 flex items-center px-4 rounded-lg ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border transition-colors duration-300`}>
          <Search className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search students..."
            className={`w-full px-4 py-2 bg-transparent outline-none ${isDark ? 'text-gray-100 placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'}`}
          />
        </div>
        <button className={`flex items-center px-4 py-2 rounded-lg ${isDark ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} border transition-all duration-300`}>
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </button>
      </div>

      <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-gray-800 shadow-lg shadow-gray-900/30' : 'bg-white shadow-soft'} transition-all duration-300`}>
        <table className="w-full">
          <thead className={`${isDark ? 'bg-gray-700/50' : 'bg-gray-50'} transition-colors duration-300`}>
            <tr>
              <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Student</th>
              <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Grade</th>
              <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Attendance</th>
              <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Performance</th>
              <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>Status</th>
              <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {students.map((student) => (
              <tr key={student.id} className={`group hover:${isDark ? 'bg-gray-700/50' : 'bg-gray-50'} transition-colors duration-300`}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <div className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{student.name}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Last active {student.lastActive}</div>
                    </div>
                  </div>
                </td>
                <td className={`px-6 py-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{student.grade}</td>
                <td className={`px-6 py-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{student.attendance}</td>
                <td className={`px-6 py-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{student.performance}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    student.status === 'Active'
                      ? isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'
                      : isDark ? 'bg-primary-900/30 text-primary-300' : 'bg-primary-100 text-primary-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className={`p-2 rounded-lg opacity-0 group-hover:opacity-100 ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} transition-all duration-300`}>
                    <MoreVertical className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}