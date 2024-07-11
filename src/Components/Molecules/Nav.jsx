import Href from "../Atoms//Href/Href";
import '../hoja-estilos/Nav.css'

const Nav = () => {
    return (
        <div className="contentNav">
            <nav className="navBar">

                <Href link="https://www.filmaffinity.com/es/film704416.html" cont="Opiniones" />

                <Href link="https://www.mubis.es/comunidad/sack13/fotos/mi-critica-de-interstellar-un-final-estupendo-para-una-obra-maravillosa" cont="Valoraciones" />

                <Href link="https://www.youtube.com/watch?v=SNq3vl8Ny-E" cont="Resumenes" />

                <Href link="https://www.youtube.com/watch?v=LYS2O1nl9iM" cont="Ver trailer" />
            </nav>
        </div>
    );
};

export default Nav;
