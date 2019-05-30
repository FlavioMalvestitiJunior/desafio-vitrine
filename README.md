
Aplicação para a exibição de itens em uma vitrine.
<br/>
Autor: Flavio Malvestiti Junior.
<br/>
GitHub: https://github.com/FlavioMalvestiti.
<br/>
GitHub do Projeto: https://github.com/FlavioMalvestiti/desafiovitrine.

1.0 Introdução
======================================================
Esta aplicação tem por finalidade consumir um objeto JSONP e exibir seus dados em tela, de maneira rápida e eficiente, esta
aplicação utiliza JS (JavaScript), HTML e CSS, para processamento e exibição de dados, e Pode facílmente ser integrada com outras tecnologias.

OBS: Quando a aplicação é acessada através do protocolo Https, alguns navegadores podem emitir alertas e não acessar as informações dos links externos,
isso ocorre devido ao acesso de alguns itens via Http, caso isso ocorra desative a diretiva de segurança no navegador que bloqueia este acesso.

2.0 Estrutura da Aplicação, Classes e Objetos
======================================================
A aplicação foi desenvolvida procurando-se utlizar o máximo possível do paradigma de orientação a objetos, mas devido a desafios e alguns problemas
encontrados durante o desenvolvimento nem toda a aplicação está orientada a objeto.
Foram utilizadas classes auxiliares para permitir o reaproveitamento de código.
A Aplicação encontra-se estruturada em pastas divididas por responsábilidades, desta forma o código fica limpo, e aplicação fica organizada, facilitando
a manutenção futura.
 
 2.1 Model View Controllers e Dao
 =====================================================
 A Aplicação encontra-se estruturada nestes dois padrões, sendo que para isso há a divisão de responsabilidades por classes.

  2.1.1 VitrineDao.js
  ====================================================
  Esta classe é a responsavél por acessar e processar o objeto JSONP recebido do link, nela encontra-se a função X que 
  é "sobrescrita" na chamada do script que contém os dados.
  esta classe provê os objetos Reference e Recommendations, que são alguns dos models do projeto.

  2.1.2 VitrineController.js
  ====================================================
  Esta classe fornece toda a camada de processamento para a exibição dos dados na tela, ela executa a chamada aos metodos 
  de acesso das classes DAO, provê a ligação dos Models com as Views, e fornece parte do processamento necessário para a 
  animaçõa dos itens de Recommendations exibidos em tela.

  2.1.3 Models ListRecommendation.js, Recommendation.js e Reference.js
  ====================================================
  Estas classes contém as regras de negocio da aplicação.
  Foi optado por criar as próprias classes com as regras ao invés de utilizar os objetos advindos do JSONP, pois isso
  nos da um maior controle sobre o funcionamento da aplicação, facilitando a sua manutenção futura.

  2.1.4 View
  ====================================================
  Classes contendo o Sufixo View que se encontram no pacote views, estas classes são responsáveis por exibir as informações dos      models,
  TODAS as classes de VIEW DEVEM extender a classe View.js, nela encontran-se metodos que, atrvés do databind conseguem representar seus models.
  utiliza-se do recurso de Template string para a construção de fragmentos de HTML.

3.0 To do
======================================================
  Alguns itens ficaram de fora do projeto, porém é interessante de inseri-los em um próxima versão.
   <br/>
   Modularização de classes.
   <br/>
   Carregamento automatico de depências.
   <br/>
   Tornar o acesso a função X uma promise.

4.0 Notas do Autor
======================================================
A estrutura da aplicação foi dividida em pacotes, separados por responsábilidades, como por exemplo as classes que fazem
o processamento dos dados para exibição das views, estas classes se encontram no pacote controllers. Os acessos a dados nas classes 
Dao no pacote dao, os modelos de negocio no pacote models e assim por diante.

A aplicação ainda não conta com o sistema de módulos do ES6 eo carregamento automatico de depencias, isso ocorreu devido a um problema de acesso
as informações, quando modularizada a aplicação não acessava mais a função X no dominio remoto, devido ao escopo do projeto e o tempo hábil para
executa-lo optei por deixar esta feature para uma próxima versão da aplicação.
As view se utilizam de Template Strings para exibir as informações dos models, pois está é uma forma eficiente e rápida de montar fragmentos HTML e 
incorpora-los ao DOM, não estou muito satisfeito com a view VitrineRecommendationView, pois esta ficou com um código poluido.

A aplicação utiliza-se do git para controle de versão.


