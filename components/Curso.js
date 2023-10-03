import styles from '../styles/curso.module.css'


export default function Curso({ curso }) {

    const { contenido, imagen, titulo } = curso.attributes;
    const urlImagen = imagen.data.attributes.url;

    const sectionStyle = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url(${urlImagen})`,
    };

    return (
        <section style={sectionStyle} className={styles.curso}>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p>{contenido}</p>
                </div>
            </div>
        </section>  
    );
}
