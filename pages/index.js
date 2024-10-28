import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const [apiResponse, setApiResponse] = useState(null);

  const handleApiRequest = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const requestData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <form onSubmit={handleApiRequest}>
          <div className="mb-4">
            <label htmlFor="input1" className="block text-sm font-medium text-gray-700">
              Input 1
            </label>
            <input
              type="text"
              name="input1"
              id="input1"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input2" className="block text-sm font-medium text-gray-700">
              Input 2
            </label>
            <input
              type="text"
              name="input2"
              id="input2"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Request
          </button>
        </form>
        {apiResponse && (
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900">API Response</h2>
            <pre className="mt-2 p-4 bg-gray-100 rounded-md">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
