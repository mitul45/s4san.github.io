+async function ipFetcher() {
  function setUserIp(ip) {
    window.setTimeout(() => document.getElementById('retrieved-ip').innerHTML = ip, 500);
  }

  try {
    const askForIp = await fetch("https://httpbin.org/ip");
    const ip = await askForIp.json();

    setUserIp(ip.origin);
  } catch (err) {
    console.error(err);
  }
}();
