import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category:'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
  }
  articles=[
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Sarah Whitten",
        "title": "'Dune: Part Two' hits theaters Friday amid box office drought - CNBC",
        "description": "While Warner Bros. is projecting a conservative $65 million debut \"Dune: Part Two,\" box office analysts foresee a haul between $70 million and $80 million.",
        "url": "https://www.cnbc.com/2024/02/29/dune-part-two-hits-theaters-friday-amid-box-office-drought.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107379932-1709152348994-dune_2_Cropped.jpg?v=1709152467&w=1920&h=1080",
        "publishedAt": "2024-02-29T13:59:57Z",
        "content": "Timothee Chalamet stars as Paul Atreides in Denis Villeneuve's \"Dune: Part Two.\"\r\nLOS ANGELES Movie theater operators are hoping that Warner Bros. and Legendary Entertainment's \"Dune: Part Two,\" due … [+4857 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Jack Baer",
        "title": "Caitlin Clark breaks Lynette Woodard's forgotten scoring record, 18 points from passing Pete Maravich - Yahoo Sports",
        "description": "Clark could pass Pistol Pete in her next game.",
        "url": "https://sports.yahoo.com/caitlin-clark-breaks-lynette-woodards-scoring-record-18-points-from-passing-pete-maravich-033012685.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/H9KlJJIlrVhorAhRW.qYzQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-02/35ceaf70-d6b0-11ee-bfbe-7f0a9a4d0e93",
        "publishedAt": "2024-02-29T13:09:53Z",
        "content": "Caitlin Clarkbroke the NCAA women's basketball scoring record two weeks ago, but it was only on Wednesday she became the all-time leading scorer among female college basketball players.\r\nThe Iowa sta… [+2128 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Yaya Dillo: Chad opposition leader killed in shootout - BBC.com",
        "description": "A prosecutor confirms that Yaya Dillo died in an exchange of heavy gunfire with security forces.",
        "url": "https://www.bbc.com/news/world-africa-68435145",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8EAF/production/_132772563_gettyimages-1232609865.jpg",
        "publishedAt": "2024-02-29T13:02:53Z",
        "content": "Opposition politician Yaya Dillo was a vocal opponent of his cousin, President Mahamat Déby\r\nAn opposition leader in Chad has been killed during a shootout with security forces, officials say.\r\nYaya … [+1713 chars]"
      },
      {
        "source": {
          "id": "cbs-news",
          "name": "CBS News"
        },
        "author": "Aimee Picchi",
        "title": "Oprah Winfrey says she's stepping down from WeightWatchers. Its shares are cratering. - CBS News",
        "description": "Oprah Winfrey said that she's stepping back from her board seat at WeightWatchers after nine years, and will donate her WW stock.",
        "url": "https://www.cbsnews.com/news/oprah-winfrey-weight-watchers-ozempic/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/12/15/cab7bb79-5605-417f-ae16-162d01254881/thumbnail/1200x630/18ab88363f987e7370610eb8b5f003ca/oprah.jpg?v=873773698949ef4145348bb09cabd43d",
        "publishedAt": "2024-02-29T12:56:00Z",
        "content": "Oprah Winfrey's interview shines spotlight on weight-loss drugs \r\nOprah Winfrey's interview shines spotlight on weight-loss drugs02:18\r\nOprah Winfrey said she's stepping down from her role at WeightW… [+2434 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "nj.com"
        },
        "author": "Jeff Goldman | NJ Advance Media for NJ.com",
        "title": "Powerball ticket worth $2M bought in N.J. as jackpot climbs to $443M - NJ.com",
        "description": "Lottery officials will disclose later today where the second-prize ticket for Wednesday's drawing was sold.",
        "url": "https://www.nj.com/lottery/2024/02/powerball-ticket-worth-2m-bought-in-nj-as-jackpot-climbs-to-443m.html",
        "urlToImage": "https://www.nj.com/resizer/8weVXmAzuniCaoJ5NbWm_EGg_jg=/1280x0/filters:focal(2205x1120:2215x1110)/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/CCJ3TWW2JNFCLMTIHKHFSA6ZJ4.jpg",
        "publishedAt": "2024-02-29T11:44:00Z",
        "content": "A Powerball ticket worth $2 million was purchased in New Jersey for Wednesdays nights lottery drawing.\r\nThe lucky second-prize ticket matched five numbers but not the Powerball and was bought with th… [+1163 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Guillaume LAVALLÉE",
        "title": "Fears grow in Israel of war with Lebanon's Hezbollah - Yahoo News",
        "description": "In the green hills of the Israeli-occupied Golan Heights near Lebanon, Arye and Ditza Alon are hiking through a tranquil nature reserve, wondering whether...",
        "url": "https://news.yahoo.com/fears-grow-israel-war-lebanons-114115510.html",
        "urlToImage": "https://media.zenfs.com/en/afp.com/572eb4eaeae142433738bbe65758c894",
        "publishedAt": "2024-02-29T11:41:15Z",
        "content": "In the green hills of the Israeli-occupied Golan Heights near Lebanon, Arye and Ditza Alon are hiking through a tranquil nature reserve, wondering whether the wider region could become a war zone.\r\nW… [+4779 chars]"
      },
      {
        "source": {
          "id": "abc-news",
          "name": "ABC News"
        },
        "author": "Patrick Reevell",
        "title": "France again floats idea of sending non-combat troops to Ukraine - ABC News",
        "description": "French President Emmanuel Macron also said it should not be “ruled out.\"",
        "url": "https://abcnews.go.com/International/france-floats-idea-sending-combat-troops-ukraine/story?id=107669159",
        "urlToImage": "https://i.abcnewsfe.com/a/e2abd139-2e93-4e3d-8553-9cbd09e73251/ukraine-troops_1709205322222_hpMain_16x9.jpg?w=1600",
        "publishedAt": "2024-02-29T11:27:39Z",
        "content": "LONDON -- Frances foreign minister has suggested that Western countries should be considering the idea that NATO troops should perhaps be deployed to Ukraine in non-combat roles to assist Ukraine.\r\nF… [+2330 chars]"
      },
      {
        "source": {
          "id": "abc-news",
          "name": "ABC News"
        },
        "author": "Isabella Murray",
        "title": "Illinois judge says 14th Amendment bars Trump from 2024 primary ballot - ABC News",
        "description": "The U.S. Supreme Court is currently considering the broader dispute.",
        "url": "https://abcnews.go.com/Politics/illinois-judge-14th-amendment-bars-trump-2024-primary/story?id=107657552",
        "urlToImage": "https://i.abcnewsfe.com/a/b7c34c61-412f-4486-a48f-22b495d144bd/trump-civil-trial-gty-lv-240213_1707872962291_hpMain_16x9.jpg?w=1600",
        "publishedAt": "2024-02-29T11:23:42Z",
        "content": "A judge in Cook County, Illinois, on Wednesday ruled that Section 3 of the 14th Amendment, also known as the \"insurrection clause,\" bars former President Donald Trump from the 2024 Republican primary… [+1550 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Samantha Subin",
        "title": "Stock futures fall as Wall Street awaits the Fed's preferred inflation gauge: Live updates - CNBC",
        "description": "The three major averages are headed for another winning month.",
        "url": "https://www.cnbc.com/2024/02/28/stock-market-today-live-updates.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107365772-17065463212024-01-29t163710z_1513754650_rc2qr5agbtnx_rtrmadp_0_usa-stocks.jpeg?v=1706726997&w=1920&h=1080",
        "publishedAt": "2024-02-29T11:20:00Z",
        "content": "Stock futures fell as Wall Street weighed the latest earnings results and looked ahead to the Federal Reserve's favored inflation gauge.\r\nFutures tied to the Dow Jones Industrial Average slipped 128 … [+1706 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters",
        "title": "Putin warns West of risk of nuclear war, says Moscow can strike Western targets - Reuters",
        "description": null,
        "url": "https://www.reuters.com/world/europe/putin-warns-west-risk-nuclear-war-says-moscow-can-strike-western-targets-2024-02-29/",
        "urlToImage": null,
        "publishedAt": "2024-02-29T11:15:00Z",
        "content": null
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "WAFAA SHURAFA, KAREEM CHEHAYEB",
        "title": "Israel-Hamas war: Gaza Health Ministry says over 30,000 Palestinians killed - The Associated Press",
        "description": "Witnesses say Israeli troops fired on a crowd of Palestinians waiting for aid in Gaza City. According to healthy officials, more than 100 people were killed, bringing the death toll since the start of the Israel-Hamas war to more than 30,000. Hospital officia…",
        "url": "https://apnews.com/article/israel-hamas-war-news-02-29-2024-f9b5a62a80d8b83eac4946d3c85af58b",
        "urlToImage": "https://dims.apnews.com/dims4/default/0441b27/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa8%2F65%2F4f23caac3a4fd737a557cf591a7f%2F133c1fdd0c4d4d01b1be61469e7a477e",
        "publishedAt": "2024-02-29T11:10:00Z",
        "content": "RAFAH, Gaza Strip (AP) Israeli troops fired on a crowd of Palestinians waiting for aid in Gaza City on Thursday, witnesses said. More than 100 people were killed, bringing the death toll since the st… [+5560 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Joan Biskupic",
        "title": "Trump uses the slow legal system to his advantage. The Supreme Court is helping - CNN",
        "description": "The Supreme Court’s decision to hear Donald Trump’s claim that he should be shielded from criminal prosecution keeps the justices at the center of election-year controversy for several more months and means any verdict on Trump’s alleged subversion of the 202…",
        "url": "https://www.cnn.com/2024/02/28/politics/supreme-court-immunity-trump-biskupic-analysis/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/161206113020-trump-supreme-court-nominee-t1-20231211213249076.jpeg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-02-29T11:08:00Z",
        "content": "The Supreme Courts decision to hear Donald Trumps claim that he should be shielded from criminal prosecution keeps the justices at the center of election-year controversy for several more months and … [+7331 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Joe Sutton, Steve Almasy",
        "title": "At least 1 dead as large wildfires sweep through the Texas panhandle, including the second-largest blaze in state history - CNN",
        "description": "The second-largest fire in Texas history continues to burn Thursday, with the blaze – already bigger than Rhode Island – and several others destroying scores of homes in the state’s panhandle and killing at least one person and thousands of cattle.",
        "url": "https://www.cnn.com/2024/02/29/us/texas-panhandle-smokehouse-creek-fire-thursday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240228104731-smokehouse-creek-fire.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-02-29T11:08:00Z",
        "content": "The second-largest fire in Texas history continues to burn Thursday, with the blaze already bigger than Rhode Island and several others destroying scores of homes in the states panhandle and killing … [+5397 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "WESH Orlando"
        },
        "author": "Scott Heidler",
        "title": "Crew-8 mission: Preparation for Florida launch moves forward - WESH 2 Orlando",
        "description": "High winds in the ascent corridor forced SpaceX and NASA to reschedule Friday's launch.",
        "url": "https://www.wesh.com/article/crew-8-launch-delayed/60022846",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/a6bf9f22-0b3c-485d-acf2-9d273965eca1-65dfc00aa4a95.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "publishedAt": "2024-02-29T10:18:00Z",
        "content": "BREVARD COUNTY, Fla. —The NASA/SpaceX Crew-8 mission has been delayed.\r\nHigh winds in the ascent corridor forced SpaceX and NASA to reschedule Friday's launch.\r\nThey are now targeting March 2 at 11:1… [+1734 chars]"
      },
      {
        "source": {
          "id": "politico",
          "name": "Politico"
        },
        "author": "POLITICO",
        "title": "Inside Mitch McConnell's Season of Losses - POLITICO - POLITICO",
        "description": null,
        "url": "https://www.politico.com/news/magazine/2024/02/29/mitch-mcconnell-season-of-losses-00144027",
        "urlToImage": null,
        "publishedAt": "2024-02-29T10:00:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "NBCSports.com"
        },
        "author": "Michael David Smith",
        "title": "Buccaneers say they'll listen to feedback after low grades on NFLPA report card - NBC Sports",
        "description": "The NFL Players Association's report card of NFL teams serves as a means of calling out the teams that give players the worst treatment.",
        "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/buccaneers-say-theyll-listen-to-feedback-after-low-grades-on-nflpa-report-card",
        "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/fc193b5/2147483647/strip/true/crop/4789x2694+0+143/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fd9%2F51%2F24f405a748a3b652163cca9ab6f6%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D13249936",
        "publishedAt": "2024-02-29T08:31:41Z",
        "content": "The NFL Players Associations report card of NFL teams serves as a means of calling out the teams that give players the worst treatment. Those teams are taking notice.\r\nThe Buccaneers issued an organi… [+1064 chars]"
      },
      {
        "source": {
          "id": "mashable",
          "name": "Mashable"
        },
        "author": "Amanda Yeo",
        "title": "Electronic Arts announces layoffs and cancels Star Wars game - Mashable",
        "description": "It's EA's second mass layoff in less than a year.",
        "url": "https://mashable.com/article/ea-electronic-arts-layoffs-star-wars-fps-cancelled",
        "urlToImage": "https://helios-i.mashable.com/imagery/articles/00umcnCCaiKJeLyMoHrZ8Bd/hero-image.fill.size_1200x675.v1709190791.jpg",
        "publishedAt": "2024-02-29T08:07:45Z",
        "content": null
      },
      {
        "source": {
          "id": "abc-news",
          "name": "ABC News"
        },
        "author": "Patricio Chile, Carson Blackwelder",
        "title": "Richard Lewis, comedian and 'Curb Your Enthusiasm' actor, dies at 76 - ABC News",
        "description": "Lewis played a fictionalized version of himself on the HBO comedy.",
        "url": "https://abcnews.go.com/GMA/Culture/richard-lewis-comedian-curb-enthusiasm-actor-dies-76/story?id=107649359",
        "urlToImage": "https://i.abcnewsfe.com/a/313f0521-3e3a-4e6e-9a39-0d300bb6a109/richard-lewis-gty-jef-240228_1709153433230_hpMain_16x9.jpg?w=1600",
        "publishedAt": "2024-02-29T07:51:39Z",
        "content": "Richard Lewis, the comedian and actor known for his roles on the HBO comedy \"Curb Your Enthusiasm\" and in the film \"Robin Hood: Men in Tights,\" has died. He was 76.\r\nLewis \"passed away peacefully\" at… [+2596 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Athletic"
        },
        "author": "Jovan Buha and Law Murray",
        "title": "Lakers pull off 21-point fourth-quarter comeback to beat Clippers - The Athletic",
        "description": "The win bumped the Lakers (32-28) ahead of the Warriors and back to No. 9 in the West.",
        "url": "https://theathletic.com/5307321/2024/02/29/lakers-clippers-lebron-james-comeback/",
        "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/02/29012601/USATSI_22650590-scaled-e1709189995718.jpg",
        "publishedAt": "2024-02-29T07:07:30Z",
        "content": "The Los Angeles Lakers pulled off a miraculous 21-point fourth-quarter comeback en route to a crucial 116-112 win over the LA Clippers at Crypto.com Arena on Wednesday.\r\nThe Lakers entered the fourth… [+5204 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Stephen Collinson, Priscilla Alvarez, MJ Lee",
        "title": "Biden and Trump’s dueling border visits will encapsulate a building election clash - CNN",
        "description": "Two presidents will visit the southern US border Thursday, highlighting the centrality of migrant surges to November’s election in a spectacle that will explain why America’s polarized politics has for decades failed to fix a broken immigration system.",
        "url": "https://www.cnn.com/2024/02/29/politics/border-visits-biden-trump/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1922777390.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-02-29T06:07:00Z",
        "content": "Two presidents will visit the southern US border Thursday, highlighting the centrality of migrant surges to Novembers election in a spectacle that will explain why Americas polarized politics has for… [+10445 chars]"
      }
    ]
    capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state={
      articles:this.articles,
      loading:false,
      page:1,
      totalResults:0
    }
    document.title=`NewsApp - ${this.capitalizeFirstLetter(this.props.category)}`;
  }
  async updateNews(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f4a1b34ac914726b4d5f620d232a6af&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({
      loading:true,
    });
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
  }
  async componentDidMount(){
    this.updateNews();

  }
  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f4a1b34ac914726b4d5f620d232a6af&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults});
  };
   
  render() {
    return (
      <>
        <h1 className='text-center' style={{margin:'35px 0px'}}>NewsApp - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
      {this.state.loading && <Spinner/>} 
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
          <div className='row'>
            {this.state.articles?.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title.slice(0,45)} description={element.description?.slice(0,50)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}source={element.source.name}/>
          </div>
          })} 
        </div>
          </div>
          </InfiniteScroll>

      </>
    )
  }
}

export default News
