const connect = remotePort => {
  let tabId = "unknown";
  let origin = "unknown";
  if (remotePort.sender && remotePort.sender.tab && remotePort.sender.url) {
    tabId = remotePort.sender.tab.id;
    const url = new URL(remotePort.sender.url);
    origin = url.origin;
  }
  console.log("background connected", tabId, origin);
  let count = 10;
  remotePort.onMessage.addListener(data => {
    console.log(`background onMessage (${count})`, tabId, origin, data);
    count--;
    if (!count) {
      console.log("background disconnecting (0)", tabId, origin);
      remotePort.disconnect();
    }
  });

  remotePort.onDisconnect.addListener(data => {
    console.log("background disconnected", tabId, origin, data.error, chrome.runtime.lastError);
  });
};

chrome.runtime.onConnect.addListener(async (...args) => {
  connect(...args);
});
