/**
 * Clase do modelo de negocios responsavel por armazenar todas as Recommendations.
 * esta classe é utilizada para fazer o databind e a atualização automatica da view.
 */
class ListRecommendation {
  constructor() {
    this._recommendations = [];
  }

  add(recommendation) {
    this._recommendations.push(recommendation);
  }
  addAll(recommendations) {
    this._recommendations = this._recommendations.concat(recommendations);
  }

  get recommendations() {
    return [].concat(this._recommendations);
  }

  clean() {
    this._negociacoes = [];
  }
}
