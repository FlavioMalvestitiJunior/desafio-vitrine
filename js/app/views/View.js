/**
 * objeto padrão de view, define os metodos obrigatórios para as demais classes view que a herda.
 */
class View {
  constructor(elemento) {
    this._elemento = elemento;
  }

  template() {
    throw new Error("O método template deve ser implementado");
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }
}
