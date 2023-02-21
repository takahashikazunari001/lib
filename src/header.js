import React from 'react';

import IMG from './components/img';

const sizexl = () =>  document.body.style.fontSize = "150%"
const sizel = () =>  document.body.style.fontSize = "120%"
const sizem = () =>  document.body.style.fontSize = "100%"

const Header = () => (
  <div className="header">
    <IMG imgSrc="./images/library_logo.gif" imgAlt="浦安市立図書館" imgTitle="浦安市立図書館" />

    <div className="font-size">
      <font style={{color:"black", paddingRight:"1rem", fontWeight: "bold", textAlign:"center"}}>文字の大きさ</font>
      <input type="button" style={{width:"3rem"}} onClick={sizem} value="標準" />
      <input type="button" style={{width:"3rem"}} onClick={sizel} value="大" />
      <input type="button" style={{width:"3rem"}} onClick={sizexl} value="最大" />
    </div>
{/* 
    <form action="http://www.google.com/cse" id="cse-search-box">
        <input type="hidden" name="cx" value="003543773643020055037:jqtvqg2xkw0" />
        <input type="hidden" name="ie" value="UTF-8" />
        <input type="text" name="q" size="31" />
        <input type="submit" name="sa" value="サイト内検索" />
    </form>

    <script type="text/javascript" src="http://www.google.com/cse/brand?form=cse-search-box&lang=ja"></script>
*/}

</div>
)

export default Header
