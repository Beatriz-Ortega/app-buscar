import Layout from '../components/layout'
import Image from 'next/image'

function Pagina404() {
  return (
    <Layout>
    <div className='container'>
      <div className='row'>
        <div className='col-12 d-flex align-items-center justify-content-center error'>
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-center my-5">
                <div className="d-none d-lg-block">
                  <Image src="/img/error-lupa.jpg" width={150} height={150} alt='imagen error' className="my-3" />
                </div>
                <div>
                  <h2 className="mb-3 titulo">No hay publicaciones que coincidan con tu búsqueda. </h2>
                  <ul>
                      <li><p className='mb-0'><b>Revisa la ortografía</b> de la palabra.</p></li>
                      <li><p className='mb-0'>Utiliza <b>palabras más genéricas</b> o menos palabras.</p></li>
                  </ul>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Pagina404
