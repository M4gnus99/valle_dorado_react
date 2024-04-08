/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import lastProductImage from '../assets/images/last-product.jpg'
import { Link } from 'react-router-dom';
function LastProduct() {
   const [lastProduct, setlastProduct] = useState([])
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   useEffect(() => {
      const getData = async () => {
         try {
            setIsLoading(true);
            const res = await fetch('http://localhost:3000/api/products');
            const data = await res.json();

            let dataLastPage = await fetch('http://localhost:3000/api/products' + '?page=' + data.info.pages)
            dataLastPage = await dataLastPage.json();

            let lastProductId = dataLastPage.results[dataLastPage.results.length - 1].id;

            let lastProductDetail = await fetch('http://localhost:3000/api/products/' + lastProductId)
            lastProductDetail = await lastProductDetail.json()

            setlastProduct(lastProductDetail.results);
            setError(null);
         } catch (error) {
            setError(error.message);
            console.log(error.message);
         } finally {
            setIsLoading(false);
         }
      };
      getData();
   }, []);
   return (
      <>
         <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
               <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">Último producto registrado</h5>
               </div>
               <div className="card-body">
                  <div className="text-center">
                     <img className="img-fluid img-thumbnail w-50 mb-4" src={'http://localhost:3000'+ lastProduct.images || lastProductImage} alt="imagen de ultimo producto "></img>
                  </div>
                  <div className="mt-3">
                  <p>Destino: {lastProduct.destination}</p>
                  <p>Salida desde: {lastProduct.city_depart}</p>
                  <p>Cant. Personas: {lastProduct.group_size}</p>
                  <p>Fecha Inicio: {lastProduct.start_date}</p>
                  </div>
                  <Link className="btn btn-danger" rel="nofollow" to={'/products/'+lastProduct.id}>Ver producto</Link>
               </div>
            </div>
         </div>
      </>
   )
}
export default LastProduct