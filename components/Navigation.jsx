const Navigation = () =>{
  return(
    <nav className="container">
  <div className="logo">
    <img src="/logo_download.jpeg" alt="lgo pic" width={72}/>
  </div>
  <ul>
    <li><a href="#">Menu</a></li>
    <li href="#"><a href="#">Location</a></li>
    <li href="#"><a href="#">About</a></li>
    <li href="#"><a href="#">Connect</a></li>
  </ul>

  <button>Login</button>

  </nav>
  )
}

export default Navigation;