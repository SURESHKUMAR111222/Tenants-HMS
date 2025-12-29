import './App.css';
import ListOfTenants from './Components/ListOfTenants';
import Header from './Components/Header';
import Tenantco from './Components/tenantco';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListOfTenants />} />
          <Route path='/tenants' element={<ListOfTenants />} />
          <Route path='/add-tenant' element={<Tenantco />} />
          <Route path='/update-tenant/:id' element={<Tenantco />} />
        </Routes>
      </BrowserRouter>
    </>
  ); 
}

export default App;
