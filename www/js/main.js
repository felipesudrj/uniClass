var aplicativo = angular.module('myApp', []);

aplicativo.controller('myCtrl', function($scope) {
    
    $scope.carregando = false;
    $scope.temas = true;	
    $scope.conteudo = false;
    $scope.login = false;

    $scope.listarTemas = function()
    {
    	$scope.listaTema = [
    	{
    		descricao:'Matemática',
    		tema_id:'1'
    	},
    	{
    		descricao:'Geografia',
    		tema_id:'1'
    	},
    	{
    		descricao:'História',
    		tema_id:'1'
    	}
    	];


    	$scope.carregando = false;
    	return true;
    }

    $scope.carregarConteudo = function(id)
    {

    	//Ocultar lista de temas e listar conteudos
    	$('.main-lista-tema').addClass('animated bounceOutLeft');
    		

    	$scope.temas = false;
    	
    	$scope.carregando = true;


    	$scope.listaConteudo = [{
    		autor:'Prof. Carlos Lacerda',
    		foto:'http://goo.gl/b192bw',
    		descricao:'Matemática para concurso público parte 1',
    		titulo:'Matemática Básica para Concurso Público',
    		link:'link',
    		avaliacao:'5',
            comentarios:[{usuario:'joao',comentario:'Muito bom esse vídeo'}]

    	}];

    	$scope.carregando = false;
		$scope.conteudo = true;
    	
    }
    $scope.carregarTodasCategorias = function()
    {
        $scope.listaTodoTema = [
        {
            descricao:'Matemática',
            tema_id:'1'
        },
        {
            descricao:'Geografia',
            tema_id:'1'
        },
        {
            descricao:'História',
            tema_id:'1'
        },
        {
            descricao:'Português',
            tema_id:'1'
        },
        {
            descricao:'Espanhol',
            tema_id:'1'
        },
        {
            descricao:'Inglês',
            tema_id:'1'
        }];
    }

    // Facebook

    $scope.statusChangeCallback = function(response) {

        if (response.status === 'connected') {
           
            $scope.fn_login();

        } else if (response.status === 'not_authorized') {

            if (!$('#div-alert-unauthorized').hasClass('hidden')) {
                $('#div-alert-unauthorized').addClass('hidden');
            }

        } else {

            if (!$('#div-alert-offline').hasClass('hidden')) {
                $('#div-alert-offline').addClass('hidden');
            }

        }
    }

    $scope.checkLoginState = function() {

        FB.getLoginStatus(function (response) {
            $scope.statusChangeCallback(response);
        });
    }

    window.fbAsyncInit = function() {
        FB.init({
            appId: '869037913196408',
            cookie: true,
            xfbml: true,
            version: 'v2.5'
        });

        FB.getLoginStatus(function (response) {
            $scope.statusChangeCallback(response);
        });
    };

    $scope.fn_login = function() {

        FB.api('/me', function (response) {

           
            document.getElementById('img-user').src = 'http://graph.facebook.com/' + response.id + '/picture?type=small';

            if (!$('#div-alert-unauthorized').hasClass('hidden')) {
                $('#div-alert-unauthorized').addClass('hidden');
            }

            if (!$('#div-alert-offline').hasClass('hidden')) {
                $('#div-alert-offline').addClass('hidden');
            }

        });
    }


    $scope.adicionarNovo =  function()
    {
        $scope.formulario = true;
    }

    $scope.voltarMeusVideos = function()
    {
        $scope.formulario = false;
    }

    $scope.carregarMeusVideos = function()
    {
        $scope.meusVideos = [
        {
            autor:'Prof. Carlos Lacerda',
            foto:'http://goo.gl/b192bw',
            descricao:'Matemática para concurso público parte 1',
            titulo:'Matemática Básica para Concurso Público',
            link:'link',
            avaliacao:'5',
            avaliacao:'5',
            comentarios:'50',
            visualizacoes:'50'

        },
        {
            autor:'Prof. Carlos Lacerda',
            foto:'http://goo.gl/b192bw',
            descricao:'Matemática Parte 2',
            titulo:'Matemática Básica',
            link:'link',
            avaliacao:'5',
            comentarios:'50',
            visualizacoes:'50'

        },
        ]


        $scope.carregarTodasCategorias();
    }


    $scope.salvarNovoVideo = function()
    {
        console.log($scope.objForm);
    }

})
.directive('temas', function() {
  return {
    templateUrl: 'temas.html'
  };
})
.directive('conteudo', function() {
  return {
    templateUrl: 'conteudo.html'
  };
})
.directive('menu', function() {
    return {
        templateUrl: 'menu.html'
    };
})
.directive('login', function() {
    return {
        templateUrl: 'login.html'
    }
}).directive('adicionar', function() {
    return {
        templateUrl: 'adicionar.html'
    }
});