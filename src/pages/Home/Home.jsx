import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Presentation from '../../components/presentation/presentation'
import './home.scss';

export default function Portfolio() {
  return (
    <div>
      <Header />
      <Presentation />
      <Footer />
    </div>
  );
}
