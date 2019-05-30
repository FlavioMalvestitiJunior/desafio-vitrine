/**
 *variavel que rece o retor da função x, esta função é defini aqui porem durante o carregamento dos scripts JS ela é "sobrecarregada" e rece os valores de um servidor 
 alheio ao dominio, isso não é uma técnica recomendade, o ideal é que assim que possivel fazer as devidas configurações no CORS
 */
var dataObject;
var X = function(data) {
  dataObject = data;
};

/**
 * Classe responsavel pelo acesso aos dados que irão ser exibidos na vitrine, esta classe processa o objeto JSON recebido e os converte nos
 * modelos da aplicação.
 */
class VitrineDao {
  /**
   * Fornece um objeto de Reference com base no JSON recebido da função X
   * Retorna uma Reference
   */
  referenceItem() {
    return new Promise((resolve, reject) => {
      let item = dataObject.data.reference.item;
      resolve(
        new Reference(
          item.businessId,
          item.detailUrl,
          item.imageName,
          item.name,
          item.oldPrice,
          item.price,
          item.productInfo.paymentConditions
        )
      );
    });
  }
  /**
   * Processas as Recommendations recebidas da função X, motando um objeto de Recommendation adicionando-os em uma lista.
   * Retorna um array de Recommendations
   */
  listRecommendation() {
    return new Promise((resolve, reject) => {
      let recommendations = dataObject.data.recommendation;
      let listRecommendations = [];
      recommendations.forEach(recommendation => {
        listRecommendations.push(this._createRecommendation(recommendation));
      });
      resolve(listRecommendations);
    });
  }
  /**
   *Recebe uma RecommendationData, objeto advindo da função X, o converte para um objeto Recommendation.
   * @param {*} recommendationData
   * Retorna uma Recommendation
   */
  _createRecommendation(recommendationData) {
    return new Recommendation(
      recommendationData.businessId,
      recommendationData.detailUrl,
      recommendationData.imageName,
      recommendationData.name,
      recommendationData.oldPrice,
      recommendationData.price,
      recommendationData.productInfo.paymentConditions
    );
  }
}
