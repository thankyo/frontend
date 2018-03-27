import "./integration.sass";

(function () {

  let svgElement = document.getElementsByTagName("svg")[0];
  // This was removed due to svg generation in production, spent too much time on it
  svgElement.setAttribute("viewBox", "0 0 512 512");

  let counterElement = document.getElementById("counter");

  let count = 0;

  function updateCounter() {
    counterElement.innerText = count.toString();
  }

  function markLoved() {
    svgElement.setAttribute("class", "fab-is-loved is-unselectable");
  }

  function markError() {
    svgElement.setAttribute("class", "fab-is-error is-unselectable");
  }

  function parseUserId(token) {
    if (!token) {
      return null;
    }

    let base64Url = token.split('.')[1];

    let base64 = base64Url.replace('-', '+').replace('_', '/');
    let { id } = JSON.parse(window.atob(base64));

    return id;
  }

  let token = localStorage.getItem("token");
  let userId = token !== null ? parseUserId(token) : null;

  function fetchPostState() {
    let url = "/api/v1/thank/graph?url=" + encodeURIComponent(document.referrer);
    let options = {
      headers: { 'X-Auth-Token': token }
    };

    fetch(url, options).then((res) => {
      if (res.ok) {
        res.json().then(({ thank: { given, supporters } }) => {
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
  }
  fetchPostState();

  function redirectToRegister() {
    top.location = window.location.origin
  }

  function lovePost() {
    markLoved();
    updateCounter(count++);

    const options = {
      method: "POST",
      headers: {
        'X-Auth-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: document.referrer })
    };

    fetch(new Request("/api/v1/thank/graph/my/support", options))
      .then(res => { if (!res.ok) markError() })
  }

  function buttonClicked(evt) {
    evt.preventDefault();

    if (userId != null) {
      lovePost()
    } else {
      redirectToRegister()
    }
  }

  svgElement.onclick = buttonClicked;
})();