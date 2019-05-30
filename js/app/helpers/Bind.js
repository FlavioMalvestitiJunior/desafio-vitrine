/**
 * Classe responsavel por fazer a ligação entre o model e a View, ela recebe o objeto model, a view, e quais as propriedades ou metodos serão
 * escutaas para o disparo dos eventos.
 */
class Bind {
  constructor(model, view, ...props) {
    let proxy = ProxyFactory.create(model, props, model => view.update(model));

    view.update(model);

    return proxy;
  }
}
