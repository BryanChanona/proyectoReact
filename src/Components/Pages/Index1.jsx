import React from 'react';
import Nav from "../Molecules/Nav.jsx";
import ElementImg from "../Atoms/Img/ElementImg";
import ElementP from "../Atoms/Parrafo/ElementP";
import Card from '../Organisms/Card/Card';
import '../hoja-estilos/Index1.css';

const Index1 = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <div className="imagenContainer">
                    <ElementImg src="src/Components/imagenes/d1.jpg" />
                </div>
                <div className="descripcion">
                    <ElementP
                        parrafo="Para las escenas que muestran vastos campos de maíz en Interstellar, Christopher Nolan decidió cultivar maíz real en lugar de depender de CGI. 
                                El equipo de producción cultivó 500 acres de maíz, lo que no solo resultó en imágenes impresionantes y realistas, sino que también fue más económico. 
                                Después de filmar, el maíz fue cosechado y vendido, y las ganancias se destinaron a cubrir los costos de producción. Este enfoque práctico no solo 
                                enriqueció la autenticidad visual de la película, sino que también demostró la dedicación de Nolan a los detalles prácticos."
                    />
                </div>
                <div className="info">
                    <Card className="card"
                      text="Inspiración y Practicidad"
                      parr="Nolan se inspiró en Zack Snyder, quien había cultivado maíz para Man of Steel. Nolan quería evitar el uso de CGI y prefería efectos prácticos, lo que lo llevó a plantar un campo de maíz considerable para Interstellar. Esta decisión agregó autenticidad a la película y ayudó a sumergir al público en su mundo"
                      link="https://techloop360.com/christopher-nolan-cornfield/"
                    />
                    <Card className="card"
                    text="Empresa Rentable"
                    parr="El maíz cultivado para la película no solo cumplió su propósito durante la producción, sino que también resultó ser una empresa rentable. El maíz cosechado se vendió, generando ingresos significativos. Esta medida demostró la ingeniosidad de Nolan en la gestión de los costos de producción mientras mantenía altos estándares visuales"
                    link="https://www.independent.co.uk/arts-entertainment/films/news/interstellar-christopher-nolan-started-a-lucrative-side-business-selling-corn-grown-on-set-9822607.html"
                    />
                    <Card className="card"
                    text="Diseño de Set Realista"
                    parr="La elección de plantar campos de maíz reales permitió escenas más dinámicas y atractivas, ya que los actores podían interactuar con un entorno tangible. Este enfoque mejoró la narración de la película al proporcionar un telón de fondo creíble e inmersivo para la narrativa"
                    link="https://techloop360.com/christopher-nolan-cornfield/"
                    />
                </div>
            </div>
        </>
    );
}

export default Index1;
