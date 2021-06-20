export function addParamToURL(param, value) {
  var baseUrl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname;

  if (arguments.length === 0) {
    window.history.pushState(null, null, baseUrl);
    return;
  }
  if (window.history.pushState) {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);

    //Add  parameter.
    params.set(param, value);

    var newUrl = baseUrl + "?" + params.toString();
    window.history.pushState(null, null, newUrl);
  } else {
    console.warn("History API не поддерживается");
  }
}
