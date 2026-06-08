import React from 'react';

function Header() {
  return (
    <header className="s-header-style2">
      <div className="container">
        <div className="info">
          <div className="tags mb-50">
            <a href="#"> Completed </a>
            <a href="#"> Ulwe </a>
          </div>
          <div className="text mt-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, adipisci!
          </div>
          <h1 className="title"> Balaji Sapphire </h1>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/s_project2/balaji-sapphire-2.jpg"
        alt=""
        className="bg img-cover"
        data-speed="1.25"
      />
    </header>
  );
}

export default Header;
