import React, {useState, useEffect} from 'react';

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer 2FnHydLFmsZOfIWqQe4es7pTNiFPYVYvCkeop3FDurhKBesmOxqYz4MBEKzBhovR"
  }
}

const Header = () => {

  // To use API for webpage.
  const [style, setStyle] = useState([]);
  const [category, setCategory] = useState([]);

  // To immediately render some data from useState we use useEffect here. 
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/categories?count=10', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }, []);
    

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Icon sets</a>
          </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
</nav>
  )
}

export default Header;