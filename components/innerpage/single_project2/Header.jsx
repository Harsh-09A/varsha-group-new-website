

function Header({data}) {
  return (
    <header className="s-header-style2">
      <div className="container">
        <div className="info">
          <div className="tags mb-50">
            <a href="#" className='text-capitalize'> {data.category} </a>
            <a href="#"> {data.location} </a>
          </div>
          <div className="text mt-30">
            {data.excerpt}
          </div>
          <h1 className="title"> {data.title} </h1>
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
