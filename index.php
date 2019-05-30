<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Vitrine</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/application.css">

</head>

<body class="container">
    <div class="container">
        <div class="row">

            <div class="coluna-12">
                <div class="page-header">
                    <h3>Modelo de Vitrine</h3>
                    <p>Modelo de vitrine para desafio</p>
                </div>
                <div class="coluna-3" id="reference-container">

                </div>
                <div class="coluna-9">
                    <div id="myslider" class="row slider slide" data-ride="slider">
                        <label for="slider-inner">e talvez se interesse por:</label>
                        <div class="slider-inner slider" id="slider-inner" />
                    </div>
                    <div class="control-box">
                        <a data-slide="prev" href="#myslider" class="slider-control left" id="esquedabtn">‹</a>
                        <a data-slide="next" href="#myslider" class="slider-control right" id="direitabtn">›</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- carregamento dos aquvos JS necessários para o correto funcionamento do sistema -->
    <div id="negociacoesView"></div>
    <script src="js/app/views/View.js"></script>
    <script src="js/app/services/ProxyFactory.js"></script>
    <script src="js/app/models/Reference.js"></script>
    <script src="js/app/models/ListRecommendation.js"></script>
    <script src="js/app/models/Recommendation.js"></script>
    <script src="js/app/dao/VitrineDao.js"></script>
    <script src="js/app/helpers/Bind.js"></script>
    <script src="js/app/views/VitrineReferenceView.js"></script>
    <script src="js/app/views/VitrineRecommendationView.js"></script>
    <script src="js/app/controllers/VitrineController.js"></script>
    <script type="text/javascript" src="http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X">  </script>
    <script src="js/app/index.js"></script>

</body>

</html>
