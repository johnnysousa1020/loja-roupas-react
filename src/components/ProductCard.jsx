import { Link } from "react-router-dom";
import "./ProductCard.css"

function ProductCard({ product, isOffer }){
    const { id, name, price, oldPrice, image } = product;

    return(
        <div className="product-card">
            <img src={image} alt={name} />
            
            <div className="product-info">
                <h3>{name}</h3>

                {isOffer && oldPrice && (
                    <span className="old-price">
                        R$ {oldPrice.toFixed(2)}
                    </span>
                )}

                <p className="price">
                    R$ {price.toFixed(2)}
                </p>

                <Link to={`/produto/${id}`} className="btn-details">Ver mais</Link>
            </div>
        </div>
    )
}

export default ProductCard;