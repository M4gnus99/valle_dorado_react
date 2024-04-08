import './assets/css/app.css'
import Home from './componetns/Home'
import Users from './componetns/Users'
import Products from './componetns/Products'
import { Routes, Route } from 'react-router-dom'
import Error404 from './componetns/Error404'
import ProductDetail from './componetns/ProductDetail'
import UserDetail from './componetns/UserDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/users/:id' element={<UserDetail/>}/>
      </Routes>
    </>
  )
}
export default App
