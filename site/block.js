// Calibration plant (MergeDelta batch 1-5, spec 0b-6 §7): a render-blocking script that does a
// fixed 250 ms of work before the first paint. Expected: FCP, LCP and Speed Index regress well
// past twice their thresholds; TBT should not move (the work happens before first paint).
(function () {
  var end = performance.now() + 250;
  while (performance.now() < end) { /* busy */ }
})();
