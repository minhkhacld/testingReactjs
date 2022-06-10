import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
// import routes from './app-routes';
import { Home, Detail } from './pages/index';
import { ColCenter } from './components/utils/custom_tag';
import Header from './components/header/header';

const Content = ({ user }) => {

  return (
    <ColCenter className="app-container">
      {
        user &&
        <Header />
      }
      <Routes>
        {/* {
        routes.map(({ path, element }, index) => {
          console.log(element);
          return (
            <Route path={path} element={element} key={index} />
          )
        })
      } */}

        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ColCenter >

  );
}

export default Content
