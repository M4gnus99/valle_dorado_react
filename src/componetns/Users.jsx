import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
function Users() {
   const [users, setUsers] = useState([]);
   const [usersCount, setUsersCount] = useState(null);

   useEffect(() => {
      console.log('Se montó el componente con éxito!');
      fetch('http://localhost:3000/api/users')
         .then(response => response.json())
         .then(data => {
            setUsers(data.results);
            console.log(data.info.count); // Verifica los datos recibidos de la API
            setUsersCount(data.info.count)
         })
         .catch(error => {
            console.error(error);
         });
   }, [])
   return (
      <>
         <div className="d-flex">
            <Sidebar></Sidebar>
            <div className="d-flex flex-column mt-4">
               <div id="content">
                  <div className="container-fluid">
                     <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                           <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                 <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Usuarios en base de datos</div>
                                 {usersCount === 0
                                    ? <div className="h5 mb-0 font-weight-bold text-gray-800"><p>Cargando...</p></div>
                                    : <div className="h5 mb-0 font-weight-bold text-gray-800"><p>{usersCount}</p></div>}
                              </div>
                              <div className="col-auto">
                                 <i className="bi bi-person-fill fa-2x text-gray-300"></i>

                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
               <div className="ml-5 mt-5">
                  <h3>Tabla de Usuarios</h3>
                  <table className="table w-100 text-center">
                     <thead>
                        <tr>
                           <th scope="col">#</th>
                           <th scope="col">Usuario</th>
                           <th scope="col">Email</th>
                           <th scope="col">Nombre</th>
                           <th scope="col">Apellido</th>
                           <th scope="col">Accion</th>
                        </tr>
                     </thead>
                     <tbody>
                        {console.log(users)}
                        {users.map((user) => (
                           <tr key={user.id}>
                              <th scope="row">{user.id}</th>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>{user.name}</td>
                              <td>{user.surname}</td>
                              <td><Link to={'/users/'+user.id}><i className="bi bi-search"></i></Link></td>
                           </tr>
                        ))}
                     </tbody>
                  </table>

               </div>
               <Footer></Footer>
            </div>
         </div>
      </>
   )
}
export default Users