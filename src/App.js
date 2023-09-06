import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import CatalogScreen from './screens/CatalogScreen'
import FootwearScreen from './screens/FootwearScreen'
import KnitwearScreen from './screens/KnitwearScreen'
import HoodiesScreen from './screens/HoodiesScreen'
import CapScreen from './screens/CapScreen'
import TeesScreen from './screens/TeesScreen'
import TshirtScreen from './screens/TshirtScreen'
import PantsScreen from './screens/PantsScreen'
import ShortScreen from './screens/ShortScreen'
import SetsScreen from './screens/SetsScreen'
import HoodieItemScreen from './screens/item screens/HoodieItemScreen'
import CapItemScreen from './screens/item screens/CapItemScreen'
import KnitwearItemScreen from './screens/item screens/KnitwearItemScreen'
import FootwearItemScreen from './screens/item screens/FootwearItemScreen'
import PantItemScreen from './screens/item screens/PantItemScreen'
import ShortItemScreen from './screens/item screens/ShortItemScreen'
import SetItemScreen from './screens/item screens/SetItemScreen'
import TshirtItemScreen from './screens/item screens/TshirtItemScreen'
import NewArrivalItemScreen from './screens/item screens/NewArrivalItemScreen'
import TeeItemScreen from './screens/item screens/TeeItemScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import SearchScreen from './screens/SearchScreen'

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/catalog' element={<CatalogScreen />} exact />

            <Route
              path='/categoryItems/:category'
              element={<HoodiesScreen />}
            />
            <Route
              path='/categoryItems/new-Arrivals/:id'
              element={<NewArrivalItemScreen />}
            />
            <Route
              path='/categoryItems/hoodies/:id'
              element={<HoodieItemScreen />}
            />
            <Route path='/categoryItems/:category' element={<TshirtScreen />} />
            <Route
              path='/categoryItems/tshirts/:id'
              element={<TshirtItemScreen />}
            />
            <Route path='/categoryItems/:category' element={<ShortScreen />} />
            <Route
              path='/categoryItems/shorts/:id'
              element={<ShortItemScreen />}
            />
            <Route path='/categoryItems/:category' element={<SetsScreen />} />
            <Route path='/categoryItems/sets/:id' element={<SetItemScreen />} />
            <Route path='/categoryItems/:category' element={<PantsScreen />} />
            <Route
              path='/categoryItems/pants/:id'
              element={<PantItemScreen />}
            />
            <Route
              path='/categoryItems/:category'
              element={<KnitwearScreen />}
            />
            <Route
              path='/categoryItems/knitwears/:id'
              element={<KnitwearItemScreen />}
            />
            <Route
              path='/categoryItems/:category'
              element={<FootwearScreen />}
            />
            <Route
              path='/categoryItems/footwears/:id'
              element={<FootwearItemScreen />}
            />
            <Route
              path='/categoryItems/:category/page/:pageNumber'
              element={<CapScreen />}
            />
            <Route path='/categoryItems/caps/:id' element={<CapItemScreen />} />
            <Route path='/categoryItems/:category' element={<TeesScreen />} />
            <Route path='/categoryItems/Tees/:id' element={<TeeItemScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/search' element={<SearchScreen />} />
            <Route path='/search/:keyword' element={<SearchScreen />} />
            <Route path='/' element={<HomeScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
