"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[953],{953:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var a=o(791),n=o(689),r=o(85),i=(o(462),o(14)),s=o(867);const c=s.ZP.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`,d=s.ZP.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,l=s.ZP.h3`
  font-weight: bold;
  margin-bottom: 5px;
`,u=s.ZP.p`
  color: white;
  font-size: 16px;
`,h=s.ZP.li`
  margin: 10px 0;
  padding: 10px;
  background-color: #444;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;var g=o(635),p=o(184);const m=()=>{const[e,t]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!1),[m,x]=(0,a.useState)([]);console.log(m);const{movieId:f}=(0,n.UO)();return(0,a.useEffect)((()=>{const e=new AbortController;return async function(){try{t(!0),s(!1);const o=await(0,i.oO)(f,{signal:e.signal});x(o.results)}catch(o){"ERR_CANCELED"!==o.code&&s(!0)}finally{t(!1)}}(),()=>{e.abort()}}),[f]),(0,p.jsxs)(c,{children:[e&&(0,p.jsx)(g.Z,{}),o&&r.Am.error("Whoops, something went wrong. Try reloading the page"),m.length>0?(0,p.jsx)(d,{children:m.map((e=>{const{content:t,author:o}=e;return(0,p.jsxs)(h,{children:[(0,p.jsx)(l,{children:o}),(0,p.jsx)(u,{children:t})]},o)}))}):(0,p.jsx)(u,{children:"There is no review for this movie"}),(0,p.jsx)(r.Ix,{autoClose:4e3,theme:"colored"})]})}},14:(e,t,o)=>{o.d(t,{BG:()=>i,DC:()=>r,LI:()=>s,oO:()=>c,y:()=>d});var a=o(243);const n="345007f9ab440e5b86cef51be6397df1";a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={key:n};const r=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=await a.Z.get(`/trending/movie/day?api_key=${n}`,e);return t.data},i=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=await a.Z.get(`/movie/${e}?api_key=${n}`,t);return o.data},s=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=await a.Z.get(`/search/movie?query=${e}&api_key=${n}`,t);return o.data},c=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=await a.Z.get(`/movie/${e}/reviews?api_key=${n}`,t);return o.data},d=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=await a.Z.get(`/movie/${e}/credits?api_key=${n}`,t);return o.data}},462:()=>{}}]);
//# sourceMappingURL=953.0631dd95.chunk.js.map