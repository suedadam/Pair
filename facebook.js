

function showAccountInfo() {
  FB.api(
    {
      method: 'fql.query',
      query: 'SELECT name, pic_square FROM user WHERE uid='+FB.getUserID()
    },
    function(response) {
      Log.info('API Callback', response);
      document.getElementById('account-info').innerHTML = (
        '<img src="' + response[0].pic_square + '"> ' +
        response[0].name +
        ' <button class="btn" onclick="FB.logout()">Logout</button>'
      );
    }
  );
}



function showLoginButton() {
  document.getElementById('account-info').innerHTML = (
    '<button class="btn btn-primary" onclick="FB.login()">Login</button>'
  );
}



function onStatus(response) {
  Log.info('onStatus', response);
  if (response.status === 'connected') {
    showAccountInfo();
  } else {
    showLoginButton();
  }
}
FB.getLoginStatus(function(response) {
  onStatus(response); 
  FB.Event.subscribe('auth.statusChange', onStatus); 
});

