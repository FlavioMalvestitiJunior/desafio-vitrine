/**
 Esta classe é responsável pelo gerenciamento da exibição do conteudo na tela, ela faz todo o processamento necessário para exibir as informações
 se maneira correta, ela se encarrega de carregar os datas bind e garantir que a view está representando as informações do modelo. 
 */
class VitrineController {
  /**
   * Contrutor, aqui está sendo definida as propriedades que fão parte desta classe.
   */
  constructor() {
    let $ = document.querySelector.bind(document);
    this._VitrineView = new VitrineReferenceView($("#reference-container"));
    this._vitrineDao = new VitrineDao();
    this._listRecommendation = new Bind(
      new ListRecommendation(),
      new VitrineRecommendationView($("#slider-inner")),
      "add",
      "addAll",
      "clean"
    );
    this._init();
  }

  /** 
Método de inicialização responsavel pela chamada dos demais metodos
*/
  _init() {
    this._vitrineNext();
    this._vitrineBack();
    this._showReference();
    this._listRecommendations();
  }
  //Este metodo carrega as informações vindas do dao e as exibe na view de referencia.
  _showReference() {
    let reference = this._vitrineDao
      .referenceItem()
      .then(e => this._VitrineView.update(e))
      .catch(e => console.log(e));
  }
  //Este metodo carrega as recomendações, e atrvés do databind exibe os itens recomendados em uma view especifica.
  _listRecommendations() {
    this._vitrineDao
      .listRecommendation()
      .then(recommendations => this._listRecommendation.addAll(recommendations))
      .catch(e => console.log(e));
  }

  /**
   *metodo responsável por percorrer o objeto de carrosel da vitre e alterar os slids que são exibidos conforme clique do botão.
   este metodo passa as informações em tela da esqueda para a direita.
   */
  _vitrineNext() {
    document.querySelector("#direitabtn").addEventListener("click", e => {
      let slides = document.querySelectorAll(".item");
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
          slides[i].classList.remove("active");

          if (i + 1 < slides.length) {
            slides[i + 1].classList.add("active");
          } else {
            slides[0].classList.add("active");
          }

          break;
        }
      }
    });
  }
  /**
   *metodo responsável por percorrer o objeto de carrosel da vitre e alterar os slids que são exibidos conforme clique do botão.
   este metodo passa as informações em tela da direita para a esquerda.
   */
  _vitrineBack() {
    document.querySelector("#esquedabtn").addEventListener("click", e => {
      let slides = document.querySelectorAll(".item");
      for (let i = slides.length - 1; i >= 0; i--) {
        if (slides[i].classList.contains("active")) {
          slides[i].classList.remove("active");
          if (i - 1 >= 0) {
            slides[i - 1].classList.add("active");
          } else {
            slides[slides.length - 1].classList.add("active");
          }
          break;
        }
      }
    });
  }
}
