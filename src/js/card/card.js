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

  isFavorite; //boolean
  isRead; //boolean

  constructor({
    id,
    category,
    title,
    abstract,
    imageUrl,
    imageAlt,
    section,
    url,
    isFavorite = false,
    isRead = false,
  }) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.abstract = abstract;
    this.imageUrl = imageUrl;
    this.imageAlt = imageAlt;
    this.section = section;
    this.url = url;
    this.isFavorite = isFavorite;
    this.isRead = isRead;
  }

  get isFavorite() {
    return this.isFavorite;
  }

  set isFavorite(boolean) {
    if (!!boolean === boolean) return (this.isFavorite = boolean);
    console.log(`"isFavorite" value "${boolean}" is not boolean!`);
  }

  get isRead() {
    return this.isRead;
  }

  set isRead(boolean) {
    if (!!boolean === boolean) return (this.isRead = boolean);
    console.log(`"isRead" value "${boolean}" is not boolean!`);
  }

  createCardItem(containerClass = 'list') {
    const alReadyRead = this.isRead
      ? `<span class='${containerClass}__read'>Already read</span>`
      : `<span class='${containerClass}__read ${containerClass}__read--false'>Already read</span>`;

    const addToFavorite = this.isFavorite
      ? `<span class='${containerClass}__favorite'>Add to Favorite</span>`
      : `<span class='${containerClass}__favorite ${containerClass}__favorite--false'>Add to Favorite</span>`;

    return `
    <li id=${this.id} class='${containerClass}__item'>
        <span class='${containerClass}__category'>${this.category}</span>
        ${alReadyRead}
        <img class='${containerClass}__img' src="${this.imageUrl}" 
            alt="${this.imageAlt ?? this.abstract}">
        ${addToFavorite}
        <h2 class='${containerClass}__title'>${this.title}</h2>
        <p class='${containerClass}__abstract'>${this.abstract}</p>
        <a class='${containerClass}__read' href="${this.url}">Read more</a>
    </li>`;
  }
}
