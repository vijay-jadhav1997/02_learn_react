const Header0 = () => {
  return (
    <div>
      <h1>!! Jay Jay Ram Krushna Hari !!</h1>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">

      <div className="left_section">
        <img src="https://th.bing.com/th/id/OIP.zXu2vsYPZ5mqF0tOB7kupAHaHa?pid=ImgDet&rs=1" />
        <p>Learn React</p>
      </div>
      <div className="middle_section">
        <input className="search_input" type="search" placeholder="Search here..." />
        <button>🔍</button>
      </div>
      <div className="right_section">
        <button>🤵 
        <span>signIn</span>
        </button>
      </div>
    </div>
  );
}

export default Header;