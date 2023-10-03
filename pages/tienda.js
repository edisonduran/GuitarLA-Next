import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies"
import Layout from "../components/Layout"
import Guitarra from "../components/guitarra"
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
import styles from '../styles/grid.module.css'


import ListadoGuitarras from "../components/guitarra"

export default function Tienda({ guitarras }) {

  return ( 
    <Layout
      title={'Tienda Virtual'}
      description={'Tienda virtual, venta de guitarras, instrumentos, gutar LA'}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}> 
          {guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>

      </main>
    </Layout>
  )
}

export async function getServerSideProps() {

  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()

  return {
    props: { guitarras } // will be passed to the page component as props
  }
}


/*export async function getStaticProps() {

  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()

  return {
    props: { guitarras } // will be passed to the page component as props
  }
}
*/

