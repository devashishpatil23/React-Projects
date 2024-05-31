export default function UserCard({ user }) {
  const { avatar_url, bio, location, public_repos, login, name } = user;
  return (
    <div className="card-wrap">
      <div className="image">
        <img src={avatar_url} alt="profile image" />
        <h4 className="name">{name}</h4>
      </div>
      <div className="content">
        <ul>
          <li>{bio ? `Bio: Works as a ${bio}` : ""}</li>
          <li>Location: {location}</li>
          <li>Public repos: {public_repos}</li>
          <li>
            <a href={`https://github.com/${login}`} target="_blank">
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
