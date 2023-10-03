import Image from "next/image"
import Layout from "../components/Layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, guitar LA, tienda de música'}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}> 
          <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={1000} height={800} />
          <div>


            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien massa, eleifend et felis sit amet, luctus fermentum velit.
              Fusce volutpat nisl elit, in porttitor risus feugiat et. Morbi sed hendrerit sapien. Nunc sit amet nunc mi. Suspendisse eu est sed
              felis ullamcorper bibendum id at orci. Nunc fermentum pellentesque leo eu hendrerit. Vivamus tincidunt, risus ac dapibus scelerisque,
              eros ex varius metus.
            </p>
            <p>Curabitur varius erat nec lacus posuere venenatis. Etiam placerat, dolor ac mollis fermentum, tellus eros molestie mi, non aliquet lorem mauris
              a enim. Aliquam erat volutpat. Etiam egestas ultricies scelerisque. Donec ac laoreet urna, gravida tristique felis. Quisque rhoncus nisl vitae
              tortor congue pellentesque. Suspendisse ultricies, velit sed maximus bibendum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
