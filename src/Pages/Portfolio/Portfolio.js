import React, { useEffect, useState } from "react";
import './style.css';
import {
  Container,
  Row,
  Col,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import PortfolioItem from '../../components/Portfolio-Item/Portfolio-Item';

function Portfolio() {
  const items = [
    {
      name: "DupeGen",
      date: "",
      repoLink: "https://github.com/charlesmbrady/DupeGen2",
      deployedLink: "https://dupegen-66277.herokuapp.com/",
      description: "Creates duplicate records based on fields you select, then allows you to download them as a .csv file.  Meant to create entire database tables of known data-quality *including* 'bad' data.",
      technologies: ["React","CircleCI","Javascript", "HTML", "CSS", "Bootstrap","Express","Node"],
      comments: "", //had a lot of trouble with inserting mongoDB data in large scales, also had a hard time with the downloading csv
      type: "project", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",  //TODO: create youtube video going over this
      image: "/assets/dupegen.png",
      tags: ["React","download","csv","CircleCI","Javascript", "HTML", "CSS", "Bootstrap","Continuous Integration","Express","Node","fullstack"],
    },
    //TODO: add google book search, sipspot, and dog finder
    {
      name: "Hangman",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Word-Guess-Game",
      deployedLink: "http://charlesmbrady.com/Word-Guess-Game/",
      description: "A classic hangman movie-title guessing game with a Disney theme",
      technologies: ["javascript", "html", "css", "bootstrap"],
      comments: "",
      type: "project", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "", //TODO: create youtube video going through this
      image: "/assets/hangman.png",
      tags: ["javascript", "html", "css", "bootstrap"]
      
    },
    {
      name: "SipSpot",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Project3",
      deployedLink: "https://sipspot.herokuapp.com/",
      description: "Track your drinks to get an estimated BAC.  Also, checkin your location and get a message reminding you to get your things if you go too far.  Easily call an Uber, or share your location with friends too. Designed for mobile use. ",
      technologies: ["React","MongoDB","Javascript", "HTML", "CSS", "Bootstrap","Express","Node"],
      comments: "", //had a lot of trouble with inserting mongoDB data in large scales, also had a hard time with the downloading csv
      type: "project", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",  //TODO: create youtube video going over this
      image: "/assets/sipspot.png",
      tags: ["React","MongoDB","Javascript", "HTML", "CSS", "Bootstrap","Express","Node","fullstack", "authentication"],
    },
    {
      name: "Scrape 'N Surf",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Mongo-News-Scraper",
      deployedLink: "https://scrape-n-surf-58013.herokuapp.com/",
      description: "Web scraper for viewing surfing news articles.  Save your favorite ones in the database to view them later, and even write notes for each article.",
      technologies: ["React","MongoDB","Javascript", "HTML", "CSS", "Bootstrap","Express","Node"],
      comments: "", //had a lot of trouble with inserting mongoDB data in large scales, also had a hard time with the downloading csv
      type: "project", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",  //TODO: create youtube video going over this
      image: "/assets/scrapnsurf.png",
      tags: ["React","MongoDB","Javascript", "HTML", "CSS", "Bootstrap","Express","Node","fullstack"],
    },
    {
      name: "Woofer",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Woofer",
      deployedLink: "https://woofer-21948.herokuapp.com/",
      description: "Create a matchmaking profile for you and your dog(s).  Then, view other user's profiles and propose a meetup at one of the locations.",
      technologies: ["mySql","TravisCI","Javascript", "HTML", "CSS", "Bootstrap","Express","Node", "Heroku"],
      comments: "", //had a lot of trouble with inserting mongoDB data in large scales, also had a hard time with the downloading csv
      type: "project", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",  //TODO: create youtube video going over this and POLISH
      image: "/assets/woofer.png",
      tags: ["Handlebars", "authentication","mySQL","Sequelize","Express","Node","TravisCI"],
    },
    {
      name: "Star Wars Game",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Star-Wars-Game",
      deployedLink: "http://charlesmbrady.com/Star-Wars-Game/",
      description: "An RPG game with a Star Wars theme",
      technologies: ["javascript", "html", "css", "bootstrap", "jQuery"],
      comments: "",
      type: "activity", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",  //TODO: create youtube video going through this
      image: "/assets/starwarsrpg.png",
      tags: ["Javascript", "jQuery", "bootstrap", "html", "css"]
    },
    {
      name: "Trivia Game",
      date: "",
      repoLink: "https://github.com/charlesmbrady/TriviaGame",
      deployedLink: "http://charlesmbrady.com/TriviaGame/",
      description: "A trivia game using timers",
      technologies: ["javascript", "html", "css", "bootstrap", "jQuery", "timers"],
      comments: "",
      type: "project", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",  //TODO: create youtube video going through this
      image: "/assets/trivia.png",
      tags: ["html","css","timers","jQuery","html","bootstrap"]
    },
    {
      name: "GifTastic",
      date: "",
      repoLink: "https://github.com/charlesmbrady/GifTastic",
      deployedLink: "http://charlesmbrady.com/GifTastic/",
      description: "An app that pulls in gifs from the Giphy API",
      technologies: ["javascript", "html", "css", "bootstrap", "jQuery", "API"],
      comments: "",
      type: "", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "", //TODO: create youtube video going through this
      image: "/assets/giftastic.png",
      tags: ["javascript", "html", "css", "bootstrap", "jQuery", "API"]
    },
    {
      name: "Train Scheduler",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Train_Scheduler",
      deployedLink: "http://charlesmbrady.com/Train_Scheduler/",
      description: "An app that simulates train schedules",
      technologies: ["javascript", "html", "css", "bootstrap", "jQuery", "firebase", "moment.js"],
      comments: "",
      type: "activity", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "", //TODO: create youtube video going through this
      image: "/assets/trainscheduler.png",
      tags: ["moment", "firebase", "javascript", "html", "css", "bootstrap", "jQuery", "API"],
    },
    {
      name: "LIRI Node app",
      date: "",
      repoLink: "https://github.com/charlesmbrady/liri-node-app",
      deployedLink: "",
      description: "LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.",
      technologies: ["javascript", "node", "API,", "moment.js", "CLI"],
      comments: "",
      type: "activity", //project, activity
      cli: true, //if this is a CLI only app or  it has a UI
      youtubeLink: "https://www.youtube.com/embed/vl4foqJEThM",
      image: "",
      tags: ["inquirer","javascript", "node", "API,", "moment.js", "CLI"],
    },
    {
      name: "WhereWatch",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Project-1",
      deployedLink: "http://charlesmbrady.com/Project-1/",
      description: "app for finding what streaming services your favorite tv shows and movies are on",
      technologies: [],
      comments: "",
      type: "project", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",
      image: "/assets/wherewatch.png",
      tags: ["firebase","API","javascript","html","css"]
    },
    {
      name: "Constructor Hangman",
      date: "",
      repoLink: "https://github.com/charlesmbrady/constructor-word-guess",
      deployedLink: "",
      description: "Hangman CLI app",
      technologies: [],
      comments: "",
      type: "activity", //project, activity
      cli: true, //if this is a CLI only app or  it has a UI
      youtubeLink: "",
      image: "/assets/constructorwordguess.png",
      tags: ["inquirer","javascript", "node", "CLI"],
    },
    {
      name: "Bamazon",
      date: "",
      repoLink: "https://github.com/charlesmbrady/bamazon",
      deployedLink: "",
      description: "Ebay-like CLI app that allows you to choose products for purchase",
      technologies: [],
      comments: "",
      type: "activity",
      cli: true, //if this is a CLI only app or  it has a UI
      youtubeLink: "https://www.youtube.com/embed/AGJjvxJdOjs",
      image: "",
      tags: ["inquirer","javascript", "node", "CLI"],
    },
    {
      name: "GoogleBookSearch",
      date: "",
      repoLink: "https://github.com/charlesmbrady/GoogleBookSearch",
      deployedLink: "https://google-books-search-45506.herokuapp.com/",
      description: "Search for books using the GoogleBooks API",
      technologies: ["React","MongoDB","Javascript", "HTML", "CSS", "Bootstrap","Express","Node", "Heroku"],
      comments: "", //had a lot of trouble with inserting mongoDB data in large scales, also had a hard time with the downloading csv
      type: "project", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",  //TODO: create youtube video going over this and POLISH
      image: "/assets/googlebooksearch.png",
      tags: ["React","MongoDB","Express","Node"],
    },
  ];

  const [display, setDisplay] = useState(items);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //when the component mounts.....
  useEffect(() => {
    //TODO: when the app loads, put all the tags from each object into an array, that way the array can be looped through to create the filters
  }, []);


  return (
    <Container>
      <Row className="portfolio-layout">
        <Col className="offset-md-8">
          <Dropdown isOpen={dropdownOpen} onClick={() => setDropdownOpen(!dropdownOpen)}>
            <DropdownToggle caret>
              Filter
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Not</DropdownItem>
              <DropdownItem>Functional</DropdownItem>
              <DropdownItem>Yet</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="portfolio-layout">
        <Col>
          <div id="portfolio-body row">
            {items.map((item, i) => (
              <PortfolioItem
                key={i}
                name={item.name}
                date={item.date}
                repoLink={item.repoLink}
                deployedLink={item.deployedLink}
                description={item.description}
                technologies={item.technologies}
                comments={item.comments}
                type={item.type}
                cli={item.cli}
                youtubeLink={item.youtubeLink}
                image={item.image}
                tags={item.tags}
              />
            ))}


          </div>
        </Col>
      </Row>

    </Container>
  );

}

export default Portfolio;
