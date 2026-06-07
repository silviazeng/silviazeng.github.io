/**
 * Auto-fit the embedded Italian Politics map iframe to its inner content,
 * so the blog post never shows an inner scrollbar.
 *
 * Loaded as an external <script src="…"> from the post body because Quartz's
 * markdown processor smart-quotes inline JS in markdown (turning 'load' into
 * curly quotes), which breaks the syntax. An external file bypasses that.
 *
 * Same-origin (both pages served from silviazeng.github.io), so we can read
 * contentDocument directly. Re-measures on load, on inner-document size
 * changes (ResizeObserver), and on parent window resize.
 */
(function () {
  function init() {
    var frame = document.getElementById("italia-map-frame");
    if (!frame) return;

    function fit() {
      try {
        var d =
          frame.contentDocument ||
          (frame.contentWindow && frame.contentWindow.document);
        if (!d) return;
        var h = Math.max(
          d.documentElement.scrollHeight,
          d.body ? d.body.scrollHeight : 0
        );
        if (h > 0) frame.style.height = h + "px";
      } catch (e) {
        // cross-origin or not ready
      }
    }

    function onLoad() {
      fit();
      // Re-fit a couple times in case fonts/images settle after the load event.
      setTimeout(fit, 200);
      setTimeout(fit, 800);
      try {
        var d = frame.contentDocument || frame.contentWindow.document;
        if (window.ResizeObserver && d && d.documentElement) {
          new ResizeObserver(fit).observe(d.documentElement);
        }
      } catch (e) {
        // ignore
      }
    }

    if (frame.contentDocument && frame.contentDocument.readyState === "complete") {
      onLoad();
    } else {
      frame.addEventListener("load", onLoad);
    }
    window.addEventListener("resize", fit);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
