!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequire216a;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequire216a=o),o.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"favorite.f2df3e0c.js","b9c6p":"tablet.fbc49068.png","kUoxM":"icons.f4a0f0ce.svg"}'));class c{fetchCards(){try{return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.searchQuery}&api-key=dWr4kZ2eThN3qFyvwxS66Oz0pgO5uwGr`).then((e=>e.json())).then((e=>e))}catch(e){console.error(e)}}fetchMostPopular(){try{return fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=dWr4kZ2eThN3qFyvwxS66Oz0pgO5uwGr").then((e=>e.json())).then((e=>e))}catch(e){console.error(e)}}fetchListAllCategories(){try{return fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=dWr4kZ2eThN3qFyvwxS66Oz0pgO5uwGr").then((e=>e.json()))}catch(e){console.error(e)}}fetchSearchByCategories(){try{return fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${this._category}.json?api-key=dWr4kZ2eThN3qFyvwxS66Oz0pgO5uwGr`).then((e=>e.json()))}catch(e){console.error(e)}}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get category(){return this._category}set category(e){this._category=e}constructor(){this.searchQuery="",this._category=""}}const i=document.querySelector(".selected"),s=document.querySelector(".options-container"),l=document.querySelector(".categories"),d=document.querySelector(".options-container");document.querySelectorAll(".option");(new c).fetchListAllCategories().then((e=>e.results)).then((e=>{!function(e){const t=e,n=t.map((({display_name:e},t)=>{if(t<=5)return`\n          <button type="button" class="categories__button">\n            ${e}\n          </button>\n        `})).join("");l.insertAdjacentHTML("beforeend",n);const r=t.map((({display_name:e},t)=>{if(t>5)return`<div class="option">\n            <input type="radio" class="radio" id="${e}" name="category" />\n            <label for="${e}">${e}</label>\n          </div>`})).join("");d.insertAdjacentHTML("beforeend",r);document.querySelectorAll(".option").forEach((e=>{e.addEventListener("click",(()=>{console.log("click"),i.innerHTML=e.querySelector("label").innerHTML,s.classList.remove("active")}))}))}(e)})),i.addEventListener("click",(()=>{s.classList.add("active")}));const u={themeSwitcherEl:document.querySelector(".switch-checkbox"),bodyEl:document.querySelector("body"),themeContainerEl:document.querySelector(".header__theme-select"),logoEl:document.querySelector(".header-nav__logo-link"),headerLinksEl:document.querySelectorAll(".header-nav__link"),headerInputEl:document.querySelector(".header-input"),headerInputIconEl:document.querySelector(".header-input__icon"),switcherLightEl:document.querySelector(".header-checkbox__icon-light"),switcherDarkEl:document.querySelector(".header-checkbox__icon-dark"),switchTextlightEl:document.querySelector(".header__theme-select-light--on"),switchTextDarktEl:document.querySelector(".header__theme-select-dark--off")},h="theme";u.themeSwitcherEl.addEventListener("change",(function(){u.bodyEl.classList.toggle("dark-mode"),u.logoEl.classList.toggle("light-text"),u.headerLinksEl.forEach((e=>e.classList.toggle("light-text"))),u.headerInputEl.classList.toggle("header-input--dark"),localStorage.setItem(h,u.bodyEl.classList.contains("dark-mode")?"dark":"light")}));"dark"===localStorage.getItem(h)&&(u.themeSwitcherEl.checked=!0,u.bodyEl.classList.add("dark-mode"),u.logoEl.classList.add("light-text"),u.headerLinksEl.forEach((e=>e.classList.add("light-text"))),u.headerInputEl.classList.add("header-input--dark"));const g="Favorites",m="rendered";var p={};p=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("b9c6p");const f="https://static01.nyt.com/",_=document.documentElement.clientWidth,y=new Date,v=`${y.getDate()}/${y.getMonth()}/${y.getFullYear()}`,b="nyt://article/",w=e=>{let n={};try{n=e.results||e.response.docs}catch(e){console.log("Response ERROR!!!")}return n.map((e=>function(e){const n={};function r(e){if(e.media&&e.media.length&&e.media[0]["media-metadata"]&&e.media[0]["media-metadata"].length){const t=L(e.media[0]["media-metadata"]);return/static01.nyt.com/i.test(t.url)||(t.url=f+t.url),void(n.imageUrl=t.url)}if(e.multimedia&&e.multimedia.length){const t=L(e.multimedia);return/static01.nyt.com/i.test(t.url)||(t.url=f+t.url),n.imageUrl=t.url,void(n.imageAlt=t.caption)}n.imageUrl=t(p)}return n.id=e.uri.replace(b,""),n.date=(()=>e.published_date?e.published_date:e.pub_date?e.pub_date:v)(),n.category=e.section||e.section_name,n.title=e.title||e.headline.main,n.abstract=e.abstract,r(e),n.url=e.url||e.web_url,n.isFavorite=!1,n.isRead=!1,n}(e)))};function L(e){e.sort(((e,t)=>e.width>t.width?1:-1));return e.find((e=>e.width>(_>=1280?395:_>=768?353:288)))}var S={};function E(e,n){const{id:r,category:a,title:o,abstract:c,imageUrl:i,imageAlt:s,date:l,url:d,isFavorite:u=!1,isRead:h=!1}=e,g=l.replace(/((\d){4})-((\d){2})-((\d){2})(\S)*/g,"$5/$3/$1");return function(e="list"){const n="read"===e?"Have read":`Already read \n        <svg width="18" height="18">\n          <use href="${t(S)}#icon-read"></use>\n        </svg>`,l=`<span class='card__already ${(e=>e?"":"card__already--false")(h)}'>${n}</span>`,m=e=>e?"class='span--test favorite__text--false'":'class="span--test"',p=`<button type='button' class='card__favorite'>\n\n      <span ${m(u)}>\n      Add to favorite\n        <svg  width="16" heigth="16">\n          <use href="${t(S)}#icon-like-nonactive"></use>\n        </svg>\n      </span>\n\n      <span ${m(!u)}>Remove from favorite\n        <svg width="16" height="16" class="box__icon remove-icon">\n          <use href="${t(S)}#icon-like-active"></use>\n        </svg>\n      </span>\n\n    </button>`;return`\n    <li id=${r} class='${e}__card card'>\n\n      <div class='card__container'>\n        <img class='card__img' src="${i}" \n          alt="${s??c}">\n        <span class='card__category'>${a}</span>\n        ${l}\n        ${p}\n      </div>\n\n      <h2 class='card__title'>${o}</h2>\n      <p class='card__abstract'>${c}</p>\n      <span class='card__date'>${g}</span>\n      <a class='card__read' href="${d}" target="_blank">Read more</a>\n\n    </li>`}(n)}S=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("kUoxM");const q="https://api.openweathermap.org/data/2.5/weather?",k={appid:"dbe190140250d3087dbd292674c0b7da",lat:51.5085,lon:-.1257,units:"metric"};async function M(e){k.lat=e.latitude,k.lon=e.longitude;const t=new URLSearchParams(k);return await fetch(`${q}${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}async function $(){const e=new URLSearchParams(k);return await fetch(`${q}${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const T={mobile:window.matchMedia("(min-width: 320px) and (max-width: 767px)"),tablet:window.matchMedia("(min-width: 768px) and (max-width: 1279px)"),desktop:window.matchMedia("(min-width: 1280px)")};function x(e){!function(e){const n={days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],getFormattedDay(e){return this.days[e.getDay()]},getFormattedMonth(e){return this.months[e.getMonth()]}},r=new Date,a=`<li class="list__card card card--weather"><div class="weather__widget">\n  <div class="weather__content">\n    <div class="weather__wrapper">\n      <span class="temperature">${e.main.temp.toFixed(0)}&#176;</span>\n      <div class="weather__wrapper weather__wrapper--column">\n        <span class="description">${e.weather[0].main}</span>\n        <div class="weather__wrapper weather__wrapper--accent">\n          <svg class="location-icon" id="location-icon">\n            <use href="${t(S)}#icon-location"></use>\n          </svg>\n          <span class="location">${e.name}</span>\n        </div>\n      </div>\n    </div>\n    <img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png" alt="${e.weather[0].main}" class="weather-icon">\n    <div class="date">${n.getFormattedDay(r)}\n      <br />\n      ${r.getDate()} ${n.getFormattedMonth(r)} ${r.getFullYear()}\n    </div>\n  </div>\n</div>\n</li>`;!function(e){const t={list:document.querySelector(".list"),listItems:document.querySelectorAll(".card")};if(T.mobile.matches)return console.log(t.listItems),H(e),t.listItems[0].insertAdjacentHTML("beforebegin",e);if(T.tablet.matches)return console.log(t.listItems),H(e),t.listItems[1].insertAdjacentHTML("beforebegin",e);if(T.desktop.matches)return console.log(t.listItems),H(e),t.listItems[2].insertAdjacentHTML("beforebegin",e);console.log("!!!")}(a)}(e)}function A(e){console.log(e)}function H(e){function t(){return T.mobile.matches?(document.querySelector(".card--weather").remove(),document.querySelectorAll(".card")[0].insertAdjacentHTML("beforebegin",e)):T.tablet.matches?(document.querySelector(".card--weather").remove(),document.querySelectorAll(".card")[1].insertAdjacentHTML("beforebegin",e)):T.desktop.matches?(document.querySelector(".card--weather").remove(),document.querySelectorAll(".card")[2].insertAdjacentHTML("beforebegin",e)):void 0}T.mobile.addEventListener("change",t),T.tablet.addEventListener("change",t),T.desktop.addEventListener("change",t)}function j(e){return M(e.coords).then(x).catch(A)}function C(e){return $().then(x).catch(A)}document.querySelectorAll(".list__card");const O=new c,R=document.querySelector(".card__list"),N=document.querySelector(".pagination__list");const F=9;let I=1,D=!1;function U(e,t){R.innerHTML="";const n=(e-1)*F,r=Math.min(n+F,t.length);for(let e=n;e<r;e++){const n=t[e];2===e?navigator.geolocation&&navigator.geolocation.getCurrentPosition(j,C,(()=>{R.insertAdjacentHTML("beforeend",E({type:"widget"}))})):R.insertAdjacentHTML("beforeend",n)}}function B(e){N.innerHTML="";for(let t=1;t<=e;t++){const e=`\n      <li>\n        <a href="#" class="pagination__page ${t===I?"pagination__page--current":""}" data-page="${t}">${t}</a>\n      </li>\n    `;N.insertAdjacentHTML("beforeend",e)}}D||O.fetchMostPopular().then((e=>{const t=w(e),n=t.map((e=>E(e))),r=Math.ceil(t.length/F);U(I,n),B(r)})),N.addEventListener("click",(function(e){e.preventDefault();const{target:t}=e;t.classList.contains("pagination__page")&&(I=Number(t.dataset.page),D||O.fetchMostPopular().then((e=>{const t=w(e),n=t.map((e=>E(e)));U(I,n),B(Math.ceil(t.length/F))})))}));const J=document.querySelector(".pag-btn__right"),P=document.querySelector(".pag-btn__left");function z(){D=!0}J.addEventListener("click",(()=>{I++,D||O.fetchMostPopular().then((e=>{const t=w(e),n=t.map((e=>E(e))),r=Math.ceil(t.length/F);I<=r&&(U(I,n),B(r))}))})),P.addEventListener("click",(()=>{I>1&&(I--,D||O.fetchMostPopular().then((e=>{const t=w(e),n=t.map((e=>E(e)));U(I,n),B(Math.ceil(t.length/F))})))}));const W={listRef:document.querySelector(".card__list"),buttonRef:document.querySelector(".card__favorite"),favListRef:document.querySelector(".favorite__list")},{listRef:G,buttonRef:Q,favListRef:Z}=W;let V=JSON.parse(localStorage.getItem(g))||[];function Y(){try{return V}catch(e){console.log(error.message)}}function K(e){const t=e.map((e=>E(e)));try{G.innerHTML=t}catch(e){console.log(e.message)}}G.addEventListener("click",(function(e){"BUTTON"!==e.target.nodeName||e.target.classList.contains("liked")?function(e){console.log(e.target);const n=JSON.parse(localStorage.getItem(m)).find((t=>t.id===e.target.closest("li").id));e.target.closest("button").innerHTML=`<span class="span--test">\n      Add to favorite\n        <svg  width="16" heigth="16">\n          <use href="${t(S)}#icon-like-nonactive"></use>\n        </svg>\n      </span>`,e.target.classList.remove("liked"),n.isFavorite=!1,V.filter((e=>!n)),localStorage.setItem(g,JSON.stringify(V)),document.body.classList.contains("favorite")&&K(Y())}(e):function(e){console.log(e.target);const n=JSON.parse(localStorage.getItem(m)).find((t=>t.id===e.target.closest("li").id));e.target.closest("button").innerHTML=`<span class="span--test"> Remove from favorite\n        <svg width="16" height="16" class="box__icon remove-icon">\n          <use href="${t(S)}#icon-like-active"></use>\n        </svg>\n      </span>`,e.target.classList.add("liked"),n.isFavorite=!0,V.push(n),localStorage.setItem(g,JSON.stringify(V)),console.log(V)}(e)})),K(Y());const X=new c,ee=document.querySelector(".card__list"),te=document.querySelector(".pagination__list"),ne=document.querySelector("#search-form"),re=document.querySelector(".header-input"),ae=document.querySelector(".header-input__icon");let oe=!1;const ce=9;let ie=1;X.query=re.value.trim().toLowerCase(),re.addEventListener("input",(e=>{z(),X.query=e.target.value.trim().toLowerCase(),ae.addEventListener("click",(()=>{X.fetchCards().then((e=>{const t=w(e),n=t.map((e=>E(e)));ue(Math.ceil(t.length/ce)),de(ie,n)}))}))})),ne.addEventListener("submit",(function(e){e.preventDefault(),z();const t=e.currentTarget.elements.search.value;X.query=t,X.fetchCards().then((e=>{const t=w(e),n=t.map((e=>E(e)));ue(Math.ceil(t.length/ce)),de(ie,n)}))})),te.addEventListener("click",(function(e){if(e.preventDefault(),z(),!oe){const{target:t}=e;t.classList.contains("pagination__page")&&(ie=Number(t.dataset.page),X.fetchCards().then((e=>{const t=w(e),n=t.map((e=>E(e)));ue(Math.ceil(t.length/ce)),de(ie,n)})))}}));const se=document.querySelector(".pag-btn__right"),le=document.querySelector(".pag-btn__left");function de(e,t){ee.innerHTML="";const n=(e-1)*ce,r=Math.min(n+ce,t.length);for(let e=n;e<r;e++){const n=t[e];ee.insertAdjacentHTML("beforeend",n)}}function ue(e){te.innerHTML="";for(let t=1;t<=e;t++){const e=`\n      <li>\n        <a href="#" class="pagination__page ${t===ie?"pagination__page--current":""}" data-page="${t}">${t}</a>\n      </li>\n    `;te.insertAdjacentHTML("beforeend",e)}}function he(){oe=!0}se.addEventListener("click",(()=>{z(),ie++,oe||X.fetchCards().then((e=>{const t=w(e),n=t.map((e=>E(e))),r=Math.ceil(t.length/ce);ie<=r&&(ue(r),de(ie,n))}))})),le.addEventListener("click",(()=>{z(),ie>1&&(ie--,oe||X.fetchCards().then((e=>{const t=w(e),n=t.map((e=>E(e)));ue(Math.ceil(t.length/ce)),de(ie,n)})))}));document.querySelector(".selected");const ge=document.querySelector(".categories"),me=document.querySelectorAll(".options-container")[0];console.log(me);const pe=new c,fe=document.querySelector(".card__list"),_e=document.querySelector(".pagination__list"),ye=9;let ve=1;ge.addEventListener("click",(function(e){if(e.preventDefault(),z(),he(),"BUTTON"===e.target.nodeName){const{target:t}=e;if(t.classList.contains("categories__button")){const e=t.textContent;pe.category=e.toLowerCase().trim(),pe.fetchSearchByCategories().then((e=>{const t=w(e),n=t.map((e=>E(e)));Se(Math.ceil(t.length/ye)),Le(ve,n)}))}}})),me.addEventListener("click",(function(e){if(z(),he(),"LABEL"===e.target.nodeName){const{target:t}=e,n=t.textContent;pe.category=n.toLowerCase().trim(),pe.fetchSearchByCategories().then((e=>{const t=w(e),n=t.map((e=>E(e)));Se(Math.ceil(t.length/ye)),Le(ve,n)}))}})),_e.addEventListener("click",(function(e){e.preventDefault(),z(),he();const{target:t}=e;t.classList.contains("pagination__page")&&(ve=Number(t.dataset.page),console.log(pe.category),pe.fetchSearchByCategories().then((e=>{console.log("🚀 ~ file: paginationByCategory.js:29 ~ cardsApiService.fetchSearchByCategories ~ data:",e);const t=w(e),n=t.map((e=>E(e)));Se(Math.ceil(t.length/ye)),Le(ve,n)})))}));const be=document.querySelector(".pag-btn__right"),we=document.querySelector(".pag-btn__left");function Le(e,t){fe.innerHTML="";const n=(e-1)*ye,r=Math.min(n+ye,t.length);for(let e=n;e<r;e++){const n=t[e];fe.insertAdjacentHTML("beforeend",n)}}function Se(e){_e.innerHTML="";for(let t=1;t<=e;t++){const e=`\n      <li>\n        <a href="#" class="pagination__page ${t===ve?"pagination__page--current":""}" data-page="${t}">${t}</a>\n      </li>\n    `;_e.insertAdjacentHTML("beforeend",e)}}be.addEventListener("click",(()=>{z(),he(),ve++,console.log(pe.category),pe.fetchSearchByCategories().then((e=>{const t=w(e),n=t.map((e=>E(e))),r=Math.ceil(t.length/ye);ve<=r&&(Se(r),Le(ve,n))}))})),we.addEventListener("click",(()=>{z(),he(),console.log(pe.category),ve>1&&(ve--,pe.fetchSearchByCategories().then((e=>{const t=w(e),n=t.map((e=>E(e)));Se(Math.ceil(t.length/ye)),Le(ve,n)})))}))}();
//# sourceMappingURL=favorite.f2df3e0c.js.map
