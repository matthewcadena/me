(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7273:function(e,r,t){Promise.resolve().then(t.bind(t,5040))},5040:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return en}});var n=t(7437),i=t(2265),a=t(1478),s=t.n(a),o=t(6648),c=t(9582),l=t(1204),d=t(19),h=t(4773),p=t.n(h);function u(){return(0,n.jsxs)("div",{className:p().container,children:[(0,n.jsx)("a",{href:"#about",className:p().link,children:"About"}),(0,n.jsx)("a",{href:"#work",className:p().link,children:"Work"}),(0,n.jsx)("a",{href:"#projects",className:p().link,children:"Projects"})]})}function m(){let e=(0,i.useRef)(null),r=(0,i.useRef)(null),t=(0,i.useRef)(null),a=(0,i.useRef)(null),d=0,h=1,p=()=>{d<=-100?d=0:d>=0&&(d=-100),c.ZP.set(e.current,{xPercent:d}),c.ZP.set(r.current,{xPercent:d}),d+=.04*h,requestAnimationFrame(p)};return(0,i.useLayoutEffect)(()=>{c.ZP.registerPlugin(l.i),requestAnimationFrame(p);let e=c.ZP.timeline({scrollTrigger:{trigger:document.documentElement,start:"top",end:"+=100px",scrub:1}});c.ZP.to(t.current,{scrollTrigger:{trigger:document.documentElement,start:0,end:window.innerHeight,scrub:1.5,onUpdate:e=>h=-1*e.direction},x:"-=300px"}),e.fromTo(a.current,{clipPath:"inset(1%)"},{clipPath:"inset(0%)",duration:1},0)},[]),(0,n.jsxs)("main",{className:s().main,children:[(0,n.jsx)(u,{}),(0,n.jsx)(o.default,{fill:!0,src:"/images/matt-cmu-crop.jpg",alt:"image",ref:a,priority:!0}),(0,n.jsx)("div",{className:s().sliderContainer,children:(0,n.jsxs)("div",{className:s().slider,ref:t,children:[(0,n.jsx)("p",{ref:e,children:"Matt Cadena — Matt Cadena —\xa0 "}),(0,n.jsx)("p",{ref:r,children:"Matt Cadena — Matt Cadena —\xa0"})]})})]})}c.ZP.registerPlugin(d.V);var g=t(4446),x=t(8899),j=t.n(x),f=t(5380),_=t.n(f),b=t(7138),v=t(1216);let w={initial:{x:"calc(100% + 100px)"},enter:{x:"0",transition:{duration:.8,ease:[.16,1,.3,1]}},exit:{x:"calc(100% + 100px)",transition:{duration:.8,ease:[.16,1,.3,1]}}},k={initial:{x:80},enter:e=>({x:0,transition:{duration:.8,ease:[.16,1,.3,1],delay:.05*e}}),exit:e=>({x:80,transition:{duration:.8,ease:[.16,1,.3,1],delay:.05*e}})};var y=t(3742);let I=(0,t(9910).cn)(!1);function N(e){let{data:r}=e,[,t]=(0,y.KO)(I);return(0,n.jsx)(v.E.div,{variants:k,custom:r.index,animate:"enter",exit:"exit",initial:"initial",className:_().link,children:(0,n.jsx)("div",{onClick:()=>{t(!1)},children:(0,n.jsx)(b.default,{href:r.href,className:_().a,children:r.title})})})}function C(){return(0,n.jsxs)("div",{className:_().footer,children:[(0,n.jsx)("a",{children:"Resume"}),(0,n.jsx)("a",{children:"LinkedIn"}),(0,n.jsx)("a",{children:"Email"}),(0,n.jsx)("a",{children:"Music"})]})}function T(){return(0,n.jsx)(v.E.div,{variants:w,animate:"enter",exit:"exit",initial:"initial",className:_().menu,children:(0,n.jsxs)("div",{className:_().body,children:[(0,n.jsxs)("div",{className:_().nav,children:[(0,n.jsx)("div",{className:_().header,children:(0,n.jsx)("p",{children:"Navigation"})}),[{title:"Home",href:"/"},{title:"About",href:"#about"},{title:"Work",href:"#work"},{title:"Projects",href:"#my-projects"}].map((e,r)=>(0,n.jsx)(N,{data:{...e,index:r}},r))]}),(0,n.jsx)(C,{})]})})}function P(){let[e,r]=(0,y.KO)(I);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:j().header,children:[(0,n.jsx)("div",{className:j().buttonContainer,children:(0,n.jsx)("div",{onClick:()=>{r(!e)},className:j().button,children:(0,n.jsx)("div",{className:"".concat(j().burger," ").concat(e?j().burgerActive:"")})})}),(0,n.jsx)(g.M,{mode:"wait",children:e&&(0,n.jsx)(T,{})})]})})}var R=t(2243),L=t.n(R);let A=e=>{let{children:r}=e,t=(0,i.useRef)(null);return(0,i.useLayoutEffect)(()=>{c.ZP.registerPlugin(l.i),c.ZP.timeline({scrollTrigger:{trigger:t.current,start:"0px bottom",end:"+=300px",scrub:1}}).fromTo(t.current,{opacity:0,left:"-200px"},{opacity:1,left:"0",ease:"power3.Out"})},[]),(0,n.jsx)("p",{ref:t,children:r})};function M(){let e=(0,i.useRef)(null);return(0,d.V)(()=>{c.ZP.registerPlugin(l.i);let r=c.ZP.timeline({scrollTrigger:{trigger:e.current,start:"top top",end:"+=500px",scrub:1,pin:!0}});r.fromTo("#progress",{width:" 0%"},{width:"100%"}),r.fromTo}),(0,n.jsxs)("div",{className:L().about,ref:e,id:"#about",children:[(0,n.jsx)("h1",{children:"About Me"}),["I'm a junior at Carnegie Mellon,","studying Information Systems.","I play on the men's varsity soccer team,","and I'm passionate about software.","I believe in writing clean code","that makes a difference."].map((e,r)=>(0,n.jsx)(A,{children:e},r)),(0,n.jsx)("div",{className:L().progressBar,id:"progress"})]})}var S=t(1257),Z=t.n(S),D=t(7555),F=t.n(D);let B=e=>{let{children:r}=e,t=(0,i.useRef)(null);return(0,d.V)(()=>{c.ZP.registerPlugin(l.i),c.ZP.timeline({scrollTrigger:{trigger:t.current,start:"top top",end:"+=100px",scrub:1}}).fromTo(t.current,{y:"+10px",filter:"blur(5px)",opacity:0},{y:"0",filter:"blur(0px)",opacity:1,ease:"power3.in"})}),(0,n.jsx)("div",{ref:t,children:r})};function E(){return(0,d.V)(()=>{}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:F().projectsSection,id:"projects",children:(0,n.jsxs)("div",{className:F().container,children:[(0,n.jsxs)(B,{children:[(0,n.jsx)("p",{className:F().subtitle,children:"Summers of Growth"}),(0,n.jsx)("h2",{className:F().title,children:"From Academic Research to Industry Innovation"}),(0,n.jsx)("p",{className:F().info,children:"Over the past two summers, I've gained valuable experience in both industry and academia. In 2024, I worked as a Software Engineering Intern at Ford in Dearborn, MI, contributing to products in the Enterprise Technology division. The summer before, I was a Research Assistant at the Institute for Politics and Strategy at Carnegie Mellon University, where I focused on historical research related to Coup D'etats."})]}),(0,n.jsxs)("section",{className:F().projects,children:[(0,n.jsx)(B,{children:(0,n.jsxs)("article",{className:"".concat(F().project," ").concat(F().project1),children:[(0,n.jsx)("img",{src:"./images/mach-e.jpg",alt:"Me with fellow interns at Ford",title:"me-at-ford",className:F().sideImg}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"2024 SUMMER"}),(0,n.jsx)("h2",{className:F().positionTitle,children:"Software Engineer Intern: Ford Motor Company"}),(0,n.jsx)("p",{children:"At Ford, I embraced Test-Driven Development (TDD) and pair programming to craft a dynamic React-based tool for Call Center Agents, replacing an outdated system with a streamlined search experience. Tackling a tricky 30-second timer glitch in a Lean Coffee app was another highlight, where our collaborative approach ensured a flawless user experience. Mentoring new interns was a rewarding part of the summer, where I guided them through a thoughtfully crafted onboarding process, turning their first days into a smooth and productive start."}),(0,n.jsx)("p",{children:"Skills/tools I learned and developed:"}),(0,n.jsxs)("ul",{className:F().techStack,children:[(0,n.jsx)("li",{children:"React"}),(0,n.jsx)("li",{children:"Google Cloud Platform (GCP)"}),(0,n.jsx)("li",{children:"TekTton CI/CD"}),(0,n.jsx)("li",{children:"GitHub Actions"}),(0,n.jsx)("li",{children:"MongoDB"}),(0,n.jsx)("li",{children:"Jotai"})]})]})]})}),(0,n.jsx)(B,{children:(0,n.jsxs)("article",{className:"".concat(F().project," ").concat(F().project2),children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"2023 SUMMER"}),(0,n.jsxs)("h2",{className:F().positionTitle,children:["Research Assistant: CMU Institute for Strategy & Technology"," "]}),(0,n.jsx)("p",{children:"As a Research Assistant to Professor John Chin at Carnegie Mellon's Institute for Politics and Strategy, I dove into the complex world of self-coups and revolutionary events. I cleaned and analyzed historical data, crafted detailed case studies in LaTeX, and contributed to the Historical Dictionary of Modern Self-Coups by creating bibliographic entries. A highlight of my work was researching and writing about the Castro brothers' self-coups, weaving their story into the broader tapestry of political upheaval."}),(0,n.jsx)("p",{children:"Skills/tools I learned and developed:"}),(0,n.jsxs)("ul",{className:F().techStack,children:[(0,n.jsx)("li",{children:"LaTeX"}),(0,n.jsx)("li",{children:"Historical Research"}),(0,n.jsx)("li",{children:"Professional Writing"})]})]}),(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"./images/cmuist.png",alt:"cmu ist logo",title:"cmu-ist",className:F().sideImg})})]})})]})]})})})}function H(){c.ZP.registerPlugin(l.i);let e=(0,i.useRef)(null),r=(0,i.useRef)(null),t=(0,i.useRef)(null),a=(0,i.useRef)(null);return(0,d.V)(()=>{let n=c.ZP.timeline({scrollTrigger:{trigger:t.current,start:"top-=300px top",end:"+=800px",scrub:1}}),i=c.ZP.timeline({scrollTrigger:{trigger:t.current,start:"top top",end:"+=500px",scrub:1,pin:!0}});n.from(r.current,{y:200},0).from(e.current,{y:150,height:"250px"},0),i.fromTo(a.current,{width:"0%"},{width:"100%",duration:1,ease:"none"},0)}),(0,n.jsxs)("div",{className:Z().work,ref:t,children:[(0,n.jsx)("div",{className:Z().backgroundImage,children:(0,n.jsx)(o.default,{src:"/images/interns-cropped.jpg",fill:!0,alt:"work-background-image"})}),(0,n.jsxs)("div",{className:Z().workIntroContainer,children:[(0,n.jsx)("div",{className:Z().workIntroImage,id:"introImage",ref:e,"data-scroll":!0,"data-scroll-speed":"0.3",children:(0,n.jsx)(o.default,{src:"/images/marquee-stroll.jpg",fill:!0,alt:"work-intro-image",priority:!0})}),(0,n.jsx)("div",{ref:r,className:Z().workIntroTitleContainer,children:(0,n.jsx)("h1",{children:"Work Experience"})})]}),(0,n.jsx)("div",{className:Z().progressBar,ref:a}),(0,n.jsx)(E,{})]})}var U=t(9105),V=t.n(U);let q=[{title:"CX Agent Portal",description:"During my 2024 summer internship at Ford, I redesigned the agent portal for the company's customer service agents. The project involved creating an independent application with a user-friendly UI, incorporating feedback from agents to ensure an optimal experience. The solution was developed to operate without dependency on the existing content management system, which had a pending decommission date, ensuring long-term viability for Ford's customer service operations. Additionally, the application was hosted on Google Cloud Platform (GCP), and we implemented a CI/CD pipeline using Tekton to streamline development and deployment processes.",src:"agent-portal.png",link:"https://artisan.ford.com/team-shelby",linkText:"Read more about Team Shelby",color:"#796b74"},{title:"Jargon Garden",description:"During a team hackathon at my Ford internship, our team created 'Jargon Gardon,' an app that humorously transforms phrases from the user into corporate buzzword gold. Built with React and TypeScript, and powered by Ford's LLM which we connected to through the in-house API, the project was as much about having fun as it was about developing our technical skills. Our playful approach paid off—we won the popular vote for best hackathon project, even though we were the only team made up entirely of interns.",src:"jargon-garden.jpg",link:"https://artisan.ford.com/team-shelby",linkText:"Read more about Team Shelby",color:"#8d7f89"},{title:"Gotham City Tracker",description:"As the main project in my 67-272: Application Design and Development, I developed 'Gotham City Department Tracker,' a full-stack CRUD application using Ruby on Rails, React, and MySQL. I led the entire design and development process, starting with creating user stories from a list of functional requirements. Following an incremental, agile approach, I built a custom API, implemented secure authentication, and designed a dynamic UI. The project leveraged MVC architecture for code organization, with MySQL handling database management.",src:"gcpd-animation.gif",link:"https://github.com/67-272-Students-Spring-2024/gcpd-phase-4-matthewcadena",linkText:"Source code",color:"#a2939d"},{title:"NBA Tic Tac Toe",description:"As a personal project, I developed 'NBA Tic-Tac-Toe,' a full-stack web application that brings an interactive twist to the classic game. Using Django and Python, I connected the app to a PostgreSQL database to pull in NBA data and wrote dynamic queries to validate user responses. I also had fun experimenting with Google’s Image-Search API to fetch player headshots on the fly, adding a unique visual element to the game.",src:"nba-tac-toe.gif",link:"https://www.youtube.com/watch?v=v2mr_DU-5Fo",linkText:"Video demo",color:"#b6a7b2"},{title:"Personal Website",description:"For this website, I leveraged my experience with React, TypeScript, and Jotai from my internship to craft a dynamic Next.js web app. Using Framer Motion and GSAP, I created a captivating display that highlights my exploration of new frontend and design techniques. The result is a visually engaging and technically sophisticated site that reflects my growth and creativity in web development.",src:"website-landing.png",link:"https://github.com/matthewcadena/me",linkText:"Source code",color:"#cbbbc7"}];var G=t(31);function W(e){let{i:r,title:t,description:a,src:s,link:l,linkText:h,color:p,progress:u,range:m,targetScale:g}=e,x=(0,i.useRef)(null),j=(0,i.useRef)(null),f=(0,G.H)(u,m,[1,g]);return(0,d.V)(()=>{c.ZP.timeline({scrollTrigger:{trigger:x.current,start:"bottom bottom",end:"+=800px",scrub:1}}).fromTo(j.current,{transform:"scale(1.1, 1.1)"},{transform:"scale(1, 1)"})}),(0,n.jsx)("div",{className:V().cardContainer,ref:x,children:(0,n.jsxs)(v.E.div,{style:{backgroundColor:p,scale:f,top:"calc(-5vh + ".concat(25*r,"px)")},className:V().card,children:[(0,n.jsx)("h2",{children:t}),(0,n.jsxs)("div",{className:V().body,children:[(0,n.jsxs)("div",{className:V().description,children:[(0,n.jsx)("p",{children:a}),(0,n.jsxs)("span",{children:[(0,n.jsx)("a",{href:l,target:"_blank",children:h}),(0,n.jsx)("svg",{width:"22",height:"12",viewBox:"0 0 22 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z",fill:"black"})})]})]}),(0,n.jsx)("div",{className:V().imageContainer,children:(0,n.jsx)("div",{className:V().inner,ref:j,children:(0,n.jsx)(o.default,{fill:!0,src:"/images/".concat(s),alt:"image"})})})]})]})})}var O=t(9754);function z(){let e=(0,i.useRef)(null),{scrollYProgress:r}=(0,O.v)({target:e,offset:["start start","end end"]});return(0,n.jsxs)("div",{className:V().projectsContentMain,ref:e,children:[q.map((e,t)=>{let i=1-(q.length-t)*.05;return(0,n.jsx)(W,{i:t,...e,progress:r,range:[.25*t,1],targetScale:i},t)}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}function Q(){c.ZP.registerPlugin(l.i);let e=(0,i.useRef)(null),r=(0,i.useRef)(null),t=(0,i.useRef)(null),a=(0,i.useRef)(null);return(0,d.V)(()=>{let n=c.ZP.timeline({scrollTrigger:{trigger:t.current,start:"top-=300px top",end:"+=800px",scrub:1}}),i=c.ZP.timeline({scrollTrigger:{trigger:t.current,start:"top top",end:"+=500px",scrub:1,pin:!0}});n.from(r.current,{y:200},0).from(e.current,{y:150,height:"250px"},0),i.fromTo(a.current,{width:"0%"},{width:"100%",duration:1,ease:"none"},0)}),(0,n.jsxs)("div",{className:V().projects,ref:t,children:[(0,n.jsx)("div",{className:V().backgroundImage,children:(0,n.jsx)(o.default,{src:"/images/desk-selfie.jpg",fill:!0,alt:"projects-background-image"})}),(0,n.jsxs)("div",{className:V().projectsIntroContainer,children:[(0,n.jsx)("div",{className:V().projectsIntroImage,id:"introImage",ref:e,"data-scroll":!0,"data-scroll-speed":"0.3",children:(0,n.jsx)(o.default,{src:"/images/eating-trophy.jpg",fill:!0,alt:"winning-hackathon",priority:!0})}),(0,n.jsx)("div",{ref:r,className:V().projectsIntroTitleContainer,children:(0,n.jsx)("h1",{children:"Projects"})})]}),(0,n.jsx)("div",{className:V().progressBar,ref:a}),(0,n.jsx)(z,{})]})}var X=t(6662),J=t.n(X);function K(){return(0,n.jsxs)("div",{className:J().body,children:[(0,n.jsx)(Y,{}),(0,n.jsx)($,{})]})}let Y=()=>(0,n.jsx)("div",{children:(0,n.jsx)(ee,{})}),$=()=>(0,n.jsxs)("div",{className:J().section2Container,children:[(0,n.jsx)("h1",{className:J().section2Heading,children:"Matt Cadena"}),(0,n.jsx)("p",{className:J().copyrightText,children:"\xa9copyright"})]}),ee=()=>(0,n.jsxs)("div",{className:J().navContainer,children:[(0,n.jsxs)("div",{className:J().navColumn,children:[(0,n.jsx)("h3",{className:J().navHeading,children:"Navigation"}),(0,n.jsx)("a",{href:"/",className:J().navLink,children:"Home"}),(0,n.jsx)("a",{href:"#about",className:J().navLink,children:"About"}),(0,n.jsx)("a",{href:"#work",className:J().navLink,children:"Work"}),(0,n.jsx)("a",{href:"#my-projects",className:J().navLink,children:"Projects"})]}),(0,n.jsxs)("div",{className:J().navColumn,children:[(0,n.jsx)("h3",{className:J().navHeading,children:"More"}),(0,n.jsx)("a",{className:J().navLink,href:"/files/matt-cadena-resume.pdf",target:"_blank",rel:"noopener noreferrer",children:"Resume"}),(0,n.jsx)("a",{className:J().navLink,href:"https://github.com/matthewcadena",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),(0,n.jsx)("a",{className:J().navLink,href:"https://www.linkedin.com/in/matt-cadena/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]})]});function er(){return(0,n.jsx)("div",{className:J().footer,children:(0,n.jsx)("div",{className:J().footerWrapper,children:(0,n.jsx)("div",{className:J().footerContent,children:(0,n.jsx)(K,{})})})})}var et=t(4108);function en(){return(0,i.useEffect)(()=>{let e=new et.Z;requestAnimationFrame(function r(t){e.raf(t),requestAnimationFrame(r)})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(P,{}),(0,n.jsx)(m,{}),(0,n.jsx)("div",{id:"about",children:(0,n.jsx)(M,{})}),(0,n.jsx)("div",{id:"work",children:(0,n.jsx)(H,{})}),(0,n.jsx)("div",{id:"my-projects",children:(0,n.jsx)(Q,{})}),(0,n.jsx)(er,{})]})}},2243:function(e){e.exports={about:"about_about__DwoMu",progressBar:"about_progressBar__iA4Kl"}},6662:function(e){e.exports={footer:"footer_footer__PZD4d",footerWrapper:"footer_footerWrapper__KgvNv",footerContent:"footer_footerContent__dX46s",body:"footer_body__OmPV4",section2Container:"footer_section2Container__PJ8oX",section2Heading:"footer_section2Heading___O_AY",navContainer:"footer_navContainer__PwXPp",navColumn:"footer_navColumn__LI8Ww",navLink:"footer_navLink__NX8Ib",navHeading:"footer_navHeading__tun_W",copyrightText:"footer_copyrightText__b3jl_"}},8899:function(e){e.exports={header:"header_header__Awatn",buttonContainer:"header_buttonContainer__d36q1",button:"header_button__00R_3",burger:"header_burger__QdUqz",burgerActive:"header_burgerActive__qG_TB"}},5380:function(e){e.exports={menu:"nav_menu__Nx1VP",body:"nav_body__IlkLo",nav:"nav_nav__9sp7N",header:"nav_header__FPMWn",a:"nav_a__irtbe",link:"nav_link__fa6eV",indicator:"nav_indicator__Lyw8d",footer:"nav_footer__u_5dt"}},1478:function(e){e.exports={main:"landing_main__ZwHmf",sliderContainer:"landing_sliderContainer__lEuce",slider:"landing_slider__p2V4W",header:"landing_header__vmF5N"}},4773:function(e){e.exports={container:"navbar_container__QUcQY",link:"navbar_link__64_FR"}},9105:function(e){e.exports={projects:"projects_projects__GaLX7",backgroundImage:"projects_backgroundImage__8mamE",projectsIntroContainer:"projects_projectsIntroContainer__1zjDB",projectsIntroImage:"projects_projectsIntroImage__qH3Mq",projectsIntroTitleContainer:"projects_projectsIntroTitleContainer__lm5bb",progressBar:"projects_progressBar__glgBc",projectsContentMain:"projects_projectsContentMain__shdZe",cardContainer:"projects_cardContainer__QZTYU",card:"projects_card___s66h",body:"projects_body__zPfhw",description:"projects_description__kLrsD",imageContainer:"projects_imageContainer__KTyAh",inner:"projects_inner__7HuQI"}},7555:function(e){e.exports={projectsSection:"experience_projectsSection__1Rtx1",projects:"experience_projects__0xON_",project:"experience_project__i95IV",project1:"experience_project1__UvmOL",project2:"experience_project2__dkqY9",projectImg:"experience_projectImg__RCh_R",title:"experience_title__3segu",positionTitle:"experience_positionTitle__R5URw",subtitle:"experience_subtitle__rPZLr",sideImg:"experience_sideImg__TIlhD",techStack:"experience_techStack__ojzhx",projectLinks:"experience_projectLinks__YIIhI","project-links":"experience_project-links__BBqV8"}},1257:function(e){e.exports={work:"work_work__tbhcB",backgroundImage:"work_backgroundImage__9Jsvi",workIntroContainer:"work_workIntroContainer__Km64y",workIntroImage:"work_workIntroImage__UYhjb",workIntroTitleContainer:"work_workIntroTitleContainer__Ppg8H",progressBar:"work_progressBar__wVE_r"}}},function(e){e.O(0,[759,922,845,971,23,744],function(){return e(e.s=7273)}),_N_E=e.O()}]);