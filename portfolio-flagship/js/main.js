/* =========================================================
   KOHYAMA PORTFOLIO — main.js
   ========================================================= */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- ヘッダー：スクロールで背景付与 ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- モバイルナビ ---------- */
  var toggle = document.getElementById("navToggle");
  var gnav = document.getElementById("gnav");
  if (toggle && gnav) {
    toggle.addEventListener("click", function () {
      var open = gnav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    gnav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        gnav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- ショーケースリール：トラック複製で無限ループ ---------- */
  var track = document.getElementById("reelTrack");
  if (track) {
    track.innerHTML += track.innerHTML; // 2倍にして -50% ループ
  }

  /* ---------- スクロールリビール（時間差付き） ---------- */
  var revealTargets = document.querySelectorAll(".js-reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = el.parentElement
          ? Array.prototype.filter.call(el.parentElement.children, function (c) {
              return c.classList.contains("js-reveal");
            })
          : [el];
        var idx = siblings.indexOf(el);
        el.style.transitionDelay = (Math.max(idx, 0) % 6) * 0.12 + "s";
        el.classList.add("is-in");
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- WORKSフィルタ ---------- */
  var fBtns = document.querySelectorAll(".f-btn");
  var works = document.querySelectorAll(".work");
  fBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      fBtns.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var f = btn.getAttribute("data-filter");
      works.forEach(function (w) {
        var show = f === "all" || w.getAttribute("data-cat") === f;
        w.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------- ライトボックス ---------- */
  var lb = document.getElementById("lightbox");
  var lbMedia = document.getElementById("lbMedia");
  var lbCat = document.getElementById("lbCat");
  var lbTitle = document.getElementById("lbTitle");
  var lbDesc = document.getElementById("lbDesc");
  var lbLink = document.getElementById("lbLink");
  var lastFocus = null;

  function openLightbox(work) {
    lastFocus = document.activeElement;
    var video = work.getAttribute("data-video");
    var img = work.querySelector("img");
    var url = (work.getAttribute("data-url") || "").trim();
    lbMedia.innerHTML = "";
    if (video) {
      var v = document.createElement("video");
      v.src = video;
      v.controls = true;
      v.playsInline = true;
      v.setAttribute("poster", img ? img.src : "");
      lbMedia.appendChild(v);
      if (!reduced) { v.play().catch(function () {}); }
    } else if (img) {
      var i = document.createElement("img");
      i.src = img.src;
      i.alt = img.alt || "";
      lbMedia.appendChild(i);
    }
    lbCat.textContent = (work.querySelector(".work-cat") || {}).textContent || "";
    lbTitle.textContent = work.getAttribute("data-title") || "";
    lbDesc.textContent = work.getAttribute("data-desc") || "";
    if (lbLink) {
      if (url) {
        lbLink.href = url;
        lbLink.hidden = false;
      } else {
        lbLink.hidden = true;
        lbLink.removeAttribute("href");
      }
    }
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var closeBtn = lb.querySelector(".lb-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    var v = lbMedia.querySelector("video");
    if (v) v.pause();
    if (lbLink) {
      lbLink.hidden = true;
      lbLink.removeAttribute("href");
    }
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  works.forEach(function (w) {
    w.setAttribute("tabindex", "0");
    w.setAttribute("role", "button");
    w.addEventListener("click", function () { openLightbox(w); });
    w.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(w);
      }
    });
  });
  lb.querySelectorAll("[data-lb-close]").forEach(function (el) {
    el.addEventListener("click", closeLightbox);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lb.classList.contains("is-open")) closeLightbox();
  });
})();

/* =========================================================
   MOTION UPGRADE — 遊び心セット
   ========================================================= */
(function () {
  "use strict";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- スクロール進捗 ---------- */
  var bar = document.getElementById("progressBar");
  function progress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? window.scrollY / max : 0;
    bar.style.width = "calc((100vw - 20px) * " + p.toFixed(4) + ")";
  }
  window.addEventListener("scroll", progress, { passive: true });
  window.addEventListener("resize", progress);
  progress();

  /* ---------- カスタムカーソル ---------- */
  if (finePointer && !reduced) {
    var dot = document.getElementById("cursorDot");
    var ring = document.getElementById("cursorRing");
    document.body.classList.add("has-cursor");
    var mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = "translate(" + mx + "px," + my + "px) translate(-50%,-50%)";
    });
    (function loop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest(".work")) {
        ring.classList.add("is-view"); ring.classList.remove("is-link");
      } else if (e.target.closest("a,button")) {
        ring.classList.add("is-link"); ring.classList.remove("is-view");
      } else {
        ring.classList.remove("is-view", "is-link");
      }
    });
  }

  /* ---------- 作品カード 3Dチルト＋光沢 ---------- */
  if (finePointer && !reduced) {
    document.querySelectorAll(".work").forEach(function (w) {
      var mat = w.querySelector(".work-mat");
      if (!mat) return;
      w.addEventListener("mousemove", function (e) {
        var r = mat.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        mat.style.transform =
          "perspective(700px) rotateY(" + ((px - 0.5) * 8).toFixed(2) + "deg)" +
          " rotateX(" + ((0.5 - py) * 8).toFixed(2) + "deg)";
        mat.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
        mat.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
      });
      w.addEventListener("mouseleave", function () {
        mat.style.transition = "transform .7s cubic-bezier(.22,.6,.2,1), border-color .5s";
        mat.style.transform = "perspective(700px) rotateY(0) rotateX(0)";
        setTimeout(function () { mat.style.transition = ""; }, 700);
      });
    });
  }

  /* ---------- ヒーロータイトル（1行キャッチコピーは fadeup のまま） ---------- */
  /* 文字分割アニメは nowrap 1行表示と相性が悪いため、.hero-title では使わない */

  /* ---------- ヒーロー マウス追従パララックス ---------- */
  var hero = document.querySelector(".hero");
  var heroInner = document.querySelector(".hero-inner");
  var sparkles = document.querySelector(".sparkles");
  if (hero && finePointer && !reduced) {
    var tx = 0, ty = 0, cx = 0, cy = 0;
    hero.addEventListener("mousemove", function (e) {
      var r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    });
    hero.addEventListener("mouseleave", function () { tx = 0; ty = 0; });
    (function pLoop() {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      heroInner.style.transform = "translate(" + (cx * 10) + "px," + (cy * 8) + "px)";
      if (sparkles) sparkles.style.transform = "translate(" + (cx * -22) + "px," + (cy * -16) + "px)";
      requestAnimationFrame(pLoop);
    })();
  }

  /* ---------- フィルタ切替のスタッガー ---------- */
  document.querySelectorAll(".f-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (reduced) return;
      var visible = document.querySelectorAll(".work:not(.is-hidden)");
      visible.forEach(function (w, i) {
        w.classList.remove("is-pop");
        void w.offsetWidth; /* reflowでアニメ再発火 */
        w.style.animationDelay = (i * 0.07) + "s";
        w.classList.add("is-pop");
      });
    });
  });

})();

