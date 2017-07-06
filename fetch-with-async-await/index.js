+async function ipFetcher() {
  "use strict";
  let times = 0;
  function updateHTML(id, data) {
    console.log("updating", id);
    const delay = 500;
    ++times;
    window.setTimeout(() => {
      console.log("complete", id);
      document.getElementById(id).innerHTML = data;
    }, delay * times);
  }

  try {
    const postData = JSON.stringify({
      pi: 3.1415926535
    });
    const init = {
      method: "POST",
      body: postData
    };
    const askForIp = await fetch("https://httpbin.org/ip");
    const ipResponse = await askForIp.json();

    updateHTML('retrieved-ip', ipResponse.origin);

    const postPi = await fetch("https://httpbin.org/post", init);
    const piResponse = await postPi.json();

    updateHTML('retrieved-pi', piResponse.json.pi);

    const getError = await fetch("https://httpbin.org/hidden-basic-auth/admin/admin");
    const errorResponse = await getError.json();
  } catch (err) {
    updateHTML('retrieved-err', err);
    console.error(err);
  }
}();
