import React from 'react';
import Link from './components/link'

const Footer = () => (
<>
  <div className="global-footer">
    {Link("http://library.city.urayasu.chiba.jp/index.html","ホーム")}
    {Link("http://library.city.urayasu.chiba.jp/others/sitemap/index.html#sitemap_link","リンク")}
    {Link("http://library.city.urayasu.chiba.jp/opac/main_menu/index.html","蔵書検索")}
    {Link("http://opac.city.urayasu.chiba.jp/opw/OPW/OPWMESS.CSP?","カレンダー")}
    {Link("http://library.city.urayasu.chiba.jp/others/sitemap/index.html","サイトマップ")}
    {Link("http://library.city.urayasu.chiba.jp/about/contact_us/index.html","問い合わせ")}
  </div>
  <address>Copyright (C) 浦安市立中央図書館 〒279-0004 千葉県浦安市猫実1-2-1 047-352-4646</address>
</>
)
export default Footer
