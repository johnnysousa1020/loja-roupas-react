import ProductCard from "./ProductCard";
import "./ProductSection.css"

function ProductSection({ title, products, isOffer = false}){
    return(
        <section className="product-section">
            <h2 className="section-title">{title}</h2>

            <div className="products-grid">
                {products.map(product => (
                    <ProductCard 
                    key={product.id}
                    product={product}
                    isOffer={isOffer}/>
                ))}
            </div>
        </section>
    )
}


export default ProductSection;