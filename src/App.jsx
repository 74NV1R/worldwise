import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'
import Homepage from './pages/Homepage'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'
import City from './components/City'
import CountryList from './components/CountryList'
import Form from './components/Form'
import { CitiesProvider } from './context/CitiesContext'
import { AuthProvider } from './context/FakeAuthContext'
import ProtectedRoute from './pages/ProtectedRoute'


function App() {



  return (

    <AuthProvider>
      <CitiesProvider>
        <div>

          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="app" element={

                <AppLayout />
              } />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />


              <Route path="app" element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              } >
                <Route index element={<Navigate replace to='cities' />} />
                <Route path="cities" element={<CityList />} />
                <Route path='cities/:id' element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>


            </Routes>
          </BrowserRouter>
        </div>
      </CitiesProvider>
    </AuthProvider>


  )
}

export default App
