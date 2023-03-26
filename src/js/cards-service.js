export default class CardsApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchCards(searchQuery) {
    try {
      return fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.searchQuery}&api-key=dWr4kZ2eThN3qFyvwxS66Oz0pgO5uwGr`
      )
        .then(response => response.json())
        .then(responseAfterJson => responseAfterJson);
    } catch (error) {
      console.error(error);
    }
  }

  fetchMostPopular() {
    try {
      return fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=dWr4kZ2eThN3qFyvwxS66Oz0pgO5uwGr`
      )
        .then(response => response.json())
        .then(responseAfterJson => {
          console.log(
            '🚀 ~ file: cards-service.js:28 ~ CardsApiService ~ fetchMostPopular ~ responseAfterJson:',
            responseAfterJson
          );
          return responseAfterJson;
        });
    } catch (error) {
      console.error(error);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
