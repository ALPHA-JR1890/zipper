// Detect brand from hostname
function detectBrand() {
  if (location.hostname.includes('gap.com')) return 'gap';
  if (location.hostname.includes('hollisterco.com')) return 'hollister';
  return null;
}

// Try to auto-select the best-fit size on product pages
function autoSelectSize(brand, bestSize) {
  if (!bestSize) return;
  let buttons = [];
  if (brand === 'gap') {
    // Example selector (update if site changes)
    buttons = document.querySelectorAll('[data-testid="size-selector"] button');
  } else if (brand === 'hollister') {
    buttons = document.querySelectorAll('.product-sizes__size-button');
  }
  if (buttons.length > 0) {
    for (const btn of buttons) {
      if (btn.textContent.trim().toUpperCase() === bestSize.toUpperCase()) {
        btn.click();
        break;
      }
    }
  }
}

// Main logic: get user measurements, size chart, and select
chrome.storage.sync.get("measurements", (data) => {
  const brand = detectBrand();
  const measurements = data.measurements;
  if (!brand || !measurements) return;
  const bestSize = getBestSize(brand, measurements);
  autoSelectSize(brand, bestSize);
});
