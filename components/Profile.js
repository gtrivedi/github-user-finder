export default function Profile({ user }) {
    return (
      <div className="border rounded p-4">
        <img src={user.avatar_url} alt={user.login} className="w-32 h-32 rounded-full" />
        <h2 className="text-xl font-bold mt-4">{user.name || user.login}</h2>
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
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Profile
        </a>
      </div>
    );
  }
  