/* =========================================================
   FLAGSHIP UPGRADE — flagship-homepage-design
   ========================================================= */
(function () {
  "use strict";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* ---------- カウントアップ（掲載内容の実数のみ・使い捨てIO） ---------- */
  var stats = document.querySelector(".stats");
  if (stats) {
    var runCount = function () {
      stats.querySelectorAll(".cnt").forEach(function (el) {
        var end = parseInt(el.getAttribute("data-count"), 10);
        if (reduced) { el.textContent = end; return; }
        var t0 = null, dur = 1200;
        var step = function (t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / dur, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    };
    if (reduced || !hasIO) { runCount(); }
    else {
      var cio = new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (!en.isIntersecting) return;
          runCount(); cio.unobserve(en.target);
        });
      }, { threshold: 0.4 });
      cio.observe(stats);
    }
  }

  /* ---------- 見出しスプリットテキスト（6文字以下のみ＝改行事故回避） ---------- */
  if (!reduced && hasIO) {
    var titles = [];
    document.querySelectorAll(".ja-title").forEach(function (el) {
      var chars = Array.from(el.textContent);
      if (chars.length > 6) return;
      el.textContent = "";
      chars.forEach(function (ch, i) {
        var s = document.createElement("span");
        s.className = "jch"; s.textContent = ch;
        s.style.transitionDelay = (i * 0.06) + "s";
        el.appendChild(s);
      });
      titles.push(el);
    });
    var tio = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-split"); tio.unobserve(en.target);
      });
    }, { threshold: 0.6 });
    titles.forEach(function (el) { tio.observe(el); });
  }

  /* ---------- 作品カード カーテンリビール（JSがクラス付与→no-JSでも表示保証） ---------- */
  if (!reduced && hasIO) {
    var mats = document.querySelectorAll(".work-mat");
    mats.forEach(function (m) { m.classList.add("mat-curtain"); });
    /* 注意: clip-pathで幅0の要素はIOが交差判定できないため、親の.workを監視する */
    var mio = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var m = en.target.querySelector(".work-mat");
        if (m) m.classList.add("mat-open");
        mio.unobserve(en.target);
      });
    }, { threshold: 0.25 });
    document.querySelectorAll(".work").forEach(function (w) { mio.observe(w); });
  }

  /* ---------- ナビ現在地ハイライト ---------- */
  if (hasIO) {
    var navAs = document.querySelectorAll(".gnav a");
    var nio = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        navAs.forEach(function (a) {
          a.classList.toggle("is-cur", a.getAttribute("href") === "#" + en.target.id);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    document.querySelectorAll("section[id]").forEach(function (s) { nio.observe(s); });
  }

  /* ---------- 以降はPC（pointer:fine）かつ motion OK のみ ---------- */
  if (!fine || reduced) return;

  /* マグネットボタン（±8px上限・leaveで復帰） */
  document.querySelectorAll(".magnet").forEach(function (el) {
    el.addEventListener("mousemove", function (e) {
      var r = el.getBoundingClientRect();
      var dx = Math.max(-8, Math.min(8, (e.clientX - r.left - r.width / 2) * 0.18));
      var dy = Math.max(-8, Math.min(8, (e.clientY - r.top - r.height / 2) * 0.18));
      el.style.transform = "translate(" + dx + "px," + dy + "px)";
    });
    el.addEventListener("mouseleave", function () { el.style.transform = ""; });
  });

  /* カーソル追従プレビュー（公開サイトカード・pointer-events:none済み） */
  var pv = document.getElementById("hoverPreview");
  if (pv) {
    var pvImg = pv.querySelector("img");
    document.querySelectorAll(".site-card[data-preview]").forEach(function (card) {
      card.addEventListener("mouseenter", function () {
        pvImg.src = card.getAttribute("data-preview");
        pv.classList.add("is-on");
      });
      card.addEventListener("mouseleave", function () { pv.classList.remove("is-on"); });
    });
    document.addEventListener("mousemove", function (e) {
      pv.style.transform = "translate(" + (e.clientX + 26) + "px," + (e.clientY - 84) + "px)";
    }, { passive: true });
  }

  /* ヒーロー スクロール連動（フェード＋SCROLL誘導のパララックス・rAF間引き） */
  var hero = document.querySelector(".hero");
  var cue = document.querySelector(".scroll-cue");
  if (hero) {
    var tick = false;
    var onS = function () {
      if (tick) return; tick = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y < window.innerHeight) {
          hero.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.9)));
          if (cue) cue.style.transform = "translateX(-50%) translateY(" + (y * 0.3) + "px)";
        }
        tick = false;
      });
    };
    window.addEventListener("scroll", onS, { passive: true });
  }
})();
