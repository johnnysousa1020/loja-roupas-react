// Masculino

import masc1 from "../../assets/camisetabasica.jpg"
import masc2 from "../../assets/camisacasual.jpg"
import masc3 from "../../assets/camisasocial.jpg"
import masc4 from "../../assets/jaqueta.jpg"
import masc5 from "../../assets/calca.jpg"
import masc6 from "../../assets/moletom.jpg"

// feminino

import fem1 from "../../assets/blusa.jpg"
import fem2 from "../../assets/blusa-longa.jpg"
import fem3 from "../../assets/blusao.jpg"
import fem4 from "../../assets/calcafem.jpg"
import fem5 from "../../assets/jaquetafem.jpg"
import fem6 from "../../assets/vestido.jpg"

// infantil

import inf1 from "../../assets/camisetainf.jpg"
import inf2 from "../../assets/vestidoinf.jpg"
import inf3 from "../../assets/conjunto.jpg"
import inf4 from "../../assets/moletominf.jpg"
import inf5 from "../../assets/jaquetainf.jpg"
import inf6 from "../../assets/vestidoinfa.jpg"

// oferta 

import ofe1 from "../../assets/bolsa.jpg"
import ofe2 from "../../assets/blusasale.jpg"
import ofe3 from "../../assets/camiisasale.jpg"
import ofe4 from "../../assets/short.jpg"
import ofe5 from "../../assets/jaquetasale.jpg"
import ofe6 from "../../assets/tenis.jpg"


export const products = [
    // Masculino 

    {
        id: 1,
        name: "Camisa Casual Masculina",
        price: 129.9,
        category: "masculino",
        image: masc2
    },
    {
        id: 2,
        name: "Camiseta Básica Masculina",
        price: 59.9,
        category: "masculino",
        image: masc1
    },
    {
        id: 3,
        name: "Jaqueta Jeans Masculina",
        price: 249.9,
        category: "masculino",
        image: masc4
    },
    {
        id: 4,
        name: "Calça Slim Masculina",
        price: 159.9,
        category: "masculino",
        image: masc5
    },
    {
        id: 5,
        name: "Moletom Masculina",
        price: 189.9,
        category: "masculino",
        image: masc6
    },
    {
        id: 6,
        name: "Camisa Social Masculina",
        price: 199.9,
        category: "masculino",
        image: masc3
    },

    // feminino

    {
        id: 7,
        name: "Vestido",
        price: 189.9,
        category: "feminino",
        image: fem6
    },
    {
        id: 8,
        name: "Blusa Feminino",
        price: 99.9,
        category: "feminino",
        image: fem1
    },
    {
        id: 9,
        name: "Calça Feminino",
        price: 149.9,
        category: "feminino",
        image: fem4
    },
    {
        id: 10,
        name: "Jaqueta Feminino",
        price: 189.9,
        category: "feminino",
        image: fem5
    },
    {
        id: 11,
        name: "Blusa Longa",
        price: 119.9,
        category: "feminino",
        image: fem2
    },
    {
        id: 12,
        name: "Blazer",
        price: 139.9,
        category: "feminino",
        image: fem3
    },

    // Infantil

    {
        id: 13,
        name: "Conjunto Infantil",
        price: 89.9,
        category: "infantil",
        image: inf3
    },
    {
        id: 14,
        name: "Camiseta Infantil",
        price: 49.9,
        category: "infantil",
        image: inf1
    },
    {
        id: 15,
        name: "Moletom",
        price: 99.9,
        category: "infantil",
        image: inf4
    },
    {
        id: 16,
        name: "Vestido Infantil",
        price: 79.9,
        category: "infantil",
        image: inf2
    },
    {
        id: 17,
        name: "Vestido Infantil",
        price: 69.9,
        category: "infantil",
        image: inf6
    },
    {
        id: 18,
        name: "Jaqueta Infantil",
        price: 129.9,
        category: "infantil",
        image: inf5
    },

    // Ofertas

    {
        id: 19,
        name: "Jaqueta",
        price: 179.9,
        category: "ofertas",
        image: ofe5
    },
    {
        id: 20,
        name: "Tênis",
        price: 249.9,
        category: "ofertas",
        image: ofe6
    },
    {
        id: 21,
        name: "Camisa",
        price: 109.9,
        category: "ofertas",
        image: ofe3
    },
    {
        id: 22,
        name: "Short",
        price: 119.9,
        category: "ofertas",
        image: ofe4
    },
    {
        id: 23,
        name: "Bolsa",
        price: 219.9,
        category: "ofertas",
        image: ofe1
    },
    {
        id: 24,
        name: "Blusa",
        price: 89.9,
        category: "ofertas",
        image: ofe2
    },
]