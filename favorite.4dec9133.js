function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=r.parcelRequire216a;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},r.parcelRequire216a=o),o.register("kyEFX",(function(t,r){var a,n;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var o={};a=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},n=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"9lrc0":"favorite.4dec9133.js","cdK6d":"icons.25614b9d.svg"}'));var s={};function c(e,r){const{id:a,category:n,title:o,abstract:c,imageUrl:l,imageAlt:i,date:d,url:u,isFavorite:g=!1,isRead:h=!1}=e,f=d.replace(/((\d){4})-((\d){2})-((\d){2})(\S)*/g,"$5/$3/$1");return function(e="list"){const r="read"===e?"Have read":`Already read \n        <svg width="18" height="18">\n          <use href="${t(s)}#icon-check"></use>\n        </svg>`,d=`<span class='card__already ${(e=>e?"":"card__already--false")(h)}'>${r}</span>`,m=e=>e?"class='span--test favorite__text--false'":'class="span--test"',_=`<button type='button' class='card__favorite'>\n\n      <span ${m(g)}>\n      Add to favorite\n        <svg  width="16" heigth="16">\n          <use href="${t(s)}#icon-like-nonactive"></use>\n        </svg>\n      </span>\n\n      <span ${m(!g)}>Remove from favorite\n        <svg width="16" height="16" class="box__icon remove-icon">\n          <use href="${t(s)}#icon-like-active"></use>\n        </svg>\n      </span>\n\n    </button>`;return`\n    <li id=${a} class='${e}__card card ${h?"card--opacity":""}'>\n\n      <div class='card__container'>\n        <img class='card__img' src="${l}" \n          alt="${i??c}">\n        <span class='card__category'>${n}</span>\n        ${d}\n        ${_}\n      </div>\n\n      <h2 class='card__title'>${o}</h2>\n      <p class='card__abstract'>${c}</p>\n      <span class='card__date'>${f}</span>\n      <a class='card__read' href="${u}" target="_blank">Read more</a>\n\n    </li>`}(r)}s=new URL(o("kyEFX").resolve("cdK6d"),import.meta.url).toString();const l="Favorites",i="rendered",d={themeSwitcherEl:document.querySelectorAll(".switch-checkbox"),bodyEl:document.querySelector("body"),searchFormEl:document.querySelector(".search-field"),themeContainerEl:document.querySelectorAll(".header__theme-select"),logoEl:document.querySelector(".header-nav__logo-link"),headerLinksEl:document.querySelectorAll(".header-nav__link"),headerInputEl:document.querySelector(".header-input"),headerInputIconEl:document.querySelector(".header-input__icon"),switcherLightEl:document.querySelectorAll(".header-checkbox__icon-light"),switcherDarkEl:document.querySelectorAll(".header-checkbox__icon-dark"),switchTextlightEl:document.querySelectorAll(".header__theme-select-light--on"),switchTextDarktEl:document.querySelectorAll(".header__theme-select-dark--off")},u="theme";function g(){d.bodyEl.classList.toggle("dark-mode"),d.logoEl.classList.toggle("light-text"),d.headerLinksEl.forEach((e=>e.classList.toggle("light-text"))),d.headerInputEl&&(d.headerInputEl.classList.toggle("header-input--dark"),d.searchFormEl.classList.toggle("header-form--dark")),localStorage.setItem(u,d.bodyEl.classList.contains("dark-mode")?"dark":"light")}d.themeSwitcherEl.forEach((e=>{e.addEventListener("change",g)}));"dark"===localStorage.getItem(u)&&(d.themeSwitcherEl.checked=!0,d.bodyEl.classList.add("dark-mode"),d.logoEl.classList.add("light-text"),d.headerLinksEl.forEach((e=>e.classList.add("light-text"))),d.headerInputEl&&(d.headerInputEl.classList.add("header-input--dark"),d.searchFormEl.classList.add("header-form--dark")));const h={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close-mob]"),menu:document.querySelector("[data-menu]")};function f(){h.menu.classList.toggle("is-hidden")}console.log(h),h.openMenuBtn.addEventListener("click",f),h.closeMenuBtn.addEventListener("click",f),f(),h.menu.classList.add("is-hidden");const m={listRef:document.querySelector(".card__list"),buttonRef:document.querySelector(".card__favorite"),favListRef:document.querySelector(".favorite__list")},{listRef:_,buttonRef:v,favListRef:p}=m;let y=JSON.parse(localStorage.getItem(l))||[];try{_.addEventListener("click",E),p.addEventListener("click",E)}catch(e){console.log(e.message)}function E(e){"BUTTON"===e.target.nodeName&&(e.target.classList.contains("liked")?function(e){const r=JSON.parse(localStorage.getItem(i)).find((t=>t.id===e.target.closest("li").id));e.target.closest("button").innerHTML=`<span class="span--test">\n      Add to favorite\n        <svg  width="16" heigth="16">\n          <use href="${t(s)}#icon-like-nonactive"></use>\n        </svg>\n      </span>`,e.target.classList.remove("liked"),r.isFavorite=!1,y.forEach((e=>{e.id==r.id&&(e.isFavorite=r.isFavorite)})),y=y.filter((e=>!0===e.isFavorite||!0===e.isRead)),localStorage.setItem(l,JSON.stringify(y)),document.body.classList.contains("favorite")&&k(S())}(e):function(e){const r=JSON.parse(localStorage.getItem(i)).find((t=>t.id===e.target.closest("li").id));e.target.classList.add("liked"),e.target.closest("button").innerHTML=`<span class="span--test"> Remove from favorite\n        <svg width="16" height="16" class="box__icon remove-icon">\n          <use href="${t(s)}#icon-like-active"></use>\n        </svg>\n      </span>`;let a=!1;y.forEach((e=>{e.id===r.id&&(e.isFavorite=!0,a=!0)})),a||(r.isFavorite=!0,y.push(r));localStorage.setItem(l,JSON.stringify(y))}(e)),e.target.classList.contains("card__read")&&function(e){const t=JSON.parse(localStorage.getItem(i)).find((t=>t.id===e.target.closest("li").id)),r=e.target.closest("li");r.classList.add("card--opacity");const a=e.target.closest("li").querySelector(".card__already");a.classList.remove("card__already--false");let n=!1;y.forEach((e=>{e.id===t.id&&(e.isRead=!0,n=!0)})),n||(t.isRead=!0,y.push(t));localStorage.setItem(l,JSON.stringify(y))}(e)}function S(){try{return y}catch(e){console.log(error.message)}}function k(e){const t=e.map((e=>c(e)));try{_.innerHTML=t}catch(e){console.log(e.message)}}k(S());try{const e=document.querySelector(".favorite__list"),t=document.querySelector(".favorite__error"),r=JSON.parse(localStorage.getItem(l))||[];r.length>0&&(t.style.display="none",r.forEach((t=>{if(!0===t.isFavorite){const r=c(t);e.insertAdjacentHTML("beforeend",r)}})))}catch(e){console.log(e)}
//# sourceMappingURL=favorite.4dec9133.js.map