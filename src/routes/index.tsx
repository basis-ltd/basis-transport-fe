import Login from '@/pages/auth/Login';
import Home from '@/pages/common/Home';
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
    </Routes>
  );
};

export default Router;
