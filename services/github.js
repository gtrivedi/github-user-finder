import axios from 'axios';
import { toast } from 'react-toastify';

const github = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_API_URL,
  headers: {
    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (username) => {
    // Validate the input early
    if (!username || username.trim() === '') {
      toast.warn('A valid username is required for searching.');
      return [];
    }
  
    try {
      const response = await github.get(`/search/users?q=${encodeURIComponent(username)}`);
      return response.data?.items || [];
    } catch (error) {
      toast.error('Error searching users:', error.message);
      return [];
    }
  };

export const getUserDetails = async (username) => {
    if (!username) {
      toast.warn("Username is required.");
      return null;
    }
  
    try {
      const response = await github.get(`/users/${username}`);
      return response.data;
    } catch (error) {
      toast.error("GitHub user details doesn't exist");
      return null;
    }
  };
