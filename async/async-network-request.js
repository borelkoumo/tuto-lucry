getGithubUserInfo(myCallback);

function getGithubUserInfo(myCallback) {
  const username = 'borelkoumo';
  // Note callback argument
  // Make a scripted HTTP request to a backend version API
  let request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/users/' + username);
  request.send();
  // Register a callback that will be invoked when the response arrives
  request.onload = function () {
    if (request.status === 200) {
      // If HTTP status is good, get version number and call callback.
      let infos = JSON.parse(request.responseText);
      myCallback(null, infos);
    } else {
      // Otherwise report an error to the callback
      myCallback(
        `Le statut de la reauete n'est pas bon : ${request.status}`,
        null
      );
    }
  };

  // Register another callback that will be invoked for network errors
  request.onerror = function (e) {
    console.log('Error :', e);
    myCallback(e, null);
  };
  request.ontimeout = function (e) {
    console.log('Timeout :', e);
    myCallback(e, null);
  };
}

function getGithubUserInfo2(myCallback) {
  setTimeout(() => {
    const infos = {
      login: 'borelkoumo',
      id: 8999035,
      node_id: 'MDQ6VXNlcjg5OTkwMzU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/8999035?v=4',
    };
    myCallback(null, infos);
  }, 5000);
}

function myCallback(err, data) {
  if (err !== null) {
    console.log('Error : ' + err);
  } else {
    console.log('Data : ' + JSON.stringify(data));
  }
}
