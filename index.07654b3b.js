!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequire216a;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequire216a=o),o.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.07654b3b.js","kUoxM":"icons.25614b9d.svg","b9c6p":"tablet.fbc49068.png"}'));class i{fetchCards(){try{return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.searchQuery}&api-key=dWr4kZ2eThN3qFyvwxS66Oz0pgO5uwGr`).then((e=>e.json())).then((e=>e))}catch(e){console.error(e)}}fetchMostPopular(){try{return fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=dWr4kZ2eThN3qFyvwxS66Oz0pgO5uwGr").then((e=>e.json())).then((e=>e))}catch(e){console.error(e)}}fetchListAllCategories(){try{return fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=dWr4kZ2eThN3qFyvwxS66Oz0pgO5uwGr").then((e=>e.json()))}catch(e){console.error(e)}}fetchSearchByCategories(){try{return fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${this._category}.json?api-key=dWr4kZ2eThN3qFyvwxS66Oz0pgO5uwGr`).then((e=>e.json()))}catch(e){console.error(e)}}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get category(){return this._category}set category(e){this._category=e}constructor(){this.searchQuery="",this._category=""}}const c=document.querySelector(".js-selected"),s=document.querySelector(".js-container"),l=document.querySelector(".js-categories"),d=(document.querySelectorAll(".js-option"),document.querySelector(".select-box .options-container")),u=new i,h={mobile:window.matchMedia("(min-width: 320px) and (max-width: 767px)"),tablet:window.matchMedia("(min-width: 768px) and (max-width: 1279px)"),desktop:window.matchMedia("(min-width: 1280px)")};u.fetchListAllCategories().then((e=>e.results)).then((e=>{!function(e){const t=e;if(h.mobile.matches){const e=t.map((({display_name:e})=>`<div class="js-option option">\n            <input type="radio" class="radio" id="${e}" name="category" />\n            <label for="${e}">${e}</label>\n          </div>`)).join("");s.insertAdjacentHTML("beforeend",e);document.querySelectorAll(".js-option").forEach((e=>{e.addEventListener("click",(()=>{console.log("click"),c.innerHTML=e.querySelector("label").innerHTML,s.classList.remove("active")}))}))}if(h.tablet.matches){const e=t.map((({display_name:e},t)=>{if(t<=3)return`\n          <button type="button" class="categories__button">\n            ${e}\n          </button>\n        `})).join("");l.insertAdjacentHTML("beforeend",e);const n=t.map((({display_name:e},t)=>{if(t>3)return`<div class="js-option option">\n            <input type="radio" class="radio" id="${e}" name="category" />\n            <label for="${e}">${e}</label>\n          </div>`})).join("");s.insertAdjacentHTML("beforeend",n);document.querySelectorAll(".js-option").forEach((e=>{e.addEventListener("click",(()=>{console.log("click"),c.innerHTML=e.querySelector("label").innerHTML,s.classList.remove("active")}))}))}if(h.desktop.matches){const e=t.map((({display_name:e},t)=>{if(t<=5)return`\n          <button type="button" class="categories__button">\n            ${e}\n          </button>\n        `})).join("");l.insertAdjacentHTML("beforeend",e);const n=t.map((({display_name:e},t)=>{if(t>5)return`<div class="js-option option">\n            <input type="radio" class="radio" id="${e}" name="category" />\n            <label for="${e}">${e}</label>\n          </div>`})).join("");s.insertAdjacentHTML("beforeend",n);document.querySelectorAll(".js-option").forEach((e=>{e.addEventListener("click",(()=>{console.log("click"),c.innerHTML=e.querySelector("label").innerHTML,s.classList.remove("active")}))}))}}(e)})),c.addEventListener("click",(()=>{d.style.opacity="1"})),s.addEventListener("mouseleave",(e=>{d.style.opacity="0"}));const m={themeSwitcherEl:document.querySelectorAll(".switch-checkbox"),bodyEl:document.querySelector("body"),searchFormEl:document.querySelector(".search-field"),themeContainerEl:document.querySelectorAll(".header__theme-select"),logoEl:document.querySelector(".header-nav__logo-link"),headerLinksEl:document.querySelectorAll(".header-nav__link"),headerInputEl:document.querySelector(".header-input"),headerInputIconEl:document.querySelector(".header-input__icon"),switcherLightEl:document.querySelectorAll(".header-checkbox__icon-light"),switcherDarkEl:document.querySelectorAll(".header-checkbox__icon-dark"),switchTextlightEl:document.querySelectorAll(".header__theme-select-light--on"),switchTextDarktEl:document.querySelectorAll(".header__theme-select-dark--off")},g="theme";function p(){m.bodyEl.classList.toggle("dark-mode"),m.logoEl.classList.toggle("light-text"),m.headerLinksEl.forEach((e=>e.classList.toggle("light-text"))),m.headerInputEl&&(m.headerInputEl.classList.toggle("header-input--dark"),m.searchFormEl.classList.toggle("header-form--dark")),localStorage.setItem(g,m.bodyEl.classList.contains("dark-mode")?"dark":"light")}m.themeSwitcherEl.forEach((e=>{e.addEventListener("change",p)}));"dark"===localStorage.getItem(g)&&(m.themeSwitcherEl.checked=!0,m.bodyEl.classList.add("dark-mode"),m.logoEl.classList.add("light-text"),m.headerLinksEl.forEach((e=>e.classList.add("light-text"))),m.headerInputEl&&(m.headerInputEl.classList.add("header-input--dark"),m.searchFormEl.classList.add("header-form--dark")));const f={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close-mob]"),menu:document.querySelector("[data-menu]")};function y(){f.menu.classList.toggle("is-hidden")}console.log(f),f.openMenuBtn.addEventListener("click",y),f.closeMenuBtn.addEventListener("click",y),y(),f.menu.classList.add("is-hidden");const v="Favorites",_="rendered";var w={};function L(e,n){const{id:r,category:a,title:o,abstract:i,imageUrl:c,imageAlt:s,date:l,url:d,isFavorite:u=!1,isRead:h=!1}=e,m=l.replace(/((\d){4})-((\d){2})-((\d){2})(\S)*/g,"$5/$3/$1");return function(e="list"){const n="read"===e?"Have read":`Already read \n        <svg width="18" height="18">\n          <use href="${t(w)}#icon-check"></use>\n        </svg>`,l=`<span class='card__already ${(e=>e?"":"card__already--false")(h)}'>${n}</span>`,g=e=>e?"class='span--test favorite__text--false'":'class="span--test"',p=`<button type='button' class='card__favorite'>\n\n      <span ${g(u)}>\n      Add to favorite\n        <svg  width="16" heigth="16">\n          <use href="${t(w)}#icon-like-nonactive"></use>\n        </svg>\n      </span>\n\n      <span ${g(!u)}>Remove from favorite\n        <svg width="16" height="16" class="box__icon remove-icon">\n          <use href="${t(w)}#icon-like-active"></use>\n        </svg>\n      </span>\n\n    </button>`;return`\n    <li id=${r} class='${e}__card card ${h?"card--opacity":""}'>\n\n      <div class='card__container'>\n        <img class='card__img' src="${c}" \n          alt="${s??i}">\n        <span class='card__category'>${a}</span>\n        ${l}\n        ${p}\n      </div>\n\n      <h2 class='card__title'>${o}</h2>\n      <p class='card__abstract'>${i}</p>\n      <span class='card__date'>${m}</span>\n      <a class='card__read' href="${d}" target="_blank">Read more</a>\n\n    </li>`}(n)}w=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("kUoxM");const b={listRef:document.querySelector(".card__list"),buttonRef:document.querySelector(".card__favorite"),favListRef:document.querySelector(".favorite__list")},{listRef:S,buttonRef:E,favListRef:q}=b;let M=JSON.parse(localStorage.getItem(v))||[];try{S.addEventListener("click",(function(e){"BUTTON"===e.target.nodeName&&(e.target.classList.contains("liked")?function(e){const n=JSON.parse(localStorage.getItem(_)).find((t=>t.id===e.target.closest("li").id));e.target.closest("button").innerHTML=`<span class="span--test">\n      Add to favorite\n        <svg  width="16" heigth="16">\n          <use href="${t(w)}#icon-like-nonactive"></use>\n        </svg>\n      </span>`,e.target.classList.remove("liked"),n.isFavorite=!1,M.forEach((e=>{e.id==n.id&&(e.isFavorite=n.isFavorite)})),M=M.filter((e=>!0===e.isFavorite||!0===e.isRead)),localStorage.setItem(v,JSON.stringify(M)),document.body.classList.contains("favorite")&&$(k())}(e):function(e){const n=JSON.parse(localStorage.getItem(_)).find((t=>t.id===e.target.closest("li").id));e.target.closest("button").innerHTML=`<span class="span--test"> Remove from favorite\n        <svg width="16" height="16" class="box__icon remove-icon">\n          <use href="${t(w)}#icon-like-active"></use>\n        </svg>\n      </span>`,e.target.classList.add("liked");let r=!1;M.forEach((e=>{e.id===n.id&&(e.isFavorite=!0,r=!0)})),r||(n.isFavorite=!0,M.push(n));localStorage.setItem(v,JSON.stringify(M))}(e));e.target.classList.contains("card__read")&&function(e){const t=JSON.parse(localStorage.getItem(_)).find((t=>t.id===e.target.closest("li").id)),n=e.target.closest("li");n.classList.add("card--opacity");const r=e.target.closest("li").querySelector(".card__already");r.classList.remove("card__already--false");let a=!1;M.forEach((e=>{e.id===t.id&&(e.isRead=!0,a=!0)})),a||(t.isRead=!0,M.push(t));localStorage.setItem(v,JSON.stringify(M))}(e)}))}catch(e){console.log(e.message)}function k(){try{return M}catch(e){console.log(error.message)}}function $(e){const t=e.map((e=>L(e)));try{S.innerHTML=t}catch(e){console.log(e.message)}}$(k());var x={};x=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("b9c6p");const T=e=>(e.sort(((e,t)=>e.date<t.date?1:-1)),e),A=(e,t)=>{const n=(()=>{try{return JSON.parse(localStorage.getItem(t))||[]}catch(e){return[]}})(),r=new Map(n.map((e=>[e.id,e])));return e.forEach(((t,n)=>{r.has(t.id)&&(e[n]=r.get(t.id))})),e};const j="https://static01.nyt.com/",H=document.documentElement.clientWidth,O=new Date,R=`${O.getDate()}/${O.getMonth()}/${O.getFullYear()}`,C="nyt://article/",F=e=>{let n={};try{n=e.results||e.response.docs}catch(e){console.log("Response ERROR!!!")}let r=n.map((e=>function(e){const n={};function r(e){if(e.media&&e.media.length&&e.media[0]["media-metadata"]&&e.media[0]["media-metadata"].length){const t=N(e.media[0]["media-metadata"]);return/static01.nyt.com/i.test(t.url)||(t.url=j+t.url),void(n.imageUrl=t.url)}if(e.multimedia&&e.multimedia.length){const t=N(e.multimedia);return/static01.nyt.com/i.test(t.url)||(t.url=j+t.url),n.imageUrl=t.url,void(n.imageAlt=t.caption)}n.imageUrl=t(x)}return n.id=e.uri.replace(C,""),n.date=(()=>e.published_date?e.published_date:e.pub_date?e.pub_date:R)(),n.category=e.section||e.section_name,n.title=e.title,n.abstract=e.abstract,r(e),n.url=e.url||e.web_url,n.isFavorite=!1,n.isRead=!1,n}(e)));return r=A(r,v),T(r),r};function N(e){e.sort(((e,t)=>e.width>t.width?1:-1));return e.find((e=>e.width>(H>=1280?395:H>=768?353:288)))}const I="https://api.openweathermap.org/data/2.5/weather?",W={appid:"dbe190140250d3087dbd292674c0b7da",lat:51.5085,lon:-.1257,units:"metric"};async function D(e){W.lat=e.latitude,W.lon=e.longitude;const t=new URLSearchParams(W);return await fetch(`${I}${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}async function U(){const e=new URLSearchParams(W);return await fetch(`${I}${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const B={mobile:window.matchMedia("(min-width: 320px) and (max-width: 767px)"),tablet:window.matchMedia("(min-width: 768px) and (max-width: 1279px)"),desktop:window.matchMedia("(min-width: 1280px)")};function J(e){!function(e){const n={days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],getFormattedDay(e){return this.days[e.getDay()]},getFormattedMonth(e){return this.months[e.getMonth()]}},r=new Date,a=`<li class="list__card card card--weather"><div class="weather__widget">\n  <div class="weather__content">\n    <div class="weather__wrapper">\n      <span class="temperature">${e.main.temp.toFixed(0)}&#176;</span>\n      <div class="weather__wrapper weather__wrapper--column">\n        <span class="description">${e.weather[0].main}</span>\n        <div class="weather__wrapper weather__wrapper--accent">\n          <svg class="location-icon" id="location-icon">\n            <use href="${t(w)}#icon-location"></use>\n          </svg>\n          <span class="location">${e.name}</span>\n        </div>\n      </div>\n    </div>\n    <img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png" alt="${e.weather[0].main}" class="weather-icon">\n    <div class="date">${n.getFormattedDay(r)}\n      <br />\n      ${r.getDate()} ${n.getFormattedMonth(r)} ${r.getFullYear()}\n    </div>\n  </div>\n</div>\n</li>`;!function(e){const t={list:document.querySelector(".list"),listItems:document.querySelectorAll(".card")};if(B.mobile.matches)return z(e),t.listItems[0].insertAdjacentHTML("beforebegin",e);if(B.tablet.matches)return z(e),t.listItems[1].insertAdjacentHTML("beforebegin",e);if(B.desktop.matches)return console.log(t.listItems),z(e),t.listItems[2].insertAdjacentHTML("beforebegin",e);console.log("!!!")}(a)}(e)}function P(e){console.log(e)}function z(e){function t(){return B.mobile.matches?(document.querySelector(".card--weather").remove(),document.querySelectorAll(".card")[0].insertAdjacentHTML("beforebegin",e)):B.tablet.matches?(document.querySelector(".card--weather").remove(),document.querySelectorAll(".card")[1].insertAdjacentHTML("beforebegin",e)):B.desktop.matches?(document.querySelector(".card--weather").remove(),document.querySelectorAll(".card")[2].insertAdjacentHTML("beforebegin",e)):void 0}B.mobile.addEventListener("change",t),B.tablet.addEventListener("change",t),B.desktop.addEventListener("change",t)}function G(e){return D(e.coords).then(J).catch(P)}function Q(e){return U().then(J).catch(P)}const Z=new i,V=document.querySelector(".card__list"),Y=document.querySelector(".pagination__list");let K=null,X=4;X=window.innerWidth>=320&&window.innerWidth<=767?5:window.innerWidth>=768&&window.innerWidth<=1279?8:9;let ee=1,te=!0;function ne(e,t){V.innerHTML="";const n=(e-1)*X,r=Math.min(n+X,t.length);for(let e=n;e<r;e++){const n=t[e];2===e?navigator.geolocation&&navigator.geolocation.getCurrentPosition(G,Q,(()=>{V.insertAdjacentHTML("beforeend",L({type:"widget"}))})):V.insertAdjacentHTML("beforeend",n)}}function re(e){Y.innerHTML="";for(let t=1;t<=e;t++){const e=`\n      <li>\n        <a href="#" class="pagination__page ${t===ee?"pagination__page--current":""}" data-page="${t}">${t}</a>\n      </li>\n    `;Y.insertAdjacentHTML("beforeend",e)}}te&&Z.fetchMostPopular().then((e=>{const t=F(e);K=t,localStorage.setItem(_,JSON.stringify(K));const n=t.map((e=>L(e))),r=Math.ceil(t.length/X);ne(ee,n),re(r)})),Y.addEventListener("click",(function(e){if(!te)return;{e.preventDefault();const{target:t}=e;t.classList.contains("pagination__page")&&(ee=Number(t.dataset.page),Z.fetchMostPopular().then((e=>{const t=F(e),n=t.map((e=>L(e)));ne(ee,n),re(Math.ceil(t.length/X))})))}}));const ae=document.querySelector(".pag-btn__right"),oe=document.querySelector(".pag-btn__left");function ie(){te=!1}ae.addEventListener("click",(()=>{te&&(ee++,Z.fetchMostPopular().then((e=>{const t=F(e),n=t.map((e=>L(e))),r=Math.ceil(t.length/X);ee<=r&&(ne(ee,n),re(r))})))})),oe.addEventListener("click",(()=>{te&&ee>1&&(ee--,Z.fetchMostPopular().then((e=>{const t=F(e),n=t.map((e=>L(e)));ne(ee,n),re(Math.ceil(t.length/X))})))}));const ce=document.querySelector(".pagination"),se=(document.querySelector(".underfined-hidden"),document.querySelector(".underfined"));se.classList.contains("underfined-hidden")||(se.classList.add("underfined-hidden"),ce.classList.remove("pagination-hidden"));const le=document.querySelector(".categories"),de=document.querySelectorAll(".options-container")[0],ue=document.querySelector(".select-box"),he=document.querySelector(".underfined"),me=document.querySelector(".pagination"),ge=new i,pe=document.querySelector(".card__list"),fe=document.querySelector(".pagination__list");let ye=4;ye=window.innerWidth>=320&&window.innerWidth<=767?5:window.innerWidth>=768&&window.innerWidth<=1279?8:9;let ve=1,_e=!1;le.addEventListener("mousedown",(()=>{_e=!0,ie(),Ne()})),ue.addEventListener("mousedown",(()=>{_e=!0,ie(),Ne()})),le.addEventListener("click",(function(e){if(_e){if(e.preventDefault(),he.classList.contains("underfined-hidden")||(he.classList.add("underfined-hidden"),me.classList.remove("pagination-hidden")),"BUTTON"!==e.target.nodeName)return;{const{target:t}=e;if(t.classList.contains("categories__button")){const e=t.textContent;ge.category=encodeURIComponent(e.toLowerCase().trim()),ge.fetchSearchByCategories().then((e=>{console.log(e);const t=F(e),n=t.map((e=>L(e)));Se(Math.ceil(t.length/ye)),be(ve,n)}))}}}})),de.addEventListener("click",(function(e){if(!_e)return;if(he.classList.contains("underfined-hidden")||(he.classList.add("underfined-hidden"),me.classList.remove("pagination-hidden")),"LABEL"===e.target.nodeName){const{target:t}=e,n=t.textContent;ge.category=encodeURIComponent(n.toLowerCase().trim()),ge.fetchSearchByCategories().then((e=>{const t=F(e),n=t.map((e=>L(e)));Se(Math.ceil(t.length/ye)),be(ve,n)}))}})),fe.addEventListener("click",(function(e){if(!_e)return;{e.preventDefault();const{target:t}=e;t.classList.contains("pagination__page")&&(ve=Number(t.dataset.page),console.log(ge.category),ge.fetchSearchByCategories().then((e=>{const t=F(e),n=t.map((e=>L(e)));Se(Math.ceil(t.length/ye)),be(ve,n)})))}}));const we=document.querySelector(".pag-btn__right"),Le=document.querySelector(".pag-btn__left");function be(e,t){pe.innerHTML="";const n=(e-1)*ye,r=Math.min(n+ye,t.length);for(let e=n;e<r;e++){const n=t[e];pe.insertAdjacentHTML("beforeend",n)}}function Se(e){fe.innerHTML="";for(let t=1;t<=e;t++){const e=`\n      <li>\n        <a href="#" class="pagination__page ${t===ve?"pagination__page--current":""}" data-page="${t}">${t}</a>\n      </li>\n    `;fe.insertAdjacentHTML("beforeend",e)}}we.addEventListener("click",(()=>{_e&&(ve++,ge.fetchSearchByCategories().then((e=>{const t=F(e),n=t.map((e=>L(e))),r=Math.ceil(t.length/ye);ve<=r&&(Se(r),be(ve,n))})))})),Le.addEventListener("click",(()=>{_e&&ve>1&&(ve--,ge.fetchSearchByCategories().then((e=>{const t=F(e),n=t.map((e=>L(e)));Se(Math.ceil(t.length/ye)),be(ve,n)})))}));const Ee=new i,qe=document.querySelector(".card__list"),Me=document.querySelector(".pagination__list"),ke=document.querySelector("#search-form"),$e=document.querySelector(".header-input"),xe=document.querySelector(".header-input__icon"),Te=document.querySelector(".pagination");let Ae=4;Ae=window.innerWidth>=320&&window.innerWidth<=767?5:window.innerWidth>=768&&window.innerWidth<=1279?8:9;let je=1,He=!1;ke.addEventListener("mousedown",(()=>{He=!0,ie(),_e=!1})),Ee.query=$e.value.trim().toLowerCase(),$e.addEventListener("input",(e=>{He&&(Ee.query=e.target.value.trim().toLowerCase(),xe.addEventListener("click",(()=>{Ee.fetchCards().then((e=>{const t=F(e),n=t.map((e=>L(e)));Fe(Math.ceil(t.length/Ae)),Ce(je,n)}))})))})),ke.addEventListener("submit",(function(e){if(He){e.preventDefault();const t=e.currentTarget.elements.search.value;Ee.query=t,Ee.fetchCards().then((e=>{0===e.response.docs.length?(Te.classList.add("pagination-hidden"),document.querySelector(".underfined").classList.remove("underfined-hidden")):(document.querySelector(".underfined").classList.add("underfined-hidden"),ce.classList.remove("pagination-hidden"));const t=F(e),n=t.map((e=>L(e)));Fe(Math.ceil(t.length/Ae)),Ce(je,n)}))}})),Me.addEventListener("click",(function(e){if(!He)return;{e.preventDefault();const{target:t}=e;t.classList.contains("pagination__page")&&(je=Number(t.dataset.page),Ee.fetchCards().then((e=>{const t=F(e),n=t.map((e=>L(e)));Fe(Math.ceil(t.length/Ae)),Ce(je,n)})))}}));const Oe=document.querySelector(".pag-btn__right"),Re=document.querySelector(".pag-btn__left");function Ce(e,t){qe.innerHTML="";const n=(e-1)*Ae,r=Math.min(n+Ae,t.length);for(let e=n;e<r;e++){const n=t[e];qe.insertAdjacentHTML("beforeend",n)}}function Fe(e){Me.innerHTML="";for(let t=1;t<=e;t++){const e=`\n      <li>\n        <a href="#" class="pagination__page ${t===je?"pagination__page--current":""}" data-page="${t}">${t}</a>\n      </li>\n    `;Me.insertAdjacentHTML("beforeend",e)}}function Ne(){He=!1}Oe.addEventListener("click",(()=>{He&&(je++,Ee.fetchCards().then((e=>{const t=F(e),n=t.map((e=>L(e))),r=Math.ceil(t.length/Ae);je<=r&&(Fe(r),Ce(je,n))})))})),Re.addEventListener("click",(()=>{He&&je>1&&(je--,Ee.fetchCards().then((e=>{const t=F(e),n=t.map((e=>L(e)));Fe(Math.ceil(t.length/Ae)),Ce(je,n)})))}))}();
//# sourceMappingURL=index.07654b3b.js.map
