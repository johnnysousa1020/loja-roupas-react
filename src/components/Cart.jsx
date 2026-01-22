import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import CheckoutModal from "./CheckoutModal"
import "./Cart.css"

function Cart({ cartItems, setCartItems}){
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    function increaseQuantity(id){
        setCartItems(function (prev){
            return prev.map(function (item){
                if(item.id === id){
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
        })
    }

    function decreaseQuabtity(id){
        setCartItems(function (prev){
            return prev
            .map(function (item){
                if (item.id === id){
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })
            .filter(function (item){
                return item.quantity > 0
            })
        })
    }

    function removeItem(id){
        setCartItems(function (prev){
            return prev.filter(function (item){
                return item.id !== id;
            })
        })
    }

    const total = cartItems.reduce(function (acc, item){
        return acc + item.price * item.quantity
    }, 0)

    if (cartItems.length === 0){
        return( 
        <div className="cart-container">
        <Link to="/" className="back-home">Voltar ao inicio</Link>
        
        <h2 className="empty-cart">Seu carrinho está vazio</h2>
        </div>
        )
    }

    function handleCheckout(){
        setShowModal(true)
    }

    return(
        <div className="cart-container">
            <div className="cart-header">
            <Link to="/" className="back-home">Voltar ao inicio</Link>
            </div>
            <h2>Meu carrinho</h2>

            {cartItems.map(function (item) {
                return(
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} />

                        <div className="cart-info">
                            <h3>{item.name}</h3>
                            <p>R$ {item.price.toFixed(2)}</p>

                            <div className="quantity">
                                <button onClick={() => decreaseQuabtity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>

                            <button className="remove"
                            onClick={() => removeItem(item.id)}>Remover</button>
                        </div>
                    </div>
                )
            })}

            <div className="car-total">
                <h3>Total: R$ {total.toFixed(2)}</h3>

                <button className="checkout-btn" onClick={handleCheckout}>Finalizar compra</button>
            </div>

            {showModal && (
                <CheckoutModal 
                onClose={() => {
                    setShowModal(false);
                    setCartItems([])
                    navigate("/")
                }}/>
            )}
        </div>
    )
}

export default Cart;