/* Bronte site extras: loaded by config.js from this repository. Edit here, push, done. */
(function () {
  var IMG = "https://cdn.jsdelivr.net/gh/executiveboardroomai-spec/bronte-windows@a19bb05/jobs/";
  var LOGO = "https://brontewindows.co.uk/wp-content/uploads/2025/04/";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  var css = el("style");
  css.textContent = [
    ".bx-jobs .bx-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:8px}",
    ".bx-jobs figure{position:relative;margin:0;border-radius:12px;overflow:hidden;background:#e9e7e2;aspect-ratio:3/4}",
    ".bx-jobs figure img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}",
    ".bx-jobs figure:hover img{transform:scale(1.03)}",
    ".bx-tag{position:absolute;left:10px;top:10px;background:rgba(9,12,45,.85);color:#fff;font:600 11px/1 Inter,sans-serif;padding:6px 10px;border-radius:99px;letter-spacing:.05em;text-transform:uppercase}",
    ".bx-tag.after{background:#2ba3e0}",
    ".bx-more{display:flex;justify-content:center;margin-top:28px}",
    ".bx-partners{padding:34px 0;border-top:1px solid var(--line,#e5e3de);border-bottom:1px solid var(--line,#e5e3de);background:#fff;overflow:hidden}",
    ".bx-partners p{text-align:center;font:600 12px/1 Inter,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--muted,#666);margin:0 0 22px}",
    ".bx-track{display:flex;gap:72px;width:max-content;animation:bxscroll 28s linear infinite;align-items:center}",
    ".bx-partners:hover .bx-track{animation-play-state:paused}",
    ".bx-track img{height:52px;width:auto;flex:none}",
    "@keyframes bxscroll{to{transform:translateX(-50%)}}",
    "@media (prefers-reduced-motion:reduce){.bx-track{animation:none;flex-wrap:wrap;justify-content:center;width:auto}}",
    ".bx-example{margin-top:14px;font-size:16px;color:var(--ink-2,#333);max-width:62ch}",
    ".bx-example strong{color:var(--ink,#090c2d)}",
    ".bx-save{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px;max-width:760px}",
    ".bx-save div{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.22);border-radius:14px;padding:18px 20px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}",
    ".bx-save b{display:block;font:600 32px/1.1 'Inter Tight',Inter,sans-serif;color:#fff}",
    ".bx-save span{display:block;margin-top:6px;font-size:14px;color:rgba(255,255,255,.85)}",
    ".bx-note{margin-top:14px;font-size:13px;line-height:1.5;color:rgba(255,255,255,.75);max-width:62ch}",
    ".bx-tips{margin-top:12px;font-size:14px;line-height:1.5;opacity:.85;max-width:52ch}",
    ".site-head:has(.nav a[href=\"recent-jobs.html\"]) .nav-jobs{display:none}.nav a{white-space:nowrap}",
    ".bx-reply{margin-top:10px;font-size:14px;color:var(--muted,#666)}",
    ".bx-pay{background:#090c2d;color:#fff}.bx-pay .kicker{color:#2ba3e0}.bx-pay h2{color:#fff}.bx-pay .lead{color:rgba(255,255,255,.82)}",
    ".bx-ways{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}",
    ".bx-ways div{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:28px 26px;transition:transform .25s,border-color .25s}",
    ".bx-ways div:hover{transform:translateY(-2px);border-color:#2ba3e0}",
    ".bx-ways svg{width:34px;height:34px;stroke:#2ba3e0;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}",
    ".bx-ways b{display:block;margin-top:16px;font:600 22px/1.2 'Inter Tight',Inter,sans-serif}",
    ".bx-ways span{display:block;margin-top:8px;font-size:15px;line-height:1.55;color:rgba(255,255,255,.8)}",
    ".bx-paynote{margin-top:16px;font-size:15px;font-weight:600;color:var(--ink,#090c2d)}",
    "@media (max-width:760px){.bx-ways{grid-template-columns:1fr}}",
    "@media (max-width:760px){.bx-jobs .bx-grid{grid-template-columns:1fr 1fr}.bx-save{grid-template-columns:1fr}.bx-track{gap:44px}.bx-track img{height:40px}}"
  ].join("");
  document.head.appendChild(css);

  function run() {
    /* 1. Space in the logo text so search engines and screen readers read "Bronte Windows & Doors" */
    document.querySelectorAll(".logo span small").forEach(function (s) {
      if (s.previousSibling && s.previousSibling.nodeType === 3 && !/\s$/.test(s.previousSibling.textContent)) s.parentNode.insertBefore(document.createTextNode(" "), s);
    });

    /* 2. Recent jobs on the home page, after the product range */
    var range = $("#range");
    if (range && !$("#jobs")) {
      var jobs = [
        ["job-03.jpg", "Old white uPVC front door before replacement", "Before", ""],
        ["job-02.jpg", "New white composite front door after fitting", "After", "after"],
        ["job-16.jpg", "Old white window in an arched opening before replacement", "Before", ""],
        ["job-21.jpg", "New Chartwell green sash-style window in the same opening", "After", "after"],
        ["job-14.jpg", "Stone detached house with white windows and a pale blue composite door", "", ""],
        ["job-12.jpg", "Terrace with Chartwell green windows, door and garage door", "", ""],
        ["job-08.jpg", "Red brick house with golden oak windows and front door", "", ""],
        ["job-24.jpg", "Anthracite composite door with three diamond glass panels", "", ""]
      ];
      var figs = jobs.map(function (j) {
        return '<figure><img src="' + IMG + j[0] + '" alt="' + j[1] + '" loading="lazy" decoding="async">' + (j[2] ? '<span class="bx-tag ' + j[3] + '">' + j[2] + "</span>" : "") + "</figure>";
      }).join("");
      var sec = el("section", "band bx-jobs");
      sec.id = "jobs";
      sec.setAttribute("aria-labelledby", "h-jobs");
      sec.innerHTML = '<div class="wrap"><div class="band-head"><div><p class="kicker">Recent jobs</p><h2 id="h-jobs">Real Bronte jobs on Yorkshire houses</h2></div><p class="lead">No stock photos here. These are windows and doors we have fitted, with house numbers blurred to keep our customers\' homes private.</p></div><div class="bx-grid">' + figs + '</div><div class="bx-more"><a class="btn btn-primary" href="recent-jobs.html">See all our recent jobs</a></div></div>';
      range.parentNode.insertBefore(sec, range.nextSibling);
    }

    /* 3. Partner logos, scrolling slowly under the guarantees strip */
    var trust = $("section.trust");
    if (trust && !$(".bx-partners")) {
      var logos = [["Partner_Image_3.avif", "Door-Stop"], ["Partner_Image_2.avif", "Ultion"], ["Partner_Image_1.avif", "Eurocell"], ["Partner_Image_4.avif", "Secured by Design"]];
      var one = logos.map(function (l) { return '<img src="' + LOGO + l[0] + '" alt="' + l[1] + '" loading="lazy">'; }).join("");
      var band = el("section", "bx-partners");
      band.setAttribute("aria-label", "Our partners");
      band.innerHTML = '<p>Our partners</p><div class="bx-track">' + one + one.replace(/alt="[^"]*"/g, 'alt="" aria-hidden="true"') + one.replace(/alt="[^"]*"/g, 'alt="" aria-hidden="true"') + one.replace(/alt="[^"]*"/g, 'alt="" aria-hidden="true"') + "</div>";
      trust.parentNode.insertBefore(band, trust.nextSibling);
    }

    /* 4. Example price before anyone touches the calculator */
    var out = $("#priceOut"), head = $("#price .band-head");
    if (out && head && !$(".bx-example")) {
      var txt = out.textContent.trim();
      if (/£[1-9]/.test(txt)) {
        var ex = el("p", "bx-example", "Example: a typical 3-bed semi with six windows comes to <strong>" + txt + "</strong>, supplied and fitted. That house is already set up in the calculator, so change it to match yours.");
        (head.querySelector(".lead") || head).insertAdjacentElement("afterend", ex);
      }
    }

    /* 5. Energy saving figures from the Glass and Glazing Federation calculator */
    var night = $("section.night .wrap");
    if (night && !$(".bx-save")) {
      var save = el("div", "bx-save", "<div><b>£114</b><span>a year, terraced house</span></div><div><b>£166</b><span>a year, semi-detached</span></div><div><b>£208</b><span>a year, detached house</span></div>");
      var note = el("p", "bx-note", "Estimated yearly savings from replacing pre-2002 double glazing with A++ rated windows in a gas-heated home. Source: GGF Energy Savings Calculator, November 2026. Your own saving depends on your house and how you heat it.");
      night.appendChild(save);
      night.appendChild(note);
    }

    /* 6. Photo tips under the visualiser upload */
    var up = $("#visualiser .upload");
    if (up && !$(".bx-tips")) up.insertAdjacentElement("afterend", el("p", "bx-tips", "Tip: stand across the road, get the whole front of the house in, and take it in daylight with the windows facing you."));

    /* 7. Reply time next to WhatsApp in the contact section */
    var wa = $("#contact .js-wa");
    if (wa && !$(".bx-reply")) {
      var h = (window.SITE && SITE.hours) || "Monday to Friday, 9am to 5pm";
      wa.insertAdjacentElement("afterend", el("p", "bx-reply", "We reply the same working day, " + h + "."));
    }
    /* 8. Balance only after sign-off, in the last "How it works" step */
    var last = document.querySelector("#how .steps li:last-child p");
    if (last && !document.querySelector(".bx-signoff")) {
      var so = el("p", "bx-signoff", "We never ask for the balance until we have been round every window and door with you and you are happy with the work.");
      so.style.marginTop = "8px";
      last.insertAdjacentElement("afterend", so);
    }
    /* 9. Three easy ways to pay: a band straight after the price guide, plus a line under the price */
    var price = $("#price");
    if (price && !$(".bx-pay")) {
      var ic = {
        bank: '<svg viewBox="0 0 24 24"><path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/></svg>',
        card: '<svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6.5 15h4"/></svg>',
        fin: '<svg viewBox="0 0 24 24"><rect x="3.5" y="4.5" width="17" height="16" rx="2"/><path d="M3.5 9h17M8 2.5v4M16 2.5v4M8 13h3M8 16.5h6"/></svg>'
      };
      var pay = el("section", "band bx-pay");
      pay.id = "pay";
      pay.setAttribute("aria-labelledby", "h-pay");
      pay.innerHTML = '<div class="wrap"><div class="band-head"><div><p class="kicker">Paying for your windows and doors</p><h2 id="h-pay">3 easy ways to pay</h2></div>' +
        '<p class="lead">Pay a 25% deposit when you go ahead, and the rest once we have been round every window and door with you and you are happy. Pay whichever way suits you.</p></div>' +
        '<div class="bx-ways">' +
        '<div>' + ic.bank + '<b>Bank transfer</b><span>Pay straight from your bank account, with no fees and nothing to sign up to.</span></div>' +
        '<div>' + ic.card + '<b>Credit or debit card</b><span>Pay securely online with the link on your quote, or by card on the day.</span></div>' +
        '<div>' + ic.fin + '<b>Finance</b><span>Spread the cost with monthly payments. Subject to status, and we can talk you through the options.</span></div>' +
        '</div></div>';
      price.insertAdjacentElement("afterend", pay);
      var ph = $("#price .band-head");
      if (ph && !$(".bx-paynote")) ph.insertAdjacentElement("afterend", el("p", "bx-paynote", "3 easy ways to pay: bank transfer, credit or debit card, or finance. <a href=\"#pay\">See how</a>"));
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
