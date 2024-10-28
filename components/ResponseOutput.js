import React from 'react';

const ResponseOutput = ({ response }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-900">API Response</h2>
      <pre className="mt-2 p-4 bg-gray-100 rounded-md">
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  );
};

export default ResponseOutput;
