import '../../hoja-estilos/Main.css';
import Card from "../Card/Card";

const Main = () => {
    return (
        <div className="contenedor sombra cards">
            <Card
                src="src/Components/imagenes/d1.jpg" 
                text="Cosechas Reales" 
                parr="En Interstellar, incluso los campos de maíz tienen una historia interesante." 
                link="/Index1"
            />
            <Card
                src="src/Components/imagenes/d2.jpg" 
                text="Asesoría Científica de Kip Thorne" 
                parr="¿Sabías que Interstellar contó con la colaboración de un renombrado físico teórico?." 
                link="/"
            />
            <Card
                src="src/Components/imagenes/d3.jpg" 
                text="Simulación del Agujero Negro" 
                parr="La creación del agujero negro Gargantúa en Interstellar no solo impresionó a las audiencias, sino que también contribuyó al conocimiento científico." 
                link="/"
            />
            <Card
                src="src/Components/imagenes/d4.jpg" 
                text="Una producción ajetreada" 
                parr="¿Sabias que la pelicula Interstellar casi no llegaba a nuestras pantallas?" 
                link="/"
            />
            <Card
                src="src/Components/imagenes/d5.jpg" 
                text="Algunos Detalles Técnicos" 
                parr="¿Sabías que la película no solo cautivó por su historia, sino también por su increíble realización técnica?" 
                link="/"
            />
            <Card
                src="src/Components/imagenes/d6.jpg" 
                text="Las curiosidades de Nolan" 
                parr="¿Sabías que Christopher Nolan no solo se enfrentó a interminables discusiones con el físico Kip Thorne, sino que también tomó decisiones curiosas y únicas antes y durante el rodaje?" 
                link="/"
            />           
        </div>
    );
}
export default Main;
