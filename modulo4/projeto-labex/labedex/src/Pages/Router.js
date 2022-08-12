import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import { AdminHomePage } from './AdminHomePage';
import { ApplicationFormPage } from './ApplicationFormPage';
import {HomePage} from './Home/HomePage'
import {CreatTripPage} from './CreateTripPage'; // 
import { ListTripsPage } from './ListTripsPage';
import { LoginPage } from './LoginPage';
import { TripDetailsPage } from './TripDetailsPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path ="/admin" element={<AdminHomePage/>} />
        <Route path ="/paginadeformulario" element={<ApplicationFormPage/>} />
        <Route path ="/criarviagem" element={<CreatTripPage/>} />
        <Route path ="/listadeviagem" element={<ListTripsPage/>} />
        <Route path ="/paginadelogin" element={<LoginPage/>} />
        <Route path ="/detalhedaviagem" element={<TripDetailsPage/>} />

      </Routes>
    </BrowserRouter>





  );
}

export default Router; 