(function () {
  /* ================================
     Mobile menu toggle
  ================================= */
  const btn = document.querySelector("[data-mobile-btn]");
  const panel = document.querySelector("[data-mobile-panel]");

  if (btn && panel) {
    btn.addEventListener("click", () => {
      const isOpen = panel.getAttribute("data-open") === "true";
      panel.setAttribute("data-open", String(!isOpen));
      panel.style.display = isOpen ? "none" : "block";
    });

    // Close mobile menu when clicking a link
    panel.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        panel.setAttribute("data-open", "false");
        panel.style.display = "none";
      });
    });

    // Close menu on resize (prevents stuck menu)
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        panel.setAttribute("data-open", "false");
        panel.style.display = "none";
      }
    });
  }

  /* ================================
     Active navigation highlight
  ================================= */
  const currentPath = window.location.pathname
    .replace("/", "")
    .replace(".html", "") || "index";

  document.querySelectorAll("a[data-nav]").forEach((link) => {
    const page = link.getAttribute("data-nav");
    if (page === currentPath) {
      link.classList.add("active");
    }
  });


  /* ================================
     Scroll reveal
  ================================= */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    }, { threshold: 0.12 });

    revealEls.forEach((el) => io.observe(el));
  } else {
    // Fallback
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

})();
