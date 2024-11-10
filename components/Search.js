import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Search({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username?.trim()) {
      onSearch(username);
    } else {
      toast.warn("Enter a valid github user name")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Search GitHub Users "
        value={username}
        onChange={(e) => setUsername(e.target.value)} className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-colors"
      />
      <button type="submit" className="mt-3 px-6 py-3 text-white rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all">
        Search
      </button>
    </form>
  );
}
