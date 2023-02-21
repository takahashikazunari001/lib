import React from 'react';

import Link from './components/link' //<a href={url} target="_blank">{desc}</a>
import IMG from './components/img';  //<img src={imgSrc} alt={imgAlt} title={imgTitle} />

const Subcontent = () => (
  <div className="global-Subcontent">
    <div className="navi">
{/*
      <ul>
        <li style={{fontWeight:"bold"}}>{Link("http://opac.city.urayasu.chiba.jp/opw/OPW/OPWSRCH1.CSP","本を探す")}</li>
        <form method="GET" name="InForm" action="https://opac.city.urayasu.chiba.jp/opw/OPW/OPWSRCHLIST.CSP">
          <input type="hidden" name="opr(1)" value="OR" />
          <input type="hidden" name="DB" value="LIB" />
          <input type="hidden" name="PID" value="OPWSRCH1" />
          <input type="hidden" name="FLG" value="SEARCH" />
          <input type="hidden" name="MODE" value="1" />
          <input type="hidden" name="SORT" value="-3" />
          <input type="hidden" name="qual(1)" value="MZALL" />
          <input type="text" name="text(1)" size="18" value="" />
          <input type="submit" value="簡易検索" />
        </form>
      </ul>
      <ul>
        <li>{Link("https://opac.city.urayasu.chiba.jp/opw/OPW/OPWNEWBOOK.CSP","新着資料")}</li>
        <li>{Link("https://opac.city.urayasu.chiba.jp/opw/OPW/OPWLOGINTIME.CSP?HPFLG=1&NEXT=OPWUSERINFO&DB=LIB","Ｍｙページ（利用状況確認）")}</li>
        <li>{Link("https://opac.city.urayasu.chiba.jp/opw/OPS/OPSINDEX.CSP","スマートフォン対応検索画面")}</li>
      </ul>
*/}

        <p>{Link("http://opac.city.urayasu.chiba.jp/opw/OPW/OPWSRCH1.CSP","本を探す")}</p>
        <p><form method="GET" name="InForm" action="https://opac.city.urayasu.chiba.jp/opw/OPW/OPWSRCHLIST.CSP">
          <input type="hidden" name="opr(1)" value="OR" />
          <input type="hidden" name="DB" value="LIB" />
          <input type="hidden" name="PID" value="OPWSRCH1" />
          <input type="hidden" name="FLG" value="SEARCH" />
          <input type="hidden" name="MODE" value="1" />
          <input type="hidden" name="SORT" value="-3" />
          <input type="hidden" name="qual(1)" value="MZALL" />
          <input type="text" name="text(1)" size="18" value="" />
          <input type="submit" value="簡易検索" />
        </form></p>
        <p>{Link("https://opac.city.urayasu.chiba.jp/opw/OPW/OPWNEWBOOK.CSP","新着資料")}</p>
        <p>{Link("https://opac.city.urayasu.chiba.jp/opw/OPW/OPWLOGINTIME.CSP?HPFLG=1&NEXT=OPWUSERINFO&DB=LIB","Ｍｙページ（利用状況確認）")}</p>
        <p>{Link("https://opac.city.urayasu.chiba.jp/opw/OPS/OPSINDEX.CSP","スマートフォン対応検索画面")}</p>

      
    </div>
    <div id="navi2">
      {Link("http://library.city.urayasu.chiba.jp/service/service/index.html","利用案内")}
      {Link("http://opac.city.urayasu.chiba.jp/opw/OPW/OPWMESS.CSP?","カレンダー（開館日）")}
      {Link("http://library.city.urayasu.chiba.jp/event/event/index.html","イベント")}
      {Link("http://library.city.urayasu.chiba.jp/annex/annex/index.html","図書館だより")}
      {Link("http://library.city.urayasu.chiba.jp/special/special/index.html","今月の特集")}
      {Link("http://opac.city.urayasu.chiba.jp/opw/OPW/OPWCATEGLIST2.CSP?","司書が薦める本")}
      {Link("http://library.city.urayasu.chiba.jp/about/magazine/index.html","図書館報・図書館概要")}
      {Link("http://library.city.urayasu.chiba.jp/Q&A/qanda/index.html","よくある質問（Ｑ＆Ａ）")}
      {Link("http://library.city.urayasu.chiba.jp/about/contact_us/index.html","問い合わせ先・アクセス")}
      {Link("http://urayasu-shinsai-archive.city.urayasu.lg.jp","浦安震災アーカイブ")}
      {/* 
      {Link("https://twitter.com/UrayasuLibrary","浦安市立図書館公式 twitter")} 
      */}
      <a href="https://twitter.com/UrayasuLibrary" target="_blank">
        <img src="./images/Logo blue.svg" style={{width:"1rem",paddingRight:"0.5rem"}} alt=""/>
        浦安市立図書館公式 twitter
      </a>
    </div>
  </div>
)

export default Subcontent
