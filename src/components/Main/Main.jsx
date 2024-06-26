import React from 'react';
import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Modal from '../Modal';
import Home from '../Home';
import Notpage from '../Notpage';


export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Notpage />} />
        <Route path='/category/:page' element={<List />} >
          <Route path='post/:id' element={<Modal />} />
        </Route>
      </Routes>
    </Layout>
  </main>
);
