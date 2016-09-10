function statusChangeCallback(response) {

	if (response.status === 'connected') {
		login();
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

function checkLoginState() {

	FB.getLoginStatus(function (response) {
		statusChangeCallback(response);
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
		statusChangeCallback(response);
	});
};

(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function login() {

	FB.api('/me', function (response) {

		$('#div-login').addClass('hidden');

		document.getElementById('img-user').src = 'http://graph.facebook.com/' + response.id + '/picture?type=small';

		if (!$('#div-alert-unauthorized').hasClass('hidden')) {
			$('#div-alert-unauthorized').addClass('hidden');
		}

		if (!$('#div-alert-offline').hasClass('hidden')) {
			$('#div-alert-offline').addClass('hidden');
		}

	});
}