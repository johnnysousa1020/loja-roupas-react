import { products } from "../data/products";
import ProductSection from "../ProductSection";
import Banner from "../Banner";
import Footer from "../Footer";

function Home(){
    return(
        <main>
            <Banner />

            <ProductSection 
            title="Masculino"
            id="masculino"
            products={products.filter(p => p.category === "masculino")}/>

            <ProductSection 
            title="Feminino"
            id="feminino"
            products={products.filter(p => p.category === "feminino")}/>

            <ProductSection 
            title="Infantil"
            id="infantil"
            products={products.filter(p => p.category === "infantil")}/>

            <ProductSection 
            title="Ofertas"
            id="ofertas"
            products={products.filter(p => p.category === "ofertas")}
            isOffer/>

            <Footer />
        </main>
    )
}


export default Home;