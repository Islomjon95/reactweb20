
import "./navbar.css"
function Navbar() {
  return (
    <div className='nav'>
      <div className="logo">
        <a href="https://example.com">
            <img src="./img/Logo.png" alt="" />
        </a>
      </div>
      <ul className='right_menu'>
        <li className="menu_item">
            <a href="https://example.com">
                <img src="./img/person.png" alt="" />
                Log in
            </a>
        </li>
        <li className="menu_item">
            <a href="https://example.com">
                <img src="./img/cart.png" alt="" />0
            </a>
        </li>
        <li className="menu_item">
            <a href="https://example.com">
                <img src="./img/chiziq.png" alt="" />
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
