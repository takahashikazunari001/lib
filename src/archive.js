import React from 'react';

const mapArchive = (archiveName,archiveUrl,archiveAlt) => {
  return (
    <map name={archiveName}>
      <area shape="rect" coords="1,1,514,268" href={archiveUrl} target="_blank" alt={archiveAlt} />
    </map>
  )
}

const Archive = () => (
  <div>
    {mapArchive("archive","http://urayasu-shinsai-archive.city.urayasu.lg.jp","浦安震災アーカイブ")}
    {mapArchive("link1","http://library.city.urayasu.chiba.jp/annex/annex/index.html","図書館だより")}
    {mapArchive("link2","http://library.city.urayasu.chiba.jp/service/service/index.html","サービス・利用案内")}
    {mapArchive("link3","http://library.city.urayasu.chiba.jp/service/request/index.html#デジ","国会図書館デジタル化資料送信サービス")}
    {mapArchive("link4","http://library.city.urayasu.chiba.jp/about/chuo_close/index.html#20190301","図書館通信")}
    {mapArchive("link5","http://library.city.urayasu.chiba.jp/event/story/index.html","おはなし会")}
    {mapArchive("link6","http://library.city.urayasu.chiba.jp/event/oyako/index.html","親子で楽しむ絵本講座")}
    {mapArchive("link7","http://library.city.urayasu.chiba.jp/service/kids/index.html","子どもへのサービス")}
    {mapArchive("link8","http://library.city.urayasu.chiba.jp/event/picturebook/index.html","えほんのじかん")}
    {mapArchive("link9","http://library.city.urayasu.chiba.jp/event/science/index.html","『科学で遊ぼう』")}
    {mapArchive("link10","http://library.city.urayasu.chiba.jp/event/yomikikase/index.html","よみきかせ入門講座")}
    {mapArchive("link11","http://library.city.urayasu.chiba.jp/event/culture/index.html","図書館カルチャー")}
    {mapArchive("link12","http://library.city.urayasu.chiba.jp/news/news/index.html#20150712.html","5,000万冊達成記念品贈呈式")}
    {mapArchive("link13","http://library.city.urayasu.chiba.jp/news/news/index.html#20160914","創業支援セミナー")}
    {mapArchive("link14","http://library.city.urayasu.chiba.jp/news/news/index.html#20171222","としょかんで楽しむお正月")}
    {mapArchive("link15","http://library.city.urayasu.chiba.jp/event/club/index.html#20151215","図書館クラブ")}
    {mapArchive("link16","http://library.city.urayasu.chiba.jp/event/science/index.html#20151215","科学で遊ぼう")}
    {mapArchive("link17","http://library.city.urayasu.chiba.jp/event/kidsbook/index.html#20151215","子どもの本の講座 ")}
    {mapArchive("link18","http://library.city.urayasu.chiba.jp/event/otanoshimi/index.html","おたのしみ会 ")}
    {mapArchive("link19","http://library.city.urayasu.chiba.jp/special/special/index.html","今月の特集")}
    {mapArchive("link20","http://library.city.urayasu.chiba.jp/special/202007/u-libraryinhome.html","おうちで中央図書館を探検！ ")}
    {mapArchive("mobile","http://library.city.urayasu.chiba.jp/service/search/index.html","ケータイで検索！")}
    {mapArchive("special","https://opac.city.urayasu.chiba.jp/opw/OPS/OPSINDEX.CSP?","スマホ対応ＯＰＡＣ")}
    {mapArchive("event1","http://library.city.urayasu.chiba.jp/news/news/index.html#20230128","としょかんのちいさなおたのしみ会")}
    {mapArchive("event2","http://library.city.urayasu.chiba.jp/event/science/index.html","科学で遊ぼう")}
    {mapArchive("event3","http://opac.city.urayasu.chiba.jp/opw/OPW/OPWCATEGLIST2.CSP?","ステイホームを楽しもう！")}
    {mapArchive("event4","http://library.city.urayasu.chiba.jp/event/opac/index.html","図書館利用講座")}
    {mapArchive("event5","http://library.city.urayasu.chiba.jp/event/seminar/index.html","図書館講演会")}
    {mapArchive("event6","http://library.city.urayasu.chiba.jp/service/kids/index.html#読書通帳","読書通帳")}
    {mapArchive("event7","http://library.city.urayasu.chiba.jp/news/news/index.html#20221213","読書通帳冬のプレゼント")}
    {mapArchive("event8","http://library.city.urayasu.chiba.jp/event/bookbinding/index.html","製本ワークショップ")}
    {mapArchive("chuo_close","http://library.city.urayasu.chiba.jp/about/chuo_close/index.html","中央図書館休館関連情報")}
    {mapArchive("renew","http://library.city.urayasu.chiba.jp/news/news/index.html#20200612","サービスの一部再開")}
    {mapArchive("post","http://library.city.urayasu.chiba.jp/news/news/index.html#20181026","中央図書館ブックポスト使用休止")}
    {mapArchive("park","http://library.city.urayasu.chiba.jp/news/news/index.html#20200322","駐車場・駐輪場のご案内")}
    {mapArchive("link","http://library.city.urayasu.chiba.jp/service/request/index.html#link","リンク集")}
    {mapArchive("20210730","http://library.city.urayasu.chiba.jp/news/news/index.html#20210730","推薦図書リストよむよむ")}
    {mapArchive("20210403","http://library.city.urayasu.chiba.jp/news/news/index.html#20210403","図書館の利用制限の一部緩和について")}
    {mapArchive("20210417","http://library.city.urayasu.chiba.jp/news/news/index.html#20210417","図書館の利用制限の一部変更について")}
    {mapArchive("20220120-1","http://library.city.urayasu.chiba.jp/news/news/index.html#20220120-1","図書館の利用制限の一部制限について")}
    {mapArchive("20220423","http://library.city.urayasu.chiba.jp/news/news/index.html#20220423","図書館の利用制限の緩和について")}
    {mapArchive("natsuowa","http://library.city.urayasu.chiba.jp/news/news/index.html#20220810","夏オワ新書")}
    {mapArchive("osusume","http://library.city.urayasu.chiba.jp/news/news/index.html#20221001","展示「あなたのおすすめ本を教えてください　2022秋の読書週間　in URAYASU LIBRARY」について")}
    {mapArchive("UrayasuQuiz","http://library.city.urayasu.chiba.jp/Quiz/index.html","浦安クイズ")}
    {mapArchive("timetrip","http://library.city.urayasu.chiba.jp/teiten/teiten/photo-map1.html","定点撮影写真で浦安タイムトリップ")}
  </div>
)

export default Archive
