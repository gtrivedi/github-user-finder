export default function Profile({ user }) {
    return (
      <div className="rounded p-4 border-[1px] border-[#c2c2c2]">
        <img src={user.avatar_url} alt={user.login} className="w-32 h-32 rounded-full" />
        <h2 className="text-xl font-bold mt-4">{user.name || user.login} 
          <a href={user.html_url} target="_blank" rel="noopener noreferrer"
            className="text-blue-500 underline text-sm px-3">View Profile</a>
        </h2>
        <p>{user.bio}</p>
        <p>
          <strong>Location:</strong> {user.location || 'N/A'}
        </p>
        <p>
          <strong>Followers:</strong> {user.followers} | <strong>Following:</strong> {user.following}
        </p>
        <p>
          <strong>Repositories:</strong> {user.public_repos}
        </p>
        
      </div>
    );
  }
  