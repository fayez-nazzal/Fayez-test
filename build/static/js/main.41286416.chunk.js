(this["webpackJsonpreact-tailwind-starter"]=this["webpackJsonpreact-tailwind-starter"]||[]).push([[0],{37:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(17),c=a.n(l),o=(a(37),a.p+"static/media/full-stack-img.c3deb8ad.png"),i=a(27),s=a.n(i),m=a(4),u=a(13),d=Object(u.b)({name:"viewSection",initialState:{value:"home"},reducers:{setSection:function(e,t){e.value=t.payload}}}),p=d.actions.setSection,f=d.reducer,E=Object(u.b)({name:"navOpen",initialState:{menuOpen:!1,currentColor:"custom_blue"},reducers:{setColor:function(e,t){e.currentColor=t.payload},toggle:function(e){e.menuOpen=!e.menuOpen}}}),b=E.actions,g=b.setColor,h=b.toggle,x=E.reducer,w=a(29),A=a.n(w)()((function(e){var t=e.forwardedRef;return r.a.createElement("div",{className:"viewport-block",ref:t})})),v=a.p+"static/media/CV.876c019a.pdf",y=function(e){var t=Object(m.b)();return r.a.createElement("div",{onClick:function(){t(g(e.color)),t(h())},className:" w-8 h-8 cursor-pointer rounded-full bg-".concat(e.color)})},k=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.theme.currentColor})),a=Object(m.c)((function(e){return e.theme.menuOpen}));return r.a.createElement("section",{id:"home",className:" diagonal-section bg-".concat(t," relative py-32")},r.a.createElement(A,{onEnterViewport:function(){e(p("home"))}}),r.a.createElement("div",{className:" top-20 rounded-l-md absolute right-0 z-40 p-4 pb-6 transition-all duration-500 ease-in-out transform ".concat(!a&&"translate-x-48"," bg-white")},r.a.createElement("p",{className:"text-lg font-medium border-b-2 border-gray-400 border-solid"},"Style Switcher"),r.a.createElement("div",{className:"grid justify-around grid-cols-3 gap-1 mt-2"},r.a.createElement(y,{color:"custom_crimson"}),r.a.createElement(y,{color:"custom_blue"}),r.a.createElement(y,{color:"custom_indigo"}),r.a.createElement(y,{color:"custom_aqua"}),r.a.createElement(y,{color:"custom_black"}))),r.a.createElement("div",{className:"loader-circle loader-top absolute bg-transparent"}),r.a.createElement("div",{className:"loader-circle loader-bottom absolute bg-transparent"}),r.a.createElement("div",{className:"absolute top-0 bottom-0 left-0 right-0 overflow-hidden"},r.a.createElement("div",{className:"resize-circle absolute"})),r.a.createElement("div",{className:"loader-square absolute bg-transparent"}),r.a.createElement("div",{className:"grid-rows-45 md:grid-cols-12 lg:grid-cols-6 grid grid-cols-6"},r.a.createElement("div",{className:"md:col-start-4 md:col-end-10 lg:row-end-5 lg:col-start-4 lg:col-end-6 col-start-2 col-end-6 row-start-1 row-end-3"},r.a.createElement(s.a,null,r.a.createElement("img",{className:"w-full h-full m-auto",src:o,alt:"product"}))),r.a.createElement("div",{className:"sm:col-end-6 md:col-end-11 lg:row-start-1 lg:row-end-5 lg:col-end-4 z-40 col-start-1 col-end-7 row-start-3 row-end-5 tracking-wider"},r.a.createElement("h1",{className:" w-5/6 mx-auto text-5xl font-bold text-white"},"Senior full-stack Developer"),r.a.createElement("p",{className:"border-box w-5/6 mx-auto mt-3 text-xl text-left text-white"},"As I'm a senior full-stack Web Developer with over 5 years of\n            experience, if you have the idea then I will make sure it's\n            implemented perfectly. My primary skill set includes React/Redux,\n            Next and Vue with JS/TS and Node/Express, Python/Django, DRF. I have\n            a strong expertise in Software development life cycle from modeling\n            to deployment."),r.a.createElement("div",{className:"w-4/5 mx-auto mt-12"},r.a.createElement("a",{className:" text-".concat(t," px-8 py-3 text-xl font-semibold bg-white rounded-full"),href:v,target:"_blank",rel:"noreferrer"},"DOWNLOAD CV")))))},N=a(5),j=function(e){var t=e.children;return r.a.createElement("li",{className:"flex my-4"},r.a.createElement(N.c,{className:"mr-2",color:"#4948d4",size:22}),t)},S=function(e){var t=Object(m.c)((function(e){return e.theme.currentColor}));return r.a.createElement("span",{className:"  ".concat(e.whiteText?"bg-white text-white":"bg-".concat(t," text-").concat(t)," py-2 px-3 text-lg tracking-wide uppercase bg-opacity-25 rounded-md z-10")},e.children)},I=function(){var e=Object(m.b)();return r.a.createElement("section",{id:"about",className:"pb-14 flex flex-col items-start justify-center px-16 pt-32"},r.a.createElement(A,{onEnterViewport:function(){e(p("about"))}}),r.a.createElement(S,{className:""},"About Me"),r.a.createElement("h2",{className:"text-4xl font-bold"},"Senior Full-Stack Developer"),r.a.createElement("p",{className:"text-custom_grey my-5 text-lg tracking-wide"},"I hope my profile explains my full-stack skills and experiences on Web development for more than 5 years of hands-on efficiently coding websites and applications using modern technologies."),r.a.createElement("ul",{className:"text-custom_grey text-xl"},r.a.createElement(j,null,"React/Redux, Next, Vue, Svelte, Quasar with JS/TS"),r.a.createElement(j,null,"Material-UI, Tailwind-CSS, Antd, Styled-Component"),r.a.createElement(j,null,"Python/Django, DRF, Node/Express, PHP, Laravel on back-end"),r.a.createElement(j,null,"Integral Roles with front-end and back-end"),r.a.createElement(j,null,"Punctuality, Responsive, Pixel Perfect and Fast Learner")),r.a.createElement("img",{className:"w-3/5 mx-auto",src:"https://jianxingchao.herokuapp.com/static/media/me.ccd943ea.jpg",alt:"dev"}))},C=Object(u.b)({name:"theme",initialState:{value:!1},reducers:{toggle:function(e){e.value=!e.value}}}),O=C.actions.toggle,B=C.reducer,Q=a(30),U=a(22),D=function(e){var t=Object(m.b)(),a=Object(m.c)((function(e){return e.viewSection.value})),n=e.name&&{opacity:a.toLowerCase()===e.name.toLowerCase()?1:.7},l=e.icon;return r.a.createElement(U.b,{onClick:function(){t(O())},className:"my-2",to:e.to,style:n,smooth:!0},e.name||r.a.createElement(l,null))},J=function(){return r.a.createElement("span",{className:" inline-flex items-center text-4xl font-bold text-white"},r.a.createElement(N.g,{className:"mr-2",size:32}),"JIANXING CHAO")},T=function(){var e=Object(m.c)((function(e){return e.navOpen.value})),t=Object(m.b)(),a=Object(m.c)((function(e){return e.theme.currentColor}));return r.a.createElement("nav",{className:" navbar border-box bg-".concat(a," truncate overflow-visible fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-center transition-all duration-300 ease-in-out bg-opacity-75 border-b-2 border-opacity-50 border-white")},r.a.createElement("div",{className:"flex items-center w-4/5 h-20"},r.a.createElement(J,null),r.a.createElement("button",{onClick:function(){t(O())},className:"focus:outline-none px-2 pt-2 pb-1 ml-auto bg-white rounded-md"},r.a.createElement(Q.a,{className:" text-".concat(a),size:32}))),r.a.createElement("div",{className:" ".concat(e?"h-nav_menu":"h-0"," px-4 font-medium transition-all duration-300 ease-in text-").concat(a," truncate flex flex-col w-4/5 mx-auto text-xl bg-white")},r.a.createElement(D,{to:"/#home",name:"Home"}),r.a.createElement(D,{to:"/#about",name:"About"}),r.a.createElement(D,{to:"/#services",name:"Services"}),r.a.createElement(D,{to:"/#portfolios",name:"Portfolios"}),r.a.createElement(D,{to:"/#testimonial",name:"Testimonial"}),r.a.createElement(D,{to:"/#contact",name:"Contact"}),r.a.createElement(U.a,{to:"/#home",smooth:!0},r.a.createElement("button",{onClick:function(){t(O()),t(h())},className:" focus:outline-none my-2 cursor-pointer"},r.a.createElement(N.d,null)))))},F=(a(50),function(e){var t=Object(m.c)((function(e){return e.theme.currentColor})),a=e.icon;return r.a.createElement("div",{className:" group color-white hover:bg-".concat(t," hover:-translate-y-4 flex flex-col items-center justify-around p-6 pb-12 my-10 transition duration-500 ease-in-out transform bg-white rounded-md shadow-md")},r.a.createElement(a,{size:42,className:" text-".concat(t," group-hover:text-white my-4 transition duration-500 ease-in-out")}),r.a.createElement("h3",{className:"group-hover:text-white my-2 text-3xl font-semibold text-gray-800 transition duration-500 ease-in-out"},e.title),r.a.createElement("p",{className:"text-custom_grey group-hover:text-white text-xl text-center transition duration-500 ease-in-out"},e.children))}),M=function(){var e=Object(m.b)();return r.a.createElement("section",{id:"services",className:"relative top-0 left-0 flex flex-col items-center justify-center px-16 py-32 overflow-auto"},r.a.createElement(A,{onEnterViewport:function(){e(p("services"))}}),r.a.createElement(S,null,"Services"),r.a.createElement("h2",{className:"mb-12 text-4xl font-bold tracking-wide"},"Here are my expertises"),r.a.createElement("div",{className:"text-custom_grey self-stretch px-16"},r.a.createElement(F,{icon:N.f,title:"Innovative Ideas"},"Innovative Ideas are the most important things in web development."),r.a.createElement(F,{icon:N.v,title:"Team Work"},"Teamwork spirit and cooperation together should be more helpful to be success."),r.a.createElement(F,{icon:N.b,title:"Punctuality"},"Punctuality is one of my Advantages, it's very important in all\n          contracts."),r.a.createElement(F,{icon:N.e,title:"Responsiveness"},"My all projects are responsive for Desktop/Mobile application."),r.a.createElement(F,{icon:N.j,title:"Pixel Perfect"},"Once the design is provided, the project will be completed as pixel perfectly."),r.a.createElement(F,{icon:N.k,title:"Fast Learner"},"For the latest tech, I'm always trying to learn new and challengeable\n          aspect.")))},P=a(10),R=a(56),q=a(54),z=a(57),G=a(55),L=function(e){return r.a.createElement("div",{className:"h-158 max-h-158 min-h-158 border-box z-10 m-2 shadow-md"},r.a.createElement("img",{className:"",src:e.imgSrc,alt:e.title}),r.a.createElement("div",{className:"px-8"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"hover:text-blue-700 inline-block mt-3 text-xl font-bold text-blue-600"},r.a.createElement("a",{href:e.to},e.title)),r.a.createElement("h4",{className:"inline-block ml-2 text-gray-600"},"(",e.date,")")),r.a.createElement("h5",{className:"text-custom_grey mt-2"},e.children)))},V=a.p+"static/media/wwt.312dc2f1.jpg",H=a.p+"static/media/racing.482bc15a.jpg",W=a.p+"static/media/msg.6a438ef0.jpg",K=a.p+"static/media/landing.742fc61c.png",Z=a.p+"static/media/responsive.8551df26.jpg",Y=a.p+"static/media/frozenTest.d1217551.jpg",X=a.p+"static/media/reactScss.4823a3cf.jpg",_=a.p+"static/media/ecommerce.c5d17d32.jpg",$=a.p+"static/media/canvas.e0a06b2c.jpg",ee=function(e){var t=Object(m.c)((function(e){return e.theme.currentColor})),a="bg-".concat(e.reverseColors?"white":t," cursor-pointer inline-flex items-center justify-center w-12 h-12 p-0 px-0 py-0 mx-2 font-mono text-4xl font-bold text-").concat(e.reverseColors?t:"white"," rounded-full z-40 focus:outline-none");return r.a.createElement("div",{className:"flex items-center justify-center mt-16 mb-24"},r.a.createElement("button",{className:a,onClick:function(){e.swiper.slidePrev(460)}},"<"),r.a.createElement("button",{className:a,onClick:function(){e.swiper.slideNext(460)}},">"))};R.a.use([q.a]);var te=function(){var e=Object(m.b)(),t=Object(n.useState)(null),a=Object(P.a)(t,2),l=a[0],c=a[1];return r.a.createElement("section",{id:"portfolios",className:"flex flex-col items-center justify-center px-16 text-center"},r.a.createElement(A,{onEnterViewport:function(){e(p("portfolios"))}}),r.a.createElement(S,null,"Portfolios"),r.a.createElement("h2",{className:"mx-8 mb-12 text-4xl font-bold tracking-wide text-center"},"Here are my representative projects"),r.a.createElement("div",{className:"border-box w-screen px-16"},r.a.createElement(z.a,{slidesPerView:1,autoplay:{delay:3500,disableOnInteraction:!1},speed:900,loop:!0,onInit:function(e){return c(e)},grabCursor:!0},r.a.createElement(G.a,null,r.a.createElement(L,{imgSrc:V,date:"2020.9-2020.11",title:"WWT-Work Well Together",to:"https://dev.workwelltogether.co/"},"This site is a questionnaire platform to check the users' features,\n            and the ability of team work of any two users. In this project, I\n            have built several endpoints using Django rest framework, and have\n            used postgresql for database. I have added the function of login\n            with social accounts(google, linkedin, facebook), and used number of\n            modules in frontend.")),r.a.createElement(G.a,null,r.a.createElement(L,{imgSrc:H,date:"2017.5-2017.11",title:"Online Horse Racing Management",to:"https://theracingmanager.com/"},"This is a web application for horse racing management and the users can benefit from this application without attending at the real racing but online. As a full-stack developer, my role in this project was to build the endpoints using Node.js/Express combined with MongoDB and integrated the 3rd party API to fetch the local racing data and visualize them in the front end.For front-end, I used React/Redux and Material UI, of course customized the provided UI.")),r.a.createElement(G.a,null,r.a.createElement(L,{imgSrc:W,date:"2019.10-2019.11",title:"MSGsafe",to:"https://www.msgsafe.io/"},"This is a mobile app that allows you to safely send and receive messages and emails between two users. Customers can do private, end-to-end encrypted, online communication throuth this app. This app protect your privacy and security.")),r.a.createElement(G.a,null,r.a.createElement(L,{imgSrc:Y,date:"2020.3-2020.3",title:"React-frozen Converter",to:"https://frozen-tor-81335.herokuapp.com/"},"It was based on figma Design file and it was only for the test app in recent. Created only the first landing page.")),r.a.createElement(G.a,null,r.a.createElement(L,{imgSrc:Z,date:"2020.5-2020.6",title:"React Responsive page",to:"https://react-responsive.herokuapp.com/"},"It's the React-responsive Desktop/Mobile test-page to show\n              profile, only the test-frontend page. It was based on Figma\n              design.")),r.a.createElement(G.a,null,r.a.createElement(L,{imgSrc:K,date:"2020.10-2020.11",title:"Production Landing Page",to:"https://prod-land.herokuapp.com/"},"Production Landing Page was built based on React, styled-component, framer-motion basically from 2020.10 ~ 2020.11 by me. This kind of website should be used for Blog page, production store website, or shoping page, etc.")),r.a.createElement(G.a,null,r.a.createElement(L,{imgSrc:$,date:"2020.1-2020.3",title:"Canvas-Mascular Animation",to:"https://canvas-animation-muscular.herokuapp.com/"},"It's HTML5/Canvas and Images based muscular animation project with\n              Audio. I have built several animation projects with HTML5, Canvas,\n              and CSS3. For more good understand, please click mouse in the\n              page, then you should see that the muscular flows blood, and in\n              that position, flower should be grown, ball should be rotated...\n              There are so many animations respectively.")),r.a.createElement(G.a,null,r.a.createElement(L,{imgSrc:_,date:"2019.11-2020.7",title:"eCommerce B2C website",to:"https://image3d.com/"},"This is a multistore ecommerce B2C website built with Magento. Customers can reserve, order, and purchase products through this site. I have worked to customize the Avatax module, Instagram module, and so on for back-end. And I have worked to customize the styles with css and less files for front-end.")),r.a.createElement(G.a,null,r.a.createElement(L,{imgSrc:X,date:"2019.3-2019.10",title:"ReactJS with SCSS",to:"https://transl-eat.web.app/"},"React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets me compose complex UIs from small and isolated pieces of code called \u201ccomponents\u201d. I have studied ReactJS over 6 years to become an excellent front-end developer and with my skills, have developed this biggest project, transl-eat app as responsive with SCSS a year ago."))),r.a.createElement(ee,{swiper:l})))},ae=a(8),ne=function(){return r.a.createElement(N.t,{size:18,color:"#ff9800"})},re=function(e){return r.a.createElement("div",{className:"z-10 p-4 m-2 bg-white rounded-lg shadow-md"},r.a.createElement("div",{className:"px-6"},r.a.createElement("p",{className:"text-custom_grey text-xl italic tracking-wide"},r.a.createElement(N.q,{className:"inline-block mr-3",size:18,color:"#555555"}),e.children,r.a.createElement(N.r,{className:"inline-block ml-3",size:18,color:"#555555"})),r.a.createElement("div",{className:"flex my-4"},Object(ae.a)(new Array(5).keys()).map((function(e){return r.a.createElement(ne,{key:e})}))),r.a.createElement("div",{className:"flex"},r.a.createElement("img",{className:"border-custom_blue w-16 h-16 mr-4 border-2 rounded-full",src:e.imgSrc,alt:e.from}),r.a.createElement("div",{className:"flex flex-col justify-around"},r.a.createElement("h5",{className:"text-custom_blue text-xl font-semibold text-left"},e.from),r.a.createElement("p",{className:"text-custom_grey text-lg"},r.a.createElement(N.i,{className:"inline-block mr-2",color:"#666666"}),e.email))),r.a.createElement("div",{className:"px-6 my-4 text-left"},r.a.createElement("a",{className:"hover:text-blue-600 text-xl tracking-wide text-blue-500",href:e.link},e.linkText))))},le=a.p+"static/media/angelo.07e36bcd.jpg";R.a.use([q.a]);var ce=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.theme.currentColor})),a=Object(n.useState)(null),l=Object(P.a)(a,2),c=l[0],o=l[1];return r.a.createElement("section",{id:"testimonial",className:" testimonial bg-".concat(t," flex flex-col items-center justify-center px-16 pt-16 pb-12 text-center")},r.a.createElement(A,{onEnterViewport:function(){e(p("testimonial"))}}),r.a.createElement(S,{whiteText:!0},"TESTIMONIAL"),r.a.createElement("h2",{className:"z-10 mt-4 mb-12 text-4xl font-bold tracking-wide text-center text-white"},"My Satisfied Clients Feedback"),r.a.createElement("div",{className:"border-box w-screen px-16"},r.a.createElement(z.a,{slidesPerView:1,autoplay:{delay:3500,disableOnInteraction:!1},speed:900,loop:!0,onInit:function(e){return o(e)},grabCursor:!0},r.a.createElement(G.a,null,r.a.createElement(re,{imgSrc:le,from:"Angelo Plessas",email:"angeloplessas@gmail.com",link:"https://angeloplessas.com/",linkText:"Talismania, Deste Prize, Museum of Cycladic Art"},"Appreciate the great work delivered by Jin for my many projects! He had been very supportive throughout the project and was always available to resolve all the queries and doubts for Talismania, Deste Prize, Museum of Cycladic Art Project. He had done greatest Artist Project such as Canvas-Musculsar Project.")),r.a.createElement(G.a,null,r.a.createElement(re,{imgSrc:"data:image/jpeg;base64,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",from:"Frank Bracq",email:"fbracq@eventstory.live",link:"https://eventstory.live/",linkText:"EventStory.live ( KoT SAS Company, Paris )"},"I\u2019ve worked closely with Jianxing for almost 2 years and feel\n              fully confident in expressing my endorsement. As a React front-end\n              developer in our company, he completed his assignments quickly and\n              perfectly and always provided insight for a better solution. I\n              highly recommend him for any of your React projects."))),r.a.createElement(ee,{reverseColors:!0,swiper:c})))},oe=a(7),ie=a.n(oe),se=a(11),me=a(31),ue=function(e){var t=e.icon,a=Object(m.c)((function(e){return e.theme.currentColor}));return r.a.createElement("div",{className:"jusify-start flex items-center my-4"},r.a.createElement(t,{className:" text-".concat(a," mr-4"),size:28}),r.a.createElement("div",{className:"inline-flex flex-col self-stretch text-left"},r.a.createElement("h5",{className:' "text-'.concat(a,' text-xl tracking-wide"')},e.title),r.a.createElement("p",{className:"text-custom_grey text-xl"},e.info)))},de="border-grey-400 transition duration-500 ease-in-out px-3 focus:border-custom_blue focus:outline-none border-b-2.5 block w-full  py-4 border-solid text-xl my-6",pe="h-16 ".concat(de),fe="h-msg ".concat(de),Ee=function(e){var t=e.text;return r.a.createElement("span",{role:"alert",className:"text-xl text-red-600"},t)},be=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.theme.currentColor})),a=Object(me.a)(),n=a.register,l=a.handleSubmit,c=a.formState.errors,o=a.reset,i=function(){var e=Object(se.a)(ie.a.mark((function e(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("contact"),o();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("section",{id:"contact",className:"flex flex-col items-center justify-center px-16 pt-24 pb-12 text-center"},r.a.createElement(A,{onEnterViewport:function(){e(p("contact"))}}),r.a.createElement(S,null,"Contact Me"),r.a.createElement("h2",{className:"z-10 mt-4 mb-12 text-4xl font-bold tracking-wide text-center"},"Please send me your info in this form"),r.a.createElement("div",{className:"flex flex-col items-stretch w-full"},r.a.createElement(ue,{icon:N.n,title:"Eocation",info:"Haidian district, Beijing, 100086"}),r.a.createElement(ue,{icon:N.i,title:"Email",info:"jianxing.dev@gmail.com"}),r.a.createElement(ue,{icon:N.p,title:"Call on me",info:"(+86) 151 4034 5091"})),r.a.createElement("form",{className:"border-box w-full px-4",onSubmit:l(i)},r.a.createElement("input",Object.assign({id:"name"},n("name",{required:"Name is required"}),{placeholder:"Your Name",className:pe})),c.name&&r.a.createElement(Ee,{text:c.name.message}),r.a.createElement("input",Object.assign({id:"email"},n("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email"}}),{placeholder:"Your Email",className:pe})),c.email&&r.a.createElement(Ee,{text:c.email.message}),r.a.createElement("input",Object.assign({},n("subject",{required:"Subject is required"}),{placeholder:"Your Subject",name:"subject",id:"subject",className:pe})),c.subject&&r.a.createElement(Ee,{text:c.subject.message}),r.a.createElement("textarea",Object.assign({},n("message",{required:"Message is required"}),{placeholder:"Message",name:"message",className:fe})),c.message&&r.a.createElement(Ee,{text:c.message.message}),r.a.createElement("button",{className:" bg-".concat(t," focus:outline-none flex items-center justify-center px-8 py-3 text-xl text-white uppercase rounded-full"),type:"submit"},"submit",r.a.createElement(N.o,{className:"ml-2"}))))},ge=(a(52),function(e){var t=e.icon,a=Object(m.c)((function(e){return e.theme.currentColor}));return r.a.createElement("a",{className:" group transition-colors cursor-pointer duration-300 ease-in-out hover:bg-white inline-flex items-center justify-center w-10 h-10 mx-1 no-underline border-2 border-white rounded-full",href:e.to},r.a.createElement(t,{className:" text-white  transition-colors duration-300 ease-in-out group-hover:text-".concat(a),size:20}))}),he=function(){var e=Object(m.c)((function(e){return e.theme.currentColor}));return r.a.createElement("div",{className:" bg-".concat(e," sticky pt-20 text-center")},r.a.createElement("div",{className:"m-auto"},r.a.createElement(J,null),r.a.createElement("p",{className:"py-6 text-xl text-gray-300"},"Please feel free to contact me with your convenient link below."),r.a.createElement("div",{className:"flex justify-center mb-20"},r.a.createElement(ge,{to:"https://www.linkedin.com/in/jianxing-chao-7427031ab/",icon:N.m}),r.a.createElement(ge,{href:"https://github.com/panda-stack/",icon:N.l}),r.a.createElement(ge,{to:"https://join.skype.com/invite/q79Ct1ZMiYCP",icon:N.s}),r.a.createElement(ge,{to:"https://t.me/darkhorse2050/",icon:N.u}),r.a.createElement(ge,{to:"https://discord.gg/BhjBjFJv",icon:N.h}),r.a.createElement(ge,{to:"https://jianxing-portfolio.herokuapp.com/",icon:N.a})),r.a.createElement("p",{className:"py-3 text-xl text-gray-400 border-t border-opacity-50 border-gray-500"},"\xa9 Create by Jianxing Chao, 2020")))};var xe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(k,null),r.a.createElement(I,null),r.a.createElement(M,null),r.a.createElement(te,null),r.a.createElement(ce,null),r.a.createElement(be,null),r.a.createElement(he,null))},we=Object(u.a)({reducer:{viewSection:f,navOpen:B,theme:x}}),Ae=a(16);c.a.render(r.a.createElement(m.a,{store:we},r.a.createElement(Ae.a,null,r.a.createElement(xe,null))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.41286416.chunk.js.map