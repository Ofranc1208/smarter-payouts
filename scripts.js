/****************************************************
 * SMARTER PAYOUTS – MAIN JAVASCRIPT FILE
 * Handles: background video, counters, FAB, cookies, nav, YouTube embeds
 ****************************************************/

// ==================================================
// ✅ 1. BACKGROUND VIDEO AUTO-PLAY (Landing Page)
// ==================================================
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("bg-video");
    if (video) {
      video.play().then(() => {
        console.log("🎥 Background video playing.");
      }).catch((err) => {
        console.warn("⚠️ Autoplay blocked or failed.", err);
      });
    }
  });
  
// ==============================================
// ✅ Smooth Synchronized Stat Counters
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const duration = 2000; // ⏱ Duration in milliseconds (2s)
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      let startTimestamp = null;
  
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * target);
        counter.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          counter.textContent = `${prefix}${target.toLocaleString()}${suffix}`; // final fix
        }
      };
  
      requestAnimationFrame(step);
    });
  });
  
  
  
  // ==================================================
  // ✅ 3. NAVIGATION HIGHLIGHT (Active Page)
  // ==================================================
  function highlightNav() {
    let path = window.location.pathname;
    if (path === "/" || path === "") path = "/index.html";
  
    const links = document.querySelectorAll(".navbar-nav .nav-link");
    links.forEach(link => {
      const href = new URL(link.href).pathname;
      if (href === path) link.classList.add("active");
    });
  }
  
// ✅ FAB SPEED DIAL LOGIC (Improved Toggle)
document.addEventListener("DOMContentLoaded", function () {
    const fabMain = document.querySelector(".fab-main");
    const fabWrap = document.querySelector(".fab-speed-dial");
  
    if (fabMain && fabWrap) {
      // Toggle FAB open/close when clicking the main button
      fabMain.addEventListener("click", function (e) {
        e.stopPropagation(); // ✅ Prevent outside click listener from firing
        fabWrap.classList.toggle("open");
  
        // Update aria-expanded for accessibility
        const isOpen = fabWrap.classList.contains("open");
        fabMain.setAttribute("aria-expanded", isOpen.toString());
      });
  
      // Close FAB if user clicks outside
      document.addEventListener("click", function (e) {
        if (!fabWrap.contains(e.target)) {
          fabWrap.classList.remove("open");
          fabMain.setAttribute("aria-expanded", "false");
        }
      });
    }
  
    console.log("✅ FAB initialized and working correctly");
  });
  
  // ✅ Placeholder Chat Function
  function openChatFunction() {
    alert("💬 Live chat launching soon!");
  }
  
   
  // ==================================================
  // ✅ ON LOAD INIT
  // ==================================================
  document.addEventListener("DOMContentLoaded", () => {
    highlightNav();
    initCounterObserver();
    initFab();
    initCookies();
  });
  