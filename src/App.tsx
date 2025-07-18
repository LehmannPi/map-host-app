import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="py-8 min-h-screen bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="hover:opacity-80"
          >
            <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="hover:opacity-80"
          >
            <img
              src={reactLogo}
              className="w-16 h-16 animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="mt-8 text-4xl font-bold text-center text-gray-900">
          Vite + React
        </h1>
        <div className="mt-8 text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 text-white bg-blue-500 rounded-md transition-colors hover:bg-blue-600"
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit{' '}
            <code className="px-2 py-1 bg-gray-200 rounded">src/App.tsx</code>{' '}
            and save to test HMR
          </p>
        </div>
        <p className="mt-8 text-center text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
