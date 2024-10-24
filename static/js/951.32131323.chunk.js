"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[951],{951:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(689),l=s(791),n=s(85),r=s(14),i=s(635),o=s(87),c=s(806),x=s(632),d=s(184);const m=e=>{let{movies:t}=e;const{title:s,poster_path:a,vote_average:l,overview:n,genres:r}=t,i=r?r.map((e=>e.name)).join(", "):[];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"md:flex justify-center gap-5 mb-5 p-5 max-w-screen-xl mx-auto",children:[(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)("img",{src:a?`https://image.tmdb.org/t/p/w500${a}`:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",alt:s,className:"max-h-[350px] lg:max-h-[500px] object-cover rounded-lg"})}),(0,d.jsxs)("div",{className:"flex flex-col justify-center lg:justify-around gap-5 flex-1",children:[(0,d.jsx)("h2",{className:"text-center text-4xl font-bold lg:text-7xl",children:s}),(0,d.jsxs)("ul",{className:"list-none p-0 m-0 text-center flex-col ",children:[(0,d.jsxs)("li",{className:"flex justify-center sm:justify-start gap-2 mb-3 ",children:[(0,d.jsx)("h3",{className:" text-xl lg:text-3xl",children:"User score:"}),(0,d.jsxs)("p",{className:" text-lg lg:text-3xl",children:[Math.round(10*l),"%"]})]}),(0,d.jsxs)("li",{className:"flex flex-col items-start mb-3 sm:justify-start ",children:[(0,d.jsx)("h3",{className:" text-xl font-bold lg:text-3xl",children:"What the movie is about:"}),(0,d.jsx)("p",{className:" text-lg lg:text-2xl",children:""!==n?n:"No overview provided"})]}),(0,d.jsxs)("li",{className:"flex justify-center sm:justify-start gap-2 mb-3",children:[(0,d.jsx)("h3",{className:" text-xl lg:text-2xl font-bold",children:"Genres:"}),(0,d.jsx)("p",{className:" text-lg lg:text-2xl",children:""!==i?i:"No genres provided"})]})]})]})]}),(0,d.jsx)("div",{className:"flex justify-center mx-auto",children:(0,d.jsxs)("ul",{className:"flex items-center gap-12 mb-12",children:[(0,d.jsx)("li",{children:(0,d.jsxs)(o.rU,{to:"cast",className:"text-2xl border border-black rounded-lg py-1 px-6 font-semibold transition duration-250 ease-in-out hover:text-[#ff5733] hover:border-[#ff5733] no-underline duration-300  flex items-center space-x-2",children:[(0,d.jsx)(c.G,{icon:x.ILF}),(0,d.jsx)("span",{children:"Cast"})]})}),(0,d.jsx)("li",{children:(0,d.jsxs)(o.rU,{to:"review",className:"text-2xl border border-black rounded-lg py-1 px-6 font-semibold transition duration-250 ease-in-out hover:text-[#ff5733] hover:border-[#ff5733] no-underline duration-300  flex items-center space-x-2",children:[(0,d.jsx)(c.G,{icon:x.Mzg}),(0,d.jsx)("span",{children:"Review"})]})})]})})]})},h=()=>{const[e,t]=(0,l.useState)(null),[s,o]=(0,l.useState)(!1),[c,x]=(0,l.useState)(!1),{movieId:h}=(0,a.UO)();return(0,l.useEffect)((()=>{const e=new AbortController;return async function(){try{o(!0),x(!1);const s=await(0,r.BG)(h,{signal:e.signal});t(s)}catch(c){"ERR_CANCELED"!==c.code&&x(!0)}finally{o(!1)}}(),()=>{e.abort()}}),[h]),(0,d.jsx)("main",{children:(0,d.jsxs)("div",{className:"container",children:[s&&(0,d.jsx)(i.Z,{}),c&&n.Am.error("Oops, something went wrong. Try reloading the page"),e&&(0,d.jsx)(m,{movies:e}),(0,d.jsx)(l.Suspense,{fallback:(0,d.jsx)(i.Z,{}),children:(0,d.jsx)(a.j3,{})}),(0,d.jsx)(n.Ix,{autoClose:4e3,theme:"colored"})]})})}},14:(e,t,s)=>{s.d(t,{BG:()=>r,DC:()=>n,LI:()=>i,oO:()=>o,y:()=>c});var a=s(243);const l="345007f9ab440e5b86cef51be6397df1";a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={key:l};const n=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=await a.Z.get(`/trending/movie/day?api_key=${l}`,e);return t.data},r=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=await a.Z.get(`/movie/${e}?api_key=${l}`,t);return s.data},i=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=await a.Z.get(`/search/movie?query=${e}&api_key=${l}`,t);return s.data},o=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=await a.Z.get(`/movie/${e}/reviews?api_key=${l}`,t);return s.data},c=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=await a.Z.get(`/movie/${e}/credits?api_key=${l}`,t);return s.data}}}]);
//# sourceMappingURL=951.32131323.chunk.js.map