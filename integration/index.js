import "./integration.sass";

(function () {
  let buttonElement = document.getElementById("button");
  let counterElement = document.getElementById("counter");

  let token = localStorage.getItem("token");
  let isUser = token !== null;

  let count = 0;

  function parseUserId(token) {
    let base64Url = token.split('.')[1];

    let base64 = base64Url.replace('-', '+').replace('_', '/');
    let { id } = JSON.parse(window.atob(base64));

    return id;
  }

  let options = {
    headers: { 'X-Auth-Token': token }
  };

  fetch("/api/v1/thank/graph?url=" + encodeURIComponent(document.referrer), options).then((res) => {
    if (res.ok) {
      res.json().then(({ thank: { given, supporters }}) => {
        count = given;
        updateCounter();

        let userId = parseUserId(localStorage.getItem("token"));
        let loved = supporters.some(id => userId === id);
        if (loved) {
          markLoved()
        }
      });
    } else {
      markError();
    }
  });

  function updateCounter() {
    counterElement.innerText = count;
  }

  function markLoved() {
    buttonElement.setAttribute("class", "fab-is-loved is-unselectable");
  }

  function markError() {
    buttonElement.setAttribute("class", "fab-is-error is-unselectable");
  }

  function redirectToRegister() {
    top.location = window.location.origin
  }

  function lovePost() {
    markLoved();
    updateCounter(count++);
    let options = {
      method: "POST",
      headers: {
        'X-Auth-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: document.referrer })
    };
    fetch(new Request("/api/v1/thank/graph/my/support", options))
      .then(function (res) {
        if (res.ok) {
          markLoved();
        } else {
          markError();
        }
      })
  }

  function buttonClicked(evt) {
    evt.preventDefault();
    if (isUser) {
      lovePost()
    } else {
      redirectToRegister()
    }
  }

  buttonElement.onclick = buttonClicked;
})();