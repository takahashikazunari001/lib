import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Header from './header';
import Dropdown from './dropdown';
import Subcontent from './contentsub'
import Maincontent from './contentmain'
import Footer from './footer'
import Archive from './archive';

import './top2.css';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
  <div className="global-wrapper">  
      <Header />
      <Dropdown />
    <div className="global-Content">
      <Subcontent />
      <Maincontent />
    </div>
      <Footer />
  </div>
  <Archive />
  </>
);
reportWebVitals();