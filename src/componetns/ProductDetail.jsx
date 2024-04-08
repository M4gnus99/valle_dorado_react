import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import imagenPrueba from "../assets/images/last-product.jpg"


function ProductDetail() {
   const { id } = useParams(); //se obtiene el id del url
   const [product, setProduct] = useState({});
   useEffect(() => {
      fetch(`http://localhost:3000/api/products/${id}`)
         .then(response => response.json())
         .then(data => {
            console.log(data.results);
            setProduct(data.results);
         })
         .catch(error => {
            console.error(error);
         });
   }, [id]);

   return (
      <>
         <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
               <div className="container mt-4">
                  <h1 className="text-center">{product.length != 0  ? product.destination : 'Producto no encontrado'}</h1>
                  <div className="row mt-4">
                     <div className="col-md-6 offset-md-3 text-center">
                     <img src={`http://localhost:3000${product.images && product.images.length > 0 ? product.images[0] : imagenPrueba}`} alt="Imagen representativa" className="img-fluid" />
                     </div>
                  </div>
                  <div className="row mt-4 justify-content-around">
                     <div className="col-md-3">
                        <h4>Incluye:</h4>
                        <ul>
                           {product.includes && product.includes.map((include, index) => (
                              <li key={index}>{include}</li>
                           ))}
                        </ul>
                     </div>
                     <div className="col-md-3">
                        <h4>Información Adicional:</h4>
                        <p><strong>Precio:</strong> {product.price}</p>
                        <p><strong>Provincia de salida:</strong> {product.city_depart}</p>
                        <p><strong>Cantidad de personas:</strong> {product.group_size}</p>
                        <p><strong>Fecha de inicio:</strong> {product.start_date}</p>
                        <p><strong>Fecha de fin:</strong> {product.finish_date}</p>
                     </div>
                  </div>
               </div>
               <Footer />
            </div>
         </div>
      </>
   );
}

export default ProductDetail;
