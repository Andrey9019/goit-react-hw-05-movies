"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[463],{368:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(689),o=n(87),r=n(184);const i={28:"Action",12:"Adventure",16:"Animation",10751:"Family",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10402:"Music",9648:"Mystery",10749:"Romance",27:"Horror",53:"Thriller",10752:"War",37:"Western"},s=e=>{let{movies:t}=e;const n=(0,a.TH)();return(0,r.jsx)("section",{className:"container",children:(0,r.jsx)("ul",{className:"grid grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-3 list-none m-0",children:t.map((e=>{let{id:t,title:a,poster_path:s,vote_average:l,genre_ids:d}=e;const c=d.map((e=>i[e])).filter(Boolean).slice(0,3).join(", ");return(0,r.jsx)("li",{className:"relative rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_6px_8px_rgba(0,0,0,0.6)] hover:scale-105",children:(0,r.jsxs)(o.rU,{to:`/movies/${t}`,state:{from:n},className:" text-inherit no-underline",children:[(0,r.jsx)("img",{src:s?`https://image.tmdb.org/t/p/w500${s}`:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",alt:a,width:"200",className:"object-cover w-full "}),(0,r.jsxs)("div",{className:"p-1 font-normal text-gray-700",children:[(0,r.jsx)("p",{className:"text-sm font-medium mb-1 md:text-lg lg:text-xl md:font-semibold",children:a}),l>0&&(0,r.jsxs)("p",{className:"text-xs md:text-base lg:text-lg md:font-normal",children:["Rating: ",l.toFixed(1)]}),c&&(0,r.jsxs)("p",{className:"text-xs md:text-sm lg:text-base md:font-normal",children:["Genres: ",c]})]})]})},t)}))})})}},46:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(87),o=n(791),r=n(85),i=(n(462),n(14)),s=n(752),l=n(867);const d=l.ZP.input`
  display: flex;
  width: 300px;
  overflow: hidden;
  border: none;
  height: 40px;
  outline: none;
  padding: 5px 8px;
  margin-bottom: 40px;
  align-items: center;
  font-size: 16px;
`,c=l.ZP.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,m=l.ZP.div`
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,p=l.ZP.label`
  display: flex;
  font-size: 22px;
  font-weight: 500;
  color: white;
  gap: 10px;
  align-items: baseline;
`,x=l.ZP.div`
  display: flex;
  align-items: flex-end;
`,u=l.ZP.button`
  border: none;
  height: 50px;
  width: 50px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  margin-bottom: 40px;
  padding: 10px;
`;var g=n(184);const h=e=>{let{onSubmit:t}=e;const[n,a]=(0,o.useState)("");return(0,g.jsxs)(m,{children:[(0,g.jsx)(c,{onSubmit:e=>{e.preventDefault();const a=n.toLowerCase();t(a),a.trim()||r.Am.error("Please enter something!")},children:(0,g.jsxs)(x,{children:[(0,g.jsxs)(p,{children:["Search by movie",(0,g.jsx)(d,{type:"text",name:"query",value:n,autoFocus:!0,onChange:e=>a(e.target.value),placeholder:"Enter movie"})]}),(0,g.jsx)(u,{type:"submit",children:(0,g.jsx)(s.EjX,{style:{width:"20px",height:"20px"}})})]})}),(0,g.jsx)(r.Ix,{autoClose:4e3,theme:"colored"})]})};var f=n(368),v=n(635);const b=()=>{var e;const[t,n]=(0,o.useState)([]),[s,l]=(0,a.lr)(),[d,c]=(0,o.useState)(!1),[m,p]=(0,o.useState)(!1),x=null!==(e=s.get("query"))&&void 0!==e?e:"";(0,o.useEffect)((()=>{const e=new AbortController;if(x)return async function(){try{c(!0),p(!1);const t=await(0,i.LI)(x,{signal:e.signal});n(t.results)}catch(m){"ERR_CANCELED"!==m.code&&p(!0)}finally{c(!1)}}(),()=>{e.abort()}}),[x]);return(0,g.jsxs)("main",{children:[d&&(0,g.jsx)(v.Z,{}),m&&r.Am.error("Oops, something went wrong. Try reloading the page"),(0,g.jsx)(h,{onSubmit:e=>{if(x===e)return r.Am.info("Nothing found, please try something else");l(""!==e?{query:e}:{})}}),0===t.length&&(0,g.jsx)("p",{children:"No results"}),(0,g.jsx)(f.Z,{movies:t}),(0,g.jsx)(r.Ix,{autoClose:4e3,theme:"colored"})]})}},14:(e,t,n)=>{n.d(t,{BG:()=>i,DC:()=>r,LI:()=>s,oO:()=>l,y:()=>d});var a=n(243);const o="345007f9ab440e5b86cef51be6397df1";a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={key:o};const r=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=await a.Z.get(`/trending/movie/day?api_key=${o}`,e);return t.data},i=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=await a.Z.get(`/movie/${e}?api_key=${o}`,t);return n.data},s=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=await a.Z.get(`/search/movie?query=${e}&api_key=${o}`,t);return n.data},l=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=await a.Z.get(`/movie/${e}/reviews?api_key=${o}`,t);return n.data},d=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=await a.Z.get(`/movie/${e}/credits?api_key=${o}`,t);return n.data}}}]);
//# sourceMappingURL=463.8abbbc27.chunk.js.map