/* ==========================================================================
   Influish Tech Ecosystem Onboarding JS
   Core interactive logic, custom observers, animations, and micro-interactions
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  // 0. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // 1. Startup Loader Curtain Dismissal
  const loaderCurtain = document.getElementById("loading-curtain");
  if (loaderCurtain) {
    // Artificial small delay for premium feels
    setTimeout(() => {
      loaderCurtain.style.opacity = "0";
      loaderCurtain.style.visibility = "hidden";
    }, 600);
  }

  // 2. Mouse-Follow Subtle Background Glow Effect
  const mouseGlow = document.getElementById("mouse-glow");
  if (mouseGlow) {
    document.addEventListener("mousemove", (e) => {
      // Reposition glow blob centered on client cursor
      mouseGlow.style.left = `${e.clientX}px`;
      mouseGlow.style.top = `${e.clientY}px`;
      
      // Ensure glow is visible only during active cursor interaction
      if (mouseGlow.style.opacity === "0" || !mouseGlow.style.opacity) {
        mouseGlow.style.opacity = "1";
      }
    });

    document.addEventListener("mouseleave", () => {
      mouseGlow.style.opacity = "0";
    });
  }

  // 3. Header Scroll Progress Indicator
  const scrollProgress = document.getElementById("scroll-progress");
  if (scrollProgress) {
    window.addEventListener("scroll", () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
      scrollProgress.style.width = `${scrollPercentage}%`;
    });
  }

  // 4. Scroll Reveal Intersection Observer (Fade-up)
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }

  // 5. Frontend & Backend Split Screen Connection Nodes
  const connectionLayer = document.querySelector(".split-view-container");
  if (connectionLayer) {
    setInterval(() => {
      createConnectionNode();
    }, 2800);
  }

  function createConnectionNode() {
    const feSide = document.querySelector(".split-side:first-child");
    const beSide = document.querySelector(".split-side:last-child");
    
    if (!feSide || !beSide || !connectionLayer) return;

    // Create moving node
    const node = document.createElement("div");
    node.className = "connection-node";
    connectionLayer.appendChild(node);

    // Get side locations
    const feRect = feSide.getBoundingClientRect();
    const beRect = beSide.getBoundingClientRect();
    const containerRect = connectionLayer.getBoundingClientRect();

    // Position initial node at center-right of Frontend
    const startX = feRect.right - containerRect.left;
    const startY = (feRect.top + feRect.bottom) / 2 - containerRect.top;

    // Target node at center-left of Backend
    const endX = beRect.left - containerRect.left;
    const endY = (beRect.top + beRect.bottom) / 2 - containerRect.top;

    node.style.left = `${startX}px`;
    node.style.top = `${startY}px`;

    // Perform smooth moving animation using JS keyframes transition
    const animationDuration = 2200; // ms
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      // Interpolate positions (X & Y)
      const currentX = startX + (endX - startX) * progress;
      const currentY = startY + (endY - startY) * progress;

      node.style.left = `${currentX}px`;
      node.style.top = `${currentY}px`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        node.remove(); // Clean up finished node
      }
    }

    requestAnimationFrame(animate);
  }
});
