import './App.css';
import Error404 from './Componentes/Error404';
import Inicio from './Componentes/Inicio';
import InicioPrincipal from './Componentes/InicioPrincipal';
import Nosotros from './Componentes/Nosotros';
import Tienda from './Componentes/Tienda';
import ProductoComprar from './Componentes/ProductoComprar';
import Carrito from './Componentes/Carrito';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataProvider from './Componentes/Context/dataContext';
import Footer from './Componentes/Footer';
import Preguntas from './Componentes/Preguntas';

const App = () => {
  return (
    <div className="contenedor-principal">
      <DataProvider>
        <BrowserRouter>
          <Inicio />
          <main>
            <Routes>
              <Route path='*' element={<Error404 />} />
              <Route path='/' element={<InicioPrincipal />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/tienda' element={<Tienda />} />
              <Route path='/producto/:id' element={<ProductoComprar />} />
              {/* <Route path='/producto' element={<ProductoComprar />} /> */}
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/preguntas' element={<Preguntas />} />
            </Routes>
            <Footer />
          </main>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
