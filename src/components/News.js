import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

arcticle =[
     {
     "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Threads: Ten million join Meta's Twitter rival, Zuckerberg says   BBC",
    "description": "The Meta chief is hoping Threads, his new Instagram linked app, will beat Twitter on numbers.",
    "url": "https://www.bbc.com/news/technology 66112648",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/160DA/production/_130303309_threads_getty.jpg",
    "publishedAt": "2023 07 06T10:59:49Z",
    "content": "Ten million users signed up for Meta's newly launched Threads app in its first seven hours, the company's chief Mark Zuckerberg says.\r\nHe pitched the app as a \"friendly\" rival to Twitter, which was b… [+5618 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "FOX 2 Detroit"
    },
    "author": "FOX 2 Detroit",
    "title": "Wynter Smith's body recovered in Detroit; What we know about case of Lansing 2 year old   FOX 2 Detroit",
    "description": "The 2 year old was taken from her home Sunday night after a man assaulted her mom before kidnapping her, police previously said. She was found early Wednesday night.",
    "url": "https://www.fox2detroit.com/news/wynter smiths body recovered in detroit what we know about case of lansing 2 year old",
    "urlToImage": "https://images.foxtv.com/static.fox2detroit.com/www.fox2detroit.com/content/uploads/2023/07/1280/720/wynter presser.jpg?ve=1&tl=1",
    "publishedAt": "2023 07 06T10:55:27Z",
    "content": "DETROIT (FOX 2)   After a frantic search across the state that included several police agencies and nearly three agonizing days for family members, the body of Wynter Smith was discovered in an alley… [+2975 chars]"
    },
     {
     "source": {
    "id": "financial times",
    "name": "Financial Times"
    },
    "author": "Polina Ivanova",
    "title": "Yevgeny Prigozhin has been in Russia, says Alexander Lukashenko   Financial Times",
    "description": "Belarusian president claims Wagner Group leader has been moving freely in Russia despite deal to relocate with his fighters",
    "url": "https://www.ft.com/content/7a9e498c ebed 46d0 8cd9 9565c3e7ab11",
    "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fedf811b9 112d 4166 8511 d6e8a938f87c.jpg?source=next opengraph&fit=scale down&width=900",
    "publishedAt": "2023 07 06T10:48:51Z",
    "content": "Russian warlord Yevgeny Prigozhin has been spending time in Russia, Belarusian president Alexander Lukashenko said, despite a peace deal with Moscow under which he had agreed to relocate to Belarus.\r… [+4215 chars]"
    },
     {
     "source": {
    "id": "usa today",
    "name": "USA Today"
    },
    "author": "Mike Snider",
    "title": "It's National Fried Chicken Day! Here's where to find discounted food with free delivery and more.   USA TODAY",
    "description": "National Fried Chicken Day means deals and discounts on chicken sandwiches, wings and other dishes from KFC, Bojangles, Popeyes and more.",
    "url": "https://www.usatoday.com/story/money/food/2023/07/06/national fried chicken day deals free delivery/70384408007/",
    "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/07/05/USAT/223e8904 d96a 492c b82a 57bc8e651896 BWW_Boneless_Wings.jpg?crop=2399,1349,x1,y196&width=2399&height=1349&format=pjpg&auto=webp",
    "publishedAt": "2023 07 06T10:07:11Z",
    "content": "Just because there's no known origin for National Fried Chicken Day doesn't mean we can't celebrate the made up holiday this Thursday, June 6th.\r\nThe folks at the National Day Calendar, where you can… [+6037 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Ukraine war: Four killed in Lviv as Russian strike hits apartment building in western city   BBC",
    "description": "Among the dead are a 21 year old women and a 95 year old who had survived World War Two.",
    "url": "https://www.bbc.com/news/world europe 66117111",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1D6A/production/_130303570_c1e767e3b468e7a60367dd9fb52fdeee036e30c4.jpg",
    "publishedAt": "2023 07 06T09:35:31Z",
    "content": "Media caption, Watch: Lviv apartments turned to rubble by rocket fire\r\nAt least four people, including two women aged 21 and 95, have been killed after a Russian rocket hit an apartment building in L… [+3717 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Hollywood Reporter"
    },
    "author": "Scott Roxborough",
    "title": "Luca Guadagnino’s Zendaya Starrer ‘Challengers’ to Open Venice   Hollywood Reporter",
    "description": "The drama, set in the world of competitive tennis, co stars Josh O'Connor and Mike Faist.",
    "url": "https://www.hollywoodreporter.com/movies/movie news/zendaya luca guadagninos challengers to open 2023venice film festival 1235530003/",
    "urlToImage": "https://www.hollywoodreporter.com/wp content/uploads/2023/06/TIRE_TOWN_STILLS_PULL_230607_002_RC H 2023.jpg?w=1024",
    "publishedAt": "2023 07 06T09:24:29Z",
    "content": "Luca Guadagnino’s Challengers, a ménage à trois tennis drama starring Zendaya, Josh O’Connor and Mike Faist, will open the 80th Venice Film Festival, the festival announced Thursday. The film will sc… [+2734 chars]"
    },
     {
     "source": {
    "id": "cbs news",
    "name": "CBS News"
    },
    "author": null,
    "title": "Rare dialysis complication can kill patients in minutes   CBS News",
    "description": "By some estimates, at least one American dies every week from what's known as venous needle dislodgment. But a relatively simple solution is available.",
    "url": "https://www.cbsnews.com/news/hemodialysis needle dislodgment at home can be deadly/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/05/46a10430 85ff 4e26 a1c0 d72b5cb9fa90/thumbnail/1200x630g2/2fc8d1b391f96820f9e4b792fbb96620/gedneydialysis 03.jpg?v=46148a329842187f630d57e5930d74c4",
    "publishedAt": "2023 07 06T09:00:15Z",
    "content": "Nieltje Gedney was half asleep in her West Virginia home, watching murder mysteries over the hum of a bedside hemodialysis machine, when she felt something warm and wet in her armpit.\r\nA needle inser… [+9082 chars]"
    },
     {
     "source": {
    "id": "politico",
    "name": "Politico"
    },
    "author": null,
    "title": "J.D. Vance's new target: Wall Street banks   POLITICO",
    "description": "They're teaming up on bills that the industry’s biggest players despise.",
    "url": "https://www.politico.com/news/2023/07/05/j d vance senate banks 00104432",
    "urlToImage": "https://static.politico.com/5a/52/a34330d0480d92339da07edb6269/j d vance 68651.jpg",
    "publishedAt": "2023 07 06T08:30:00Z",
    "content": "Warren, who enlisted Vance to build GOP support for a bill to claw back compensation from executives of failed banks, said hes been terrific to work with.\r\nWe have to figure out what is the actual po… [+5346 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "DW (English)"
    },
    "author": "Deutsche Welle",
    "title": "Europe's Ariane 5 rocket lifts off for final time   DW (English)",
    "description": "The European Space Agency's Ariane 5 \"workhorse\" rocket has marked its 117th and final mission on Thursday after 27 years of service.",
    "url": "https://www.dw.com/en/europes ariane 5 rocket lifts off for final time/a 66129755",
    "urlToImage": "https://static.dw.com/image/66129886_6.jpg",
    "publishedAt": "2023 07 06T07:12:34Z",
    "content": "The European Space Agency said its Ariane 5 rocket successfully took off from French Guinea for the final time on Wednesday night.\r\nThe rocket carried two military communications satellites, namely, … [+909 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "The Times of Israel"
    },
    "author": null,
    "title": "The banality of occupation: How sewage and imports drive West Bank conflict   The Times of Israel",
    "description": "Part of the story of escalating violence is as boring as it is devastating: Bureaucratic ineptitude, driven by the lack of democracy in areas under its control",
    "url": "https://www.timesofisrael.com/the banality of occupation how sewage and imports drive west bank conflict/",
    "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/07/33M39UD highres 1024x640.jpg",
    "publishedAt": "2023 07 06T06:51:04Z",
    "content": "The Israel Defense Forces spokesperson was adamant.\r\nWe didnt come to conquer the refugee camp [in Jenin],” he said Monday. “This isnt an operation against the Palestinian Authority, its an operation… [+22797 chars]"
    },
     {
     "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Aya Elamroussi",
    "title": "Philadelphia mass shooting was ‘obviously planned,’ DA says. But investigation could still take months   CNN",
    "description": "The man facing murder charges in the shootings of five people in a Philadelphia neighborhood earlier this week “obviously planned” the rampage, but the investigation into other factors of the case could take months as authorities dig for more details, a distr…",
    "url": "https://www.cnn.com/2023/07/06/us/philadelphia shooting thursday/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230705214514 01 philadelphia shooting investigation 040323 restricted.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023 07 06T06:42:00Z",
    "content": "The man facing murder charges in the shootings of five people in a Philadelphia neighborhood earlier this week obviously planned the rampage, but the investigation into other factors of the case coul… [+7631 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "MLB.com"
    },
    "author": "Mark Sheldon",
    "title": "Elly De La Cruz hits 455 foot homer after bat checked by umps   MLB.com",
    "description": "WASHINGTON    In a capital city always salivating for its political scandals, the Nationals thought Reds rookie Elly De La Cruz might be involved in a baseball one. But alas, \"Knobgate\" wasn't to be.\nA couple of at bats after controversy about a swing tracker…",
    "url": "https://www.mlb.com/news/elly de la cruz hits 455 foot homer after bat checked by umps",
    "urlToImage": "https://img.mlbstatic.com/mlb images/image/upload/t_2x1/t_w1536/mlb/iaff0zy1xtudryieuc8b.jpg",
    "publishedAt": "2023 07 06T05:12:42Z",
    "content": "WASHINGTON    In a capital city always salivating for its political scandals, the Nationals thought Reds rookie Elly De La Cruz might be involved in a baseball one. But alas, \"Knobgate\" wasn't to be.… [+4056 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "BuzzFeed News"
    },
    "author": "Leyla Mohammed",
    "title": "Kim And Kourtney Kardashian Finally Confronted Each Other About Their Incredibly Messy Feud After Weeks Of Seriously Shady Digs. Here’s How Things Went Down.   BuzzFeed News",
    "description": "Kourtney and Kim admitted that there’s been an “underlying weirdness” between them since their infamous physical fight back in 2020 as they reflected on how distant they’ve gotten in recent years.",
    "url": "https://www.buzzfeednews.com/article/leylamohammed/kim kardashian and kourtney kardashian discuss feud",
    "urlToImage": "https://img.buzzfeed.com/buzzfeed static/static/2023 07/5/14/enhanced/2cc734d127df/original 594 1688568043 4.jpg?crop=1243:650;7,18%26downsize=1250:*",
    "publishedAt": "2023 07 06T04:46:02Z",
    "content": null
    },
     {
     "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Mets vs D Backs Highlights: Francisco Alvarez hits game tying 9th inning homer in 2 1 win | SNY   SNY",
    "description": "Kodai Senga pitched an eight inning gem against the Diamondbacks on Wednesday but the Mets offense was quiet until Francisco Alvarez belted a game tying home...",
    "url": "https://www.youtube.com/watch?v=AiIhmy 12qE",
    "urlToImage": "https://i.ytimg.com/vi/AiIhmy 12qE/maxresdefault.jpg",
    "publishedAt": "2023 07 06T04:38:51Z",
    "content": null
    },
     {
     "source": {
    "id": null,
    "name": "The Athletic"
    },
    "author": "Jared Weiss",
    "title": "Exclusive: Grant Williams talks Dallas Mavs trade, leaving Boston Celtics behind   The Athletic",
    "description": "Grant Williams spoke to The Atheltic shortly after joining the Dallas Mavericks in a sign and trade Wednesday.",
    "url": "https://theathletic.com/4669565/2023/07/06/grant williams dallas mavs trade boston celtics/",
    "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/07/05234755/GettyImages 1487412829 scaled.jpg",
    "publishedAt": "2023 07 06T04:18:00Z",
    "content": "Grant Williams has packed up his apartment before. He had a small apartment in Boston when he was first drafted, then saved up enough money to move into a nicer spot.\r\nBut this time was different. He… [+7375 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Rolling Stone"
    },
    "author": "Jodi Guglielmi",
    "title": "Kim Kardashian Breaks Down in Tears Over Kanye’s Antisemitism   Rolling Stone",
    "description": "During the latest episode of Hulu’s The Kardashians, Kim is reduced to tears while discussing Kanye West’s antisemitic meltdown",
    "url": "https://www.rollingstone.com/tv movies/tv movie recaps/kim kardashian breaks down tears kanye west antisemitism the kardashians 1234782971/",
    "urlToImage": "https://www.rollingstone.com/wp content/uploads/2023/07/xkr 307 sg04_r.jpg?w=1600&h=900&crop=1",
    "publishedAt": "2023 07 06T04:12:07Z",
    "content": "Kim Kardashian is feeling the weight of Kanye West’s hateful words. During Wednesday’s episode of The Kardashians, Kim broke down in tears after her ex husband made headlines earlier this year follow… [+4502 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "KOB"
    },
    "author": "Christina Rodriguez",
    "title": "4 Investigates: Oriental Health Spa in Albuquerque   KOB.com   KOB 4",
    "description": "Four years ago, 4 Investigates exposed a dark secret going on behind the doors of some local massage businesses.",
    "url": "https://www.kob.com/new mexico/4 investigates oriental health spa in albuquerque/",
    "urlToImage": "https://www.kob.com/wp content/uploads/akta/588B7373EF0E663B34D974D6C8B103D4.jpg",
    "publishedAt": "2023 07 06T04:06:06Z",
    "content": "Four years ago, 4 Investigates exposed a dark secret going on behind the doors of some local massage businesses. \r\nOur cameras captured workers offering sexual favors, and they witnessed signs of hum… [+6081 chars]"
    },
     {
     "source": {
    "id": "nbc news",
    "name": "NBC News"
    },
    "author": "Reuters",
    "title": "Biden administration appeals ban on social media contacts   NBC News",
    "description": "The notice of appeal follows a ruling against the administration’s efforts to persuade social media companies to police posts it considered disinformation.",
    "url": "https://www.nbcnews.com/politics/politics news/biden administration appeals ban social media contacts rcna92797",
    "urlToImage": "https://media cldnry.s nbcnews.com/image/upload/t_nbcnews fp 1200 630,f_auto,q_auto:best/rockcms/2023 07/230705 white house exterior ac 1130p 0a349a.jpg",
    "publishedAt": "2023 07 06T02:08:00Z",
    "content": "The Biden administration on Wednesday appealed a federal judges ruling restricting some agencies and officials from meeting and communicating with social media companies to moderate their content, ac… [+1645 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "Fox Business"
    },
    "author": "Suzanne O'Halloran",
    "title": "BlackRock's Bitcoin spot ETF will ‘democratize’ crypto: CEO Larry Fink   Fox Business",
    "description": "BlackRock CEO Larry Fink says investors are at a disadvantage without a proper Bitcoin exchange traded fund and his firm is hoping the SEC will feel the same way.",
    "url": "https://www.foxbusiness.com/markets/blackrocks bitcoin spot etf will democratize crypto ceo larry fink",
    "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/Bittrex.jpg?ve=1&tl=1",
    "publishedAt": "2023 07 06T01:12:00Z",
    "content": "BlackRock CEO Larry Fink may be biased when it comes to his firm’s application for a spot Bitcoin exchange traded fund, but he tells FOX Business the product would even the playing field for investor… [+2819 chars]"
    },
     {
     "source": {
    "id": null,
    "name": "KPRC Click2Houston"
    },
    "author": "Corley Peel",
    "title": "Cousin of Rudy Farias talks to KPRC 2; neighbor captures video of his mom saying, 'they want to arrest me'   KPRC Click2Houston",
    "description": "Eight years after Rudy Farias was found alive, his cousin, Cassandra Lopez, told KPRC 2 reporter Corley Peel she has more concerns than relief.",
    "url": "https://www.click2houston.com/news/local/2023/07/06/cousin of rudy farias talks to kprc 2 neighbors capture video of his mom saying they want to arrest me/",
    "urlToImage": "https://res.cloudinary.com/graham media group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc cf/07 06 2023/t_9b8a69ace2ca48028699fe530c3a732b_name_image.jpg?_a=ATAPphC0",
    "publishedAt": "2023 07 06T00:37:24Z",
    "content": "HOUSTON Eight years after Rudy Farias was found alive, his cousin, Cassandra Lopez, told KPRC 2 reporter Corley Peel she has more concerns than relief.\r\nI was in shock. I was like, I couldnt believe … [+2039 chars]"
    }
    ]
    constructor(){
        super();
        this.state = {
            arcticle:this.arcticle
        }
    }

    
  render() {
    return (
      <div className="container my 3">
        <h2>Flashfeed Main Headlines</h2>
        <div className="row my 3">
            <div className="col md 4"> <NewsItem title="myTitle" description="myDescription imageUrl="  newsUrl="TODO"/> </div>
         
         <div className="col md 4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col md 4"> <NewsItem title="myTitle" description="myDescription"/></div>
   
   
    </div>
    <div className="row my 3">
            <div className="col md 4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col md 4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col md 4"> <NewsItem title="myTitle" description="myDescription"/></div>
   
   
    </div>
    {/* <div className="row my 3">
            <div className="col md 4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col md 4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col md 4"> <NewsItem title="myTitle" description="myDescription"/></div>
   
   
    </div> */}
    
    </div>
    
    )
  }
}

export default News
