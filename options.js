const form = document.getElementById('measurementsForm');
const statusEl = document.getElementById('status');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const measurements = {
    bust: Number(form.bust.value),
    waist: Number(form.waist.value),
    hip: Number(form.hip.value),
    height: Number(form.height.value),
    weight: Number(form.weight.value)
  };
  chrome.storage.sync.set({ measurements }, () => {
    statusEl.textContent = 'Measurements saved!';
    setTimeout(() => statusEl.textContent = '', 2000);
  });
});

// Autofill if already saved
chrome.storage.sync.get("measurements", (data) => {
  if (data.measurements) {
    form.bust.value = data.measurements.bust || "";
    form.waist.value = data.measurements.waist || "";
    form.hip.value = data.measurements.hip || "";
    form.height.value = data.measurements.height || "";
    form.weight.value = data.measurements.weight || "";
  }
});
