"use client";
import { useState } from 'react';
import Search from '../components/Search';
import Profile from '../components/Profile';
import { getUserDetails } from '../services/github';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function Home() {
  const [user, setUser] = useState('');

  const handleSearch = async (username) => {
    try {
      const userData = await getUserDetails(username);
      setUser(userData);
    } catch (error) {
      toast.error('User not found:', error);
      setUser(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="shadow-md p-5 border border-gray-300 p-inherit bg-[linear-gradient(90deg,_rgba(248,248,255,1)_20%,_rgba(248,248,255,1)_46%,_rgba(232,233,237,1)_74%)]">
        <h1 className="font-semibold mb-6">GitHub User Finder</h1>
        <Search onSearch={handleSearch} />
        {user ? <Profile user={user} /> : <ToastContainer/>}
      </div>
    </div>
  );
}
