import { useParams, useNavigate } from "react-router-dom";
import { products } from "./data/products";
import "./ProductDetails.css"

function ProductDetails({ cartItems, setCartItems }){
    const { id } = useParams()
    const navigate = useNavigate()

    const product = products.find(
    (item) => item.id === Number(id)
    )

    if(!product){
        return <p style={{ padding: "40px" }}>Produto não encontrado.</p>
    }

    function handleAddToCart(){
        setCartItems(function (prev){
            const itemExists = prev.find(function (item){
                return item.id === product.id
            })

            if(itemExists){
                return prev.map(function (item){
                    if(item.id === product.id){
                        return { ...item, quantity: item.quantity + 1}
                    }
                    return item;
                })
            }
            return [...prev, { ...product, quantity: 1}]
        })
    }

    const islnCart = cartItems.some(function (item){
      return item.id === product.id;
    })

    function handleRemoverFromCart(){
      setCartItems(function (prev){
        return prev.filter(function (item){
          return item.id !== product.id;
         })
      })
    }

    return(
        <div className="product-details">
            <button className="back-button" onClick={() => navigate(-1)}>
               Voltar
            </button>
            <div className="product-details-container">
                
                <div className="product-details-image">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-details-info">
                    <h1>{product.name}</h1>

                    {product.oldPrice && (
                        <span className="old-price">
                            R$ {product.oldPrice.toFixed(2)}
                        </span>
                    )}

                    <p className="price">
                        R$ {product.price.toFixed(2)}
                    </p>

                    <p className="description">
                        Produto de alta qualidade, ideal para o dia a dia.
                        Estilo moderno, confortável e versátil.
                    </p>

                    {!islnCart ? (
                    <button className="btn-buy" onClick={handleAddToCart}>
                        Adicionar ao carrinho
                    </button>
                    ) : (
                    <button className="remove-buy" onClick={handleRemoverFromCart}>
                        Remover do Carrinho
                    </button>
                    )}
                </div>

            </div>
        </div>
    )
}


export default ProductDetails;