import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-5  m-5">
      <div className="logo">
        <h1>CI/CD</h1>
      </div>
      <div className="nav-components">
        <ul className="flex list-none p-0 mx-10">
          <li className="nav-component mx-4">
            <a href="#">Home</a>
          </li>
          <li className="nav-component mx-4">
            <a href="#">How to use</a>
          </li>
          <li className="nav-component mx-4">
            <a href="#">Contribute</a>
          </li>
          <li className="nav-component mx-4">
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;