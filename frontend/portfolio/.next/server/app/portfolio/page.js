(()=>{var e={};e.id=444,e.ids=[444],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9498:e=>{"use strict";e.exports=require("tailwindcss/resolveConfig")},2706:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>u,tree:()=>d}),s(7369),s(8691),s(5866);var r=s(3191),a=s(8716),l=s(7922),i=s.n(l),o=s(5231),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);s.d(t,n);let d=["",{children:["portfolio",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7369)),"/Users/james/repos/jamesmdev/frontend/portfolio/src/app/portfolio/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,8691)),"/Users/james/repos/jamesmdev/frontend/portfolio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/james/repos/jamesmdev/frontend/portfolio/src/app/portfolio/page.tsx"],x="/portfolio/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/portfolio/page",pathname:"/portfolio",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6471:(e,t,s)=>{Promise.resolve().then(s.bind(s,700))},6188:(e,t,s)=>{"use strict";s.d(t,{SY:()=>l,bl:()=>a,f9:()=>o,h5:()=>i});let r="http://localhost:3001/",a=async()=>{try{let e=await fetch(`${r}projects`);if(!e.ok)throw Error("Error getting response");return await e.json()}catch(e){console.log(e)}},l=async()=>{try{let e=await fetch(`${r}lastproject`);if(!e.ok)throw Error("Error getting response");return await e.json()}catch(e){console.log(e)}},i=async()=>{try{let e=await fetch(`${r}collaborations`);if(!e.ok)throw Error("Error getting response");return await e.json()}catch(e){console.log(e)}},o=async()=>{try{let e=await fetch(`${r}updates`);if(!e.ok)throw Error("Error getting response");return await e.json()}catch(e){console.log(e)}}},9189:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(326);s(7577);let a=()=>r.jsx("div",{className:"fixed top-0 left-0 w-full h-full content-center items-center z-50",children:(0,r.jsxs)("div",{className:"flex justify-center [&>*]:m-[0.5px]",children:[r.jsx("span",{className:"inline-flex w-5 h-5 rounded-full bg-gray-300 opacity-50"}),r.jsx("span",{className:"inline-flex w-5 h-5 rounded-full bg-gray-300 opacity-50"}),r.jsx("span",{className:"inline-flex w-5 h-5 rounded-full bg-gray-300 opacity-50"})]})})},700:(e,t,s)=>{"use strict";s.d(t,{default:()=>p});var r=s(326),a=s(434),l=s(6226),i=s(4831),o=s(4952);let n=e=>{let t=[],s=[],{isMd:n}=(0,o.G)("md"),{isLg:d}=(0,o.G)("lg"),{theme:c}=(0,i.F)(),x=n||d?50:30,p={html:"file-type-html.svg",bootstrap:"bootstrap.svg",js:"javascript-js.svg",flask:"light"===c?"flask.svg":"flask white.svg",python:"python.svg",postgresql:"",tailwind:"",nextjs:""};return(0,r.jsxs)("div",{className:"flex flex-col items-center pb-10",children:[(0,r.jsxs)("div",{className:"flex sm:text-2xl lg:text-3xl items-center [&>*]:mx-2 mb-5",children:[r.jsx("div",{className:"font-medium text-lg sm:text-2xl",children:e.project.title}),r.jsx(a.default,{href:e.project.githubLink,children:"light"===c?r.jsx(l.default,{className:"transition-opacity duration-200 hover:opacity-50",src:"/external/github.svg",width:40,height:40,alt:"github_logo"}):r.jsx(l.default,{className:"transition-opacity duration-200 hover:opacity-50",src:"/external/github white.svg",width:40,height:40,alt:"github_logo"})})]}),(0,r.jsxs)("div",{className:"overflow-hidden rounded shadow-2xl flex items-center justify-center",onClick:()=>{let t=document.getElementById(`${e.index}`);if(t){t.style.animationPlayState="paused"===t.style.animationPlayState?"running":"paused";let s="paused"===t.style.animationPlayState?document.getElementById(`pause${e.index}`):document.getElementById(`play${e.index}`);s&&(s.classList.remove("hidden"),s.classList.add("animate-ping-slow"),s.addEventListener("animationend",()=>{s.classList.add("hidden")}))}},children:["light"===c?(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"absolute z-50",children:r.jsx(l.default,{id:`pause${e.index}`,className:"bg-orange-500 rounded-full opacity-80 hidden",src:"/slideshow/pause.svg",width:x,height:x,alt:"pause"})}),r.jsx("div",{className:"absolute z-50",children:r.jsx(l.default,{id:`play${e.index}`,className:"bg-orange-500 rounded-full opacity-80 hidden",src:"/slideshow/play-arrow.svg",width:x,height:x,alt:"pause"})})]}):(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"absolute z-50",children:r.jsx(l.default,{id:`pause${e.index}`,className:"bg-blue-500 rounded-full opacity-80 hidden",src:"/slideshow/pause.svg",width:x,height:x,alt:"pause"})}),r.jsx("div",{className:"absolute z-50",children:r.jsx(l.default,{id:`play${e.index}`,className:"bg-blue-500 rounded-full opacity-80 hidden",src:"/slideshow/play-arrow.svg",width:x,height:x,alt:"pause"})})]}),r.jsx("div",{id:`${e.index}`,className:"block__slideshow",children:(()=>{for(let t in e.project.slideshowDirs)s.push(r.jsx(l.default,{src:`/slideshow/${e.project.slideshowDirs[t]}`,width:5e3,height:5e3,alt:t},t));return s})()})]}),r.jsx("div",{children:r.jsx("p",{id:"desc",className:"my-5 text-justify",children:e.project.description})}),r.jsx("div",{className:"font-bold",children:"Created with..."}),r.jsx("div",{className:"flex flex-wrap [&>*]:mx-4 [&>*]:mt-4",children:(()=>{for(let s in e.project.stack)t.push(r.jsx(l.default,{src:`/techstack/${p[e.project.stack[s]]}`,width:40,height:40,alt:s},s));return t})()})]})};var d=s(9189),c=s(7577),x=s(6188);let p=()=>{let[e,t]=(0,c.useState)([]),[s,a]=(0,c.useState)([]),[l,i]=(0,c.useState)(!0);return((0,c.useEffect)(()=>{(async()=>{try{t(await (0,x.bl)()),a(await (0,x.h5)())}catch(e){console.log(e)}finally{i(!1)}})()},[]),l)?r.jsx(d.Z,{}):(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[r.jsx("div",{className:"font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-5xl py-10",children:"Projects"}),e.map((e,t)=>r.jsx(n,{index:`proj${t}`,project:e},t))]}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[r.jsx("div",{className:"font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-5xl py-10",children:"Collaborations"}),s.map((e,t)=>r.jsx(n,{index:`col${t}`,project:e},t))]})]})}},7369:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(9510);s(1159);var a=s(8570);let l=(0,a.createProxy)(String.raw`/Users/james/repos/jamesmdev/frontend/portfolio/src/components/projects/ProjectList.tsx`),{__esModule:i,$$typeof:o}=l;l.default;let n=(0,a.createProxy)(String.raw`/Users/james/repos/jamesmdev/frontend/portfolio/src/components/projects/ProjectList.tsx#default`),d=()=>r.jsx("div",{className:"mx-10 sm:mx-20 lg:mx-40 xl:mx-80",children:r.jsx(n,{})})}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[48,843],()=>s(2706));module.exports=r})();