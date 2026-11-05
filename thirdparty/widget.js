// A deliberately slow "third-party" widget, served from cdn.jsdelivr.net in the test PR.
(function(){ const t = performance.now(); while (performance.now() - t < 180) {} window.__widget = 1; })();
