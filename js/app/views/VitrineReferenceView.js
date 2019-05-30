/**
 * classe view responsavél pela exibição dos objetos Reference
 */
class VitrineReferenceView extends View {
  constructor(elemento) {
    super(elemento);
  }
  /**
   * Este metodo exibe as propriedades do model, preenchendo um template pré-programdo.
   * @param {*} model
   */
  template(model) {
    return ` <label for="reference">Você Visitou</label>
      <ul class="thumbnails" id="${model.id}">
          <li class="coluna-10 slider-item">
              <div class="thumbnail">
                  <a href="http:${model.url}">
                      <img src="http:${model.imageName}" alt="">
                  </a>
              </div>
              <div class="caption-box">
                  <p>${model.name}:</p>
                  <div class="old-price">De: ${model.oldPrice}</div>
                  <div class="alert-small">Por:${model.price}</div>
                  <div class="alert">${model.paymentCondition}</div>
              </div>
          </li>
      </ul>`;
  }
}
