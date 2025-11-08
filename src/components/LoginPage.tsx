import { useState } from 'react';
import { User, Lock, Beaker } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { username?: string; password?: string } = {};

    if (username.length < 3 || username.length > 20) {
      newErrors.username = 'Alias not found';
    }
    if (password.length < 6) {
      newErrors.password = 'Incorrect formula';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onLogin();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-gray-900/50"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-green-500 text-6xl font-bold">Br</div>
        <div className="absolute top-40 right-20 text-green-500 text-6xl font-bold">Ba</div>
        <div className="absolute bottom-20 left-1/4 text-green-500 text-6xl font-bold">H</div>
        <div className="absolute bottom-40 right-1/3 text-green-500 text-6xl font-bold">He</div>
      </div>

      <div className="smoke-animation absolute inset-0 opacity-20"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <Beaker className="w-12 h-12 text-green-500 glow-effect" />
            </div>
            <h1 className="text-5xl font-bold text-green-500 mb-2 chemical-text">
              Heisenberg Labs
            </h1>
            <div className="flex justify-center gap-2 text-sm text-green-400/60 font-mono">
              <span>Br<sub>35</sub></span>
              <span>Ba<sub>56</sub></span>
            </div>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-md border border-green-900/50 rounded-lg p-8 shadow-2xl card-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-green-400 text-sm font-medium mb-2">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your alias"
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border border-green-800/50 rounded-md text-white placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    aria-label="Username"
                  />
                </div>
                {errors.username && (
                  <p className="mt-2 text-sm text-red-400">{errors.username}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-green-400 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-green-600" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your secret formula"
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border border-green-800/50 rounded-md text-white placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    aria-label="Password"
                  />
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-green-500/50 glow-button focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Cook Login
              </button>

              <div className="text-center">
                <a
                  href="#"
                  className="text-green-400 hover:text-green-300 text-sm underline transition-colors"
                >
                  Forgot Formula?
                </a>
              </div>
            </form>
          </div>

          <p className="text-center text-gray-500 text-xs mt-6">
            Warning: All activities are fictional. Stay legal!
          </p>
        </div>
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
          animation: smoke 20s ease infinite;
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

        .card-glow {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.1);
        }

        .glow-button:hover {
          animation: button-glow 1.5s ease-in-out infinite;
        }

        @keyframes button-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.8);
          }
        }
      `}</style>
    </div>
  );
}
