// Brand sizing charts: ranges in cm
const SIZING_CHARTS = {
  gap: [
    { size: 'XS', bust: [81, 84], waist: [61, 64], hip: [88, 91] },
    { size: 'S', bust: [85, 89], waist: [65, 69], hip: [92, 96] },
    { size: 'M', bust: [90, 94], waist: [70, 74], hip: [97, 101] },
    { size: 'L', bust: [95, 101], waist: [75, 81], hip: [102, 108] },
    { size: 'XL', bust: [102, 109], waist: [82, 89], hip: [109, 116] }
  ],
  hollister: [
    { size: 'XS', bust: [79, 82], waist: [58, 61], hip: [86, 89] },
    { size: 'S', bust: [83, 87], waist: [62, 66], hip: [90, 94] },
    { size: 'M', bust: [88, 92], waist: [67, 71], hip: [95, 99] },
    { size: 'L', bust: [93, 97], waist: [72, 76], hip: [100, 104] },
    { size: 'XL', bust: [98, 103], waist: [77, 82], hip: [105, 110] }
  ]
};

// Return best size based on measurements
function getBestSize(brand, measurements) {
  const chart = SIZING_CHARTS[brand];
  if (!chart) return null;
  for (const entry of chart) {
    if (
      measurements.bust >= entry.bust[0] && measurements.bust <= entry.bust[1] &&
      measurements.waist >= entry.waist[0] && measurements.waist <= entry.waist[1] &&
      measurements.hip >= entry.hip[0] && measurements.hip <= entry.hip[1]
    ) {
      return entry.size;
    }
  }
  return null;
}
