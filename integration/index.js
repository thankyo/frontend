import "./integration.sass";

function tip(){
  function singIn() {
    window.top.location = "https://loveit.tips"
  }
  function doTip(token) {
    const url = "/api/v1/thank/http/@res.uri";
    var req = new Request(url, {
      method: "PUT",
      headers: {
        'X-Auth-Token': token
      }
    });
    fetch(req).
    then(function(res) {
      if (res.ok) {
        return res.json()
      } else {
        singIn();
      }
    }).
    then(function() {
      document.getElementById("SPAN_1").style.backgroundColor = "#00D1B2";
    })
  }

  var token = localStorage.getItem("token");
  if (token === undefined || token === null) {
    //singIn()
  } else {
    //doTip(token)
  }
};