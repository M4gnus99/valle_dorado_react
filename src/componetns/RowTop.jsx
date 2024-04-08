import { useState, useEffect } from "react"
import LastProduct from "./LastProduct"
import LastUser from "./LastUser"

function RowTop() {
   const [productsCount, setProductsCount] = useState(null);
   const [usersCount, setUsersCount] = useState(null);

   useEffect(() => {
      console.log('Se montó el componente con éxito!');
      // fetch de productos
      fetch('http://localhost:3000/api/products')
         .then(response => response.json())
         .then(data => {
            console.log('Datos recibidos de la API:', data);
            setProductsCount(data.info.count)
         })
         .catch(error => console.error(error));

      // fetch de usuarios
      fetch('http://localhost:3000/api/users')
         .then(response => response.json())
         .then(data => {
            console.log('Datos recibidos de la API:', data);
            setUsersCount(data.info.count)
         })
         .catch(error => console.error(error));
   }, []);

   return (
      <>
         <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
               <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <div className="row">
               <div className="col-md-4 mb-4">
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
               <div className="col-md-4 mb-4">
                  <div className="card border-left-warning shadow h-100 py-2">
                     <div className="card-body">
                        <div className="row no-gutters align-items-center">
                           <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Usuarios registrados
                              </div>
                              {usersCount === 0
                                 ? <div className="h5 mb-0 font-weight-bold text-gray-800"><p>Cargando...</p></div>
                                 : <div className="h5 mb-0 font-weight-bold text-gray-800"><p>{usersCount}</p></div>}
                           </div>
                           <div className="col-auto">
                              <i className="fas fa-user fa-2x text-gray-300"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               <LastProduct></LastProduct>

               <LastUser></LastUser>
            </div>
         </div>
      </>
   )
}
export default RowTop