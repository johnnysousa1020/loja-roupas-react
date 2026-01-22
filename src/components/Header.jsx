import "./Header.css"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router-dom"

function Header({ cartItems = [] }){
    const totalItems = cartItems.reduce(function (acc, item){
        return acc + (item.quantity || 0)
    }, 0)

    return(
    <header className="header">
        <div className="header-container">

            <div className="logo">
                <span>Fashion</span>Shop
            </div>

            <nav className="nav">
                <a href="#home">Home</a>
                <a href="#masculino">Masculino</a>
                <a href="#feminino">Feminino</a>
                <a href="#infantil">Infantil</a>
                <a href="#ofertas">Ofertas</a>
            </nav>

            <Link className="cart" to="/carrinho">
            <FiShoppingCart />
            <span className="cart-counts">{totalItems}</span>
           </Link>
           
        </div>
    </header>
    )
}


export default Header;