import { useState } from 'react';
import Search from '../components/Search';
import Profile from '../components/Profile';
import { getUserDetails } from '../services/github';

export default function Home() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const userData = await getUserDetails(username);
      setUser(userData);
    } catch (error) {
      console.error('User not found:', error);
      setUser(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">GitHub User Finder</h1>
      <Search onSearch={handleSearch} />
      {user && <Profile user={user} />}
    </div>
  );
}
