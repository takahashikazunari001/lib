import React from 'react';
import Link from './components/link'
import IMG from './components/img';

const siteUrl = `http://library.city.urayasu.chiba.jp/`;

const randumView = (imgArray, imgMax = 2) => {
  const imgRandom = Math.floor(Math.random() * imgMax);
  return <IMG imgSrc={imgArray[imgRandom][0]} imgAlt={imgArray[imgRandom][1]} />
}
// src , alt , usemap
const imgArray1 = [
  [`./specials_images/otanoshimi.gif`,`としょかんのちいさなおたのしみ会`,`#event1`],
  [`./specials_images/Resize/tucho2022.jpg`,`読書通帳冬のプレゼント`,`#event7`]
];
const imgArray2 = [
  [`./images/Quiztop-logo.png`,`浦安クイズ`,`#UrayasuQuiz`],
  [`./specials_images/小説で振り返る100年バナー.jpg`,`小説で振り返る100年`,`#link19`]
];
const imgArray3 = [
  [`./specials_images/被災体験証言記録公開.jpg`,`東日本大震災被災体験証言記録へのリンク`,`#archive`],
  [`./specials_images/urayasu-bnr-275.png`,`浦安震災アーカイブ`,`#archive`]
];
const imgArray4 = [
  [`./specials_images/リンク集.jpg`,`新型コロナ関連リンク集`,`#link`],
  [`./specials_images/タイムトリップバナー.jpg`,`定点撮影写真で浦安タイムトリップ`,`#timetrip`]
];

const osiraseImg = <IMG imgSrc="./images/point_01.gif" imgAlt="おしらせ" />
const kousinImg = <IMG imgSrc="./images/point_01.gif" imgAlt="更新" />
const iventImg = <IMG imgSrc="./images/point_02.gif" imgAlt="イベント" />

const ArticleLink = ({bannar,url,str,day}) => {
  // bannar is "osirase" or "ivent"
  const url1 = `${siteUrl}${url}` 
  const link = <a href={url1} > {str}({day})</a>
  const result = bannar === "ivent"? <p>{iventImg}{link}</p> : <p>{osiraseImg}{link}</p>
  
  return bannar === "" || url === "" || str === "" || day === "" ||  result
}

const Maincontent = () => (
  <div className="global-Maincontent">
      <div className='special-image'>
        {/*
        {randumView(imgArray1)}
        {randumView(imgArray2)}
        {randumView(imgArray3)}
        {randumView(imgArray4)}
        */}
      </div>
      <div className='osiraseIvent'>
        {/* imgSrc,imgAlt,imgTitle */}
      

        <h2>お知らせ・イベント</h2>
        {/* 
        <ArticleLink bannar="osirase" url="news/news/index.html#20220915" str="図書館の利用について（9月15日から）" day="2022/9/15"/>
        <ArticleLink bannar="osirase" url="news/news/index.html#20230202" str="リサイクル本の配布" day="2023/2/2"/>
        <ArticleLink bannar="" url="" str="" day=""/>
        <ArticleLink bannar="kousinImg" url="annex/annex/index.html#01-1" str="図書館だよりを更新しました！" day="2023/1/31" />
        <ArticleLink bannar="osiraseImg" url="news/news/index.html#20230128" str="としょかんのちいさなおたのしみ会開催！" day="2023/1/28" />
        <ArticleLink bannar="kousinImg" url="annex/annex/index.html#01-2" str="分館だよりを更新しました！" day="2023/1/28" />
        <ArticleLink bannar="osiraseImg" url="news/news/index.html#20230115" str="令和５年度図書館会計年度任用職員の募集について" day="2023/1/15" />
        <ArticleLink bannar="iventImg" url="event/movie/index.html" str="映画会情報を更新しました！" day="2023/1/14" />
        <ArticleLink bannar="iventImg" url="event/bookstart/index.html" str="ブックスタート絵本講座情報を更新しました！" day="2023/1/13" />
        <ArticleLink bannar="iventImg" url="event/warabeuta/index.html" str="赤ちゃんと楽しむわらべうたの会情報を更新しました！" day="2023/1/13" />
        <ArticleLink bannar="kousinImg" url="annex/annex/index.html#01-3" str="レファレンス担当よりを更新しました！" day="2023/1/9" />
        <ArticleLink bannar="osiraseImg" url="news/news/index.html#20230104" str="図書館利用券の更新制度について" day="2023/1/4" />
        <ArticleLink bannar="kousinImg" url="annex/annex/index.html#01-2" str="分館だよりを更新しました！" day="2023/1/5" />
        <ArticleLink bannar="iventImg" url="news/news/index.html#20221213" str="読書通帳 冬のプレゼント" day="2022/12/13" />
        <ArticleLink bannar="osiraseImg" url="Quiz/index.html" str="浦安クイズのページに「小学生チャレンジ！うらやすクイズ」を追加しました" day="2022/10/29" />
        <ArticleLink bannar="osiraseImg" url="about/magazine/index.html" str="令和４年度図書館概要を公開しました" day="2022/10/27" />
        <ArticleLink bannar="kousinImg" url="annex/annex/index.html#01-2" str="分館だよりを更新しました！" day="2022/10/11" />
        <ArticleLink bannar="osiraseImg" url="about/magazine/index.html" str="図書館報第94号を公開しました" day="2022/7/29" />
        <ArticleLink bannar="osiraseImg" url="Quiz/index.html" str="浦安クイズのページに「境川クイズ」を追加しました" day="2022/7/27" />
        <ArticleLink bannar="osiraseImg" url="news/news/index.html#20220723" str="推薦図書リストよむよむ2022について" day="2022/7/23" />
        <ArticleLink bannar="osiraseImg" url="teiten/teiten/photo-map1.html" str="「定点撮影写真でタイムトリップ」のページを追加しました。" day="2022/6/24" />
        <ArticleLink bannar="osiraseImg" url="news/news/index.html#20220621" str="寄贈のお願い" day="2022/6/21" />
        <ArticleLink bannar="kousinImg" url="teiten/teiten/s62_index.html" str="浦安アーカイブス（定点撮影）に昭和62年のページを追加しました" day="2022/6/21" />
        <ArticleLink bannar="osiraseImg" url="Quiz/index.html" str="浦安クイズのページに「浦安３択クイズ」を追加しました" day="2022/5/24" />
        <ArticleLink bannar="osiraseImg" url="news/news/index.html#20211115" str="長期間貸出し利用のない図書館利用券について" day="2021/11/15" />
        <ArticleLink bannar="osiraseImg" url="news/news/index.html#20211115-2" str="浦安・舞浜駅前行政サービスセンターの開所時間変更について" day="2021/11/15" />
        <ArticleLink bannar="osiraseImg" url="news/news/index.html#20211113" str="中央図書館では、「浦安今昔クイズ」、「浦安事件クイズ」を開催しています！" day="2021/11/13" />
        <ArticleLink bannar="osiraseImg" url="news/news/index.html#20211025" str="中央図書館ラウンジ内にカフェがオープンしました！" day="2021/10/25" />
        <ArticleLink bannar="osiraseImg" url="news/news/index.html#20210910-2" str="中央図書館の駐車場・駐輪場について" day="2021/9/10" />
        <ArticleLink bannar="osiraseImg" url="service/request/index.html#jirei" str="「調べ方案内・レファレンス事例集」を公開しました。" day="2020/12/11" />
        <ArticleLink bannar="osiraseImg" url="service/request/index.html#link" str="「新型コロナウイルス感染症関連情報」をまとめました。" day="2020/6/4" />
        */}
      </div>
  </div>
)

export default Maincontent
