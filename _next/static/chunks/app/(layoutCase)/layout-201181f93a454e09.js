(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{6809:function(e,a,s){Promise.resolve().then(s.bind(s,605))},605:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return z}});var t=s(7437),r=s(1396),n=s.n(r),c=s(5942),i=s.n(c),_=s(4033),l=s(4440),o=s.n(l),d=s(2265),m=s(6385),h=s.n(m),p=s(9035),u=s(4730),x=s(680),b=s.n(x);function g(){let[e,a]=(0,d.useState)(!1),s=(0,d.useRef)(null);return(0,t.jsxs)("search",{className:o()(b().search,e&&b().search_active),children:[(0,t.jsx)("i",{className:"fas fa-search fa-fw ".concat(b().search_ico)}),(0,t.jsx)("input",{id:"search",ref:s,className:o()(b().search_input,e&&b().search_input_active),onFocus:()=>{a(!0)},onBlur:()=>{a(!1)},placeholder:"Search...",autoComplete:"off"})]})}function f(e){let{moveToggle:a}=e,s=(0,_.useSelectedLayoutSegment)();return(0,t.jsxs)("header",{className:h().topbar_wrapper,children:[(0,t.jsxs)("div",{className:h().top_bar,children:[(0,t.jsx)("nav",{className:h().breadcrumb,children:(0,t.jsxs)("span",{children:[(0,t.jsx)(n(),{className:h().topbar_txt,href:"/",children:"Home"}),"algorithm"!==s?(0,t.jsx)(j,{data:p.s}):(0,t.jsx)(j,{data:u.i})]})}),(0,t.jsx)(g,{})]}),(0,t.jsxs)("div",{className:h().mobile_topbar,children:[(0,t.jsx)("button",{className:h().sidebar_trigger,onClick:()=>a(),children:(0,t.jsx)("i",{className:"fas fa-bars fa-fw ".concat(h().sidebar_trigger_ico)})}),(0,t.jsx)("div",{className:h().mobile_topbar_title,children:"be come \uD83D\uDCA1"}),(0,t.jsx)("button",{className:h().search_trigger,children:(0,t.jsx)("i",{className:"fas fa-search fa-fw ".concat(h().search_trigger_ico)})})]})]})}function j(e){var a;let{data:s}=e,r=(0,_.useSelectedLayoutSegments)(),c=Number(r[r.length-1]);return(0,t.jsx)(t.Fragment,{children:isNaN(c)?(0,t.jsx)(t.Fragment,{children:r.map((e,a)=>(0,t.jsx)(n(),{className:h().topbar_txt,href:"/".concat(decodeURIComponent(e)),children:(0,t.jsx)("p",{className:h().upper_case,children:decodeURIComponent(e)})},a))}):(0,t.jsx)(n(),{className:h().topbar_txt,href:"",children:null===(a=s.find(e=>e.id===c))||void 0===a?void 0:a.title})})}var v=s(7393),N=s.n(v);let w=Array.from(new Set(p.s.flatMap(e=>e.tag)));function y(){return(0,t.jsx)("aside",{className:N().panel_wrapper,children:(0,t.jsxs)("div",{className:N().access,children:[(0,t.jsxs)("section",{className:N().access_lastmod,children:[(0,t.jsx)("h2",{className:N().panel_heading,children:"Recently Updated"}),(0,t.jsx)("ul",{className:N().panel_recently,children:p.q.slice(0,5).map(e=>(0,t.jsx)("li",{className:N().text_truncate,children:(0,t.jsx)(n(),{href:"/posts/".concat(e.id),children:e.title})},e.id))})]}),(0,t.jsxs)("section",{className:N().panel_tag_contain,children:[(0,t.jsx)("h2",{className:N().panel_heading,children:"Trending Tags"}),(0,t.jsx)("div",{className:N().panel_tag,children:w.map((e,a)=>e&&(0,t.jsx)(n(),{className:N().tag,href:"/tags/".concat(e),children:e},a))})]})]})})}var C=s(3046),S=s(3912),k=s(9730),L=s(5338);let E=(0,k.xC)({reducer:{postStore:S.ZP.reducer,algorithmStore:L.ZP.reducer}});var B=s(6691),F=s.n(B),P=s(293),A=s.n(P);function T(){return(0,t.jsx)(F(),{loader:e=>{let{src:a,width:s,quality:t}=e;return"https://nam-yeun-hwa.github.io/image/".concat(a,"?w=").concat(s,"&q=").concat(t||75)},className:A().img,src:"profile1.jpg",alt:"프로필 사진",width:112,height:112})}let I={MOBILE_APPLY_SIZE:849};var z=function(e){let{children:a,modal:s}=e,r=(0,_.useSelectedLayoutSegment)(),[c,l]=(0,d.useState)(!1),[m,h]=(0,d.useState)(null);(0,d.useEffect)(()=>{let e=()=>{h(window.innerWidth)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let p=()=>{m&&m<=I.MOBILE_APPLY_SIZE&&l(!c)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("aside",{id:"sidebar",className:o()(i().sidebar,c&&i().sidebar_move),children:[(0,t.jsxs)("header",{className:i().profile_wrapper,children:[(0,t.jsx)(n(),{href:"/posts",children:(0,t.jsx)(T,{})}),(0,t.jsx)("h1",{className:i().blog_name_txt,children:"my blog"}),(0,t.jsx)("p",{className:i().site_subtitle,children:"You can only earn as much as an ant does by working like an ant."})]}),(0,t.jsx)("nav",{children:(0,t.jsxs)("ul",{className:i().nav,children:[(0,t.jsx)("li",{className:o()(i().nav_item,("posts"===r||null===r)&&i().active),onClick:p,children:(0,t.jsxs)(n(),{href:"/posts",className:i().nav_link,children:[(0,t.jsx)("i",{className:"fa-fw fas fa-home ".concat(i().ico)}),(0,t.jsx)("span",{className:i().nav_txt,children:"HOME"})]})}),(0,t.jsx)("li",{className:o()(i().nav_item,"categories"===r&&i().active),onClick:p,children:(0,t.jsxs)(n(),{className:i().nav_link,href:"/categories",children:[(0,t.jsx)("i",{className:"fa-fw fas fa-stream ".concat(i().ico)}),(0,t.jsx)("span",{className:i().nav_txt,children:"CATEGORIES"})]})}),(0,t.jsx)("li",{className:o()(i().nav_item,"tags"===r&&i().active),onClick:p,children:(0,t.jsxs)(n(),{className:i().nav_link,href:"/tags",children:[(0,t.jsx)("i",{className:"fa-fw fas fa-tags ".concat(i().ico)}),(0,t.jsx)("span",{className:i().nav_txt,children:"TAGS"})]})}),(0,t.jsx)("li",{className:o()(i().nav_item,"archives"===r&&i().active),onClick:p,children:(0,t.jsxs)(n(),{className:i().nav_link,href:"/archives",children:[(0,t.jsx)("i",{className:"fa-fw fas fa-archive ".concat(i().ico)}),(0,t.jsx)("span",{className:i().nav_txt,children:"ARCHIVES"})]})}),(0,t.jsx)("li",{className:o()(i().nav_item,"algorithm"===r&&i().active),onClick:p,children:(0,t.jsxs)(n(),{className:i().nav_link,href:"/algorithm",children:[(0,t.jsx)("i",{className:"fa-solid fa-mug-saucer ".concat(i().ico)}),(0,t.jsx)("span",{className:i().nav_txt,children:"CODING"})]})})]})}),(0,t.jsx)("div",{className:"sidebar-bottom"})]}),(0,t.jsx)("div",{className:o()(i().main_wrapper,c&&i().main_move),children:(0,t.jsxs)("div",{className:i().container,children:[(0,t.jsx)(f,{moveToggle:p}),(0,t.jsxs)("div",{className:i().contents,children:[(0,t.jsx)("main",{className:i().inner_content,children:(0,t.jsxs)(C.zt,{store:E,children:[a,s]})}),(0,t.jsx)(y,{})]})]})})]})}},3912:function(e,a,s){"use strict";s.d(a,{oV:function(){return i},xk:function(){return c}});var t=s(9730);let r=s(9035).q.slice(0,5),n=(0,t.oM)({name:"postStore",initialState:{postList:r,isFetching:!1},reducers:{rdxSetPostData(e,a){e.postList=a.payload},rdxSetFetching(e,a){e.isFetching=a.payload}}});a.ZP=n;let{rdxSetPostData:c,rdxSetFetching:i}=n.actions},5942:function(e){e.exports={contents:"layout_contents__3qIEg",inner_content:"layout_inner_content__B1flj",sidebar:"layout_sidebar__e3ohZ",sidebar_move:"layout_sidebar_move__L9wcH",profile_wrapper:"layout_profile_wrapper__f1nCL",blog_name_txt:"layout_blog_name_txt__rwN5K",site_subtitle:"layout_site_subtitle__eWLo_",nav:"layout_nav__Cq50F",nav_item:"layout_nav_item__V5eSj",nav_link:"layout_nav_link__Tk4UB",active:"layout_active__viTit",ico:"layout_ico__lcTLT",nav_txt:"layout_nav_txt__KL2gD",main_wrapper:"layout_main_wrapper__1M1Uy",main_move:"layout_main_move__jzBQA",container:"layout_container__d8eWg","main-wrapper":"layout_main-wrapper__5zkgx"}},6385:function(e){e.exports={topbar_wrapper:"breadCrumb_topbar_wrapper__dGN_V",top_bar:"breadCrumb_top_bar__b_rV9",breadcrumb:"breadCrumb_breadcrumb__l7WLX",mobile_topbar:"breadCrumb_mobile_topbar__N1Azi",sidebar_trigger_ico:"breadCrumb_sidebar_trigger_ico__K9DdV",sidebar_trigger:"breadCrumb_sidebar_trigger__APgD8",search_trigger:"breadCrumb_search_trigger__PxWyf",search_trigger_ico:"breadCrumb_search_trigger_ico__yqqpz",mobile_topbar_title:"breadCrumb_mobile_topbar_title__oCVBS",upper_case:"breadCrumb_upper_case__f2gnK",topbar_txt:"breadCrumb_topbar_txt__ExrWf"}},293:function(e){e.exports={img:"imageLoader_img__X4hab"}},7393:function(e){e.exports={access:"panel_access__NiFhF",access_lastmod:"panel_access_lastmod__v6pgX",panel_heading:"panel_panel_heading__n9W6w",panel_recently:"panel_panel_recently__U0_Zp",text_truncate:"panel_text_truncate__SFfHf",panel_tag_contain:"panel_panel_tag_contain__h_Bwi",panel_tag:"panel_panel_tag__eNz5c",tag:"panel_tag__3AiMO",panel_wrapper:"panel_panel_wrapper__bjPKT"}},680:function(e){e.exports={search:"searchBar_search__Ftlhc",search_ico:"searchBar_search_ico__STStc",search_input:"searchBar_search_input__1XpQF",search_active:"searchBar_search_active__EviXg",search_input_active:"searchBar_search_input_active__leeLi"}}},function(e){e.O(0,[250,758,566,35,338,971,938,744],function(){return e(e.s=6809)}),_N_E=e.O()}]);