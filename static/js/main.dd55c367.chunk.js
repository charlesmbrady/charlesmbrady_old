(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(71)},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(22),r=a.n(l),s=(a(47),a(48),a(19)),c=a(15),i=(a(49),a(72)),m=a(73),u=a(74);var p=function(){return Object(n.useEffect)(function(){console.log("hello Home page")},[]),o.a.createElement(i.a,null,o.a.createElement("div",{className:"homepage"},o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("h2",{className:"front-page"},"Hi,"),o.a.createElement("h2",{className:"front-page"},"I'm Charles"),o.a.createElement("br",null),o.a.createElement("h2",{className:"front-page fullstack"},"Fullstack Web Developer"))),o.a.createElement(m.a,null,o.a.createElement(u.a,null))))};a(52);var d=function(){return Object(n.useEffect)(function(){console.log("hello About page")},[]),o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement("h1",null,"Hello About Page")))},h=a(11),g=(a(53),a(75)),E=a(84),b=a(76),f=a(77);a(54);var y=function(e){var t=e.name,a=(e.date,e.repoLink),l=e.deployedLink,r=e.description,s=(e.technologies,e.comments,e.type,e.cli,e.youtubeLink),c=e.image,p=e.tags;return Object(n.useEffect)(function(){console.log("hello PortfolioItem page")},[]),o.a.createElement(i.a,{className:"portfolio-item"},o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("h3",null,t))),o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("p",null,r||"No description"))),o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement(m.a,null,o.a.createElement(u.a,null,l?o.a.createElement("div",null,o.a.createElement("a",{href:a,target:"_blank"},"GitHub Repo")," | ",o.a.createElement("a",{href:l,target:"_blank"},"Deployed App")):o.a.createElement("a",{href:a,target:"_blank"},"GitHub Repo")))))),o.a.createElement(u.a,{className:"col-md-6 col-sm-12"},o.a.createElement(m.a,null,o.a.createElement(u.a,null,s?o.a.createElement("iframe",{width:"auto",height:"auto",src:s,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):o.a.createElement("img",{className:"img-fluid img-thumbnail",src:c||"https://via.placeholder.com/150/000000/FFFFFF/?text=No Video",alt:"screenshot"}))),o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("span",null,o.a.createElement("strong",null,"Tags:"))," ",p.join(", ")||"No Tags")))))};var k=function(){var e=[{name:"DupeGen",date:"",repoLink:"https://github.com/charlesmbrady/DupeGen2",deployedLink:"https://dupegen.herokuapp.com/",description:"Creates duplicate records based on fields you select, then allows you to download them as a .csv file.  Meant to create entire database tables of known data-quality *including* 'bad' data.",technologies:["React","CircleCI","Javascript","HTML","CSS","Bootstrap","Express","Node"],comments:"",type:"project",cli:!1,youtubeLink:"https://www.youtube.com/embed/PH5ANolA4dk",image:"/assets/dupegen.png",tags:["React","download","csv","CircleCI","Javascript","HTML","CSS","Bootstrap","Continuous Integration","Express","Node","fullstack"]},{name:"Hangman",date:"",repoLink:"https://github.com/charlesmbrady/Word-Guess-Game",deployedLink:"http://charlesmbrady.com/Word-Guess-Game/",description:"A classic hangman movie-title guessing game with a Disney theme",technologies:["javascript","html","css","bootstrap"],comments:"",type:"project",cli:!1,youtubeLink:"",image:"/assets/hangman.png",tags:["javascript","html","css","bootstrap"]},{name:"SipSpot",date:"",repoLink:"https://github.com/charlesmbrady/Project3",deployedLink:"https://sipspot.herokuapp.com/",description:"Track your drinks to get an estimated BAC.  Also, checkin your location and get a message reminding you to get your things if you go too far.  Easily call an Uber, or share your location with friends too. Designed for mobile use. ",technologies:["React","MongoDB","Javascript","HTML","CSS","Bootstrap","Express","Node"],comments:"",type:"project",cli:!1,youtubeLink:"",image:"/assets/sipspot.png",tags:["React","MongoDB","Javascript","HTML","CSS","Bootstrap","Express","Node","fullstack","authentication"]},{name:"Scrape 'N Surf",date:"",repoLink:"https://github.com/charlesmbrady/Mongo-News-Scraper",deployedLink:"https://scrape-n-surf-58013.herokuapp.com/",description:"Web scraper for viewing surfing news articles.  Save your favorite ones in the database to view them later, and even write notes for each article.",technologies:["React","MongoDB","Javascript","HTML","CSS","Bootstrap","Express","Node"],comments:"",type:"project",cli:!1,youtubeLink:"",image:"/assets/scrapnsurf.png",tags:["React","MongoDB","Javascript","HTML","CSS","Bootstrap","Express","Node","fullstack"]},{name:"Woofer",date:"",repoLink:"https://github.com/charlesmbrady/Woofer",deployedLink:"https://woofer-21948.herokuapp.com/",description:"Create a matchmaking profile for you and your dog(s).  Then, view other user's profiles and propose a meetup at one of the locations.",technologies:["mySql","TravisCI","Javascript","HTML","CSS","Bootstrap","Express","Node","Heroku"],comments:"",type:"project",cli:!1,youtubeLink:"",image:"/assets/woofer.png",tags:["Handlebars","authentication","mySQL","Sequelize","Express","Node","TravisCI"]},{name:"Star Wars Game",date:"",repoLink:"https://github.com/charlesmbrady/Star-Wars-Game",deployedLink:"http://charlesmbrady.com/Star-Wars-Game/",description:"An RPG game with a Star Wars theme",technologies:["javascript","html","css","bootstrap","jQuery"],comments:"",type:"activity",cli:!1,youtubeLink:"",image:"/assets/starwarsrpg.png",tags:["Javascript","jQuery","bootstrap","html","css"]},{name:"Trivia Game",date:"",repoLink:"https://github.com/charlesmbrady/TriviaGame",deployedLink:"http://charlesmbrady.com/TriviaGame/",description:"A trivia game using timers",technologies:["javascript","html","css","bootstrap","jQuery","timers"],comments:"",type:"project",cli:!1,youtubeLink:"",image:"/assets/trivia.png",tags:["html","css","timers","jQuery","html","bootstrap"]},{name:"GifTastic",date:"",repoLink:"https://github.com/charlesmbrady/GifTastic",deployedLink:"http://charlesmbrady.com/GifTastic/",description:"An app that pulls in gifs from the Giphy API",technologies:["javascript","html","css","bootstrap","jQuery","API"],comments:"",type:"",cli:!1,youtubeLink:"",image:"/assets/giftastic.png",tags:["javascript","html","css","bootstrap","jQuery","API"]},{name:"Train Scheduler",date:"",repoLink:"https://github.com/charlesmbrady/Train_Scheduler",deployedLink:"http://charlesmbrady.com/Train_Scheduler/",description:"An app that simulates train schedules",technologies:["javascript","html","css","bootstrap","jQuery","firebase","moment.js"],comments:"",type:"activity",cli:!1,youtubeLink:"",image:"/assets/trainscheduler.png",tags:["moment","firebase","javascript","html","css","bootstrap","jQuery","API"]},{name:"LIRI Node app",date:"",repoLink:"https://github.com/charlesmbrady/liri-node-app",deployedLink:"",description:"LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.",technologies:["javascript","node","API,","moment.js","CLI"],comments:"",type:"activity",cli:!0,youtubeLink:"https://www.youtube.com/embed/vl4foqJEThM",image:"",tags:["inquirer","javascript","node","API,","moment.js","CLI"]},{name:"WhereWatch",date:"",repoLink:"https://github.com/charlesmbrady/Project-1",deployedLink:"http://charlesmbrady.com/Project-1/",description:"app for finding what streaming services your favorite tv shows and movies are on",technologies:[],comments:"",type:"project",cli:!1,youtubeLink:"",image:"/assets/wherewatch.png",tags:["firebase","API","javascript","html","css"]},{name:"Constructor Hangman",date:"",repoLink:"https://github.com/charlesmbrady/constructor-word-guess",deployedLink:"",description:"Hangman CLI app",technologies:[],comments:"",type:"activity",cli:!0,youtubeLink:"",image:"/assets/constructorwordguess.png",tags:["inquirer","javascript","node","CLI"]},{name:"Bamazon",date:"",repoLink:"https://github.com/charlesmbrady/bamazon",deployedLink:"",description:"Ebay-like CLI app that allows you to choose products for purchase",technologies:[],comments:"",type:"activity",cli:!0,youtubeLink:"https://www.youtube.com/embed/AGJjvxJdOjs",image:"",tags:["inquirer","javascript","node","CLI"]},{name:"GoogleBookSearch",date:"",repoLink:"https://github.com/charlesmbrady/GoogleBookSearch",deployedLink:"https://google-books-search-45506.herokuapp.com/",description:"Search for books using the GoogleBooks API",technologies:["React","MongoDB","Javascript","HTML","CSS","Bootstrap","Express","Node","Heroku"],comments:"",type:"project",cli:!1,youtubeLink:"",image:"/assets/googlebooksearch.png",tags:["React","MongoDB","Express","Node"]}],t=Object(n.useState)(e),a=Object(h.a)(t,2),l=(a[0],a[1],Object(n.useState)(!1)),r=Object(h.a)(l,2),s=r[0],c=r[1];return Object(n.useEffect)(function(){},[]),o.a.createElement(i.a,null,o.a.createElement(m.a,{className:"portfolio-layout"},o.a.createElement(u.a,{className:"offset-md-8"},o.a.createElement(g.a,{isOpen:s,onClick:function(){return c(!s)}},o.a.createElement(E.a,{caret:!0},"Filter"),o.a.createElement(b.a,null,o.a.createElement(f.a,null,"Not"),o.a.createElement(f.a,null,"Functional"),o.a.createElement(f.a,null,"Yet"))))),o.a.createElement(m.a,{className:"portfolio-layout"},o.a.createElement(u.a,null,o.a.createElement("div",{id:"portfolio-body row"},e.map(function(e,t){return o.a.createElement(y,{key:t,name:e.name,date:e.date,repoLink:e.repoLink,deployedLink:e.deployedLink,description:e.description,technologies:e.technologies,comments:e.comments,type:e.type,cli:e.cli,youtubeLink:e.youtubeLink,image:e.image,tags:e.tags})})))))},v=(a(57),a(78));var L=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),s=Object(h.a)(r,2),c=s[0],p=s[1],d=Object(n.useState)(!1),g=Object(h.a)(d,2),E=g[0],b=g[1],f=Object(n.useState)(!1),y=Object(h.a)(f,2),k=y[0],L=y[1],j=Object(n.useState)(!1),S=Object(h.a)(j,2),w=S[0],N=S[1];return Object(n.useEffect)(function(){console.log("hello Resume page")},[]),o.a.createElement(i.a,null,o.a.createElement(m.a,{className:"row"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"resume-section section-head"},o.a.createElement("h4",{onClick:function(){return l(!a)}},"Work Experience")),o.a.createElement(v.a,{className:"first-collapse",isOpen:a},o.a.createElement("h3",null,"Validity"),o.a.createElement("h6",null,"QA Engineer - Jan 2019 to Present"),o.a.createElement("ul",{className:"align-content-left"},o.a.createElement("li",null,"Design test plans, scenarios, scripts and procedures."),o.a.createElement("li",null,"Test system modifications to prepare for implementation."),o.a.createElement("li",null,"Document software defects, using a bug trackings system, and report defects to software developers."),o.a.createElement("li",null,"Participate in product design reviews to provide input on functional requirements, product designs, schedules, or potential problems."),o.a.createElement("li",null,"Investigate customer problems referred by technical support.")),o.a.createElement("h6",null,"Customer Success Manager - Aug 2018 to Jan 2019"),o.a.createElement("ul",{className:"align-content-left"},o.a.createElement("li",null,"Resolve escalated tech-support cases."),o.a.createElement("li",null,"Build and work with Reports, and Objects to manage customer relationships in Salesforce CRM."),o.a.createElement("li",null,"Provide proactive outreach to customers for upsells, and to ensure maximum use and value is gained from our tools"),o.a.createElement("li",null,"Recommend data-management best practices such as object deduplication order, as well as design custom solutions for unique situations in customer organizations"),o.a.createElement("li",null,"Help design and implement internal processes in the client services department, and optimize Salesforce experience within our company")),o.a.createElement("h6",null,"Technical Support Specialist - Jul 2017 to Aug 2018"),o.a.createElement("ul",{className:"align-content-left"},o.a.createElement("li",null,"Host live technical product training webinars, and produce recorded training tutorials for our data quality products DemandTools, PeopleImport, and DupeBlocker"),o.a.createElement("li",null,"Use Salesforce and Service Cloud to quickly resolve all incoming cases, as well as manage and distribute caseload amongst team members."),o.a.createElement("li",null,"Advise database administrators from hundreds of organizations on automation tools and techniques for scheduled data quality jobs."),o.a.createElement("li",null,'Use algorithms to develop job "scenarios" that contain criteria for things like data standardization, and record deduplication.'))))),o.a.createElement(m.a,{className:"row"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"resume-section section-head"},o.a.createElement("h4",{onClick:function(){return p(!c)}},"Education")),o.a.createElement(v.a,{className:"first-collapse",isOpen:c},o.a.createElement("h6",null,"UNC Chapel Hill"),o.a.createElement("h3",null,"Full-stack MERN Certification"),o.a.createElement("br",null),o.a.createElement("h6",null,"UNC Chapel Hill"),o.a.createElement("h3",null,"B.S. Exercise and Sports Science")))),o.a.createElement(m.a,{className:"row"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"resume-section section-head"},o.a.createElement("h4",{onClick:function(){return b(!E)}},"Credentials and Licenses")),o.a.createElement(v.a,{className:"first-collapse",isOpen:E},o.a.createElement("h3",null,"Salesforce Administrator"),o.a.createElement("h4",null,"Salesforce Service Cloud Consultant")))),o.a.createElement(m.a,{className:"row"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"resume-section section-head"},o.a.createElement("h4",{onClick:function(){return L(!k)}},"Additional Skills")),o.a.createElement(v.a,{className:"first-collapse",isOpen:k},o.a.createElement("ul",{className:"align-content-left"},o.a.createElement("li",null,"Consistently seeking and learning new technology"),o.a.createElement("li",null,"CircleCI - Continuous Integration"),o.a.createElement("li",null,"Automated testing with Cypress.io"),o.a.createElement("li",null,"Agile Methodologies"),o.a.createElement("li",null,"Salesforce Administration"))))),o.a.createElement(m.a,{className:"row"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"resume-section section-head"},o.a.createElement("h4",{onClick:function(){return N(!w)}},"Other Interests/Hobbies")),o.a.createElement(v.a,{className:"first-collapse",isOpen:w},o.a.createElement("h4",null,"Surfing"),o.a.createElement("h4",null,"Guitar"),o.a.createElement("h4",null,"Piano")))))};a(65);var j=function(){return Object(n.useEffect)(function(){console.log("hello Resources page")},[]),o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement("h1",null,"Hello Resources Page")))},S=(a(66),a(67),a(79)),w=a(80),N=a(81),C=a(82),I=a(83);var O=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],l=t[1],r=function(){l(!a)};return Object(n.useEffect)(function(){console.log("hello Nav bar")},[]),o.a.createElement("div",null,o.a.createElement(S.a,{className:"navi",color:"light",light:!0,expand:"md"},o.a.createElement(s.b,{to:"/",className:"navbar-brand"},"Charles Brady"),o.a.createElement(w.a,{onClick:r}),o.a.createElement(v.a,{isOpen:a,navbar:!0},o.a.createElement(N.a,{className:"ml-auto",navbar:!0},o.a.createElement(C.a,null,o.a.createElement(I.a,{href:"https://github.com/charlesmbrady",target:"_blank",onClick:r},"GitHub")),o.a.createElement(C.a,null,o.a.createElement(s.b,{to:"/portfolio",className:"nav-link",onClick:r},"Portfolio")),o.a.createElement(C.a,null,o.a.createElement(s.b,{to:"/resume",className:"nav-link",onClick:r},"Resume"))))))};var A=function(){return o.a.createElement(s.a,null,o.a.createElement(O,null),o.a.createElement("div",{className:"App"},o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:p}),o.a.createElement(c.a,{exact:!0,path:"/about",component:d}),o.a.createElement(c.a,{exact:!0,path:"/portfolio",component:k}),o.a.createElement(c.a,{exact:!0,path:"/resume",component:L}),o.a.createElement(c.a,{exact:!0,path:"/resources",component:j}),o.a.createElement(c.a,{component:p}))))};r.a.render(o.a.createElement(A,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.dd55c367.chunk.js.map