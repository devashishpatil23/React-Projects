import { useEffect, useState } from "react";
import "./style.css";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [filteredUser, setFilteredUser] = useState([]);

  function handleSerachUser(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (searchParam.length > 0) {
      const filteredData = users.filter((item) =>
        item.toLowerCase().includes(searchParam.toLowerCase())
      );
      setFilteredUser(filteredData);
    }
  }

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const resp = await fetch("http://dummyjson.com/users");
      const data = await resp.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((item) => item.firstName));
      }
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="search-user">
      <input
        value={searchParam}
        onChange={handleSerachUser}
        type="text"
        name="search-user"
        placeholder="seacrh user here"
      />
      <div>
        {loading && <p>Wait data is loading</p>}
        {error && <p>Error...!</p>}
        {searchParam.length > 0 ? (
          <ul>
            {filteredUser.map((user, i) => (
              <li key={i}>{user}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
