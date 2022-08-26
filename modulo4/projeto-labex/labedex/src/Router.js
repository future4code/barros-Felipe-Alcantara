import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import { AdminHomePage } from './Pages/AdminHomePage';
import { ApplicationFormPage } from './Pages/ApplicationFormPage';
import {HomePage} from './Pages/Home/HomePage'
import {CreatTripPage} from './Pages/CreateTripPage'; // 
import { ListTripsPage } from './Pages/ListTripsPage';
import { LoginPage } from './Pages/LoginPage';
import { TripDetailsPage } from './Pages/TripDetailsPage';

export function Router() {
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