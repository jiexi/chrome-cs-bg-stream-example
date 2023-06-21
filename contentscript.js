let extensionPort = chrome.runtime.connect({
  name: "contentscript"
});
extensionPort.onDisconnect.addListener(data => {
  console.log("contentscript disconnected", data.error);
});
setInterval(() => {
  const rand = Math.floor(Math.random() * 1000);
  console.log("contentscript emitting data", rand);
  extensionPort.postMessage(rand);
}, 2000);
