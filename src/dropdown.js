import React from 'react';

const Dropdown = () => (
  <div className="dropDown">
    <ul>
      <li><a href="http://library.city.urayasu.chiba.jp/index.html">ホーム</a></li>
      <li><a href="http://opac.city.urayasu.chiba.jp/opw/OPW/OPWSRCH1.CSP">蔵書検索</a>
        <ul>
          <li><a href="http://library.city.urayasu.chiba.jp/opac/main_menu/index.html">Web-OPACメニュー</a></li>
          <li><a href="http://opac.city.urayasu.chiba.jp/opw/OPS/OPSINDEX.CSP" target="_blank">スマートフォン対応検索画面</a></li>
          <li><a href="http://library.city.urayasu.chiba.jp/service/search/index.html">検索・予約・リクエスト</a></li>
        </ul>
      </li>
      <li><a href="http://library.city.urayasu.chiba.jp/news/news/index.html">ＮＥＷＳ</a></li>
      <li><a href="http://library.city.urayasu.chiba.jp/service/service/index.html">サービス・利用案内</a>
        <ul>
          <li><a href="http://library.city.urayasu.chiba.jp/service/request/index.html">レファレンスサービス</a></li>
          <li><a href="http://library.city.urayasu.chiba.jp/service/kids/index.html">子どもへのサービス</a></li>
          <li><a href="http://library.city.urayasu.chiba.jp/service/handicap/index.html"><font size="-1">障がい者サービス</font></a></li>
          <li><a href="http://library.city.urayasu.chiba.jp/service/basic/bousaiwifi.html">J:COM 防災Wi-Fi</a></li>
          <li><a href="http://library.city.urayasu.chiba.jp/service/meikai/index.html">他の図書館との連携</a></li>
          <li><a href="http://library.city.urayasu.chiba.jp/service/basic/shigai.html">市外にお住まいの方へ</a></li>
        </ul>	
      </li>
      <li><a href="http://library.city.urayasu.chiba.jp/about/contact_us/index.html">アクセス・施設案内</a>
        <ul>
          <li><a href="http://library.city.urayasu.chiba.jp/about/map/index.html">図書館マップ</a></li>
          <li><a href="http://library.city.urayasu.chiba.jp/service/mare/index.html">図書サービスコーナー</a></li>
          <li><a href="http://library.city.urayasu.chiba.jp/service/basic/desk.html">学習室・調査閲覧席</a></li>
          <li><a href="http://library.city.urayasu.chiba.jp/about/lounge/index.html">ラウンジ</a></li>
          <li><a href="http://library.city.urayasu.chiba.jp/about/inspection/index.html">視察・見学希望の方へ</a></li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Dropdown
