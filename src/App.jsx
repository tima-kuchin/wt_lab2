import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style

import React from 'react';
import './App.css'
import { randomWiki } from './assets/wiki.js'
import Container from './components/Container/Container'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content.jsx';
import Footer from "./components/Footer/Footer.jsx";


function App() {
  const handleClick = () => {
    console.log('Функция заглушка сработала');}

  const randomClick = () => {
    window.open(randomWiki, '_blank');
  }

  return (
    <Container className='container'>
      <Header>
        <Button onClick={handleClick} className='headerButton'>Главная</Button>
        <Button onClick={handleClick} className='headerButton'>Обо мне</Button>
        <Button onClick={randomClick} className='headerButton'>Мне повезет</Button>
      </Header>
      <Container className='mainContainer'>
        <Sidebar>
          <Button onClick={handleClick} className='sidebarButton'>Лабараторная 1</Button>
          <Button onClick={handleClick} className='sidebarButton'>Лабараторная 2</Button>
        </Sidebar>
        <Content>
          <h1>Hello world</h1>
        </Content>
      </Container>
      <Footer>{(new Date()).getFullYear()} @Права типа защищены</Footer>
    </Container>
  );
} 

export default App
