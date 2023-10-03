import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer" 
 
export default function Layout({children, title='', description=''}) {
  return (    
      <>
        <Head>
            <title>{`Guitar LA - ${title}`}</title>
            <meta name="description" content={description} />
        </Head>
        <Header />
        {children}
        <Footer />
      
      </>     
  )
}
