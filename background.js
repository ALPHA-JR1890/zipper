chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get("measurements", (data) => {
    if (!data.measurements) {
      chrome.runtime.openOptionsPage();
    }
  });
});
