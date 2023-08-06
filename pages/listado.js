import Link from 'next/link'
import Layout from '../components/layout'
import {useState, useEffect } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'

function Listado() {
  const [datos, setDatos] = useState([]);
  const router= useRouter();
  const consulta = router.query.producto;

  const consultarAPI = async (valor) =>{
      try{
          const url = `https://api.mercadolibre.com/sites/MLA/search?q=${valor}`
          const answer = await fetch(url);
          const result = await answer.json();
          console.log(result)
          if (result.results.length === 0) {
            router.push('/404');
          }else{
            setDatos(result.results);
          }
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }
  useEffect(() => {
    consultarAPI(consulta)
  }, [consulta])


  return (
    <Layout producto={consulta}>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-12 my-5 d-flex justify-content-center">
            <div className="listado">
              {
                datos.map(item=>{
                  return(   
                    <div key={item.id} className="card">
                      <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                          <Image src={item?.thumbnail} width={100} height={10} alt='imagen buscar' className="img-fluid" /> 
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title titulo">{item?.title}</h5>
                            <p className="card-text precio">$ {item?.price}</p>
                            <p className="card-text status">{(item?.condition==='new')?"Nuevo":"Usado"}</p>
                            <div className="d-grid gap-2 col-6 mx-auto">
                              <button className="btn btn-outline-warning" type="button">
                                <Link className='boton' href={`/detalle?id=${item.id }&producto=${consulta}`} >Detalle</Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                  )    
                })
              }
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Listado

