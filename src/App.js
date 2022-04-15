import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("");
  const [repoData, setRepoData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

 const repoDataURL=()=> {
    fetch(`https://api.github.com/users/${githubUser}/repos`)
      .then((res) => res.json())
      .then(
        (result) => {
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank" href={item.svn_url}>
                {item.name}
              </a>
            </div>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log("hello"+error);
        }
      );
  }

  const fetchData = () => {
    repoDataURL();
    return fetch(`https://api.github.com/users/${githubUser}`)
      .then((response) => response.json())
      .then((data) => {
        setGithubData(data);
      });
  };

  return (
    <div>
      <Navbar name={githubData.html_url} />
      <div className="container mt-3">
        <div className="row ">
          <div className="mb-3 col-md-9">
            <input
              type="text"
              placeholder="Type an user..."
              className="form-control"
              onChange={(e) => setGithubUser(e.target.value)}
            ></input>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={fetchData}>
              Search <i className="fas fa-search"></i>{" "}
            </button>
          </div>
        </div>
        <div className="container">
          <div className="card text-center tarjeta">
            <img
              src={githubData.avatar_url}
              height="200"
              width="200"
              className="rounded-pill img-thumbnail card-img-top avatar"
            />
            <p>{githubData.name}</p>
            <a className="btn btn-secondary" href={githubData.html_url}>
              Visit Profile
            </a>
            <h3>Repositories</h3>
            {repoData}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
