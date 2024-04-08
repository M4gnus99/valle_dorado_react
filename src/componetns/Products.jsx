import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom"

function Products() {
   const [products, setProducts] = useState([]);
   const [productsCount, setProductsCount] = useState(null);

   useEffect(() => {
      console.log('Se montó el componente con éxito!');
      fetch('http://localhost:3000/api/products')
         .then(response => response.json())
         .then(data => {
            setProducts(data.results);
            console.log(data.info.count); // Verifica los datos recibidos de la API
            setProductsCount(data.info.count)
         })
         .catch(error => {
            console.error(error);
         });
   }, []);

   return (
      <>
         <div className="d-flex">
            <Sidebar />
            <div className="d-flex flex-column mt-4">
               <div id="content">
                  <div className="container-fluid">
                     <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                           <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                 <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Productos en base de datos</div>
                                 {productsCount === 0
                                    ? <div className="h5 mb-0 font-weight-bold text-gray-800"><p>Cargando...</p></div>
                                    : <div className="h5 mb-0 font-weight-bold text-gray-800"><p>{productsCount}</p></div>}
                              </div>
                              <div className="col-auto">
                                 <i className="bi bi-airplane-fill fa-2x text-gray-300"></i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="ml-5 mt-5">
                  <h3>Tabla de Productos</h3>
                  {products.length != 0 ?
                     <table className="table w-100 text-center">
                        <thead>
                           <tr>
                              <th scope="col">Id</th>
                              <th scope="col">Destino</th>
                              <th scope="col">Provincia salida</th>
                              <th scope="col">Precio</th>
                              <th scope="col">Cant. personas</th>
                              <th scope="col">Fecha inicio</th>
                              <th scope="col">Fecha fin</th>
                              <th scope="col">Acción</th>
                           </tr>
                        </thead>
                        <tbody>
                           {products.map((product) => (
                              <tr key={product.id}>
                                 <th scope="row">{product.id}</th>
                                 <td>{product.destination}</td>
                                 <td>{product.city_depart}</td>
                                 <td>${product.price}</td>
                                 <td>{product.group_size}</td>
                                 <td>{product.start_date}</td>
                                 <td>{product.finish_date}</td>
                                 <td>
                                    <Link to={`/products/${product.id}`}>
                                       <i className="bi bi-search"></i>
                                    </Link>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                     : <p>Cargando....</p>
                  }
               </div>
               <Footer />
            </div>
         </div>
      </>
   );
}

export default Products;
