import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';
import { OrganizationPage } from './OrganizationPage/OrganizationPage';

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:organization' element={<OrganizationPage />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
};
