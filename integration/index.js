import "./integration.sass";
(function () {
  var token = localStorage.getItem("token");
  var isUser = token !== null;
  var element = document.getElementById("button");

  if (isUser) {
    fetch("/api/v1/thank/graph/my/support?url=" + encodeURIComponent(document.referrer),
      { headers: { 'X-Auth-Token': token } }
    ).then((res) => {
        if (res.ok) {
          res.json().then((loved) => {
            if (loved) {
              markLoved()
            }
          });
        } else {
          markError();
        }
      });
  }

  function markLoved() {
    element.setAttribute("class", "fab-is-loved");
  }

  function markError() {
    element.setAttribute("class", "fab-is-error");
  }

  function redirectToRegister() {
    top.location = window.location.origin
  }

  function lovePost() {
    markLoved();
    fetch(
      new Request("/api/v1/thank/graph/my/support",
      { method: "POST", headers: { 'X-Auth-Token': token, "Content-Type": "application/json" }, body: JSON.stringify({ url: document.referrer }) })
    ).then(function (res) {
      if (res.ok) {
        markLoved();
      } else {
        markError();
      }
    })
  }

  element.onclick = isUser ? lovePost : redirectToRegister;
})();