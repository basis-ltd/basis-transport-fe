import Login from '@/pages/auth/Login';
import Home from '@/pages/common/Home';
import UserDashboard from '@/pages/dashboard/UserDashboard';
import TripsPage from '@/pages/trips/TripsPage';
import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      {/*Home*/}
      <Route path="/" element={<Home />} />

      {/**
       * AUTH
       */}
      <Route path="/auth">
        <Route path="login" element={<Login />} />
      </Route>

      {/**
       * DASHBOARD
       */}
      <Route path="/dashboard">
        <Route path="" element={<UserDashboard />} />
      </Route>

      {/**
       * TRIPS
       */}
      <Route path="/trips">
        <Route path="" element={<TripsPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
