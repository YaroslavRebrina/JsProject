const t="Favorites",e="favorites-total",o={listRef:document.querySelector(".favorite__list")},{listRef:l}=o;let n=localStorage.getItem(t)||[];JSON.parse(localStorage.getItem(e));function r(){try{return JSON.parse(n)}catch(t){console.log(console.log(t))}}function c(t){const e=t.join("");l.innerHTML=e}c(r());
//# sourceMappingURL=index.15b5f3fe.js.map
