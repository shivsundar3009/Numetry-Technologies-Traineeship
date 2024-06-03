import React, { useState } from 'react';
import axios from 'axios';

const SearchUser = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
      setUserData(response.data);
    } catch (error) {
      console.error('User not found');
      setUserData(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">GitHub User Search</h1>
        <div className="mb-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={fetchUser}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
        {userData && (
          <div className="mt-6 p-6 border rounded-lg bg-gray-100">
            <div className="text-center">
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{userData.login}</h3>
              {userData.name && <p className="text-lg text-gray-700 mb-2">{userData.name}</p>}
              <p className="text-gray-600 mb-4">{userData.bio}</p>
              <a
                href={userData.html_url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </div>
            <div className="mt-4 flex justify-around text-center">
              <div>
                <p className="text-xl font-bold text-gray-800">{userData.public_repos}</p>
                <p className="text-gray-600">Repositories</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">{userData.followers}</p>
                <p className="text-gray-600">Followers</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">{userData.following}</p>
                <p className="text-gray-600">Following</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchUser;
