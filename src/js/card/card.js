// MStartsev  / в розробці...

export class Card {
  id; //string
  category; //string
  title; //string
  abstract; //string
  imageUrl; //string
  imageAlt; //string
  section; //string
  url; //string

  favorite = false; //boolean
  read = false; //boolean

  constructor(
    id,
    category,
    title,
    abstract,
    imageUrl,
    imageAlt,
    section,
    url,
    favorite,
    read
  ) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.abstract = abstract;
    this.imageUrl = imageUrl;
    this.imageAlt = imageAlt;
    this.section = section;
    this.url = url;
    this.favorite = favorite;
    this.read = read;
  }

  get favorite() {
    return this.favorite;
  }

  set favorite(boolean) {
    if (!!boolean === boolean) return (this.favorite = boolean);
    console.log(`"favorite" value "${boolean}" is not boolean!`);
  }

  get read() {
    return this.read;
  }

  set read(boolean) {
    if (!!boolean === boolean) return (this.read = boolean);
    console.log(`"read" value "${boolean}" is not boolean!`);
  }

  createCardItem(containerClass = 'list') {
    const alreadyRead = this.read
      ? `<span class='${containerClass}__read'>Already read</span>`
      : `<span class='${containerClass}__read ${containerClass}__read--false'>Already read</span>`;

    const addToFavorite = this.favorite
      ? `<span class='${containerClass}__favorite'>Add to favorite</span>`
      : `<span class='${containerClass}__favorite ${containerClass}__favorite--false'>Add to favorite</span>`;

    return `
    <li id=${this.id} class='${containerClass}__item'>
        <span class='${containerClass}__category'>${this.category}</span>
        ${alreadyRead}
        <img class='${containerClass}__img' src="${this.imageUrl}" 
            alt="${this.imageAlt ?? this.abstract}">
        ${addToFavorite}
        <h2 class='${containerClass}__title'>${this.title}<h2>
        <p class='${containerClass}__abstract'>${this.abstract}</p>
        <a class='${containerClass}__read' href="${this.url}">Read more</a>
    </li>`;
  }
}
