import { useState } from 'react';

const RequestForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [requestData, setRequestData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRequestData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(url, requestData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="url" className="form-label">
          URL
        </label>
        <input
          type="text"
          name="url"
          id="url"
          className="form-control"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="input1" className="form-label">
          Input 1
        </label>
        <input
          type="text"
          name="input1"
          id="input1"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="input2" className="form-label">
          Input 2
        </label>
        <input
          type="text"
          name="input2"
          id="input2"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Request
      </button>
    </form>
  );
};

export default RequestForm;
