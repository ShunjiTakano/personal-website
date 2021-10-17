(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},48:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(13),i=s.n(c),r=(s(40),s(5)),o=(s(41),s(82)),l=s(25),j=s.n(l),d=s(26),h=s.n(d),m=s(1);function u(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(m.jsx)("div",{className:"navbar "+(t&&"active"),id:"navbar",children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("a",{href:"#introduction",className:"home",children:"Shunji."}),Object(m.jsxs)("div",{className:"contactsContainer",children:[Object(m.jsx)(o.a,{className:"icon"}),Object(m.jsx)("span",{children:"Shunji.Takano.dev@gmail.com"})]}),Object(m.jsxs)("div",{className:"contactsContainer",children:[Object(m.jsx)(j.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"github.com/ShunjiTakano",children:"github.com/ShunjiTakano"})})]}),Object(m.jsxs)("div",{className:"contactsContainer",children:[Object(m.jsx)(h.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/shunji-takano",children:"linkedin.com/in/shunji-takano"})})]})]}),Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(m.jsx)("span",{className:"line1"}),Object(m.jsx)("span",{className:"line2"}),Object(m.jsx)("span",{className:"line3"})]})})]})})}s(48);var b=s(17),O=s.n(b),x=s(27);function p(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){Object(x.a)(e.current,{showCursor:!0,backDelay:1e3,backSpeed:70,strings:["Software Engineer","Cloud Enthusiast","Musician","Food Lover"]})}),[]),Object(m.jsxs)("div",{className:"introduction",id:"introduction",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{src:"assets/profile.png",alt:""})})}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{children:"Hey There!"}),Object(m.jsx)("h1",{children:"I'm Shunji Takano"}),Object(m.jsxs)("h3",{children:["A ",Object(m.jsx)("span",{ref:e})]})]}),Object(m.jsx)("a",{href:"#works",children:Object(m.jsx)(O.a,{style:{fontSize:100},className:"arrow"})})]})]})}s(52);var f=s(28),g=s.n(f),v=s(29),N=s.n(v),w=[{id:"1",icon:"./assets/Coretex.png",title:"Coretex - Software Engineer",date:"January 2021 - Present",desc:"Worked with the Frontend, Platform and Devops teams. Integrated Coretex360's new UI with the legacy UI using React and ASP.NET. With the Devops team, I have automated the legacy patching process and created deployment pipelines for other teams. Currently in the Platform team using a cloud kafka PaaS to improve communication between Coretex devices. Working in the deployment team to push out bi-montly releases and being one of the on-call engineers.",img:"./assets/CoretexGroup.jpg"},{id:"2",icon:"./assets/FraedomLogo.jpg",title:"Fraedom - Software Engineer Intern",date:"November 2019 - February 2020",desc:"Created a proof of concept optical character recognition application using Python, Machine learning (Keras) and AWS services (Textract, Lambda, S3). Built a fully automated end-to-end pipeline, where users can upload an image and the image is processed and results are uploaded automatically.",img:"./assets/FraedomTextractFlow.png"},{id:"3",icon:"./assets/NTHULogo.png",title:"National Tsing Hua University - Research Intern",date:"November 2018 - February 2019",desc:"Worked under an adjunct assistant professor to conducted research, which aimed to estimate manufacturing costs of electrical transformers using natural language processing techniques. Created a web app in Django, which allowed companies to estimate the cost of manufacturing a transformer through an AI chatbot. Invited to the IIMA2019 conference in New York to present our findings.",img:"./assets/NTHUGroup.jpg"}];function k(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),s=t[0],a=t[1],c=function(e){a("left"===e?s>0?s-1:2:s<w.length-1?s+1:0)};return Object(m.jsxs)("div",{className:"works",id:"works",children:[Object(m.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:w.map((function(e){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsxs)("div",{className:"leftContainer",children:[Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{src:e.icon,alt:""})}),Object(m.jsx)("h2",{children:e.title}),Object(m.jsx)("h3",{children:e.date}),Object(m.jsx)("p",{children:e.desc})]})}),Object(m.jsx)("div",{className:"right",children:Object(m.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(m.jsx)(g.a,{className:"arrow left",onClick:function(){return c("left")}}),Object(m.jsx)(N.a,{className:"arrow right",onClick:function(){return c("right")}}),Object(m.jsx)("a",{href:"#portfolio",children:Object(m.jsx)(O.a,{style:{fontSize:100},className:"arrow bottom"})})]})}s(53);var y=s(23);function C(){var e=Object(y.b)("mvodnzon"),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(m.jsxs)("div",{className:"contact",id:"contact",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)("h2",{children:"Contact."}),Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email"}),Object(m.jsx)("textarea",{placeholder:"Message",id:"message",name:"message"}),Object(m.jsx)(y.a,{prefix:"Message",field:"message",errors:s.errors}),Object(m.jsx)("button",{type:"submit",disabled:s.submitting,children:"Send"}),s.succeeded&&Object(m.jsx)("span",{children:"Thank you for your message. I will reply as soon as possible."})]})]})]})}s(57);function S(e){var t=e.section,s=e.name,n=e.setMenuOpen;return Object(m.jsx)("li",{onClick:function(){return n(!1)},children:Object(m.jsx)("a",{href:"#"+t,children:s})})}function M(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(m.jsx)("div",{className:"sidebar "+(t&&"active"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)(S,{section:"introduction",name:"Home",setMenuOpen:s}),Object(m.jsx)(S,{section:"works",name:"Work Experience",setMenuOpen:s}),Object(m.jsx)(S,{section:"portfolio",name:"Portfolio",setMenuOpen:s}),Object(m.jsx)(S,{section:"contact",name:"Contact",setMenuOpen:s})]})})}s(58);var I=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(u,{menuOpen:s,setMenuOpen:a}),Object(m.jsx)(M,{menuOpen:s,setMenuOpen:a}),Object(m.jsxs)("div",{className:"sections",children:[Object(m.jsx)(p,{}),Object(m.jsx)(k,{}),Object(m.jsx)(C,{})]})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f6c9f093.chunk.js.map