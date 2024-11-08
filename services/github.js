import axios from 'axios';

const github = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_API_URL,
  headers: {
    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (username) => {
    // Validate the input early
    if (!username || username.trim() === '') {
      console.warn('A valid username is required for searching.');
      return [];
    }
  
    try {
      const response = await github.get(`/search/users?q=${encodeURIComponent(username)}`);
      return response.data?.items || [];
    } catch (error) {
      console.error('Error searching users:', error.message);
      return [];
    }
  };

export const getUserDetails = async (username) => {
    if (!username) {
      console.warn("Username is required.");
      return null;
    }
  
    try {
      const response = await github.get(`/users/${username}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      return null;
    }
  };
