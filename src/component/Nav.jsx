const Nav = () => {
  return (
    <div>
      <img src="src/assets/icons_assets/Logo.svg" alt="Little Lemon logo" />
      <ul className="nav-links">
        <li><a href="/home"></a>HOME</li>
        <li><a href="/about"></a>ABOUT</li>
        <li><a href="/menu"></a>MENU</li>
        <li><a href="/reservations"></a>RESERVATIONS</li>
        <li><a href="/order-online"></a>ORDER ONLINE</li>
        <li><a href="/login"></a>LOGIN</li>
      </ul>
    </div>
  )
}

export default Nav
