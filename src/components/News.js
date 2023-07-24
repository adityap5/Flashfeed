import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

  
  constructor() {
    super();
    this.state = {
      arcticle: [
        {
        "source": {
        "id": "googlenews",
        "name": "Google News"
        },
        "author": null,
        "title": "India to face apple crunch as heavy rain hits production  Reuters India",
        "description": "India to face apple crunch as heavy rain hits production  Reuters India",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2luZGlhL2luZGlhLWZhY2UtYXBwbGUtY3J1bmNoLWhlYXZ5LXJhaW4taGl0cy1wcm9kdWN0aW9uLTIwMjMtMDctMjQv0gEA?oc%3D5&gl=FR&hl=enUS&cm=2&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "20230724T05:32:00Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "HuffPost"
        },
        "author": "Ben Blanchet",
        "title": "Artist Bids Farewell To ‘Great Blue Bird’ Design In Twitter Logo Tribute",
        "description": "Martin Grasser, one of the minds behind the Twitter logo, wrote that the iconic design \"did so much\" since it launched in 2012.",
        "url": "https://www.huffpost.com/entry/artisttwitterlogotribute_n_64be01dae4b093f07cb526b3",
        "urlToImage": "https://img.huffingtonpost.com/asset/64be07652600006400fda884.jpeg?cache=VhINckqIQ3&ops=1200_630",
        "publishedAt": "20230724T06:22:08Z",
        "content": "One of the people behind Twitters iconic logo said goodbye to the great blue bird on Friday after Elon Musk announced that he plans to do away with the design in favor of an X.\r\nMartin Grasser, a Bay… [+3161 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Historyvshollywood.com"
        },
        "author": "Kevin Lang",
        "title": "History vs. Hollywood: Oppenheimer",
        "description": "The Oppenheimer true story is compared to the Christopher Nolan movie about physicist J. Robert Oppenheimer, director of the Manhattan Project at Los Alamos that produced the atomic bomb.",
        "url": "https://www.historyvshollywood.com/reelfaces/oppenheimer/",
        "urlToImage": "https://www.historyvshollywood.com/reelfaces/images/2022/12/oppenheimer/social.jpg",
        "publishedAt": "20230724T04:07:41Z",
        "content": "Historical Accuracy (Q&amp;A):\r\nDid J. Robert Oppenheimer leave a poison apple on his tutor's desk?The Oppenheimer true story reveals that as a young graduate student at Cambridge, Oppenheimer grew d… [+19146 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Stefan Porteck",
        "title": "heise+ | AutoInfotainment: DrahtlosDongles für Apple CarPlay und Android Auto im Test",
        "description": "Die grafische Oberfläche des Smartphones kann man mit WirelessDongles aufs Display des CarInfotainmentSystems spiegeln. Wir haben sechs Geräte getestet.",
        "url": "https://www.heise.de/ratgeber/AutoInfotainmentDrahtlosDonglesfuerAppleCarPlayundAndroidAutoimTest9218758.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/4/2/7/2/5/0/8/b239ee19f1b3331820102c0c2cceb3cfca2fab3dbede7de618ad0acf8f78c3e1c1d48c5b0e9e96ef.jpeg",
        "publishedAt": "20230724T05:30:00Z",
        "content": "Inhaltsverzeichnis\r\nDas Smartphone drängt aufs CockpitDisplay: Kein Wunder, Google Maps ist übersichtlicher als die meisten Navis und wartet stets mit sehr guten EchtzeitVerkehrsdaten auf. Zudem wi… [+1423 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The A.V. Club"
        },
        "author": "Manuel Betancourt",
        "title": "How To With John Wilson season 3 review: A funny, probing, brilliant sendoff",
        "description": "Every episode of How To With John Wilson, which kicks off its third and final season July 28 on HBO, opens with a key, if unassuming, greeting: “Hey, New York.” Wilson, who narrates every episode of his nonfiction series culled from hours and hours of footage…",
        "url": "https://www.avclub.com/howtowithjohnwilsonseason3reviewtvhbofinal1850649766",
        "urlToImage": "https://i.kinjaimg.com/gawkermedia/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bf53c8bab085051436946fc9b25a1020.jpg",
        "publishedAt": "20230724T04:01:00Z",
        "content": "Every episode of How To With John Wilson, which kicks off its third and final season July 28 on HBO, opens with a key, if unassuming, greeting: Hey, New York. Wilson, who narrates every episode of hi… [+5172 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Authority"
        },
        "author": "Adamya Sharma",
        "title": "Spotify Premium price hike likely coming to the US this week",
        "description": "The service will reportedly get a $1 price increase.",
        "url": "https://www.androidauthority.com/spotifypremiumpricehike3347665/",
        "urlToImage": "https://www.androidauthority.com/wpcontent/uploads/2022/11/SpotifyPremiumbannerad.jpg",
        "publishedAt": "20230724T04:44:41Z",
        "content": "<ul><li>Spotify will reportedly hike prices for its individual Premium plan in the US.</li><li>The price increase might happen sometime this week.</li><li>The streaming service also has plans to incr… [+1251 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BGR"
        },
        "author": "Andy Meek",
        "title": "The Bureau, France’s pulsepounding answer to Homeland, is getting an American remake",
        "description": "Too often, the spies we encounter in books, TV shows, and movies come off as reductive imitations of the real thing. They fall somewhere on …\nThe post The Bureau, France’s pulsepounding answer to Homeland, is getting an American remake appeared first on BGR.",
        "url": "https://bgr.com/entertainment/besttvseriestowatchrightnowamazonsundancenowthebureau/",
        "urlToImage": "https://bgr.com/wpcontent/uploads/2020/06/webp.netresizeimage20.jpg?quality=82&strip=all",
        "publishedAt": "20230724T00:09:00Z",
        "content": "Too often, the spies we encounter in books, TV shows, and movies come off as reductive imitations of the real thing. They fall somewhere on a spectrum between 007’s sophistication and the twodimensi… [+5776 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Les Numériques"
        },
        "author": "Tanguy Andrillon",
        "title": "Test Hisense 65U8KQ : un téléviseur MiniLed abordable, réactif et lumineux",
        "description": "Avec ses 1056 zones de rétroéclairage et sa dalle VA 4K UHD 144 Hz, le téléviseur Hisense 65U8KQ s'annonce très prometteur, d'autant plus qu'il héberge un système audio Dolby Atmos 50 W. De quoi concurrencer les modèles bien plus onéreux ?",
        "url": "https://www.lesnumeriques.com/tvteleviseur/hisense65u8kqp73717/test.html",
        "urlToImage": "https://cdn.lesnumeriques.com/optim/test/21/211860/8770b91ehisense65u8kqunteleviseurminiledabordablereactifetlumineux__1200_630__1838927351428_wtmk.jpg",
        "publishedAt": "20230724T05:00:00Z",
        "content": "Le Hisense 65U8KQ embarque une dalle LCD VA comme en atteste la forme des souspixels.\r\nLe téléviseur Hisense 65U8KQ abrite une dalle VA qui permet d'afficher un bon contraste au détriment d'angles d… [+5262 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "tagesschau.de"
        },
        "author": "tagesschau.de",
        "title": "Marktbericht: Karten im DAX werden neu gemischt",
        "description": "Der DAX dürfte zu Beginn der neuen Börsenwoche zunächst keine großen Sprünge machen. Nach dem kleinen Verfallstag dürften sich die Anleger am deutschen Aktienmarkt nun neu orientieren.",
        "url": "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/marktberichtdaxkurseaktuellappleamazonteslametagoogle100.html",
        "urlToImage": "https://images.tagesschau.de/image/c125629708e3436381f9e695c17c3e8b/AAABiC66iz8/AAABg8tME_8/16x91280/boerse302.jpg",
        "publishedAt": "20230724T05:32:40Z",
        "content": "Stand: 24.07.2023 07:32 Uhr\r\nDer DAX dürfte zu Beginn der neuen Börsenwoche zunächst keine großen Sprünge machen. Nach dem kleinen Verfallstag dürften sich die Anleger am deutschen Aktienmarkt nun ne… [+3253 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Caschys Blog"
        },
        "author": "caschy",
        "title": "Pokémon GO bekommt RoutenFunktion",
        "description": "Noch jemand bei Pokémon GO dabei? Dann gibt es nun ein neues Feature. Pokémon GO erhält mit Routen ein neues Feature, das der Community eine weitere Möglichkeit eröffnet, zusammen ihre Umgebung zu erkunden. Routen erlauben es Trainern, ihre schönsten Laufstre…",
        "url": "https://stadtbremerhaven.de/pokemongobekommtroutenfunktion/",
        "urlToImage": "https://stadtbremerhaven.de/wpcontent/uploads/2023/07/pokeroute2.jpg",
        "publishedAt": "20230724T06:30:28Z",
        "content": "Noch jemand bei Pokémon GO dabei? Dann gibt es nun ein neues Feature. Pokémon GO erhält mit Routen ein neues Feature, das der Community eine weitere Möglichkeit eröffnet, zusammen ihre Umgebung zu er… [+1613 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wwwhatsnew.com"
        },
        "author": "Juan Diego Polo",
        "title": "Rusia declara a los productos Apple ‘persona non grata’ en su administración pública",
        "description": "Rusia ha decidido marcar una firme línea roja en lo que respecta a la utilización de tecnología occidental en su administración pública. En un movimiento que pone en evidencia las crecientes tensiones entre los gigantes tecnológicos occidentales y el Kremlin,…",
        "url": "https://wwwhatsnew.com/2023/07/24/rusiadeclaraalosproductosapplepersonanongrataensuadministracionpublica/",
        "urlToImage": "https://wwwhatsnew.com/wpcontent/uploads/2023/07/manzanaenrusia.jpg",
        "publishedAt": "20230724T00:00:44Z",
        "content": "Rusia ha decidido marcar una firme línea roja en lo que respecta a la utilización de tecnología occidental en su administración pública. En un movimiento que pone en evidencia las crecientes tensione… [+2430 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ifanr.com"
        },
        "author": "方嘉文",
        "title": "早报 | M3 版 MacBook Pro 或明年发布 / 马斯克宣布 Twitter 将换 logo / 微博将推 VVIP 会员体系",
        "description": "· vivo 自曝自研影像芯片 V3\n· realme 11 4G 外观和配置曝光\n·《芭比》预计可为玩偶行业带来 140 亿美元收入#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
        "url": "https://www.ifanr.com/1556416",
        "urlToImage": "https://s3.ifanr.com/images/ep/coverimages/xing_ren_cover.jpg",
        "publishedAt": "20230724T00:48:11Z",
        "content": "Twitter Twitter logo X X \r\n X logo \r\nx.com Twitter \r\nTwitter CEO Linda Yaccarino \r\nTwitter \r\nX \r\nTwitter \r\n 4 Twitter X Corp\r\nBaichuan7B Meta LLaMa \r\n 20 \r\n LLaMa\r\nOpenAI\r\n VIP/SVIP VVIP \r\nV + VVIP … [+734 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "01net.com"
        },
        "author": "Mickael Bazoge",
        "title": "Netflix n’a pas prévu d’application pour le casque de réalité mixte d’Apple",
        "description": "Netflix n'aurait pas l'intention d'optimiser son application pour le Vision Pro. Ça ne veux pas dire que les utilisateurs du casque de réalité mixte d'Apple seront privés des contenus du service de streaming…",
        "url": "https://www.01net.com/actualites/netflixneprevoitpasdapplicationdedieepourlevisionpro.html",
        "urlToImage": "https://www.01net.com/app/uploads/2023/07/Camera2.jpg",
        "publishedAt": "20230724T06:00:15Z",
        "content": "Netflix n’aurait pas l’intention d’optimiser son application pour le Vision Pro. Ça ne veux pas dire que les utilisateurs du casque de réalité mixte d’Apple seront privés des contenus du service de s… [+3399 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "01net.com"
        },
        "author": "Dimitri Charitsis",
        "title": "Test de la Garmin Forerunner 965 : le meilleur rapport qualité/prix de toutes les montres de sport chez Garmin ?",
        "description": "Dotée d’un écran Amoled, la Forerunner de 965 pourrait bien être la bonne surprise des montres de sport de Garmin. Moins chère que l’Epix 2 et que l’Epix Pro estelle pour autant moins performante ?",
        "url": "https://www.01net.com/actualites/testdelagarminforerunner965lemeilleurrapportqualiteprixdetouteslesmontresdesportchezgarmin.html",
        "urlToImage": "https://www.01net.com/app/uploads/2023/07/IMG_7212.jpg",
        "publishedAt": "20230724T05:43:22Z",
        "content": "Dotée dun écran Amoled, la Forerunner de 965 pourrait bien être la bonne surprise des montres de sport de Garmin. Moins chère que lEpix 2 et que lEpix Pro estelle pour autant moins performante ?Garm… [+14561 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Canonrumors.com"
        },
        "author": "Canon Rumors",
        "title": "Adobe Photoshop Elements 2023 $54 (Reg $99)",
        "description": "B&H Photo has Adobe Photoshop Elements 2023 in their Deal Zone for $54.99 (Reg $99.99). You can choose between just buying the download for Windows and Mac, or grabbing the boxed version with a download code so you can start using it right away. Adobe Photosh…",
        "url": "https://www.canonrumors.com/adobephotoshopelements202354reg99/",
        "urlToImage": "https://www.canonrumors.com/wpcontent/uploads/2023/07/pselements2023.png",
        "publishedAt": "20230724T04:51:56Z",
        "content": "B&amp;H Photo has Adobe Photoshop Elements 2023 in their Deal Zone for $54.99 (Reg $99.99). You can choose between just buying the download for Windows and Mac, or grabbing the boxed version with a d… [+716 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digiday"
        },
        "author": "Marty Swant",
        "title": "As companies debut AI offerings at a breakneck pace, consumer concerns grow",
        "description": "As tech giants rush to release new tech, the White House met with top leaders about how to responsibly develop large language models.",
        "url": "http://digiday.com/media/ascompaniesdebutaiofferingsatabreakneckpaceconsumerconcernsgrow/",
        "urlToImage": "https://digiday.com/wpcontent/uploads/sites/3/2023/03/aithoughtsdigidaygif.gif",
        "publishedAt": "20230724T04:01:00Z",
        "content": "As commercial interest in generative AI continues to grow, companies still have to overcome consumer concerns.According to new research from Gartner, 64% of marketers surveyed said theyre already dep… [+5644 chars]"
        },
        {
        "source": {
        "id": "elmundo",
        "name": "El Mundo"
        },
        "author": "JAVIER ATTARD, aurora molina",
        "title": "España: Puigdemont o repetición de elecciones",
        "description": "¿Quién gobernará España? ¿De qué depende la llave de entrada a 'La Moncloa'? ¿Habrá repetición electoral? ¿Cederá Pedro Sánchez ante las exigencias de...",
        "url": "https://www.elmundo.es/podcasts/elmundoaldia/2023/07/24/64bdc8bfe85ece9a1e8b45c7.html",
        "urlToImage": "https://phantomelmundo.unidadeditorial.es/9da6200dff90da52df5dcfd2bb330059/resize/1200/f/jpg/assets/multimedia/imagenes/2023/07/24/16901582552250.jpg",
        "publishedAt": "20230724T01:54:52Z",
        "content": "¿Quién gobernará España? ¿De qué depende la llave de entrada a 'La Moncloa'? ¿Habrá repetición electoral? ¿Cederá Pedro Sánchez ante las exigencias de Puigdemont? ¿Tiene alguna posibilidad el PP de A… [+538 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Martin Klemrath",
        "title": "Die Pläne von „zweifelhafter Legalität“ im Atomkoffer des USPräsidenten",
        "description": "Seit Jahrzehnten wird jeder USPräsident stets von einem Offizier begleitet, der einen Koffer trägt. Der „Football“ enthält für den Fall des Atomkriegs ein Kommunikationssystem und diverse Notfallpläne. Wie Experten diese in den Jahren des Kalten Kriegs bewer…",
        "url": "https://www.welt.de/geschichte/article246451802/KalterKriegPlaenezweifelhafterLegalitaetimAtomkofferdesUSPraesidenten.html",
        "urlToImage": "https://img.welt.de/img/geschichte/mobile246493018/5711359237ci16x9w1200/33914494.jpg",
        "publishedAt": "20230724T05:42:14Z",
        "content": "Seit den späten 1950erJahren ist er ein ständiger Begleiter der USPräsidenten: der sogenannte Atomkoffer. Im Englischen wird er auch satchel (Ranzen), black bag (schwarze Tasche) und vor allem the … [+5513 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Numerama"
        },
        "author": "Nicolas Lellouche",
        "title": "Elon Musk annonce la fin de Twitter, remplacé par X.com",
        "description": "Plusieurs mois après avoir promis qu'il créerait un jour « X, l'application pour tout faire », Elon Musk a décidé de renommer Twitter et de détruire son identité. Dans les prochaines heures, le réseau social à l'oiseau bleu devrait perdre son oiseau, et son b…",
        "url": "https://www.numerama.com/tech/1455894elonmuskannoncelafindetwitterremplaceparxcom.html",
        "urlToImage": "https://www.numerama.com/wpcontent/uploads/2023/07/elonmuskx.jpg",
        "publishedAt": "20230724T04:50:00Z",
        "content": "Plusieurs mois après avoir promis quil créerait un jour « X, lapplication pour tout faire », Elon Musk a décidé de renommer Twitter et de détruire son identité. Dans les prochaines heures, le réseau … [+5707 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Numerama"
        },
        "author": "Nicolas Lellouche",
        "title": "On a testé l’objet de Netatmo pour contrôler sa clim sans télécommande",
        "description": "Commercialisée au tarif de 119 euros, la « Commande Intelligente de Climatiseur » de Netatmo permet de piloter une clim, fixe ou portable, avec son smartphone ou un assistant vocal. Elle prend la forme d'un petit boîtier de la taille d'un galet, capable d'imi…",
        "url": "https://www.numerama.com/tech/1455438onatestelobjetdenetatmopourcontrolersaclimsanstelecommande.html",
        "urlToImage": "https://www.numerama.com/wpcontent/uploads/2023/07/netatmoclim.jpg",
        "publishedAt": "20230724T05:27:00Z",
        "content": "Commercialisée au tarif de 119 euros, la « Commande Intelligente de Climatiseur » de Netatmo permet de piloter une clim, fixe ou portable, avec son smartphone ou un assistant vocal. Elle prend la for… [+11048 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Impress.co.jp"
        },
        "author": null,
        "title": "iMessageとFaceTime、英国で使えなくなる可能性。Appleが強硬姿勢を見せる理由とは？【やじうまWatch】",
        "description": "AppleのiMessageおよびFaceTimeが英国で使えなくなる可能性が浮上している。",
        "url": "https://internet.watch.impress.co.jp/docs/yajiuma/1518419.html",
        "urlToImage": "https://internet.watch.impress.co.jp/img/iw/list/1518/419/yajiumawatch_3.png",
        "publishedAt": "20230724T04:02:02Z",
        "content": "Copyright ©2018Impress Corporation. All rights reserved."
        },
        {
        "source": {
        "id": null,
        "name": "Iphoneitalia.com"
        },
        "author": "Giuseppe Migliorino",
        "title": "Stardew Valley+, costruisci la tua fattoria su Apple Arcade",
        "description": "Un nuovo gioco su Apple Arcade. \nLink all'articolo originale: Stardew Valley+, costruisci la tua fattoria su Apple Arcade",
        "url": "https://www.iphoneitalia.com/811950/stardewvalleyapplearcade",
        "urlToImage": "https://static.iphoneitalia.com/wpcontent/uploads/2023/07/StardewValley.jpg",
        "publishedAt": "20230724T05:51:09Z",
        "content": "Il popolare gioco Stardew Valley+ dedicato al mondo delle fattorie è ora disponibile su Apple Arcade.\r\nStardew Valley+ presenta lo stesso gameplay dell’originale, con oltre 50 ore di contenuti più fu… [+825 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "digiday.com",
        "title": "As companies debut AI offerings at a breakneck pace, consumer concerns grow",
        "description": "As commercial interest in generative AI continues to grow, companies still have to overcome consumer concerns. According to new research from Gartner, 64% of marketers surveyed said they’re already deploying or piloting various types of AI or machine learning…",
        "url": "https://biztoc.com/x/0f0ed21a50ae2e2f",
        "urlToImage": "https://c.biztoc.com/p/0f0ed21a50ae2e2f/s.webp",
        "publishedAt": "20230724T04:14:07Z",
        "content": "As commercial interest in generative AI continues to grow, companies still have to overcome consumer concerns.According to new research from Gartner, 64% of marketers surveyed said theyre already dep… [+279 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "seekingalpha.com",
        "title": "Imploding Demand From Key Customers  $150B GenAI To The Rescue",
        "description": "The Drastic Normalization Cadence Is Here, With TSM Naturally Impacted We previously covered Taiwan Semiconductor Manufacturing Company Limited (NYSE:TSM) in April 2023, suggesting that the likely recession might be more a pressing matter than geopolitical ri…",
        "url": "https://biztoc.com/x/48d531ed7a1598ef",
        "urlToImage": "https://c.biztoc.com/p/48d531ed7a1598ef/og.webp",
        "publishedAt": "20230724T04:08:04Z",
        "content": "The Drastic Normalization Cadence Is Here, With TSM Naturally ImpactedWe previously covered Taiwan Semiconductor Manufacturing Company Limited (NYSE:TSM) in April 2023, suggesting that the likely rec… [+281 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "На смартфоны с быстрой зарядкой пришлось 80 % от общего объема продаж в первом квартале 2023 года",
        "description": "По данным аналитической компании Counterpoint Research, доля смартфонов с поддержкой быстрой зарядки (10 Вт и более) от общего объёма реализованных в первом квартале смартфонов составила около 80 %. По сравнению с аналогичным периодом прошлого года этот показ…",
        "url": "https://3dnews.ru/1090427/nasmartfonisbistroyzaryadkoyprishlos80otobshchegoobemaprodagvpervomkvartale2023goda",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/07/24/1090427/93.jpg",
        "publishedAt": "20230724T04:51:00Z",
        "content": "Counterpoint Research, (10 ) 80 %. 6 .. 30 34 .\r\n: counterpointresearch.com\r\n, . , Realme Xiaomi 200 . Xiaomi Oppo 300 . , .\r\n . , . $200 . , 30 , .\r\n. , 50 . , Apple Samsung, , ."
        },
        {
        "source": {
        "id": null,
        "name": "Sspai.com"
        },
        "author": "少数派编辑部",
        "title": "派早报：微信支付宝开放绑定境外卡；上海暂停新办网约车运输证",
        "description": "蔚来发布 20kW V2G 充电桩、微信团队提醒用户警惕公众号欺诈行为、壹号本 OneXPlayer 将推出飞行家 F1 掌机等。查看全文",
        "url": "https://sspai.com/post/81422",
        "urlToImage": "https://cdn.sspai.com/7/23/2023/article/64ece544adb5e0564b72120004297a4b.png",
        "publishedAt": "20230724T00:57:12Z",
        "content": "7 20 21 VisaMastercard 200 \r\n 2019 POS \r\n7 21 \r\n 7.6 5 \r\n AI \r\n7 21 OpenAIAlphabetMetaAnthropicInflection AI AI \r\n 6 AI 8 15 \r\n AI \r\n AI ·Sergey Brin Gemini GPT4 \r\n AI 2019 Alphabet CEO Sundar Picha… [+339 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "noreply@tinhte.vn (cuhiep), cuhiep",
        "title": "MacBook Pro M1 mua từ năm 1978",
        "description": "MacBook Pro M1 mua từ năm 1978\nMình được một bạn nhắn tin hỏi lỗi này nhưng không hiểu vì sao\nCó tìm hiểu sơ thì nghe nói có vẻ là do máy được làm lại, tân trang (refurbished) từ một đơn vị do Apple uỷ quyền nên vậy... cũng không thuyết phục lắm.",
        "url": "https://tinhte.vn/thread/macbookprom1muatunam1978.3695137/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachmentfiles/2023/07/6505319_Screenshot_20230724_at_10.23.34AM.jpg",
        "publishedAt": "20230724T04:33:11Z",
        "content": "MacBook Pro M1 mua t nm 1978Mình c mt bn nhn tin hi li này nhng không hiu vì saoCó tìm hiu s thì nghe nói có v là do máy c làm li, tân trang (refurbished) t mt n v do Apple u quyn nên vy... cng không… [+54 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "noreply@tinhte.vn (Tuanhtran), Tuanhtran",
        "title": "WiFi 6E có thể chỉ được trang bị trên dòng iPhone 15 Pro",
        "description": "Hiện tại tin đồn về iPhone 15 ngày càng nhiều và chuẩn WiFI mới của các dòng iPhone mới này cũng được người dùng quan tâm không kém. Theo một số tin đồn mới nhất, chuẩn WiFi 6E sẽ chỉ được trang bị trên các dòng iPhone 15 Pro.\n \nhttps://tinhte.",
        "url": "https://tinhte.vn/thread/wifi6ecothechiduoctrangbitrendongiphone15pro.3695015/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachmentfiles/2023/07/6505069_Coverwifi6ecothechiduoctrangbitrendongiphone15protinhtetuanhtran.jpg",
        "publishedAt": "20230724T05:38:44Z",
        "content": "Hin ti tin n v iPhone 15 ngày càng nhiu và chun WiFI mi ca các dòng iPhone mi này cng c ngi dùng quan tâm không kém. Theo mt s tin n mi nht, chun WiFi 6E s ch c trang b trên các dòng iPhone 15 Pro.ht… [+1229 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "noreply@tinhte.vn (P.W), P.W",
        "title": "Đi xem Mission Impossible mới, về nhà tản mạn về phim \"tắt não\"",
        "description": "Hôm rồi mình đi xem phần mới của Nhiệm vụ bất khả thi. Nhìn tiêu đề phim thì có lẽ nó đi theo xu hướng của rất nhiều phim bom tấn hiện giờ, gần đây nhất là SpiderMan: Across the SpiderVerse. Phim này lúc đầu có chữ “Part I” trong tiêu đề…",
        "url": "https://tinhte.vn/thread/dixemmissionimpossiblemoivenhatanmanvephimtatnao.3694817/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachmentfiles/2023/07/6504807_CoverPhim.jpg",
        "publishedAt": "20230724T05:15:47Z",
        "content": "t chung Fast X, The Flash, Transformers: Rise of the Beasts hay Extraction 2 ra mt mùa hè nm nay chung vi nhng cái tên trên, d thy s khp khing trong sáng to ngh thut ca nhng tác phm. iu ó hoàn toàn k… [+1714 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Spidersweb.pl"
        },
        "author": "Oliwier.Nytko@spidersweb.pl (Oliwier Nytko)",
        "title": "Czekasz na nowego MacBooka i Maca mini? To sobie poczekasz jeszcze dłuuuuugo",
        "description": "Najwydajniejszy MacBook Pro z M3 nie wyjdzie w tym roku? Jeżeli oczekiwaliście, że kupicie zaraz laptopa z mocniejszą wersją SoC Apple tuż obok podstawowej wersji, to musicie przemyśleć swoje decyzje.",
        "url": "https://spidersweb.pl/2023/07/applem3premiera.html",
        "urlToImage": "https://ocspl.oktawave.com/v1/AUTH_2887234e384a48738bc5405211db13a2/spidersweb/2022/01/macbookpro14kotkowski22.jpg",
        "publishedAt": "20230724T06:02:41Z",
        "content": "Mac mini jest jednym z najtaszych urzdze od Apple, które pozwala atwo wej w ekosystem macOSa bez wydawania grubych tysicy na MacBooka Pro czy iMaca.\r\nGurman wspomnia, e wierzy w istnienie wersji Mac… [+252 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Elespanol.com"
        },
        "author": "C�sar Rebolledo",
        "title": "FREE FIRE | Códigos de hoy lunes 24 de julio de 2023  Recompensas gratis",
        "description": "<!cache>Estos son todos los códigos gratis de Garena Free Fire que podrás canjear hoy, lunes 24 de julio de 2023. Consigue recompensas como skins, diamantes y mucho más.<!aa>El éxito para móviles Android e iOS, Garena Free Fire, ha recibido nuevos có…",
        "url": "https://vandal.elespanol.com/noticia/1350764070/freefirecodigosdehoylunes24dejuliode2023recompensasgratis/",
        "urlToImage": "https://media.vandal.net/i/ivandal/1200x630/72023/20237248155857_1.jpg",
        "publishedAt": "20230724T06:18:00Z",
        "content": "El xito para mviles Android e iOS, Garena Free Fire, ha recibido nuevos cdigos diarios para hoy lunes 24 de julio de 2023. Los jugadores pueden canjear estos cdigos para recibir recompensas variadas … [+2508 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macitynet.it"
        },
        "author": "Mauro Notarianni",
        "title": "Negli Apple Store sarà possibile ordinare con consegna a domicilio",
        "description": "Apple ha previsto novità per gli ordini effettuati negli Apple Store, permettendo agli acquirenti di ordinare e scegliere al momento del pagamento la consegna a domicilio, senza bisogno che del trasporto si occupi l'utente.\n su macitynet.it Negli Apple Store…",
        "url": "https://www.macitynet.it/negliapplestoresarapossibileordinareconconsegnaadomicilio/",
        "urlToImage": "https://www.macitynet.it/wpcontent/uploads/2022/11/AppleStoreboston.jpg",
        "publishedAt": "20230724T05:59:25Z",
        "content": "Apple ha previsto novità per gli ordini effettuati negli Apple Store, permettendo agli acquirenti di ordinare e scegliere al momento del pagamento la consegna a domicilio, senza bisogno che del trasp… [+1508 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macitynet.it"
        },
        "author": "Mauro Notarianni",
        "title": "Apple brevetta display per veicoli autonomi che comunica con i pedoni",
        "description": "In un brevetto di Apple riferimento a un display esterno da sfruttare con veicoli a guida autonoma, utilizzabile  in caso di necessità  per comunicare con le persone che si trovano nei pressi e/o all'esterno della vettura.\n su macitynet.it Apple brevetta d…",
        "url": "https://www.macitynet.it/applehabrevettatodisplayesternoperveicoliautonomichecomunicaconchisitrovaallesterno/",
        "urlToImage": "https://www.macitynet.it/wpcontent/uploads/2023/07/Attraversamento.jpg",
        "publishedAt": "20230724T05:29:14Z",
        "content": "Il sito PatentlyApple ha scovato un brevetto della Casa di Cupertino nel quale si fa riferimento a un display esterno da sfruttare con veicoli a guida autonoma, utilizzabile – in caso di necessità – … [+1553 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Svendita SanDisk e WD: microSD Exreme da 256GB costa 19,39 (meno della 128GB), ma attenzione anche alle altre offerte!",
        "description": "Questa settimana SanDisk e WD danno la propria interpretazione di saldi e svendono veramente molti prodotti interessanti: microSD, chiavette USB e hard disk esterni sono in super offerta, con prezzi sensibilmente più bassi del normale. Guardare per credere!",
        "url": "https://www.hwupgrade.it/news/storage/svenditasandiskewdmicrosdexremeda256gbcosta1939menodella128gbmaattenzioneancheallealtreofferte_118624.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/SandiskmicroSDA1256GB_720.jpg",
        "publishedAt": "20230724T06:01:08Z",
        "content": "Da oggi parte una super promozione SanDisk e WD: ci sono prezzi super \r\nsu molti prodotti interessanti come microSD, chiavette USB e hard disk esterni. \r\nLe promozioni sono veramente valide e vi prop… [+828 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sapo.pt"
        },
        "author": "Pedro Simões",
        "title": "Netflix e outros serviços não vão ter uma app dedicada ao Apple Vision Pro",
        "description": "Quando apresentou o Apple Vision Pro, a criadora do iPhone deixou claro que esta proposta precisa de software adaptado e que garanta uma experiência de utilização única. Infelizmente, e como está agora a ser...",
        "url": "https://pplware.sapo.pt/apple/netflixeoutrosservicosnaovaoterumaappdedicadaaoapplevisionpro/",
        "urlToImage": "https://pplware.sapo.pt/wpcontent/uploads/2023/06/apple_vision_pro_marca_1.jpg",
        "publishedAt": "20230724T00:30:06Z",
        "content": "Quando apresentou o Apple Vision Pro, a criadora do iPhone deixou claro que esta proposta precisa de software adaptado e que garanta uma experiência de utilização única. Infelizmente, e como está ago… [+1688 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Milton Ezrati, Senior Contributor, \n Milton Ezrati, Senior Contributor\n https://www.forbes.com/sites/miltonezrati/",
        "title": "Foreign Business Looks Away From China",
        "description": "Beijing is unhappy about how Western, Japanese, and Korean businesses have become disenchanted with China and have begun looking for alternative investment destinations.",
        "url": "https://www.forbes.com/sites/miltonezrati/2023/07/23/foreignbusinesslooksawayfromchina/",
        "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/64bdf58f9815ca64fbd98952/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "20230724T03:55:00Z",
        "content": "Tesla CEO Elon Musk, left, shakes hands with Chinese Premier Li Keqiang. (Photo by Mark ... [+] Schiefelbein  Pool/Getty Images)\r\nGetty Images\r\nWords from both Beijing and corporations sound sweet, … [+5222 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Codezine.jp"
        },
        "author": null,
        "title": "Unity、Apple visionOS向け開発ツールのベータ版を提供開始",
        "description": "米Unity Technologiesは、AppleのMixed Reality（複合現実）ヘッドセット「Apple Vision Pro」のOSである「visionOS」に向けた開発ツールのベータ版の提供を7月19日（現地時間）に開始した。この開発ツールは、Appleが2023年6月5日に開催した年次開発者会議「Worldwide Developers Conference（WWDC）」でUnity Technologiesが予告したもので、希望者の申し込みを募っていた。",
        "url": "https://codezine.jp/article/detail/18068",
        "urlToImage": "https://codezine.jp/static/images/article/18068/12694_og.jpg",
        "publishedAt": "20230724T00:00:00Z",
        "content": "UnityUnity EditorvisionOSUnityvisionOSXcodeXR pluginVision Pro\r\nUnity TechnologiesvisionOSUniversal Render PipelineDynamic Foveated RenderingvisionOS\r\nvisionOSUnityUnityXR Interaction Toolkit3Dvisio… [+28 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SamMobile"
        },
        "author": "Asif Iqbal Shaik",
        "title": "Galaxy S24 Ultra may not feature 5x zoom camera",
        "description": "Samsung launched the Galaxy S23 Ultra earlier this year with a new camera sensor, the 200MP ISOCELL HP2. It is the highestresolution camera sensor in the market but not the biggest in terms of sensor size. So, sometimes it shows a few issues, including sligh…",
        "url": "https://www.sammobile.com/news/samsunggalaxys24ultracamera200mp3x10xzoom/",
        "urlToImage": "https://www.sammobile.com/wpcontent/uploads/2023/04/SamsungGalaxyS23Ultra100xSpaceZoomDemonstration720x405.jpg",
        "publishedAt": "20230724T04:32:15Z",
        "content": "Samsung launched the Galaxy S23 Ultra earlier this year with a new camera sensor, the 200MP ISOCELL HP2. It is the highestresolution camera sensor in the market but not the biggest in terms of senso… [+1626 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SamMobile"
        },
        "author": "Asif Iqbal Shaik",
        "title": "Samsung developing smartphone OLED panels with improved power efficiency",
        "description": "Samsung Display and LG Display are the world’s biggest manufacturers of OLED panels for smartphones, tablets, laptops, and TVs. Their OLED panels are used in various products from multiple brands. Last year, Samsung introduced Eco2 OLED panels with improved p…",
        "url": "https://www.sammobile.com/news/samsungdevelopsmartphoneoledpanelsimprovedpowerefficiency/",
        "urlToImage": "https://www.sammobile.com/wpcontent/uploads/2022/08/SamsungEco2OLEDPlusDisplayPanelPowerConsumptionEfficiency720x405.jpg",
        "publishedAt": "20230724T06:30:40Z",
        "content": "Samsung Display and LG Display are the worlds biggest manufacturers of OLED panels for smartphones, tablets, laptops, and TVs. Their OLED panels are used in various products from multiple brands. Las… [+2399 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Unwire.hk"
        },
        "author": "唐美鳳",
        "title": "《彭博》專欄爆料 M3 版 MacBook Pro 上市安排",
        "description": "在上星期的《彭博》Power On 專欄內，作者 Mark Gurman 透露 Apple 最早會在今年 10 月發表首批配備 M3 處理器的 Mac 電腦，包括 13 吋 MacBook Pro、13 吋 MacBook Air 和 24 吋 iMac。在本週的 Power On 專欄，Gurman 再次爆料其他 M3 處理器 Mac 電腦的上市安排。\nThe post 《彭博》專欄爆料 M3 版 MacBook Pro 上市安排 first appeared on 香港 unwire.hk 玩生活．樂科技.\n…",
        "url": "https://unwire.hk/2023/07/24/newmacbookproandmacminiwithm32024launch/notebook/macos/",
        "urlToImage": "https://cdn.unwire.hk/wpcontent/uploads/2023/07/0223.png",
        "publishedAt": "20230724T04:48:45Z",
        "content": "Power On Mark Gurman Apple 10 M3 Mac 13 MacBook Pro13 MacBook Air 24 iMac Power On Gurman M3 Mac \r\n Gurman Mac mini M3 Mac mini M3 Mac 2024 M2 Mac mini M1 Apple \r\n M3 MacBook 14 16 MacBook Pro Gurman… [+86 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Unwire.hk"
        },
        "author": "唐美鳳",
        "title": "Spotify 調整 Premium 月費 美國市場率先加價至 10.99 美元",
        "description": "繼上月 Apple Music 調高全球多國的服務月費後，消息指 Spotify 將會成為另一個準備加價的音樂串流平台。《華爾街日報》報導指 Spotify 打算調高美國市場的 Premium 服務月費，由現時每月 9.99 美元（約 78 港元）提高至 10.99 美元（約 86 港元）。\nThe post Spotify 調整 Premium 月費 美國市場率先加價至 10.99 美元 first appeared on 香港 unwire.hk 玩生活．樂科技.\nThe post Spotify 調整 Pr…",
        "url": "https://unwire.hk/2023/07/24/spotifyplanstoraisepriceofpremiumplaninus/mobilemusic/",
        "urlToImage": "https://cdn.unwire.hk/wpcontent/uploads/2023/07/0123.png",
        "publishedAt": "20230724T04:48:43Z",
        "content": "Apple Music Spotify Spotify Premium 9.99 78 10.99 86 \r\n Spotify Spotify Premium 10 \r\nSpotify 8,000 Podcast Podcast 14 Premium Podcast\r\nWSJ\r\n==Follow Threads : &lt;&gt;=="
        },
        {
        "source": {
        "id": null,
        "name": "Expansion.com"
        },
        "author": "expansion.com",
        "title": "La Primera de Expansión sobre la victoria del PP en el 23J y la amenaza de bloqueo",
        "description": "En la agenda del día, además de todas la reacciones al resultado electoral del 23J, presenta resultados Naturgy y conoceremos los datos del PMI compuesto y manufacturero de la euro",
        "url": "https://www.expansion.com/podcasts/2023/07/24/64be09d9e5fdeaee138b4589.html",
        "urlToImage": "https://phantomexpansion.unidadeditorial.es/15a6a064a8e5d70049f1845cb0c0bd3e/f/jpg/assets/multimedia/imagenes/2023/07/24/16901755339407.jpg",
        "publishedAt": "20230724T05:24:05Z",
        "content": "Este lunes amanecemos con resaca electoral. El Partido Popular, capitaneado por Alberto Núñez Feijóo, ha sido el ganador de las elecciones del 23J, pero ni el bloque de PPVox, ni el de PSOESumar y … [+800 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AdExchanger"
        },
        "author": "Hana Yoo",
        "title": "This Direct Marketing Agency Is Helping Nonprofits Navigate Platforms’ Political Policies And Pitfalls",
        "description": "Political advertising restrictions are among the challenges that direct marketing agency MissionWired helps its progressive nonprofits and political campaign clients tackle.\nThe post This Direct Marketing Agency Is Helping Nonprofits Navigate Platforms’ Polit…",
        "url": "http://www.adexchanger.com/agencies/thisdirectmarketingagencyishelpingnonprofitsnavigateplatformspoliticalpoliciesandpitfalls/",
        "urlToImage": "https://www.adexchanger.com/wpcontent/uploads/2023/07/shutterstock_2036603708scaled.jpg",
        "publishedAt": "20230724T05:00:17Z",
        "content": "Political advertising can get dicey on social platforms.\r\nFacebook, Google and Twitter have different and shifting rules for the content they allow. In 2019, for instance, Twitter banned political ad… [+4967 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Natalie.mu"
        },
        "author": "音楽ナタリー",
        "title": "「@ JAM EXPO」にでんぱ、寺嶋由芙、フィロのス、バンもん、デビアン、ミームトーキョーら追加",
        "description": "8月26、27日に神奈川・横浜アリーナで行われる音楽フェス「@JAM EXPO 2023 supported by UPT」の出演者第7弾が発表された。",
        "url": "https://natalie.mu/music/news/534056",
        "urlToImage": "https://ogre.natalie.mu/media/news/music/2023/0528/atjamexpo2023_tate_logo.jpg?impolicy=twitter_card_feature_crop",
        "publishedAt": "20230724T03:42:00Z",
        "content": "2023826 \r\nI to U $CREAMing!! / / iLiFE! / Appare! / / UP / / / / / AKB48 / OSU / / / Caress Van End / / / / / / KRD8 / Kolokol / 100°C / C;ON / situasion / / JamsCollection / Jumping Kiss / / ! / SW!… [+1243 chars]"
        },
        {
        "source": {
        "id": "wirtschaftswoche",
        "name": "Wirtschafts Woche"
        },
        "author": "Philipp Frohn, Melanie Bergermann",
        "title": "Podcast – BörsenWoche: Nach dem Crash: Sind Vonovia, LEG und Co. reif fürs Comeback?",
        "description": "Im Podcast erklären wir, ob die Zinssorgen allmählich verfliegen und Immobilienaktien vor dem Comeback stehen – oder ob Anlegern weitere Risiken drohen.",
        "url": "https://www.wiwo.de/podcast/boersenwoche/podcastboersenwochenachdemcrashsindvonovialegundcoreiffuerscomeback/29269434.html",
        "urlToImage": "https://www.wiwo.de/images/vonovia100proimagolife2263024715highres/29272580/3format11240.jpg",
        "publishedAt": "20230724T05:33:50Z",
        "content": "Disclaimer: Dieser Podcast ist keine Anlageberatung, sondern dient lediglich der Information und Unterhaltung. Die Hosts oder der Verlag übernehmen keine Haftung für Anlageentscheidungen, die ihr auf… [+836 chars]"
        },
        {
        "source": {
        "id": "wirtschaftswoche",
        "name": "Wirtschafts Woche"
        },
        "author": "Philipp Frohn",
        "title": "BörsenWoche 419: Editorial: 200 Prozent Kursplus: Warum nach dem KIBoom eine Korrektur nicht überraschen sollte",
        "description": "Die jüngste Börsenrally geht auf wenige Techunternehmen mit großen KIPhantasien zurück. Doch der Kursanstieg mahnt zur Vorsicht. Bläht sich hier eine neue Spekulationsblase auf? Ein Kommentar.",
        "url": "https://www.wiwo.de/dossiers/boersenwoche/boersenwoche419editorial200prozentkurspluswarumnachdemkiboomeinekorrekturnichtueberraschensollte/29271114.html",
        "urlToImage": "https://www.wiwo.de/images/nvidia100proimagolife2258147263highres/29272574/2format11240.jpg",
        "publishedAt": "20230724T05:37:15Z",
        "content": "Nach drei Jahren Spanischunterricht schaffe ich es gerade mal, auf Mallorca ein Bier zu bestellen. Während meines Abiturs hatte ich wohl andere Sachen im Kopf als Vokabeln zu pauken und Grammatik zu … [+3329 chars]"
        },
        {
        "source": {
        "id": "independent",
        "name": "Independent"
        },
        "author": "Jacob Stolworthy",
        "title": "Margot Robbie cast Rob Brydon ‘as a priority’ in Barbie",
        "description": "‘His appearance was the cherry on top for me,’ one cinemagoer wrote",
        "url": "https://www.independent.co.uk/artsentertainment/tv/news/robbrydonbarbiesugardaddykenb2380654.html",
        "urlToImage": "https://static.independent.co.uk/2023/07/23/11/MargotRobbieRobBrydon.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "20230724T06:16:45Z",
        "content": "Sign up to our free IndyArts newsletter for all the latest entertainment news and reviews\r\nSign up to our free IndyArts newsletter\r\nBarbie viewers are reacting to a jump scare cameo in the new film.\r… [+3282 chars]"
        },
        {
        "source": {
        "id": "independent",
        "name": "Independent"
        },
        "author": "Annabel Nugent",
        "title": "Robin Williams’ children remember the late actor on his 72nd birthday: ‘Miss you and love you forever’",
        "description": "Williams died in August 2014",
        "url": "https://www.independent.co.uk/artsentertainment/films/news/robinwilliamsbirthdaytributechildrenb2380659.html",
        "urlToImage": "https://static.independent.co.uk/s3fspublic/thumbnails/image/2020/07/22/07/shutterstockeditorial1029597au.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "20230724T06:42:14Z",
        "content": "Get our free weekly email for all the latest cinematic news from our film critic Clarisse Loughrey\r\nGet our The Life Cinematic email for free\r\nRobin Williams children have remembered the late actor o… [+3605 chars]"
        },
        {
        "source": {
        "id": "independent",
        "name": "Independent"
        },
        "author": "Elaine Kurtenbach",
        "title": "Stock market today: Asian shares mostly higher after winning week on Wall Street",
        "description": "Asian shares have advanced after Wall Street closed out another winning week",
        "url": "https://www.independent.co.uk/news/apfederalreserveasiannasdaqcompositeamericanexpressb2380635.html",
        "urlToImage": "https://static.independent.co.uk/2023/07/24/06/South_Korea_Financial_Markets_25738.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "20230724T04:59:49Z",
        "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nAsian shares advanced on Monday after Wall Street cl… [+4212 chars]"
        },
        {
        "source": {
        "id": "independent",
        "name": "Independent"
        },
        "author": "The Associated Press",
        "title": "What to stream this week: Post Malone, Zach Galifianakis, 'This Fool,' Thandiwe Newton and 'Heels'",
        "description": "This week’s new entertainment releases include a new album from Post Malone, a movie starring Zach Galifianakis about the creation of the cute collectable Beanie Babies and a video game for the whole family with Disney Illusion Island",
        "url": "https://www.independent.co.uk/news/zachgalifianakisapthandiwenewtonpostmaloneheelsb2379811.html",
        "urlToImage": "https://static.independent.co.uk/2023/07/21/18/The_Stream_88765.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "20230724T04:01:00Z",
        "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nThandiwe Newton starring in a thriller, the return o… [+6193 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Laurin Meyer, Nando Sommerfeldt",
        "title": "Amerikas teuerster Streik und das bessere SAP",
        "description": "In der heutigen Folge „Alles auf Aktien“ sprechen die Finanzjournalisten Laurin Meyer und Nando Sommerfeldt über „The busiest week of the summer“, die Erholung bei Sartorius und Unmut über Amex.",
        "url": "https://www.welt.de/podcasts/allesaufaktien/article246540924/AllesaufAktienBesseralsSAPOracleundAdobeDasistdiespannendsteSoftwareAktie.html",
        "urlToImage": "https://img.welt.de/img/podcasts/allesaufaktien/mobile241831025/9641354237ci16x9w1200/DWOPodcastTeaserAllesaufAktienNandoMeyer.jpg",
        "publishedAt": "20230724T03:02:43Z",
        "content": "Außerdem geht es um American Express, UPS, FedEx, DHL, Amazon, Salesforce, SAP, Oracle und Adobe.\r\nAbonnieren Sie den Podcast bei Spotify, Apple Podcast, Amazon Music und Deezer. Oder direkt per RSS… [+41 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Cornelius Welp",
        "title": "Abzocke auf der Autobahn – warum der unbeliebte Monopolist trotzdem strauchelt",
        "description": "2,27 Euro für den Liter Sprit, Cappuccino für 4,90: Mit überhöhten Preisen verärgert der AutobahnraststättenRiese Tank & Rast Millionen Reisende. Umso erstaunlicher: die Geschäfte des QuasiMonopolisten laufen nicht. Jetzt greifen die Eigentümer nach den bis…",
        "url": "https://www.welt.de/wirtschaft/article246524534/TankRastAbzockeaufderAutobahnwarumderunbeliebteMonopolisttrotzdemstrauchelt.html",
        "urlToImage": "https://img.welt.de/img/wirtschaft/mobile246538438/1471356417ci16x9w1200/RaststaetteBoerdeSuedgewinntADACTest.jpg",
        "publishedAt": "20230724T05:25:22Z",
        "content": "An der Raststätte neben der A3 in Richtung Süden ist an diesem Nachmittag mitten in der Ferienzeit ordentlich was los. Schon vor den Zapfsäulen nach der Ausfahrt stauen sich die Wagen. Der Stopp wird… [+9133 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "ELAINE KURTENBACH",
        "title": "Stock market today: Asian shares mostly higher after winning week on Wall Street",
        "description": "Asian shares advanced on Monday after Wall Street closed out another winning week.  Hong Kong declined but other major markets in the region were higher...",
        "url": "https://finance.yahoo.com/news/stockmarkettodayasianshares045948032.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/y0BrylFlrl6Vy5.qjXMvJQ/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTc/https://media.zenfs.com/en/ap_finance_articles_694/9518a422ca276a4f677da583ad22ec6f",
        "publishedAt": "20230724T04:59:48Z",
        "content": "BANGKOK (AP) Asian shares advanced on Monday after Wall Street closed out another winning week.\r\nHong Kong declined but other major markets in the region were higher. U.S. futures edged lower and oil… [+4063 chars]"
        },
        {
        "source": {
        "id": "usatoday",
        "name": "USA Today"
        },
        "author": "Cardinals Wire",
        "title": "Cardinals training camp roster preview: TE Joel Honigford",
        "description": "We take a look at undrafted rookie tight end Joel Honigford and his chances of making the roster entering training camp.",
        "url": "https://cardswire.usatoday.com/lists/cardinalstrainingcamprosterpreviewtejoelhonigford/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/69tpPooacZ.SMVF1BzvxMA/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA/https://media.zenfs.com/en/arizona_cardinals_wire_usa_today_sports_articles_662/fe5ecb42fca3a7a0a13e5f62f39a6452",
        "publishedAt": "20230724T00:54:23Z",
        "content": "The Arizona Cardinals open training camp at the end of this month, so we will do a roster review, highlighting each player currently on the roster, going over last season, their salary and cap number… [+1286 chars]"
        },
        {
        "source": {
        "id": "usatoday",
        "name": "USA Today"
        },
        "author": "Cardinals Wire",
        "title": "Cardinals training camp roster preview: TE Chris Pierce",
        "description": "We take a look at former undrafted TE Chris Pierce and his chances for making the final roster with the Cardinals entering training camp.",
        "url": "https://cardswire.usatoday.com/lists/cardinalstrainingcamprosterpreviewtechrispierce/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/nvT2Wr6pM5haT0jZzMyx2A/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA/https://media.zenfs.com/en/arizona_cardinals_wire_usa_today_sports_articles_662/1a4a5236ac2d3e968c43dee8ea5abb23",
        "publishedAt": "20230724T01:07:17Z",
        "content": "The Arizona Cardinals open training camp at the end of this month, so we will do a roster review, highlighting each player currently on the roster, going over last season, their salary and cap number… [+1444 chars]"
        },
        {
        "source": {
        "id": "usatoday",
        "name": "USA Today"
        },
        "author": "Cardinals Wire",
        "title": "Cardinals training camp roster preview: TE Bernhard Seikovits",
        "description": "We take a look at Austrian TE Bernhard Seikovits and his chances of making the Cardinals' final roster as training camp approaches.",
        "url": "https://cardswire.usatoday.com/lists/cardinalstrainingcamprosterpreviewtebernhardseikovits/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/dObXEkEcmtx8f_xRna6nSg/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU/https://media.zenfs.com/en/arizona_cardinals_wire_usa_today_sports_articles_662/fa9a2b7a3cd657b87d24149dfdfe380f",
        "publishedAt": "20230724T01:36:04Z",
        "content": "The Arizona Cardinals open training camp at the end of this month, so we will do a roster review, highlighting each player currently on the roster, going over last season, their salary and cap number… [+1542 chars]"
        },
        {
        "source": {
        "id": "usatoday",
        "name": "USA Today"
        },
        "author": "Cardinals Wire",
        "title": "Cardinals training camp roster preview: TE Noah Togiai",
        "description": "We take a look at TE Noah Togiai and his chances for making the final roster for the Cardinals entering training camp.",
        "url": "https://cardswire.usatoday.com/lists/cardinalstrainingcamprosterpreviewtenoahtogiai/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/frc40Fo.FcYOXFHfWHyPwA/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA/https://media.zenfs.com/en/arizona_cardinals_wire_usa_today_sports_articles_662/9e4c800115bfd75263ef585d3407e018",
        "publishedAt": "20230724T00:40:51Z",
        "content": "The Arizona Cardinals open training camp at the end of this month, so we will do a roster review, highlighting each player currently on the roster, going over last season, their salary and cap number… [+1446 chars]"
        },
        {
        "source": {
        "id": "usatoday",
        "name": "USA Today"
        },
        "author": "Cardinals Wire",
        "title": "Cardinals training camp roster preview: TE Trey McBride",
        "description": "We take a look at secondyear TE Trey McBride and where he stands with the team entering training camp.",
        "url": "https://cardswire.usatoday.com/lists/cardinalstrainingcamprosterpreviewtetreymcbride/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Ty7hm5YerseSk0wyK38_IQ/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA/https://media.zenfs.com/en/arizona_cardinals_wire_usa_today_sports_articles_662/cf0462ce5a8f55e74db3a8a6354b1ec8",
        "publishedAt": "20230724T00:27:56Z",
        "content": "The Arizona Cardinals open training camp at the end of this month, so we will do a roster review, highlighting each player currently on the roster, going over last season, their salary and cap number… [+1823 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Paul Tan's Automotive News"
        },
        "author": "Gerard Lye",
        "title": "2023 Toyota Innova Zenix launched in Thailand – two hybrid variants; Toyota Safety Sense; from RM183k",
        "description": "The Toyota Innova Zenix has been launched in Thailand, where it is available in two variants, both of which are hybrids. The range starts with the 2.0 HEV Smart priced at 1.379 million baht (RM182,967), followed by the rangetopping 2.0 HEV Premium at 1.479 m…",
        "url": "https://paultan.org/2023/07/24/2023toyotainnovazenixlaunchedinthailand/",
        "urlToImage": "https://paultan.org/image/2023/07/2023ToyotaInnovaZenixThailandlaunch2630x330.jpg",
        "publishedAt": "20230724T03:09:22Z",
        "content": "The Toyota Innova Zenix has been launched in Thailand, where it is available in two variants, both of which are hybrids. The range starts with the 2.0 HEV Smart priced at 1.379 million baht (RM182,96… [+2804 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Paul Tan's Automotive News"
        },
        "author": "Izwaashura Sadali",
        "title": "Toyota Innova Zenix 2023 dilancar di Thailand – dua varian hibrid; Toyota Safety Sense; dari RM183k",
        "description": "Toyota Innova Zenix telah dilancarkan di pasaran Thailand, di mana ia ditawarkan dengan dua varian hibrid. Model asas 2.0 HEV Smart dengan harga 1.379 juta baht (RM182,967), diikuti dengan spesifikasi penuh 2.0 HEV Premium berharga 1.479 juta baht (RM196,235)…",
        "url": "https://paultan.org/2023/07/24/toyotainnovazenix2023dilancardithailandduavarianhibridtoyotasafetysensedarirm183k/",
        "urlToImage": "https://paultan.org/image/2023/07/2023ToyotaInnovaZenixThailandlaunch2BM630x330.jpeg",
        "publishedAt": "20230724T04:43:24Z",
        "content": "Toyota Innova Zenix telah dilancarkan di pasaran Thailand, di mana ia ditawarkan dengan dua varian hibrid. Model asas 2.0 HEV Smart dengan harga 1.379 juta baht (RM182,967), diikuti dengan spesifikas… [+3091 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ifun.de › AppleNews seit 2001"
        },
        "author": "Chris",
        "title": "AppleLadengeschäfte bieten künftig auch OnlineBestellung und Lieferung an",
        "description": "22 Jahre nach der Eröffnung seiner ersten Ladengeschäfte plant Apple offenbar, das Verkaufskonzept der Apple Stores nennenswert zu erweitern. Anstatt wie bislang nur Produkte zur direkten Mitnahme beziehungsweise Abholung anzubieten, soll über die sogenannten…",
        "url": "https://www.ifun.de/appleladengeschaeftebietenkuenftigauchonlinebestellungundlieferungan214678/",
        "urlToImage": "https://images.ifun.de/wpcontent/uploads/2022/07/applestorebromptonroadfeature.jpg",
        "publishedAt": "20230724T04:49:30Z",
        "content": "22 Jahre nach der Eröffnung seiner ersten Ladengeschäfte plant Apple offenbar, das Verkaufskonzept der Apple Stores nennenswert zu erweitern. Anstatt wie bislang nur Produkte zur direkten Mitnahme be… [+1946 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ifun.de › AppleNews seit 2001"
        },
        "author": "Chris",
        "title": "MacApps: Camera Preview, Pixelmator Pro und MoneyMoney aktualisiert",
        "description": "Wer regelmäßig in Videokonferenzen sitzt, weiß warum man Anwendungen wie Camera Preview braucht. Die kostenlose App eignet sich hervorragend dafür, vor dem Start der Übertragung noch einen Blick auf das persönliche Erscheinungsbild und den Kameraausschnitt zu…",
        "url": "https://www.ifun.de/macappscamerapreviewpixelmatorproundmoneymoneyaktualisiert214684/",
        "urlToImage": "https://images.ifun.de/wpcontent/uploads/2023/07/camerapreviewpixelmatorpromoneymoney.jpg",
        "publishedAt": "20230724T06:46:35Z",
        "content": "Wer regelmäßig in Videokonferenzen sitzt, weiß warum man Anwendungen wie Camera Preview braucht. Die kostenlose App eignet sich hervorragend dafür, vor dem Start der Übertragung noch einen Blick auf … [+1809 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Postd.cc"
        },
        "author": null,
        "title": "フロントエンドパフォーマンスのチェックリスト2021年版（PDF、Apple Pages、MS Word）後編",
        "description": "目次＃ 前編 準備段階：計画と指標\nパフォーマンスを重視する文化、Core Web Vitals、パフォーマンスのプロファイル、CrUX、Lighthouse、FID、TTI、CLS、端末。 現実的…",
        "url": "https://postd.cc/frontendperformance2021checklist3/",
        "urlToImage": "https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://archive.smashing.media/assets/344dbf88fdf942bbadb446f01eedd629/08a226c55a9a4bd2bba7dad7e74f69e9/adaptivemediaservingopt.png",
        "publishedAt": "20230724T00:00:01Z",
        "content": "<ul><li>Core Web VitalsCrUXLighthouseFIDTTICLS</li><li>RAIL170KB/30KB</li><li>WebpackCDNCSRSSRCSR + SSRPRPL</li></ul><ul><li>BrotliAVIFWebPAV1WebGoogle</li><li>JavaScript/WebpackWebWebAssemblyJavaScr… [+11042 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Moneycontrol"
        },
        "author": "Bloomberg",
        "title": "Fed, Netflix earnings cast clouds over 2023âs techstock surge",
        "description": "At the same time, strong employment data underscored worries that the Federal Reserve may not be on the verge of ending its most aggressive monetary policy tightening in decades.",
        "url": "https://www.moneycontrol.com/news/world/fednetflixearningscastcloudsover2023stechstocksurge11013581.html",
        "urlToImage": "https://images.moneycontrol.com/staticmcnews/2022/06/Netflix770x433.jpg",
        "publishedAt": "20230724T02:51:13Z",
        "content": "Theres growing concern on Wall Street that the twin engines of this years techstock surge are at risk of sputtering.\r\nThat was evident Thursday, when the technologyheavy Nasdaq 100 Index dropped by… [+3808 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ixbt.com"
        },
        "author": "jin@ixbt.com (Jin)",
        "title": "Россиянин купил заблокированный iPhone под видом нового",
        "description": "Россиянин купил заблокированный iPhone 11 за 50 тысяч рублей в сети ДНС, о чем сообщает «Новосибирск Онлайн». Позже выяснилось, что смартфон был заблокирован одним из операторов США. Пользователь рассказал, что он купил новый iPhone 11 с 64 ГБ флешпамяти, од…",
        "url": "https://www.ixbt.com/news/2023/07/24/rossijaninkupilzablokirovannyjiphonepodvidomnovogo.html",
        "urlToImage": "https://www.ixbt.com/img/n1/news/2023/6/1/39f27ade04c3cadaf5f7f0244b454eb4169224a1_1032.jpg_large.png",
        "publishedAt": "20230724T06:44:00Z",
        "content": "iPhone 11 50 , « ». , .\r\n , iPhone 11 64 , , SIM . , SIM . , .\r\n iPhone Apple, , . Apple , , .\r\n: « . , , ( . — . .), — »."
        },
        {
        "source": {
        "id": null,
        "name": "Erickimphotography.com"
        },
        "author": "ERIC KIM",
        "title": "GET OUT OF THE SILOS!",
        "description": "For example, my insane annoyance with the hard 2TB limit for Apple Family iCloud plan. This alone makes me want to jump ship from Apple once again!",
        "url": "https://erickimphotography.com/blog/2023/07/23/getoutofthesilos/",
        "urlToImage": null,
        "publishedAt": "20230724T03:02:35Z",
        "content": "For example, my insane annoyance with the hard 2TB limit for Apple Family iCloud plan. This alone makes me want to jump ship from Apple once again!"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 14 Pro Max系列 A2896 5G手机 256GB 暗紫色 8009元",
        "description": "Apple 苹果 iPhone 14 Pro Max系列 A2896 5G手机 256GB 暗紫色 8009元,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
        "url": "https://www.smzdm.com/p/86072318/",
        "urlToImage": "https://y.zdmimg.com/202209/08/63195897038387667.jpg_d250.jpg",
        "publishedAt": "20230724T06:37:02Z",
        "content": "iPhone 14 Pro Max 6.72796*1290460PPIApp1000HDR16002000 ProMotion Super Retina XDR 1 Hz120 HzAlwaysOn\r\niPhone 14 ProA164nm160 6 CPU A1520%A16 Bionic 5 GPU 50% 16 17 iPhone 14 Pro Max 29iPhone 14\r\niPh… [+51 chars]"
        },
        
        {
        "source": {
        "id": null,
        "name": "Johnnyjet.com"
        },
        "author": "Johnny Jet",
        "title": "12 Things to Know Before You Travel to Europe",
        "description": "If you or a friend are planning to travel to Europe this summer, I’m pretty sure you’ll appreciate any advice to help make your travels go smoother and safer. Europe...\nThe post 12 Things to Know Before You Travel to Europe appeared first on Johnny Jet.",
        "url": "https://johnnyjet.com/12thingstoknowbeforeyoutraveltoeurope/",
        "urlToImage": "https://johnnyjet.com/wpcontent/uploads/2023/07/familytripeuropetrevifountainrome.jpg",
        "publishedAt": "20230724T05:29:29Z",
        "content": "If you or a friend are planning to travel to Europe this summer, Im pretty sure youll appreciate any advice to help make your travels go smoother and safer. Europe is one of the busiest places for to… [+9646 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ozbargain.com.au"
        },
        "author": "giventruth",
        "title": "Apple Smart Keyboard Folio for iPad Pro 11inch  $149 Delivered @ TechUnion",
        "description": "The Apple Smart Keyboard Folio for iPad Pro and iPad Air  Price dropped to $149\nWhile Stocks Last!\n\nIncludes Apple Warranty\n\nCompatible Models\niPad Air (5th generation)\niPad Air (4th generation)\niPad Pro 11inch (2nd generation)\niPad Pro 11inch (1st generat…",
        "url": "https://www.ozbargain.com.au/node/789852",
        "urlToImage": "https://files.ozbargain.com.au/n/52/789852x.jpg?h=d7b6630f",
        "publishedAt": "20230724T05:28:45Z",
        "content": "The Apple Smart Keyboard Folio for iPad Pro and iPad Air  Price dropped to $149While Stocks Last!\r\nIncludes Apple Warranty\r\nCompatible ModelsiPad Air (5th generation)iPad Air (4th generation)iPad Pr… [+58 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "mobiFlip.de"
        },
        "author": "Oliver Schwuchow",
        "title": "Apple M3: Wann kommen die neuen Macs und MacBooks?",
        "description": "Apple hat das M2Lineup bei den Macs und MacBooks abgeschlossen und jetzt geht es um die Frage, wie es mit dem M3Lineup aussieht. Mark Gurman hat letzte Woche verraten, dass […]",
        "url": "https://www.mobiflip.de/shortnews/applem3wannkommendieneuenmacsundmacbooks/",
        "urlToImage": "https://www.mobiflip.de/wpcontent/uploads/2021/11/applemacbookpro2021header.jpg",
        "publishedAt": "20230724T05:00:35Z",
        "content": "Apple hat das M2Lineup bei den Macs und MacBooks abgeschlossen und jetzt geht es um die Frage, wie es mit dem M3Lineup aussieht. Mark Gurman hat letzte Woche verraten, dass wir die ersten Modelle v… [+1623 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "mobiFlip.de"
        },
        "author": "Giovanni Senioroce",
        "title": "Thunderbird: Erstes Update für die runderneuerte Version ist da",
        "description": "In der letzten Woche haben wir über das runderneuerte EMailProgramm Thunderbird berichtet, das mit der Version 115 den Beginn einer neuen Ära einläuten will. Mein Wechsel von Apple Mail zu […]",
        "url": "https://www.mobiflip.de/shortnews/thunderbirderstesupdatefuerdierunderneuerteversionistda/",
        "urlToImage": "https://www.mobiflip.de/wpcontent/uploads/2023/07/thunderbirdheader.jpg",
        "publishedAt": "20230724T03:24:22Z",
        "content": "In der letzten Woche haben wir über das runderneuerte EMailProgramm Thunderbird berichtet, das mit der Version 115 den Beginn einer neuen Ära einläuten will. Mein Wechsel von Apple Mail zu Thunderb… [+1817 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Maclife.de"
        },
        "author": "Andreas Donath",
        "title": "Das Ende der iPhoneSModelle",
        "description": "Im Herbst kommt vermutlich das iPhone 15 Pro und das iPhone 15 auf den Markt. Aber was ist eigentlich mit dem SModell passiert? (Weiterlesen)",
        "url": "https://www.maclife.de/news/endeiphonesmodelle100122595.html",
        "urlToImage": "https://www.maclife.de/media/maclife/styles/tec_frontend_opengraph/public/images/editors/2023_30/image1225954599886.png?itok=SjSjAgIh",
        "publishedAt": "20230724T05:02:03Z",
        "content": "Wird es jemals wieder ein \"SModell\" eines iPhone geben? Jahrelang benutzte Apple die SNamenskonvention, um ein Telefon mit demselben Design, aber verbesserten Innereien zu benennen, doch diese iter… [+1438 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "Разработчики приложений пока осторожничают в отношении гарнитуры Apple Vision Pro",
        "description": "Известный своими воскресными откровениями Марк Гурман (Mark Gurman) на страницах Bloomberg вчера обратился к теме созревания программной экосистемы для представленной недавно Apple гарнитуры дополненной реальности Vision Pro. По его словам, большинство разраб…",
        "url": "https://3dnews.ru/1090425/razrabotchikiprilogeniypokaostorognichayutvotnosheniigarnituriapplevisionpro",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/07/24/1090425/Vision_Pro.jpg",
        "publishedAt": "20230724T04:07:00Z",
        "content": "(Mark Gurman) Bloomberg Apple Vision Pro. , . , .\r\n: Apple\r\n, , Apple iPhone, iPad Mac. , 130 . Watch TV Apple , 1 . Vision Pro .\r\n Vision Pro, . , . , iPhone iPad visionOS  , . , iPad . , Vision… [+146 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ferra.ru"
        },
        "author": "Булат Кармак",
        "title": "Netflix отказался создавать специальное приложение для ARочков Apple Vision Pro",
        "description": "Netflix не планирует создавать специальное приложение для ARгарнитуры Apple Vision Pro.",
        "url": "https://www.ferra.ru/news/techlife/netflixotkazalsyasozdavatspecialnoeprilozheniedlyaarochkovapplevisionpro23072023.htm",
        "urlToImage": "https://www.ferra.ru/imgs/2023/07/23/18/6017241/e7ba1410d912678c806e43ec10bd41f370d62d2d.webp",
        "publishedAt": "20230724T04:02:32Z",
        "content": "iPad Apple,  .\r\n, Vision Pro , : iPad Vision Pro. Netflix .\r\n, , Vision Pro, Netflix .\r\n , Netflix , Apple, ."
        },
        {
        "source": {
        "id": null,
        "name": "Ferra.ru"
        },
        "author": "Булат Кармак",
        "title": "Apple начала использовать собственный аналог ChatGPT без лишних анонсов",
        "description": "Apple начала использовать собственный внутренний чатбот для помощи своим сотрудникам в прототипировании будущих функций, суммировании текста и ответах на вопросы на основе данных, на которых он был обучен.",
        "url": "https://www.ferra.ru/news/techlife/applenachalaispolzovatsobstvennyianalogchatgptbezlishnikhanonsov24072023.htm",
        "urlToImage": "https://www.ferra.ru/imgs/2023/07/24/04/6017342/53488390873bac7757836ef806281542632c453e.png",
        "publishedAt": "20230724T05:16:07Z",
        "content": ",  Apple GPT , .\r\n , . AppleCare , .\r\nApple , « , ».\r\n, , , Google, Microsoft , ."
        },
        {
        "source": {
        "id": null,
        "name": "Svetandroida.cz"
        },
        "author": "Marek Houser",
        "title": "Zajímavý přehled: Jak rychle zrychluje rychlé nabíjení v roce 2023?",
        "description": "Analytická společnost Counterpoint Research nedávno zveřejnila statistiku, jak je na tom v letošním roce vývoj na poli rychlého nabíjení mobilních telefonů. Data, která byla posbírána za první kvartál roku 2023 a porovnávaná s minulými obdobími, například řík…",
        "url": "https://www.svetandroida.cz/rychlenabijenivyvojq12023/",
        "urlToImage": "https://www.svetandroida.cz/media/2023/07/rychlenabijenivyvojq12023counterpointresearchanalyzastatistikaprehled.jpg",
        "publishedAt": "20230724T06:00:58Z",
        "content": "Analytická spolenost Counterpoint Research nedávno zveejnila statistiku, jak je na tom v letoním roce vývoj na poli rychlého nabíjení mobilních telefon. Data, která byla posbírána za první kvartál ro… [+1380 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Terra.com.br"
        },
        "author": "Adoro Cinema",
        "title": "A terrível ficção científica com Sylvester Stallone que foi justamente esquecida e agora existe uma versão muito melhor",
        "description": "A adaptação cinematográfica de ficção científica com Sylvester Stallone é um fracasso, mas o modelo original dos quadrinhos finalmente ganhou uma versão a sua altura.",
        "url": "https://www.terra.com.br/diversao/entretelas/aterrivelficcaocientificacomsylvesterstallonequefoijustamenteesquecidaeagoraexisteumaversaomuitomelhor,503ea4d0b46e5bfb9cfaa34b00196e86oostz8fe.html",
        "urlToImage": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/07/24/3293651573f9f0648c9c931bea050348991ba12c1.jpg",
        "publishedAt": "20230724T00:56:02Z",
        "content": "A série distópica dos quadrinhos Judge Dredd foi filmada pela primeira vez em 1995, com Sylvester Stallone no papel principal. Atualmente, no entanto, o filme parece mais um festival trash com efeito… [+1736 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Adslzone.net"
        },
        "author": "Justo Romanos",
        "title": "En esto te tienes que fijar si quieres comprar móviles reacondicionados",
        "description": "Navegando por el catálogo de Amazon o en otras tiendas, es muy posible que te hayas cruzado con el término de «móviles reacondicionados». ¿Pero qué significa? Quizá ya sepas que se trata de terminales de segunda mano o que sepas que no están totalmente nuevos…",
        "url": "https://www.adslzone.net/noticias/moviles/comocomprarmovilesreacondicionados/",
        "urlToImage": "https://www.adslzone.net/app/uploadsadslzone.net/2023/07/Chicajovenmovil.jpg",
        "publishedAt": "20230724T05:00:32Z",
        "content": "Pero esto no quiere decir que el móvil estuviera estropeado originariamente o que algo no estuviera funcionando bien. Aunque hay unidades reacondicionadas que sí tenían problemas con anterioridad, ot… [+6395 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Handelskraft.de"
        },
        "author": "Franziska Kunz",
        "title": "Motion Design als Erfolgsfaktor: 6 Tipps, wie ihr mit Webanimationen die Usability und User Experience eurer digitalen Produkte verbessert",
        "description": "Ihr kennt sie alle. Diese lustigen kleinen Bildchen oder auch Memes, die sich bewegen. Die man sich gerne mal im Teams Chat schickt, um die eigene Stimmung möglichst präzise zum Ausdruck zu bringen. Ein tolles Mittel, um Botschaften ohne große Worte zu transp…",
        "url": "https://www.handelskraft.de/motiondesignanimationenalsgamechanger/",
        "urlToImage": "https://www.handelskraft.de/wpcontent/uploads/2023/07/motiondesignbeitrag.jpeg",
        "publishedAt": "20230724T05:50:11Z",
        "content": "Quelle: skynesher | iStock\r\nIhr kennt sie alle. Diese lustigen kleinen Bildchen oder auch Memes, die sich bewegen. Die man sich gerne mal im Teams Chat schickt, um die eigene Stimmung möglichst präzi… [+12833 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Freebuf.com"
        },
        "author": null,
        "title": "苹果将下架 iMessage 和 FaceTime 以抗议英国新的隐私法案",
        "description": "宁愿停止在英国提供 iMessage 和 FaceTime 服务，也不愿屈服英国政府对数字监控的新提案。",
        "url": "https://www.freebuf.com/news/372896.html",
        "urlToImage": null,
        "publishedAt": "20230724T06:03:32Z",
        "content": "iMessage FaceTime \r\nBBC NewsiPhone 2016 IPA\r\nCSEA\r\n \"\"\r\n 4 ElementSignalThreemaViberMeta WhatsApp Wire \r\nOFCOM \r\n2021 5 WhatsApp \r\n \"\"\r\nSMS\r\nhttps://thehackernews.com/2023/07/applethreatenstopull… [+15 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wetravelthere.com"
        },
        "author": "We Travel There",
        "title": "Scenic Railway, 100 Days of Lights & West Baden Resort in French Lick, Indiana",
        "description": "I’m really excited to interview Brandy Ream of Visit French Lick West Baden about French Lick, Indiana. Brandy’s tips for the best things to do in French Lick are awesome because she was born and raised nearby and moved away after college to run marketing for…",
        "url": "https://wetravelthere.com/frenchlickindianabrandyream/",
        "urlToImage": "https://wetravelthere.com/wpcontent/uploads/2500/07/BestthingstodoinFrenchLickIndianaBrandyReamSunsetatPatokaLake.jpeg",
        "publishedAt": "20230724T01:16:16Z",
        "content": "I’m really excited to interview Brandy Ream of Visit French Lick West Baden about French Lick, Indiana. Brandy’s tips for the best things to do in French Lick are awesome because she was born and rai… [+3960 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Itlifehack.jp"
        },
        "author": "itlifehack",
        "title": "USB PD60W対応！USB TypeCとLightning、2つのコネクタが付いた充電ケーブル",
        "description": "サンワサプライ株式会社が運営している直販サイト『サンワダイレクト』は、USB TypeC Lightning 2in1 USBケーブル 1.2m USB PD60W対応 データ転送 MFi認証品 iPad（10世代） iPhone14対応 ブラック「500IPLM031BK」を発売した。 \n\n■2つのコネクタ付で、ライトニング  Ty...",
        "url": "https://itlifehack.jp/archives/10665676.html",
        "urlToImage": "https://livedoor.blogimg.jp/itlifehack/imgs/2/7/276350cas.jpg",
        "publishedAt": "20230724T04:00:36Z",
        "content": "USB TypeC Lightning 2in1 USB 1.2m USB PD60W MFi iPad10 iPhone14 500IPLM031BK 2  TypeCUSB2.0TypeC2USB2  TypeCUSB2.0TypeC2USB\r\n12\r\nUSB PDUSB Power DeliveryTypeCUSB PD20WTypeCTypeCUSB PD60WAp… [+510 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Overclockers.ru"
        },
        "author": "id_1",
        "title": "Outlook постепенно заменяет Почту и Календарь в Windows 11 — вскоре эти приложения станут историей",
        "description": "Всё когданибудь заканчивается.",
        "url": "https://overclockers.ru/blog/id_1/show/100194/outlookpostepennozamenyaetpochtuikalendarvwindows11vskoreetiprilozheniyastanutistoriej",
        "urlToImage": "https://overclockers.ru/st/legacy/blog/355118/398686_O.jpg",
        "publishedAt": "20230724T01:32:18Z",
        "content": "Microsoft Windows 11, : Ars Technica, Windows 11 Insider Preview Outlook, «» «».\r\n: Microsoft\r\n Outlook, , «».\r\n, Outlook , IMAP , « » Apple iCloud Mail.\r\n «» «»  Windows 11 Insider Preview, . , Mic… [+71 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphonemania.jp"
        },
        "author": "lunatic",
        "title": "iPhone15シリーズ向けの2つの部品が不足〜特にCIS不足は深刻",
        "description": "今秋発売見込みのiPhone15、iPhone15 Plus、iPhone15 Pro、iPhone15 Pro Maxの年内出荷台数について、サプライヤーによる部品供給の観点から、調査会社TrendForceが予想しています。\n\n■3行で分かる、この記事のポイント\n1. iPhone15シリーズ向けの2つの部品が供給不足となっている。\n2. CMOSカメラセンサーとチタン合金フレームの歩留まりが低く供給不足に。\n3. カメラセンサーの歩留まりが上がらなければ出荷台数が減少する可能性も。\n\nCMOSイメージセンサ…",
        "url": "https://iphonemania.jp/news546273/",
        "urlToImage": "https://iphonemania.jp/uploads/2023/07/24/357071690_819898096463459_7783980233688316730_n.jpg",
        "publishedAt": "20230724T06:01:15Z",
        "content": "iPhone15iPhone15 PlusiPhone15 ProiPhone15 Pro MaxTrendForce31. iPhone1522. CMOS3. \r\nCMOS\r\nTrendForceiPhoneCMOSCIS2Phone14 ProiPhone14 Pro Max4,800iPhone15iPhone15iPhone15 Plus\r\nCMOS23CMOSiPhone15/15 … [+219 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Kocpc.com.tw"
        },
        "author": "Rocky",
        "title": "正在等 M3 MacBook Pro 和 Mac Mini 嗎？有可能明年才會推出",
        "description": "先前 Bloomberg 的記者 Mark Gurman 就曾透露過，幾個月後 Apple 有機會推出 M3 晶片的 Mac 電腦，因此相信不少原本有在考慮買新 Mac 的朋友，都先縮手等等看新款。不過有一個壞消息，如果你是在等 M3 MacBook Pro 或 M3 Mac Mini，很可能要等到明年才會見到，但有一款 MacBook Pro 型號應該在第一批就會登場。\nThe post 正在等 M3 MacBook Pro 和 Mac Mini 嗎？有可能明年才會推出 appeared first on 電腦…",
        "url": "https://www.kocpc.com.tw/archives/501651",
        "urlToImage": "https://img.kocpc.com.tw/wpcontent/uploads/2023/07/1689590265167532135d82d0c7254cd5b5991523ef.jpg",
        "publishedAt": "20230724T03:05:21Z",
        "content": "Bloomberg Mark Gurman Apple M3 Mac Mac M3 MacBook Pro M3 Mac Mini MacBook Pro \r\nPower On Mark Gurman 10 Apple M3 Mac M3 Mac mini 2024 M3 Mac \r\nMark Gurman M2 Mac mini M1 2 Apple Mac \r\n 2024 Apple M3 … [+304 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Kocpc.com.tw"
        },
        "author": "Ross Wang",
        "title": "官方 Android 版 ChatGPT app 本週降臨，這裡搶先註冊起來！",
        "description": "Android 使用者沒有 AI 人（人工智慧）權的問題。掀起這波生成式 AI 流行的 OpenAI 也終於正視了這方面的問題，正式在推特宣告官方 直營 正版的 Android 版 ChatGPT app，將會在本週正式降臨的消息。繼續閱讀官方 Android 版 ChatGPT app 本週降臨，這裡搶先註冊起來！報導內文。\nThe post 官方 Android 版 ChatGPT app 本週降臨，這裡搶先註冊起來！ appeared first on 電腦王阿達.",
        "url": "https://www.kocpc.com.tw/archives/501639",
        "urlToImage": "https://img.kocpc.com.tw/wpcontent/uploads/2023/06/1687923296908d028cd1c227d5c648cb3b49906d84.jpg",
        "publishedAt": "20230724T01:25:17Z",
        "content": "Android AI AI OpenAI \r\nAndroid ChatGPT app Android ChatGPT app 9to5Mac Android AirTag AI App Apple Google AirTag \r\n Android AI AI OpenAI \r\nAndroid ChatGPT app\r\nOpenAI Google Play – ChatGPT Android \r\n… [+391 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Mail"
        },
        "author": "Jacqueline Lindenberg",
        "title": "Sean Penn, 62, sweetly holds hands with girlfriend Olga Korotyayeva, 43, during a romantic stroll in New York City",
        "description": "Sean Penn, 62, was spotted holding hands with his new girlfriend and fellow actress, Olga Korotyayeva, 43, as they made their way to Times Square in NYC on Saturday.",
        "url": "https://www.dailymail.co.uk/tvshowbiz/article12330055/SeanPennholdshandsgirlfriendOlgaKorotyayevaromanticstrollNewYorkCity.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2023/07/24/02/735368030imagea67_1690161613436.jpg",
        "publishedAt": "20230724T02:06:08Z",
        "content": "Sean Penn was spotted sweetly holding hands with his girlfriend, Olga Korotyayeva, as the pair enjoyed an outing in New York City on Saturday. \r\nThe Mystic River actor, 62, who was recently seen pass… [+5059 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digiato.com"
        },
        "author": "محمد قریشی",
        "title": "بلومبرگ: اپل درحال استفاده درون سازمانی از چت‌بات Apple GPT است",
        "description": "ظاهراً اپل برای کمک به کارکنان خود، تصمیم گرفته است که چت‌بات Apple GPT را در اختیار آن‌ها قرار دهد.\nThe post بلومبرگ: اپل درحال استفاده درون سازمانی از چت‌بات Apple GPT است appeared first on دیجیاتو.",
        "url": "https://digiato.com/artificialintelligence/applealreadyusingitschatbotinternalwork",
        "urlToImage": "https://static.digiato.com/digiato/2023/07/Apple1.jpg.webp",
        "publishedAt": "20230724T05:30:00Z",
        "content": "Apple GPT . .\r\n Apple GPT . . AppleCare .\r\n . . .\r\n . Apple GPT .\r\n . .\r\n Apple GPT ."
        },
        {
        "source": {
        "id": null,
        "name": "Movilzona.es"
        },
        "author": "Jorge Sanz",
        "title": "La recuperación del mercado de smartphones ya está a la vista",
        "description": "A pesar de que llevamos encadenando varios trimestres de resultados negativos en la venta de smartphones, parece que la luz comienza a aparecer al final del túnel. Eso es al menos en lo que coinciden ya los principales analistas del mercado, y eso a pesar de …",
        "url": "https://www.movilzona.es/branded/b2b/recuperacionmercadosmartphones2023/",
        "urlToImage": "https://www.movilzona.es/app/uploadsmovilzona.es/2023/07/smartphonesventas.jpg",
        "publishedAt": "20230724T03:00:47Z",
        "content": "A pesar de que llevamos encadenando varios trimestres de resultados negativos en la venta de smartphones, parece que la luz comienza a aparecer al final del túnel. Eso es al menos en lo que coinciden… [+3574 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "PC Games Hardware"
        },
        "author": "Andreas Link",
        "title": "Zufriedenheit mit Infotainment in Autos: Zenit überschritten...?",
        "description": "Erstmals in 28 Jahren zeigen sich Autobesitzer mit dem Fortschritt beim Infotainment unzufriedener als noch im Jahr zuvor. Ist der Zenit überschritten? Gehen die AutoHersteller zu weit? So scheint es, wenn man sich die Studie von JD Power anschaut.",
        "url": "https://www.pcgameshardware.de/AutomotiveThema261936/News/ZufriedenheitmitInfotainmentinAutosZenitueberschritten1425024/",
        "urlToImage": "https://www.pcgameshardware.de/screenshots/medium/2022/01/TeslaMic2022pcgh.jpg",
        "publishedAt": "20230724T06:00:00Z",
        "content": "Laut der APEALStudie (Automotive Performance, Execution and Layout) von JD Power liegt die Gesamtzufriedenheit der Autobesitzer bei 845 (auf einer 1.000PunkteSkala), das sind zwei Punkte weniger a… [+2040 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Rg.ru"
        },
        "author": null,
        "title": "Обзор смартфона Google Pixel 7a: надежный Android на долгие годы",
        "description": "Google Pixel 7a хороший выбор для тех, кому нужен небольшой, надежный и мощный смартфон с топовой камерой, которым можно будет пользоваться долгие годы.   Плюсы и минусы.  Примеры фото, снятых на камеру смартфона. Конкуренты и технические  характеристики. Выв…",
        "url": "https://rg.ru/2023/07/24/obzorsmartfonagooglepixel7anadezhnyjandroidnadolgiegody.html",
        "urlToImage": "https://cdnstatic.rg.ru/images/rgsocialdummylogo650x360.jpg",
        "publishedAt": "20230724T04:30:00Z",
        "content": ", Google Android, , Google Pixel 7 , , \"Google \". , Google Pixel , iPhone Apple Galaxy Samsung, , Android, Pixel .\r\n , Google Pixel iPhone, Galaxy , . Pixel. , , \"\" . Google Pixel 7a, BigGeek \"\", .\r\n… [+2539 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Elconfidencial.com"
        },
        "author": "Michael Mcloughlin",
        "title": "Los móviles plegables ya van muy en serio (pero falta esto para que me compre uno)",
        "description": "Sigue habiendo razones para odiarlos. Pero cada vez más para comprarlos. Cinco años después, los 'smartphones' con pantallas flexibles son productos mucho más maduros, aunque todavía hay mucha letra pequeña",
        "url": "https://www.elconfidencial.com/tecnologia/20230724/plegableshonorsamsungmotorolapixel_3704797/",
        "urlToImage": "https://images.ecestaticos.com/1OGBekBHLdKr4v8m6XMcCxEylg=/0x0:2272x1278/600x315/filters:fill(white):format(jpg):quality(99):watermark(f.elconfidencial.com/file/bae/eea/fde/baeeeafde1b3229287b0c008f7602058.png,0,275,1)/f.elconfidencial.com/original/278/e31/c7b/278e31c7bdbfe0a9dc24ae9bdcdd93ce.jpg",
        "publishedAt": "20230724T03:00:00Z",
        "content": "Hay personas que aman el iPhone y hay personas que lo aborrecen hasta tal punto que nunca darían una oportunidad a un teléfono de Apple. Lo mismo pasa con Android. Hay usuarios que se encuentran muy … [+17189 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Onliner.by"
        },
        "author": "Onliner | Технологии",
        "title": "В Apple разрабатывают свой ChatGPT",
        "description": "В мае этого года глава Apple Тим Кук выступил с критикой генеративного ИИ и чатботов, для которых на данный момент характерно немало слабых сторон. Однако в компании, по данным Марка Гурмана из Bloomberg, используют свой Apple GPT для помощи в рабочей рутине…",
        "url": "https://tech.onliner.by/2023/07/24/apple647",
        "urlToImage": "https://content.onliner.by/news/default/d1b153d3e99d1221eb02d5e892fa4fc8.jpeg",
        "publishedAt": "20230724T06:35:11Z",
        "content": "iPhone 14 \r\n Apple , . , Bloomberg, Apple GPT .\r\n  , . Apple , , ,  .\r\n, Apple , . , The Verge, , Apple, . , Apple, Google Microsoft.\r\n  Telegram. !\r\n ?  ."
        },
        {
        "source": {
        "id": null,
        "name": "Iphonejd.com"
        },
        "author": "Jeff Richardson",
        "title": "New Solo podcast  reasons to consider using a Mac instead of a PC",
        "description": "For over a dozen years, law practice consultant Adriana Linares has been hosting a podcast called the New Solo podcast. I'm a big fan of Adriana, and she and I have given numerous presentations together over the years. Her New...",
        "url": "https://www.iphonejd.com/iphone_jd/2023/07/newsolopodcastreasonstoconsiderusingamacinsteadofapc.html",
        "urlToImage": "https://www.iphonejd.com/.a/6a010535fde333970c02b751ac794e200c600wi",
        "publishedAt": "20230724T05:05:00Z",
        "content": "For over a dozen years, law practice consultant Adriana Linares has been hosting a podcast called the New Solo podcast. I'm a big fan of Adriana, and she and I have given numerous presentations toget… [+947 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ithome.com"
        },
        "author": null,
        "title": "科技一周大事（7 月 17 日23 日）：苹果正开发推进“Apple GPT”AI 模型、国产核磁共振技术成功突破国外长期封锁、微软公布 Microsoft 365 Copilot 服务定价",
        "description": "“科技一周大事”，IT之家为大家回顾过去一周（7 月 17 日23 日）科技行业重大重要事件，下面开始播报：1、腾讯微信团队：有零钱的账号不会被系统注销腾讯微信团队微博 7 月 17 日发文表示，微信有零钱的微信号就不会被注销。为保障用户的微信账号安全，注册后不活跃，长期未登录，并且没有零钱的微信账号，会被系统注销，无法使用。>> 查看详情2、暴雪回应国服问题暴雪总裁 Mike Ybarra 在 7 月 15 日的直播中，被问及了关于暴雪游戏国服的事情。在直播中有网友询问，中国服务器有可能在年内回归吗？Mike…",
        "url": "https://www.ithome.com/0/707/751.htm",
        "urlToImage": null,
        "publishedAt": "20230724T05:03:28Z",
        "content": "IT7 17 23 \r\n1\r\n 7 17 &gt;&gt; \r\n2\r\n Mike Ybarra 7 15 Mike Ybarra &gt;&gt; \r\n3 SVIP \r\n Windows 4.6.1 SVIP 3 &gt;&gt; \r\n4 20272028 \r\n 2027 2028 4 7 &gt;&gt; \r\n5 Microsoft 365 Copilot 30 \r\n 7 18 Micro… [+672 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "„Das sind Einzelfälle“, sagt Kretschmann über Gewalttaten im Freibad",
        "description": "Nachdem es auch in BadenWürttemberg zu einer Massenschlägerei in einem Freibad gekommen ist, betont Ministerpräsident Winfried Kretschmann, dass man den Vorfällen konsequent nachgehe. Er warnt davor, „einzelne Übergriffe“ hochzujazzen.",
        "url": "https://www.welt.de/politik/deutschland/article246541246/KretschmannueberGewaltimFreibadDassindEinzelfaelle.html",
        "urlToImage": "https://img.welt.de/img/politik/deutschland/mobile246541256/9261352397ci16x9w1200/WinfriedKretschmann.jpg",
        "publishedAt": "20230724T04:25:17Z",
        "content": "Der badenwürttembergische Ministerpräsident Winfried Kretschmann (Die Grünen) sieht kein flächendeckendes Gewaltproblem in Freibädern in seinem Bundesland. Wir müssen jetzt nicht den Leuten Angst ma… [+1851 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Prtimes.jp"
        },
        "author": null,
        "title": "『BLEACH Brave Souls』8周年を記念した豪華キャンペーンを開催中！",
        "description": "[KLab株式会社]\n[画像1: https://prtimes.jp/i/6348/730/resize/d634873003d82abaf1b2377e9cd20.png ]\n\nブレソル8周年×千年血戦篇キャンペーン第1弾概要\n\n\n■8周年記念ステップアップガチャ\n実施期間：7月23日（日）16:00～7月...",
        "url": "https://prtimes.jp/main/html/rd/p/000000730.000006348.html",
        "urlToImage": "https://prtimes.jp/i/6348/730/ogp/d634873003d82abaf1b2377e9cd20.png",
        "publishedAt": "20230724T03:40:02Z",
        "content": "8\r\n72316:0073115:59\r\n88ver.8ver.\r\nSTEP65121\r\n8PV\r\nhttps://youtu.be/xINsIamamHo\r\n8ver.\r\n8\r\n(8ver.)\r\n8\r\n8MIX\r\n72316:0081515:59\r\n81110100\r\n1051\r\n86\r\n72316:0083115:59\r\n101\r\n8\r\n72816:0082015:59\r\n8\r\n5 5\r\n8… [+1563 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Prtimes.jp"
        },
        "author": null,
        "title": "【NEXTトレンド情報満載】下半期に流行る家電・乗り物・日用品をサキヨミ大特集【ゲットナビ9・10月合併号は7月24日発売】",
        "description": "[株式会社ワン・パブリッシング]\n[画像1: https://prtimes.jp/i/60318/583/resize/d6031858331ab2243e608fe060d7110.jpg ]\n\n\n\n\n【総力特集】NEXTトレンド予報\n\nコロナ以前の日常がほぼ戻ったいま、気付けば2023年も後半戦に突入。\nこの先売れ...",
        "url": "https://prtimes.jp/main/html/rd/p/000000583.000060318.html",
        "urlToImage": "https://prtimes.jp/i/60318/583/ogp/d6031858331ab2243e608fe060d7110.jpg",
        "publishedAt": "20230724T01:00:00Z",
        "content": "2023!!ContentsBig Wave 01 Apple Vision ProBig Wave 02 Big Wave 03 Big Wave 04 &amp;WBig Wave 05 \r\n \r\nNFTChannel YouTuberNFT851NFTURIBOYouTuberNFT“”!! \r\n \r\n2YOASOBI“”OCHA NORMA910 ChatGPT! ! !!\r\n910 8… [+152 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Prtimes.jp"
        },
        "author": null,
        "title": "Switch版「夢幻戦士ヴァリスCOLLECTION３」開発決定！クラウドファンディング第３弾本日開始！",
        "description": "[株式会社エディア]\n[画像1: https://prtimes.jp/i/21592/653/resize/d2159265342517595793df1df0c8f0.jpg ]\n\n過去２回の「ヴァリス復活応援プロジェクト」では非常に多くの皆様から心のこもった応援や激励のメッセージをいただき...",
        "url": "https://prtimes.jp/main/html/rd/p/000000653.000021592.html",
        "urlToImage": "https://prtimes.jp/i/21592/653/ogp/d2159265342517595793df1df0c8f0.jpg",
        "publishedAt": "20230724T04:40:03Z",
        "content": "COLLECTIONCOLLECTION II2\r\n2PC88COLLECTION 3\r\n3\r\nPC88IIMSX2IIISUPER5Nintendo SwitchCOLLECTION 3\r\nNintendo SwitchCOLLECTIONDLDL\r\nURL https://www.makuake.com/project/valis03/\r\n202372412:0083018:00\r\n5,… [+688 chars]"
        }
        ],
      loading: false
    }
  }
  async componentDidMount() {
    let url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2023-07-24&' +
    'sortBy=popularity&' +
    'apiKey=9f3f41f6b2e94c0585b71945d10f3724';

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ arcticles: parsedData.arcticles })
  }

  handlePrevClick = async () => {
    let url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2023-07-24&' +
    'sortBy=popularity&' +
    'apiKey=9f3f41f6b2e94c0585b71945d10f3724';

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({

      page: this.state.page -1 ,
    arcticles: parsedData.arcticles 
   
    })
  }

  handleNextClick = async () => {

    let url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2023-07-24&' +
    'sortBy=popularity&' +
    'apiKey=9f3f41f6b2e94c0585b71945d10f3724';

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
    arcticles: parsedData.arcticles 
   
    })
  }

  render() {
    return (
      <div className="container my 3">
        <h2>Flashfeed Main Headlines</h2>
        <div className="row">
          {this.state.arcticle.map((element) => {
            return <div className="colmd4">
              <NewsItem key={element.url} title={element.title.slice(0, 44)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}

        </div>
        <div className="container dflex justifycontentbetween my4">
          <button disabled={this.state.page <= 1} type="button" className="btn btndanger" OnClick={this.handlePrevClick}>&larr;Previous</button>
          <button type="button" className="btn btndanger" OnClick={this.handleNextClick}>Next&rarr;</button>

        </div>
      </div>

    )
  }
}

export default News
