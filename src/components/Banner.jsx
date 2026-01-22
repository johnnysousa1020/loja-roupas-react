import { useEffect, useState } from "react";
import "./Banner.css"

import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import banner4 from "../assets/banner4.jpg"
import banner5 from "../assets/banner5.jpg"

const banners = [
    {
        image: banner1,
        title: "Nova Coleção",
        subtitle: "Outono 2026",
        description: "Estilo e elegância para todos os momentos",
    },
    {
        image: banner2,
        title: "Moda Urbana",
        subtitle: "Tendências Atuais",
        description: "Looks modernos para o dia a dia",
    },
    {
        image: banner3,
        title: "Minimal Style",
        subtitle: "Essencial & Sofisticado",
        description: "Menos é mais no visual",
    },
    {
        image: banner4,
        title: "Casual Premium",
        subtitle: "Conforto e Qualidade",
        description: "Roupas pensadas para você",
    },
    {
        image: banner5,
        title: "Novidades",
        subtitle: "Coleção Exclusiva",
        description: "Descubra as novas peças",
    },
];

function Banner(){
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
            prev === banners.length - 1 ? 0 : prev + 1
        )
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const currentBanner = banners[currentIndex]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    )
    }

    const prevSilde = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    )
    }

    return(
        <section className="banner" id="home">
            <div
            className="banner-slide"
            style={{ backgroundImage: `url(${currentBanner.image})`}}>

                <div className="banner-content">
                    <h2>{currentBanner.title}</h2>
                    <h1>{currentBanner.subtitle}</h1>
                    <p>{currentBanner.description}</p>
                    <button>Ver coleção</button>
                </div>
            </div>

            <div className="banner-controls">
                <button onClick={prevSilde}>⇦</button>
                <button onClick={nextSlide}>⇨</button>
            </div>
        </section>
    )
}


export default Banner;