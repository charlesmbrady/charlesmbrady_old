import React, { useEffect, useState } from "react";
import './style.css';
import {
  Container
} from 'reactstrap';
import PortfolioItem from '../../components/Portfolio-Item/Portfolio-Item';

function Portfolio() {
  const items = [
    {
      name: "Hangman",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Word-Guess-Game",
      deployedLink: "http://charlesmbrady.com/Word-Guess-Game/",
      description: "A classic hangman movie-title guessing game with a Disney theme",
      technologies: ["javascript", "html", "css", "bootstrap"],
      comments: "",
      type: "", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",
      image: "",
      tags: []
    },
    {
      name: "Star Wars Game",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Star-Wars-Game",
      deployedLink: "http://charlesmbrady.com/Star-Wars-Game/",
      description: "An RPG game with a Star Wars theme",
      technologies: ["javascript", "html", "css", "bootstrap", "jQuery"],
      comments: "",
      type: "", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",
      image: "",
      tags: []
    },
    {
      name: "Trivia Game",
      date: "",
      repoLink: "https://github.com/charlesmbrady/TriviaGame",
      deployedLink: "http://charlesmbrady.com/TriviaGame/",
      description: "A trivia game using timers",
      technologies: ["javascript", "html", "css", "bootstrap", "jQuery", "timers"],
      comments: "",
      type: "", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",
      image: "",
      tags: []
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
      youtubeLink: "",
      image: "",
      tags: []
    },
    {
      name: "Train Scheduler",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Train_Scheduler",
      deployedLink: "http://charlesmbrady.com/Train_Scheduler/",
      description: "An app that simulates train schedules",
      technologies: ["javascript", "html", "css", "bootstrap", "jQuery", "firebase", "moment.js"],
      comments: "",
      type: "", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",
      image: "",
      tags: []
    },
    {
      name: "LIRI Node app",
      date: "",
      repoLink: "https://github.com/charlesmbrady/liri-node-app",
      deployedLink: "#",
      description: "LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.",
      technologies: ["javascript", "node", "API,", "moment.js", "CLI"],
      comments: "",
      type: "", //project, activity
      cli: true, //if this is a CLI only app or  it has a UI
      youtubeLink: "",
      image: "",
      tags: []
    },
    {
      name: "WhereWatch",
      date: "",
      repoLink: "https://github.com/charlesmbrady/Project-1",
      deployedLink: "http://charlesmbrady.com/Project-1/",
      description: "app for finding what streaming services your favorite tv shows and movies are on",
      technologies: [],
      comments: "",
      type: "", //project, activity
      cli: false, //if this is a CLI only app or  it has a UI
      youtubeLink: "",
      image: "",
      tags: []
    },
    {
      name: "Constructor Hangman",
      date: "",
      repoLink: "https://github.com/charlesmbrady/constructor-word-guess",
      deployedLink: "#",
      description: "Hangman CLI app",
      technologies: [],
      comments: "",
      type: "", //project, activity
      cli: true, //if this is a CLI only app or  it has a UI
      youtubeLink: "",
      image: "",
      tags: []
    },
    {
      name: "Bamazon",
      date: "",
      repoLink: "https://github.com/charlesmbrady/bamazon",
      deployedLink: "#",
      description: "Ebay-like app",
      technologies: [],
      comments: "",
      type: "", //project, activity
      cli: true, //if this is a CLI only app or  it has a UI
      youtubeLink: "",
      image: "",
      tags: []
    }
  ];

  const [display, setDisplay] = useState(items);

  //when the component mounts.....
  useEffect(() => {
    console.log("hello Portfolio page");
  }, []);


  return (
    <Container>
      
      <div id="portfolio-body">
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
    </Container>
  );

}

export default Portfolio;
