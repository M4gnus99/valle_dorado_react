import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import userimage from "../assets/images/user-image.jpg"

function UserDetail() {
   const { id } = useParams(); //se obtiene el id del url
   const [user, setUser] = useState({});
   useEffect(() => {
      fetch(`http://localhost:3000/api/users/${id}`)
         .then(response => response.json())
         .then(data => {
            console.log(data.results);
            setUser(data.results);
         })
         .catch(error => {
            console.error(error);
         });
   }, [id]);
   return (
      <>
         <div id="wrapper">
            <Sidebar />
            <div className="row d-flex flex-column col-6 justify-content-center">
               <div className="container mt-4 ">
                  <Link to="/users">
                     <p> <i className="bi bi-arrow-left"></i> Volver</p>
                  </Link>
                  <h1 className="text-center">{user ? user.name : 'Usuario no encontrado'} {user.surname}</h1>
                  <div className="row mt-4">
                     <div className="col-md-6 offset-md-3 text-center">
                        <img src={'http://localhost:3000' + user.avatar || userimage} alt="Imagen representativa" className="img-fluid" />
                     </div>

                     <div className="col-md-3">
                        <h4>Información Adicional:</h4>
                        <p><strong>Nombre:</strong> {user ? `${user.name}` : 'Precio no encontrado'}</p>
                        <p><strong>Apellido:</strong> {user ? `${user.surname}` : 'Precio no encontrado'}</p>
                        <p><strong>Usuario:</strong> {user ? user.username : 'Provincia no encontrada'}</p>
                        <p><strong>Email:</strong> {user ? user.email : 'Cantidad no encontrada'}</p>
                        <p><strong>DNI:</strong> {user ? user.dni : 'Cantidad no encontrada'}</p>

                     </div>
                  </div>
               </div>
               <Footer />
            </div>
         </div>
      </>
   )

}
export default UserDetail