import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'
import Image from 'next/image'

function Detalle() {
  const router= useRouter();
  const parametro= router.query.id;
  const producto = router.query.producto;
  const [detalle, setDetalle] = useState({});
  const volver=`/listado?producto=${producto}`

  const consultarAPI = async (valor) =>{
    try{
      const url = `https://api.mercadolibre.com/items?ids=${valor}`
      const answer = await fetch(url);
      const result = await answer.json();
      setDetalle(result[0].body);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  useEffect(() => {
    consultarAPI(parametro)
  }, [])

  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-12 mt-5'>
          <Link href={volver}>Volver</Link>
          </div>
          <div className='col-12 d-block d-lg-flex justify-content-center align-items-center detalle mt-5 pb-3'>
            <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center pt-5'>
              <Image src={detalle?.pictures?.[0]?.url} width={250} height={250} alt='imagen buscar' decoding="async" className="imgBuscar img-fluid" />
            </div>
            <div className='col-12 col-lg-6'>
              <p className='status'>{(detalle?.condition==='new')?"Nuevo":"Usado"}</p>
              <h2 className='titulo'>{detalle?.title}</h2>
              <div className="d-flex justify-content-start align-items-center">
                <p className='precio_original'>{(detalle?.original_price===null)?'':`$${detalle?.original_price}`}</p>
                <p className='ps-3 oferta'>{(detalle?.original_price===null)?'':`Oferta`}</p>
              </div>
              
              <p className='precio'>${detalle?.price}</p>
              <p></p>
            </div>
          </div>
          <div className='col-12 detalle pb-5'>
          <div className="card">
            <div className="card-header">
              <p className='mb-0'>Descripción</p>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{`${detalle?.attributes?.[0]?.name} : ${detalle?.attributes?.[0]?.value_name}`}</p>
                <p>{`${detalle?.attributes?.[1]?.name} : ${detalle?.attributes?.[1]?.value_name}`}</p>
                <p>{`${detalle?.attributes?.[2]?.name} : ${detalle?.attributes?.[2]?.value_name}`}</p>
                <p>{`${detalle?.attributes?.[3]?.name} : ${detalle?.attributes?.[3]?.value_name}`}</p>
                <p>{`${detalle?.attributes?.[4]?.name} : ${detalle?.attributes?.[4]?.value_name}`}</p>
              </blockquote>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Detalle

