import { useState } from 'react';
import { TestTube, Beaker, FileText, User, LogOut, Home, Package, TrendingUp, Bell } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('Home');

  const stats = [
    { title: 'Active Experiments', icon: TestTube, value: '5', color: 'green' },
    { title: 'Chemical Inventory', icon: Beaker, value: '120 items', color: 'green' },
  ];

  const alerts = [
    'Experiment A ready for analysis',
    'Chemical B low in stock',
    'New report uploaded',
  ];

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Inventory', icon: Package },
    { name: 'Experiments', icon: TestTube },
    { name: 'Reports', icon: FileText },
    { name: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-black to-gray-900/30"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-green-500 text-4xl font-bold">He</div>
        <div className="absolute top-20 right-20 text-green-500 text-4xl font-bold">Br</div>
        <div className="absolute bottom-20 left-1/4 text-green-500 text-4xl font-bold">Ba</div>
        <div className="absolute bottom-10 right-1/3 text-green-500 text-4xl font-bold">N</div>
      </div>

      <div className="smoke-animation absolute inset-0 opacity-10"></div>

      <div className="relative z-10">
        <header className="bg-gray-900/80 backdrop-blur-md border-b border-green-900/30 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <Beaker className="w-8 h-8 text-green-500 glow-effect" />
                <h1 className="text-2xl font-bold text-green-500 chemical-text">
                  Heisenberg Labs Dashboard
                </h1>
              </div>

              <nav className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                      activeTab === item.name
                        ? 'bg-green-600 text-white'
                        : 'text-green-400 hover:bg-green-900/30'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                ))}
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-red-400 hover:bg-red-900/30 rounded-md transition-all ml-4"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-gray-900/60 backdrop-blur-md border border-green-900/50 rounded-lg p-6 shadow-xl hover:shadow-green-900/30 transition-all duration-300 hover:scale-105 stat-card"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-400 text-sm font-medium mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className="bg-green-900/30 p-3 rounded-lg">
                    <stat.icon className="w-8 h-8 text-green-500" />
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gray-900/60 backdrop-blur-md border border-green-900/50 rounded-lg p-6 shadow-xl col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-5 h-5 text-green-500" />
                <h3 className="text-xl font-bold text-green-400">Alerts</h3>
              </div>
              <ul className="space-y-3">
                {alerts.map((alert, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-gray-300 bg-black/30 p-3 rounded-md hover:bg-black/50 transition-colors"
                  >
                    <span className="text-green-500 mt-1">•</span>
                    <span>{alert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-md border border-green-900/50 rounded-lg p-6 shadow-xl">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-6 h-6 text-green-500" />
              <h3 className="text-2xl font-bold text-green-400">Production Analytics</h3>
            </div>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[65, 45, 80, 55, 70, 90, 75, 85, 60, 95, 70, 88].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-md transition-all duration-500 hover:from-green-500 hover:to-green-300 chart-bar"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <footer className="text-center text-gray-500 text-xs mt-8">
            Warning: All activities are fictional. Stay legal!
          </footer>
        </main>
      </div>

      <style>{`
        @keyframes smoke {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        .smoke-animation {
          background: radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%);
          background-size: 400% 400%;
          animation: smoke 25s ease infinite;
        }

        .glow-effect {
          filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6));
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(34, 197, 94, 0.9));
          }
        }

        .chemical-text {
          text-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
        }

        .stat-card:hover {
          box-shadow: 0 0 25px rgba(34, 197, 94, 0.3);
        }

        .chart-bar:hover {
          animation: bar-pulse 0.5s ease-in-out;
        }

        @keyframes bar-pulse {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.05);
          }
        }
      `}</style>
    </div>
  );
}
