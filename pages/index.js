import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Layout>
        <div className='container'>
          <div className='row'>
            <div className='col-12 d-flex align-items-center justify-content-center inicio'>
            <div className="card">
              <div className="card-body">
                  <p className="mb-0 titulo">Realiza tu búsqueda en la barra </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
