/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userImage from '../assets/images/user-image.jpg'
function LastUser() {
   const [lastUser, setlastUser] = useState([])
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   useEffect(() => {
      const getData = async () => {
         try {
            setIsLoading(true);
            const res = await fetch('http://localhost:3000/api/users');
            const data = await res.json();

            let dataLastPage = await fetch('http://localhost:3000/api/users' + '?page=' + data.info.pages)
            dataLastPage = await dataLastPage.json();

            let lastUserId = dataLastPage.results[dataLastPage.results.length - 1].id;

            let lastUserDetail = await fetch('http://localhost:3000/api/users/' + lastUserId)
            lastUserDetail = await lastUserDetail.json()

            setlastUser(lastUserDetail.results);
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
                  <h5 className="m-0 font-weight-bold text-gray-800">Último usuario registrado</h5>
               </div>
               <div className="card-body">
                  <div className="text-center">
                     <img className="img-fluid img-thumbnail w-50 mb-4" src={'http://localhost:3000' + lastUser.avatar || userImage} alt="imagen de ultimo usuario registrado"></img>
                  </div>
                  <div className="mt-3">
                     <p>Usuario: {lastUser.username}</p>
                     <p>Email: {lastUser.email}</p>
                     <p>Nombre: {lastUser.name}</p>
                     <p>Apellido: {lastUser.surname}</p>
                  </div>
                  <Link className="btn btn-danger" rel="nofollow" to={'/users/' + lastUser.id} >Ver usuario</Link>
               </div>
            </div>
         </div>
      </>
   )
}
export default LastUser