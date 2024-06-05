(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9498:e=>{"use strict";e.exports=require("tailwindcss/resolveConfig")},7762:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>h,pages:()=>d,routeModule:()=>m,tree:()=>c}),s(1120),s(8691),s(5866);var a=s(3191),r=s(8716),l=s(7922),i=s.n(l),n=s(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1120)),"/Users/james/repos/jamesmdev/frontend/portfolio/src/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,8691)),"/Users/james/repos/jamesmdev/frontend/portfolio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/james/repos/jamesmdev/frontend/portfolio/src/app/page.tsx"],h="/page",x={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7405:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.t.bind(s,9404,23)),Promise.resolve().then(s.bind(s,1036)),Promise.resolve().then(s.bind(s,4305)),Promise.resolve().then(s.bind(s,3166))},6188:(e,t,s)=>{"use strict";s.d(t,{SY:()=>l,bl:()=>r,f9:()=>n,h5:()=>i});let a="http://localhost:3001/",r=async()=>{try{let e=await fetch(`${a}projects`);if(!e.ok)throw Error("Error getting response");return await e.json()}catch(e){console.log(e)}},l=async()=>{try{let e=await fetch(`${a}lastproject`);if(!e.ok)throw Error("Error getting response");return await e.json()}catch(e){console.log(e)}},i=async()=>{try{let e=await fetch(`${a}collaborations`);if(!e.ok)throw Error("Error getting response");return await e.json()}catch(e){console.log(e)}},n=async()=>{try{let e=await fetch(`${a}updates`);if(!e.ok)throw Error("Error getting response");return await e.json()}catch(e){console.log(e)}}},1036:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var a=s(326),r=s(6226),l=s(4831),i=s(7577);let n=()=>{let{theme:e}=(0,l.F)(),[t,s]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{s(!0)},[]),t)?(0,a.jsxs)("div",{className:"flex flex-col items-center py-10",children:[a.jsx("div",{className:"font-bold text-lg",children:"Tech Stack"}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row md:flex-row lg:flex-row",children:[(0,a.jsxs)("span",{className:"flex [&>*]:mx-4 [&>*]:mt-4 [&>*]:object-contain",children:[a.jsx(r.default,{src:"/techstack/React-icon.svg",width:50,height:50,alt:"react-icon"}),a.jsx(r.default,{src:"/techstack/Typescript_logo_2020.svg",width:50,height:50,alt:"react-icon"}),a.jsx(r.default,{src:"/techstack/Tailwind_CSS_Logo.svg",width:50,height:50,alt:"react-icon"})]}),(0,a.jsxs)("span",{className:"flex [&>*]:mx-4 [&>*]:mt-4 [&>*]:object-contain",children:[a.jsx(r.default,{src:"/techstack/Postgresql_elephant.svg",width:50,height:50,alt:"react-icon"}),"light"===e?a.jsx(r.default,{src:"/techstack/nextjs.svg",width:50,height:50,alt:"react-icon"}):a.jsx(r.default,{src:"/techstack/nextjs white.svg",width:50,height:50,alt:"react-icon"}),"light"===e?a.jsx(r.default,{src:"/techstack/flask.svg",width:50,height:50,alt:"react-icon"}):a.jsx(r.default,{src:"/techstack/flask white.svg",width:50,height:50,alt:"react-icon"})]})]})]}):null}},9189:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(326);s(7577);let r=()=>a.jsx("div",{className:"fixed top-0 left-0 w-full h-full content-center items-center z-50",children:(0,a.jsxs)("div",{className:"flex justify-center [&>*]:m-[0.5px]",children:[a.jsx("span",{className:"inline-flex w-5 h-5 rounded-full bg-gray-300 opacity-50"}),a.jsx("span",{className:"inline-flex w-5 h-5 rounded-full bg-gray-300 opacity-50"}),a.jsx("span",{className:"inline-flex w-5 h-5 rounded-full bg-gray-300 opacity-50"})]})})},4305:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});var a=s(326);let r=()=>a.jsx("div",{className:"h-[50vh] flex justify-center items-center font-extrabold text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7.5xl text-center text-wrap w-100",children:a.jsx("div",{className:"shimmer",children:"Fullstack Developer"})})},3166:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(326),r=s(6226),l=s(4831),i=s(4952),n=s(9189),o=s(7577),c=s(6188);let d=()=>{let e=[],t=[],{isMd:s}=(0,i.G)("md"),{isLg:d}=(0,i.G)("lg"),{theme:h}=(0,l.F)(),[x,m]=(0,o.useState)({}),[u,p]=(0,o.useState)(!0);if((0,o.useEffect)(()=>{(async()=>{try{let e=await (0,c.SY)();console.log(e),m(e)}catch(e){console.log(e)}finally{p(!1)}})()},[]),u)return a.jsx(n.Z,{});let f=s||d?50:30,g={html:"file-type-html.svg",bootstrap:"bootstrap.svg",js:"javascript-js.svg",flask:"light"===h?"flask.svg":"flask white.svg",python:"python.svg",postgresql:"",tailwind:"",nextjs:""};return(0,a.jsxs)("div",{className:"pb-20",children:[a.jsx("div",{className:"font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-5xl mb-10",children:"Recent work..."}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{className:"overflow-hidden rounded shadow-2xl flex items-center justify-center",onClick:()=>{let e=document.getElementById(`${x.id}`);if(e){e.style.animationPlayState="paused"===e.style.animationPlayState?"running":"paused";let t="paused"===e.style.animationPlayState?document.getElementById("pause"):document.getElementById("play");t&&(t.classList.remove("hidden"),t.classList.add("animate-ping-slow"),t.addEventListener("animationend",()=>{t.classList.add("hidden")}))}},children:["light"===h?(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"absolute z-50",children:a.jsx(r.default,{id:"pause",className:"bg-orange-500 rounded-full opacity-80 hidden",src:"/slideshow/pause.svg",width:f,height:f,alt:"pause"})}),a.jsx("div",{className:"absolute z-50",children:a.jsx(r.default,{id:"play",className:"bg-orange-500 rounded-full opacity-80 hidden",src:"/slideshow/play-arrow.svg",width:f,height:f,alt:"pause"})})]}):(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"absolute z-50",children:a.jsx(r.default,{id:"pause",className:"bg-blue-500 rounded-full opacity-80 hidden",src:"/slideshow/pause.svg",width:f,height:f,alt:"pause"})}),a.jsx("div",{className:"absolute z-50",children:a.jsx(r.default,{id:"play",className:"bg-blue-500 rounded-full opacity-80 hidden",src:"/slideshow/play-arrow.svg",width:f,height:f,alt:"pause"})})]}),a.jsx("div",{id:`${x.id}`,className:"block__slideshow",children:(()=>{for(let e in x.slideshowDirs)t.push(a.jsx(r.default,{src:`/slideshow/${x.slideshowDirs[e]}`,width:5e3,height:5e3,alt:e},e));return t})()})]}),a.jsx("div",{children:a.jsx("p",{id:"desc",className:"my-5 text-justify",children:x.description})}),a.jsx("div",{className:"font-bold",children:"Created with..."}),a.jsx("div",{className:"flex flex-wrap [&>*]:mx-4 [&>*]:mt-4",children:(()=>{for(let t in x.stack)e.push(a.jsx(r.default,{src:`/techstack/${g[x.stack[t]]}`,width:40,height:40,alt:t},t));return e})()})]})]})}},1120:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>j});var a=s(9510),r=s(1905),l=s(8570);let i=(0,l.createProxy)(String.raw`/Users/james/repos/jamesmdev/frontend/portfolio/src/components/about/TechStackBanner.tsx`),{__esModule:n,$$typeof:o}=i;i.default;let c=(0,l.createProxy)(String.raw`/Users/james/repos/jamesmdev/frontend/portfolio/src/components/about/TechStackBanner.tsx#default`),d=(0,l.createProxy)(String.raw`/Users/james/repos/jamesmdev/frontend/portfolio/src/components/projects/RecentProject.tsx`),{__esModule:h,$$typeof:x}=d;d.default;let m=(0,l.createProxy)(String.raw`/Users/james/repos/jamesmdev/frontend/portfolio/src/components/projects/RecentProject.tsx#default`),u=(0,l.createProxy)(String.raw`/Users/james/repos/jamesmdev/frontend/portfolio/src/components/landing/Landing.tsx`),{__esModule:p,$$typeof:f}=u;u.default;let g=(0,l.createProxy)(String.raw`/Users/james/repos/jamesmdev/frontend/portfolio/src/components/landing/Landing.tsx#default`),j=()=>(0,a.jsxs)("div",{className:"mx-10 sm:mx-20 lg:mx-40 xl:mx-80",children:[a.jsx(g,{}),a.jsx(m,{}),a.jsx(r.Z,{}),a.jsx(c,{})]})},1905:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(9510);s(1159);var r=s(7371),l=s(7710);let i=()=>(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row xl:flex-row items-center pt-10",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[a.jsx("div",{className:"rounded-full overflow-hidden w-64",children:a.jsx(l.default,{className:"object-contain shadow-2xl",src:"/me.jpg",width:300,height:300,alt:"me"})}),a.jsx("div",{children:a.jsx("h3",{className:"pt-2 font-medium shimmer",children:"@James"})})]}),(0,a.jsxs)("div",{className:"pt-10 md:pt-0 lg:pt-0 lg:pl-10 xl:pl-10",children:[a.jsx("p",{className:"text-center md:text-justify lg:text-justify",children:"Hey! \uD83D\uDC4B"}),(0,a.jsxs)("p",{className:"text-justify p-0 m-0",children:[a.jsx("br",{}),"I'm James, a Computer Science student from Cardiff, Wales. I love building websites and any other software projects I can think of, alongside working out and playing (too many) video games.",a.jsx("br",{}),a.jsx("br",{}),"I made this website to showcase my software projects. Here you will find what I have made (including what I made it with), what I am currently making, and any thoughts of mine, you'll find these on my"," ",a.jsx(r.default,{href:"/blog",className:"themed-element font-medium",children:"blog"}),"."]})]})]})}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[48,343,843],()=>s(7762));module.exports=a})();