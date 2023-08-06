import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Header({producto}) {

    const router = useRouter();
    let consulta;

    const handleSubmit = (e) => {
        consulta=e.target[0].value;
        e.preventDefault();
        router.push(`/listado?producto=${consulta}`);
    };

    return (
        <>
            <header className="color_header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-block d-md-flex justify-content-center align-items-center">
                            <Link className="d-flex justify-content-center" href={'/'}>
                                <Image src="/img/logo.png" width={200} height={50} alt='imagen logotipo' className="logo my-3" /> 
                            </Link>
                            <form onSubmit={handleSubmit} >
                                <div className="input-group my-3 mx-0 mx-md-3 mx-lg-4 mx-xl-5">
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder={producto ||"Nombre producto"} 
                                    aria-describedby="button-addon2"
                                    />
                                    <button className="btn btn-outline-secondary" 
                                    type="submit" 
                                    id="button-addon2"
                                    >
                                        <Image src="/img/buscar.svg" width={30} height={20} alt='imagen buscar' className="imgBuscar" /> 
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

