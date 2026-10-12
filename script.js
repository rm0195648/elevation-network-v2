window.tailwind = window.tailwind || {};
window.tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "primary": "#b3c5ff", "on-tertiary-fixed-variant": "#653e00", "accent-cyan-soft": "#38BDF8", "text-primary": "#F8FAFC", "error-container": "#93000a", "surface-glass": "rgba(10, 13, 20, 0.72)", "error": "#ffb4ab", "on-primary-fixed-variant": "#003fa4", "surface-variant": "#32353d", "surface-container-high": "#272a32", "tertiary-fixed-dim": "#ffb95f", "primary-fixed-dim": "#b3c5ff", "secondary": "#d3fbff", "surface": "#10131a", "secondary-fixed-dim": "#00dbe9", "primary-fixed": "#dae1ff", "surface-container": "#1d1f27", "surface-container-lowest": "#0b0e15", "surface-deep": "#05070B", "tertiary": "#ffb95f", "on-primary-fixed": "#001849", "primary-container": "#0066ff", "accent-electric-bright": "#2563EB", "inverse-on-surface": "#2d3038", "on-tertiary-fixed": "#2a1700", "inverse-surface": "#e1e2ec", "surface-container-highest": "#32353d", "on-secondary-fixed-variant": "#004f54", "on-error": "#690005", "surface-container-low": "#191b23", "on-surface": "#e1e2ec", "on-tertiary": "#472a00", "background": "#10131a", "on-surface-variant": "#c2c6d8", "tertiary-container": "#a06500", "secondary-container": "#00eefc", "inverse-primary": "#0054d6", "surface-dim": "#10131a", "on-background": "#e1e2ec", "on-primary-container": "#f8f7ff", "on-primary": "#002b75", "on-secondary": "#00363a", "surface-tint": "#b3c5ff", "on-tertiary-container": "#fff7f1", "text-muted": "#94A3B8", "border-glow": "rgba(0, 240, 255, 0.25)", "on-error-container": "#ffdad6", "outline-variant": "#424656", "surface-bright": "#363941", "on-secondary-fixed": "#002022", "tertiary-fixed": "#ffddb8", "outline": "#8c90a1", "on-secondary-container": "#00686f", "secondary-fixed": "#7df4ff", "border-glass": "rgba(255, 255, 255, 0.08)", "accent-gold-bright": "#EAB308" }, "borderRadius": { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" }, "spacing": { "space-md": "1.25rem", "space-xl": "3.5rem", "space-lg": "2rem", "space-sm": "0.75rem", "margin-tablet": "2rem", "gutter": "1.5rem", "gutter-mobile": "1rem", "margin": "4rem", "space-xs": "0.375rem", "margin-mobile": "1.25rem" }, "fontFamily": { "label-sm": [ "Space Grotesk" ], "headline-lg": [ "Space Grotesk" ], "headline-md-mobile": [ "Space Grotesk" ], "headline-sm": [ "Space Grotesk" ], "headline-lg-mobile": [ "Space Grotesk" ], "display-hero-mobile": [ "Space Grotesk" ], "display-hero": [ "Space Grotesk" ], "body-sm": [ "Inter" ], "body-lg": [ "Inter" ], "label-md": [ "Space Grotesk" ], "body-md": [ "Inter" ], "headline-md": [ "Space Grotesk" ] }, "fontSize": { "label-sm": [ "11px", { "lineHeight": "16px", "letterSpacing": "0.08em", "fontWeight": "600" } ], "headline-lg": [ "48px", { "lineHeight": "56px", "letterSpacing": "-0.025em", "fontWeight": "600" } ], "headline-md-mobile": [ "24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "headline-sm": [ "22px", { "lineHeight": "30px", "letterSpacing": "-0.01em", "fontWeight": "500" } ], "headline-lg-mobile": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "display-hero-mobile": [ "38px", { "lineHeight": "46px", "letterSpacing": "-0.02em", "fontWeight": "700" } ], "display-hero": [ "64px", { "lineHeight": "72px", "letterSpacing": "-0.03em", "fontWeight": "700" } ], "body-sm": [ "13px", { "lineHeight": "20px", "letterSpacing": "0.005em", "fontWeight": "400" } ], "body-lg": [ "18px", { "lineHeight": "28px", "letterSpacing": "-0.01em", "fontWeight": "400" } ], "label-md": [ "14px", { "lineHeight": "20px", "letterSpacing": "0.04em", "fontWeight": "600" } ], "body-md": [ "15px", { "lineHeight": "24px", "letterSpacing": "0em", "fontWeight": "400" } ], "headline-md": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ] } } } };

document.addEventListener('DOMContentLoaded', () => {
      // Filter functionality
      const filterButtons = document.querySelectorAll('#filter-container button');
      const projectCards = document.querySelectorAll('.project-card');

      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => {
            b.classList.remove('bg-primary-container', 'text-on-primary-container');
            b.classList.add('bg-surface-container', 'text-on-surface-variant');
          });
          btn.classList.remove('bg-surface-container', 'text-on-surface-variant');
          btn.classList.add('bg-primary-container', 'text-on-primary-container');

          const filter = btn.getAttribute('data-filter');
          projectCards.forEach(card => {
            if (filter === 'all') {
              card.style.display = 'flex';
            } else {
              const categories = card.getAttribute('data-category') || '';
              if (categories.includes(filter)) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            }
          });
        });
      });

      // Form submit simulation
      const form = document.getElementById('inquiryForm');
      const submitBtn = document.getElementById('submitBtn');
      const formSuccess = document.getElementById('formSuccess');

      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span>Transmitting Scoping File...</span>';
          setTimeout(() => {
            submitBtn.classList.add('hidden');
            formSuccess.classList.remove('hidden');
          }, 800);
        });
      }
    });
