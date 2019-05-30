/**
 * classe view responsavél pela exibição dos objetos Recommendation, está classe também organiza os slides que serão exibidos no carrossel
 */
class VitrineRecommendationView extends View {
  constructor(elemento) {
    super(elemento);
    this._columNumber = 4;
  }
  /**
   * Este metodo exibe as propriedades do model, preenchendo um template pré-programdo.
   * @param {*} model ListRecommendation, para exibição em carrossel
   * Retorna Fragmento HTML contendo os Slides que deverão ser Exibidos no Carrossel
   */
  template(model) {
    let template = "";

    let i = 0;
    do {
      if (i + this._columNumber < model.recommendations.length) {
        template += this._createContainer(
          model.recommendations.slice(i, i + this._columNumber),
          i
        );
      } else {
        template += this._createContainer(
          model.recommendations.slice(i, model.recommendations.length),
          i
        );
      }
      i = i + this._columNumber;
    } while (i < model.recommendations.length);
    return template;
  }
  /**
   * Metodo interno responsavel por criar o slide onde serão incluidos os itens de Recommendations
   * @param {*} recommendations array de Recommendations que deverão integar o slide
   * @param {*} interation indica em qual iteração o slide esta sendo montado, é utilizado para definir o slide ativo
   * recebe array de Recommendations
   * retorna String contendo fragmentos de HTML
   */
  _createContainer(recommendations, interation) {
    let innerTemplate = `<div class="item  animate-opacity ${
      interation == 0 ? "active" : ""
    }">
    <ul class="thumbnails">`;
    innerTemplate += this._createRecommendation(recommendations);
    innerTemplate += "</ul></div>";
    return innerTemplate;
  }
  /**
   *Metodo interno responsavel por criar um item de recommendation que integrará
   *o slide onde serão incluidos os itens de Recommendations
   * @param {*} recommendations array de recomendations
   * recebe array de Recommendations
   * retorna String contendo fragmentos de HTML
   */

  _createRecommendation(recommendations) {
    let innerContent = "";
    recommendations.forEach(r => {
      innerContent += `<li class="coluna-3 slider-item">
      <div class="slider-item">
      <div class="thumbnail">
      <a href="http:${r.url}">
          <img src="http:${r.imageName}" alt="">
      </a>
  </div>
  <div class="caption-box">
      <p>${r.name}:</p>
      <div class="old-price ${r.oldPrice == null ? "hide" : ""}">De: ${
        r.oldPrice
      }</div>
      <div class=" ${r.oldPrice == null ? "old-price " : "alert-small"}">Por:${
        r.price
      }</div>
      <div class=" ${r.oldPrice == null ? "old-price " : "alert"}">${
        r.paymentCondition
      }</div>
  </div>
  </li>`;
    });
    return innerContent;
  }
}
