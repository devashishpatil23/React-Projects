import { useEffect, useState } from "react";
import UserCard from "./userCard";
import "./gitHubPro.css";

export default function GitHubProfileFinder() {
  const [userName, setUserName] = useState("devashishpatil23");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    const resp = await fetch(`https://api.github.com/users/${userName}`);
    const data = await resp.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("devashishpatil23");
      console.log(userData);
    }
  }
  function handleSubmit() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="github-container">
      <div className="input-wrap">
        <input
          type="text"
          name="search"
          placeholder="Search git hub user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>search</button>
      </div>
      {loading ? <h2>Loading please wait!</h2> : <UserCard user={userData} />}
    </div>
  );
}
