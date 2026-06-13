/* ============================================================= *
 *  rdor.net  ::  the only script on the site (almost)            *
 *  - a hit counter backed by localStorage (per-browser, honest)  *
 *  - a live clock for the status panel                           *
 *  no jQuery. no build step. view-source and steal it.           *
 * ============================================================= */
(function () {
    "use strict";

    /* ---- hit counter ---- */
    var KEY = "rdor_hits";
    var BASE = 13370;                       // we did NOT start at zero
    var n = parseInt(localStorage.getItem(KEY) || "0", 10);
    n += 1;                                  // every page view is a hit
    localStorage.setItem(KEY, String(n));
    var padded = ("000000" + (BASE + n)).slice(-6);

    var c = document.getElementById("hitcounter");
    if (c) c.textContent = padded;
    var t = document.getElementById("tickcount");
    if (t) t.textContent = padded;

    /* ---- live clock ---- */
    var clock = document.getElementById("localtime");
    if (clock) {
        var p = function (x) { return ("0" + x).slice(-2); };
        var tick = function () {
            var d = new Date();
            clock.textContent = p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
        };
        tick();
        setInterval(tick, 1000);
    }
})();
