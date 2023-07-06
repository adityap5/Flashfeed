import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

    arcticle =  [
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "Jon Porter",
          "title": "OnePlus Nord 3 arrives with 80W fast charging and promise of three major Android updates - The Verge",
          "description": "OnePlus has announced the OnePlus Nord 3. It’s got a 120Hz screen, a 50-megapixel main camera, 80W fast charging, and up to four years of updates.",
          "url": "https://www.theverge.com/2023/7/5/23783711/oneplus-nord-price-release-date-specs-details",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/oQHwOqsM82kE94y0ZIh35TwW-Fo=/0x0:1350x900/1200x628/filters:focal(675x450:676x451)/cdn.vox-cdn.com/uploads/chorus_asset/file/24769936/PC_Community_black.jpg",
          "publishedAt": "2023-07-05T14:19:30Z",
          "content": "OnePlus Nord 3 arrives with 80W fast charging and promise of three major Android updates\r\nOnePlus Nord 3 arrives with 80W fast charging and promise of three major Android updates\r\n / The new headline… [+3276 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BusinessLine"
          },
          "author": "K V Kurmanath",
          "title": "Capturing the universe’s hum: Researchers find evidence of ultra-low frequency gravitational waves - BusinessLine",
          "description": "The InPTA experiment also involves researchers from NCRA (Pune), TIFR (Mumbai), IIT (Roorkee), IISER (Bhopal), IMSc (Chennai), and RRI (Bengaluru), along with colleagues from Kumamoto University, Japan.",
          "url": "https://www.thehindubusinessline.com/news/science/capturing-the-universes-hum-researchers-find-evidence-of-ultra-low-frequency-gravitational-waves/article67045059.ece",
          "urlToImage": "https://bl-i.thgim.com/public/incoming/6whaqi/article67045784.ece/alternates/LANDSCAPE_1200/IMG_Radio_telescopes_and_2_1_4EBE3VE9.jpg",
          "publishedAt": "2023-07-05T14:04:55Z",
          "content": "Anything related to space is always fascinating. Moreso if it is about the massive distances, the things that fly far and wide and the sounds that they might make. \r\nResearchers at the Indian Institu… [+2010 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Moneycontrol News",
          "title": "RBI issues draft circular on issuance of debit, credit and prepaid cards - Moneycontrol",
          "description": "The central bank says the existing arrangements between card networks and card issuers are not conducive for customers",
          "url": "https://www.moneycontrol.com/news/business/rbi-issues-draft-circular-on-issuance-of-debit-credit-and-prepaid-cards-10910291.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/04/bank_cards_banking_financial-services1-3-770x433.jpg",
          "publishedAt": "2023-07-05T13:07:05Z",
          "content": "The Reserve Bank of India (RBI) on July 5 issued a draft circular on the issuance of debit, credit and prepaid cards.\r\nIn the circular on arrangements with card networks for the issue of debit, credi… [+793 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "THE WEEK"
          },
          "author": "Abhinav Singh",
          "title": "Why is design of rover crucial for Moon missions like Chandrayaan-3? - The Week",
          "description": "It must be well suited to withstand the harsh conditions of lunar surface",
          "url": "https://www.theweek.in/news/sci-tech/2023/07/05/why-is-design-of-rover-crucial-for-moon-missions-like-chandrayaan-3.html",
          "urlToImage": "https://www.theweek.in/content/dam/week/news/2022/images/2023/2/Chandrayaan-3-ISRO-ISRO.jpg",
          "publishedAt": "2023-07-05T13:03:40Z",
          "content": "ISRO's Chandrayaan-3 mission is all set to make its mark by deploying a lander and rover near the south pole of the Moon, a region known for its unique and challenging terrain. The lunar south pole i… [+8331 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Daijiworld.com"
          },
          "author": null,
          "title": "Mangaluru: House submerged due to heavy rainfall, residents demand action - Daijiworld.com",
          "description": "Daijiworld Media Network – Mangaluru (ANK)\r\nMangaluru, Jul 5: A house located adjacent to Prema Layout has been completely submerged in water due to heavy rainfall over the past three days.\r\nPrashanth Shetty and his wife Harshini Shetty, both software enginee…",
          "url": "https://www.daijiworld.com/news/newsDisplay?newsID=1096761",
          "urlToImage": "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_050723_Chowki24.jpg",
          "publishedAt": "2023-07-05T12:22:06Z",
          "content": "Daijiworld Media Network Mangaluru (ANK)\r\nMangaluru, Jul 5: A house located adjacent to Prema Layout has been completely submerged in water due to heavy rainfall over the past three days.\r\nPrashanth … [+2102 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Moneycontrol News",
          "title": "BSE rejig: JSW Steel to replace HDFC in Sensex from July 13 - Moneycontrol",
          "description": "The rejig is a result of the completion of the biggest corporate merger of HDFC with HDFC Bank.",
          "url": "https://www.moneycontrol.com/news/business/markets/bse-rejig-jsw-steel-to-replace-hdfc-in-sensex-from-july-13-10909081.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/08/JSW-Steel5-580x435.jpg",
          "publishedAt": "2023-07-05T11:50:48Z",
          "content": "JSW Steel will replace mortgage major Housing Development Finance Corporation (HDFC) in S&amp;P BSE Sensex index from July 13, according to the bourse's release on July 5.\r\nThe rejig is a result of t… [+1609 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "SpaceNews"
          },
          "author": "Jeff Foust",
          "title": "Radio noise from satellite constellations could interfere with astronomers - SpaceNews",
          "description": "Large satellite constellations can unintentionally generate electromagnetic noise, creating an additional source of interference for radio astronomers.",
          "url": "https://spacenews.com/radio-noise-from-satellite-constellations-could-interfere-with-astronomers/",
          "urlToImage": "https://spacenews.com/wp-content/uploads/2023/07/rfi-radioastronomy.jpg",
          "publishedAt": "2023-07-05T11:45:17Z",
          "content": "WASHINGTON Large satellite constellations can unintentionally generate electromagnetic noise, creating an additional source of interference for radio astronomers.\r\nAstronomers announced July 5 that t… [+4296 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Biotecnika.org"
          },
          "author": "Shekhar",
          "title": "‘SMART INSULIN’ Developed By IIT Bhilai & SNU Researchers – A Potential Game-Changer in Diabetes Care - BioTecNika",
          "description": "SMART INSULIN Developed By IIT Bhilai & SNU Researchers - A Potential Game-Changer in Diabetes care & Treatment.",
          "url": "https://www.biotecnika.org/2023/07/smart-insulin-by-iit-bhilai-snu-researchers-for-diabetes-care/",
          "urlToImage": "https://cdn.biotecnika.org/wp-content/uploads/2023/07/Blue-Women-Shoes-Review-Youtube-Thumbnail.jpg",
          "publishedAt": "2023-07-05T11:11:38Z",
          "content": "Smart Insulin by IIT Bhilai &amp; SNU Researchers\r\nA pioneering development in the field of diabetes care has been accomplished by scientists from the Indian Institute of Technology (IIT) Bhilai, in … [+2205 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "Major leak reveals iPhone 15 can get a BIG battery boost - HT Tech",
          "description": "if you’ve been planning to purchase the iPhone 15 upon launch, Apple might have given you one more reason to go for it as iPhone 15 could feature larger batteries.",
          "url": "https://tech.hindustantimes.com/mobile/news/major-leak-reveals-iphone-15-can-get-a-big-battery-boost-71688554781342.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2023/07/05/1600x900/nubelson-fernandes-S8xWhJFidWQ-unsplash_1688554983813_1688554996376.jpg",
          "publishedAt": "2023-07-05T11:04:24Z",
          "content": "The iPhones have always delivered strong performance and great cameras, but they have never been known to have an amazing battery life. While your iPhone 13 or iPhone 14 will get you through the day,… [+1911 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Deccan Chronicle"
          },
          "author": "DC Correspondent",
          "title": "GST officers assaulted, kidnapped during raid at scrap shop in Hyderabad - Deccan Chronicle",
          "description": "GST officers assaulted, kidnapped during raid at scrap shop in Hyderabad",
          "url": "https://www.deccanchronicle.com/nation/crime/050723/gst-officers-assaulted-kidnapped-during-raid-at-scrap-shop-in-hyderab.html",
          "urlToImage": "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-bamrg5tupsjso6pi3v7tma9rv7-20230705161807.Medi.jpeg",
          "publishedAt": "2023-07-05T10:56:52Z",
          "content": "The accused are identified as Syed Feroz, owner of a Grade I Iron store and his business associates."
        },
        {
          "source": {
            "id": null,
            "name": "Deccan Chronicle"
          },
          "author": "DC Correspondent",
          "title": "Hyderabad: 12 persons stuck in elevator at shopping mall for over an hour, rescued - Deccan Chronicle",
          "description": "Hyderabad: 12 persons stuck in elevator at shopping mall for over an hour, rescued",
          "url": "https://www.deccanchronicle.com/nation/current-affairs/050723/hyderabad-12-persons-stuck-in-elevator-at-shopping-mall-for-over-an-h.html",
          "urlToImage": "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-bamrg5tupsjso6pi3v7tma9rv7-20230705154821.Medi.jpeg",
          "publishedAt": "2023-07-05T10:21:54Z",
          "content": "After repeated attempts by the mall staff failed to rescue them, the group reached out to the fire department and police."
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Nikhil Agarwal",
          "title": "Maruti Suzuki shares cross Rs 10,000 milestone for first time on Invicto SUV launch - Economic Times",
          "description": "Invicto marks Maruti's entry into the premium three-row segment, as it looks to gain a foothold in the above Rs 20 lakh segment with the new model after having attained leadership in the Rs 15-20 lakh vehicle segment last fiscal. Price of the new car's 7-seat…",
          "url": "https://economictimes.indiatimes.com/markets/stocks/news/maruti-suzuki-shares-cross-rs-10000-milestone-for-first-time-on-invicto-suv-launch/articleshow/101514502.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-101514466,width-1070,height-580,imgsize-44436,overlay-etmarkets/photo.jpg",
          "publishedAt": "2023-07-05T09:57:00Z",
          "content": "NEW DELHI: Shares of Maruti Suzuki India on Wednesday rallied 4% to cross the Rs 10,000 milestone for the first time ever after India's largest car maker launched its new SUV Invicto.The Nifty stock … [+2490 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Bar & Bench - Indian Legal News"
          },
          "author": "Prashant Jha",
          "title": "Go First insolvency: Delhi High Court allows aircraft lessors access to planes, permission to carry out maintenance work - Bar & Bench - Indian Legal News",
          "description": "The Delhi High Court on Wednesday allowed aircraft lessors access to the planes they had leased out to Go First Airlines and to carry out maintenance work on th",
          "url": "https://www.barandbench.com/news/litigation/go-first-resolution-professional-cannot-use-planes-leased-airlines-without-approval-aircraft-lessors-delhi-high-court",
          "urlToImage": "https://gumlet.assettype.com/barandbench%2F2023-05%2Ffa482e3f-6722-4441-96c2-f44c1331213c%2F14.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
          "publishedAt": "2023-07-05T09:51:06Z",
          "content": "Justice Tara Vitasta Ganju issued directions to the Director General of Civil Aviation (DGCA) to allow the lessors' representatives to inspect the planes, considering the fact that extremely valuable… [+681 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "\"Not One Senior Player Among Them...\": Stuart Broad Bewildered Over Australia's Act In Jonny Bairsto.. - NDTV Sports",
          "description": "Stuart Broad opened up about the ongoing discussion regarding the Jonny Bairstow dismissal and explained his point of view.",
          "url": "https://sports.ndtv.com/ashes-2023/not-one-senior-player-among-them-stuart-broad-bewildered-over-australias-act-in-jonny-bairstow-ashes-episode-4176870",
          "urlToImage": "https://c.ndtvimg.com/2023-07/hcgda6kg_jonny-bairstow-afp_625x300_04_July_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
          "publishedAt": "2023-07-05T09:32:40Z",
          "content": "The conversation over Jonny Bairstow's controversial dismissal during the second Ashes Test match between England and Australia at Lord's has led to a broader conversation over the 'spirit of cricket… [+1966 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Daijiworld.com"
          },
          "author": null,
          "title": "Xiaomi India completes 9 years, strengthens commitment to further empower lives - Daijiworld.com",
          "description": "New Delhi, Jul 5 (IANS): Xiaomi India, the country's leading smartphone and smart TV brand, on Wednesday said it is immensely proud to celebrate nine successful years in India.\r\nAs it completed nine years of success, the organisation said it remains dedicated…",
          "url": "https://www.daijiworld.com/news/newsDisplay?newsID=1096677",
          "urlToImage": "http://daijiworld.com/images/daijiSquareLogo.png",
          "publishedAt": "2023-07-05T09:26:22Z",
          "content": "New Delhi, Jul 5 (IANS): Xiaomi India, the country's leading smartphone and smart TV brand, on Wednesday said it is immensely proud to celebrate nine successful years in India.\r\nAs it completed nine … [+3765 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "CME attack threatens Earth with DANGEROUS solar storm, shows NASA SOHO; 1-2 punch likely - HT Tech",
          "description": "Two Earth-directed CMEs have been detected by NASA’s Solar and Heliospheric Observatory. They are expected to hit the Earth on July 7 and can spark a powerful solar storm. Check details.",
          "url": "https://tech.hindustantimes.com/tech/news/cme-attack-threatens-earth-with-dangerous-solar-storm-shows-nasa-soho-1-2-punch-likely-71688548685068.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2023/07/05/1600x900/sun-2224937_1280_1677654423439_1688548730714.jpg",
          "publishedAt": "2023-07-05T09:22:02Z",
          "content": "After an amazing sunspot-filled June, July appears set to continue the trend of extreme solar volatility. We have already seen a radio blackout this month after a solar flare erupted on the notorious… [+2395 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "News18"
          },
          "author": "Sanstuti Nath",
          "title": "Ajit Pawar News LIVE: Bhujbal Asks Sharad Pawar to 'Remove Middlemen' as 30+ MLAs of Team Ajit Gather; 14 L - News18",
          "description": "Maharashtra Political Crisis Live Updates: Maharashtra Deputy CM Ajit Pawar said that support for Prime Minister Narendra Modi is unprecedented, and urged people to vote for Modi because of his 'charismatic image'",
          "url": "https://www.news18.com/politics/ajit-pawar-maharashtra-politics-crisis-live-updates-sharad-pawar-ncp-govt-shiv-sena-bjp-livenews-8251999.html",
          "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-2023-07-04t153252.087-168846525816x9.jpg",
          "publishedAt": "2023-07-05T08:44:42Z",
          "content": "Jul 05, 2023 18:40 ISTAjit Pawar Cited Resolution Signed by 40 MLAs Electing Him as NCP National President: ECI\r\nThe Election Commission of India confirmed receiving petition by Ajit Pawar in which h… [+8666 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TIMESOFINDIA.COM",
          "title": "Watch: Shah Rukh Khan spotted at Mumbai airport after reports of accident in the US - Indiatimes.com",
          "description": "Shah Rukh Khan was spotted at the Mumbai Airport a day after reports of his injury and subsequent nose surgery in the United States went viral. At the airport, Shah Rukh Khan accompanied by wife, Gauri Khan and youngest son, AbRam. King Khan straight",
          "url": "https://timesofindia.indiatimes.com/videos/viral-videos/watch-shah-rukh-khan-spotted-at-mumbai-airport-after-reports-of-accident-in-the-us/videoshow/101511167.cms",
          "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-101511167,imgsize-45260.cms",
          "publishedAt": "2023-07-05T08:23:47Z",
          "content": "Jul 05, 2023, 01:53PM ISTSource: ANIShah Rukh Khan was spotted at the Mumbai Airport a day after reports of his injury and subsequent nose surgery in the United States went viral. At the airport, Sha… [+786 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Pratidintime.com"
          },
          "author": "Pratidin Bureau",
          "title": "World Zoonoses Day 2023: Date, Significance, and History - Pratidin Time",
          "description": "World Zoonoses Day is an annual observance held on July 6 to honor the achievements of Louis Pasteur, a renowned French biologist. This day commemorates Pasteur",
          "url": "https://www.pratidintime.com/education/world-zoonoses-day-2023-date-significance-and-history",
          "urlToImage": "https://gumlet.assettype.com/pratidintime%2F2023-07%2F5ec746c5-7a65-44a2-ae97-b584ed02ad81%2FWhatsApp_Image_2023_07_05_at_12_11_00_PM.jpeg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
          "publishedAt": "2023-07-05T07:25:07Z",
          "content": "World Zoonoses Day is an annual observance held on July 6 to honor the achievements of Louis Pasteur, a renowned French biologist. This day commemorates Pasteur's groundbreaking administration of the… [+3849 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ESPN India"
          },
          "author": "ESPN",
          "title": "Man United sign Mason Mount from Chelsea in £60m deal - ESPN - ESPN India",
          "description": "Manchester United have completed the signing of midfielder Mason Mount from Chelsea, the club announced on Wednesday.",
          "url": "https://www.espn.in/football/story/_/id/37937971/man-united-sign-mason-mount-chelsea-60m-deal",
          "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0705%2Fr1194234_1296x729_16%2D9.jpg",
          "publishedAt": "2023-07-05T06:57:00Z",
          "content": "Manchester United have completed the signing of midfielder Mason Mount from Chelsea, the club announced on Wednesday.\r\nMount has signed a contract until the end of the 2027-28 season, with the option… [+1916 chars]"
        }
      ]
    constructor() {
        super();
        this.state = {
            arcticle: this.arcticle
        }
    }


    render() {
        return (
            <div className="container my 3">
                <h2>Flashfeed Main Headlines</h2>
                <div className="row">
                    {this.state.arcticle.map((element) => {
                        return <div className="col-md-4">
                            <NewsItem key={element.url} title={element.title.slice(0,44)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
            </div>

        )
    }
}

export default News
