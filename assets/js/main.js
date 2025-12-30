/**
* Template Name: DevFolio
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 100,
      delay: 0
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Professional Section Transitions
   * Smooth transitions for each section as they come into view
   */
  function initSectionTransitions() {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Immediately show hero section on load
    const hero = document.getElementById('hero');
    if (hero) {
      setTimeout(() => {
        hero.classList.add('visible');
      }, 100);
    }

    // Immediately show footer (don't wait for intersection)
    const footer = document.getElementById('footer');
    if (footer) {
      footer.classList.add('visible');
    }
  }

  // Initialize section transitions when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSectionTransitions);
  } else {
    initSectionTransitions();
  }

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Update Footer Year
   */
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = currentYear;
  }

  /**
   * Resume Section Modal Handlers
   * Handle clicks on education-card and experience-card to open modals
   * This ensures modals work even when data-bs-toggle is on a div instead of button/anchor
   */
  /**
   * Resume Section Modal Handlers
   * Handle clicks on education-card and experience-card to open modals
   */
  function initResumeModals() {
    // Use both data-bs-target and data-modal-target for compatibility
    const cards = document.querySelectorAll('.resume .education-card[data-bs-target], .resume .education-card[data-modal-target]');
    
    cards.forEach(card => {
      // Check if event listener already exists
      if (card.hasAttribute('data-modal-initialized')) {
        return;
      }
      
      card.setAttribute('data-modal-initialized', 'true');
      card.style.cursor = 'pointer';
      
      card.addEventListener('click', function(e) {
        // Prevent default if clicking on interactive elements
        if (e.target.tagName === 'A' || e.target.closest('a')) {
          return;
        }
        
        // Get target from either data-bs-target or data-modal-target
        const targetModal = this.getAttribute('data-bs-target') || this.getAttribute('data-modal-target');
        
        if (targetModal) {
          const modalElement = document.querySelector(targetModal);
          if (modalElement) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Opening modal:', targetModal, modalElement);
            
            // Wait for Bootstrap to be available
            if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
              try {
                const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
                
                // DEBUG: Log modal element and its computed styles
                console.log('=== MODAL DEBUG INFO ===');
                console.log('Modal element:', modalElement);
                console.log('Modal classes:', modalElement.className);
                console.log('Modal parent:', modalElement.parentElement);
                
                // CRITICAL: Move modal to body if it's not already there
                // This ensures it's not affected by parent container transforms/positioning
                if (modalElement.parentElement !== document.body) {
                  console.log('⚠️ Modal is not in body! Moving it...');
                  console.log('Current parent:', modalElement.parentElement);
                  document.body.appendChild(modalElement);
                  console.log('Modal moved to body');
                }
                
                // Force modal to be positioned relative to viewport, not parent
                modalElement.style.position = 'fixed';
                modalElement.style.top = '0';
                modalElement.style.left = '0';
                modalElement.style.width = '100vw';
                modalElement.style.height = '100vh';
                modalElement.style.zIndex = '2147483647'; // Maximum z-index value
                modalElement.style.margin = '0';
                modalElement.style.padding = '0';
                modalElement.style.transform = 'none';
                modalElement.style.inset = '0';
                
                // Check for parent containers that might affect positioning
                let parent = modalElement.parentElement;
                let parentLevel = 0;
                while (parent && parentLevel < 5) {
                  const parentStyles = window.getComputedStyle(parent);
                  console.log(`Parent ${parentLevel}:`, parent.tagName, parent.className);
                  console.log(`  - position: ${parentStyles.position}`);
                  console.log(`  - transform: ${parentStyles.transform}`);
                  console.log(`  - z-index: ${parentStyles.zIndex}`);
                  if (parentStyles.position !== 'static' || parentStyles.transform !== 'none') {
                    console.warn(`  ⚠️ Parent has position/transform that might affect modal!`);
                  }
                  parent = parent.parentElement;
                  parentLevel++;
                }
                
                const modalDialog = modalElement.querySelector('.modal-dialog');
                if (modalDialog) {
                  modalDialog.style.zIndex = '2147483647';
                  modalDialog.style.position = 'relative';
                  modalDialog.style.margin = 'auto';
                  // Check if it's a large modal
                  if (modalDialog.classList.contains('modal-lg')) {
                    modalDialog.style.maxWidth = '800px';
                  } else {
                    modalDialog.style.maxWidth = '500px';
                  }
                  console.log('Modal dialog:', modalDialog);
                  console.log('Modal dialog max-width:', modalDialog.style.maxWidth);
                }
                
                // Check backdrop
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                  backdrop.style.zIndex = '2147483646';
                  console.log('Backdrop z-index set to:', backdrop.style.zIndex);
                }
                
                modal.show();
                
                // After modal is shown, verify positioning and fix centering
                setTimeout(() => {
                  const computedStyles = window.getComputedStyle(modalElement);
                  console.log('=== AFTER MODAL SHOW ===');
                  console.log('Modal display:', computedStyles.display);
                  console.log('Modal position:', computedStyles.position);
                  console.log('Modal z-index:', computedStyles.zIndex);
                  console.log('Modal top:', computedStyles.top);
                  console.log('Modal left:', computedStyles.left);
                  console.log('Modal width:', computedStyles.width);
                  console.log('Modal height:', computedStyles.height);
                  
                  // Force proper centering - ensure modal is in body
                  if (modalElement.parentElement !== document.body) {
                    document.body.appendChild(modalElement);
                    console.log('Modal moved to body during shown event');
                  }
                  
                  // Force proper centering
                  modalElement.style.display = 'flex';
                  modalElement.style.alignItems = 'center';
                  modalElement.style.justifyContent = 'center';
                  modalElement.style.position = 'fixed';
                  modalElement.style.top = '0';
                  modalElement.style.left = '0';
                  modalElement.style.width = '100vw';
                  modalElement.style.height = '100vh';
                  modalElement.style.margin = '0';
                  modalElement.style.padding = '1rem';
                  modalElement.style.transform = 'none';
                  modalElement.style.inset = '0';
                  
                  if (modalDialog) {
                    const dialogStyles = window.getComputedStyle(modalDialog);
                    console.log('Dialog margin:', dialogStyles.margin);
                    console.log('Dialog position:', dialogStyles.position);
                    
                    // Ensure dialog is properly sized and centered
                    modalDialog.style.margin = '0';
                    modalDialog.style.width = 'auto';
                    modalDialog.style.maxWidth = modalDialog.classList.contains('modal-lg') ? '800px' : '500px';
                    
                    const rect = modalDialog.getBoundingClientRect();
                    const windowCenterX = window.innerWidth / 2;
                    const windowCenterY = window.innerHeight / 2;
                    const dialogCenterX = rect.left + rect.width / 2;
                    const dialogCenterY = rect.top + rect.height / 2;
                    
                    console.log('Dialog bounding rect:', rect);
                    console.log('Dialog center X:', dialogCenterX, 'Window center:', windowCenterX, 'Diff:', Math.abs(dialogCenterX - windowCenterX));
                    console.log('Dialog center Y:', dialogCenterY, 'Window center:', windowCenterY, 'Diff:', Math.abs(dialogCenterY - windowCenterY));
                    
                    // If not centered, log warning
                    if (Math.abs(dialogCenterX - windowCenterX) > 10 || Math.abs(dialogCenterY - windowCenterY) > 10) {
                      console.warn('⚠️ Modal is not properly centered!');
                      console.warn('Attempting to fix...');
                    }
                  }
                  
                  // Hide floating buttons
                  const whatsappBtn = document.querySelector('.whatsapp-button');
                  const chatbot = document.querySelector('.chatbot-container, .chatbot-toggle');
                  if (whatsappBtn) {
                    whatsappBtn.style.zIndex = '1';
                    whatsappBtn.style.opacity = '0.3';
                    whatsappBtn.style.pointerEvents = 'none';
                    console.log('WhatsApp button hidden');
                  }
                  if (chatbot) {
                    chatbot.style.zIndex = '1';
                    chatbot.style.opacity = '0.3';
                    chatbot.style.pointerEvents = 'none';
                    console.log('Chatbot hidden');
                  }
                }, 100);
                
                console.log('Modal opened via Bootstrap');
                
                // Ensure close buttons work
                const closeButtons = modalElement.querySelectorAll('[data-bs-dismiss="modal"], .btn-close');
                closeButtons.forEach(btn => {
                  btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    modal.hide();
                  });
                });
              } catch (error) {
                console.error('Error opening modal:', error);
                // Fallback: manually trigger modal
                showModalFallback(modalElement);
              }
            } else {
              // Fallback if Bootstrap is not loaded
              console.warn('Bootstrap Modal not available, using fallback');
              showModalFallback(modalElement);
            }
          } else {
            console.error('Modal element not found:', targetModal);
          }
        }
      });
    });
  }

  /**
   * Fallback function to show modal manually
   */
  function showModalFallback(modalElement) {
    console.log('=== FALLBACK MODAL SHOW ===');
    
    // CRITICAL: Move modal to body if it's not already there
    if (modalElement.parentElement !== document.body) {
      console.log('⚠️ Modal is not in body! Moving it...');
      console.log('Current parent:', modalElement.parentElement);
      document.body.appendChild(modalElement);
      console.log('Modal moved to body');
    }
    
    // Remove aria-hidden first to avoid accessibility issues
    modalElement.removeAttribute('aria-hidden');
    modalElement.classList.add('show');
    
    // Force modal to viewport
    modalElement.style.position = 'fixed';
    modalElement.style.top = '0';
    modalElement.style.left = '0';
    modalElement.style.right = '0';
    modalElement.style.bottom = '0';
    modalElement.style.width = '100vw';
    modalElement.style.height = '100vh';
    modalElement.style.zIndex = '2147483647';
    modalElement.style.margin = '0';
    modalElement.style.padding = '1rem';
    modalElement.style.display = 'flex';
    modalElement.style.alignItems = 'center';
    modalElement.style.justifyContent = 'center';
    modalElement.style.transform = 'none';
    modalElement.style.inset = '0';
    modalElement.setAttribute('aria-modal', 'true');
    modalElement.setAttribute('aria-hidden', 'false');
    modalElement.style.pointerEvents = 'auto';
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '0px';
    
    // Ensure modal dialog is centered
    const modalDialog = modalElement.querySelector('.modal-dialog');
    if (modalDialog) {
      modalDialog.style.zIndex = '2147483647';
      modalDialog.style.position = 'relative';
      modalDialog.style.margin = '0 auto';
      modalDialog.style.width = '90%';
      // Check if it's a large modal
      if (modalDialog.classList.contains('modal-lg')) {
        modalDialog.style.maxWidth = '800px';
      } else {
        modalDialog.style.maxWidth = '500px';
      }
      console.log('Dialog configured:', modalDialog.style.maxWidth);
    }
    
    // Create backdrop
    let backdrop = document.querySelector('.modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade show';
      backdrop.style.position = 'fixed';
      backdrop.style.top = '0';
      backdrop.style.left = '0';
      backdrop.style.zIndex = '2147483646';
      backdrop.style.width = '100vw';
      backdrop.style.height = '100vh';
      backdrop.style.margin = '0';
      backdrop.style.padding = '0';
      backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      backdrop.style.pointerEvents = 'auto';
      document.body.appendChild(backdrop);
      console.log('Backdrop created with z-index:', backdrop.style.zIndex);
      
      // Close modal when clicking backdrop
      backdrop.addEventListener('click', function(e) {
        if (e.target === backdrop) {
          hideModalFallback(modalElement);
        }
      });
    }
    
    // Hide floating buttons
    const whatsappBtn = document.querySelector('.whatsapp-button');
    const chatbot = document.querySelector('.chatbot-container, .chatbot-toggle');
    if (whatsappBtn) {
      whatsappBtn.style.zIndex = '1';
      whatsappBtn.style.opacity = '0.3';
      whatsappBtn.style.pointerEvents = 'none';
      console.log('WhatsApp button hidden');
    }
    if (chatbot) {
      chatbot.style.zIndex = '1';
      chatbot.style.opacity = '0.3';
      chatbot.style.pointerEvents = 'none';
      console.log('Chatbot hidden');
    }
    
    // Verify centering after a short delay
    setTimeout(() => {
      if (modalDialog) {
        const rect = modalDialog.getBoundingClientRect();
        const windowCenterX = window.innerWidth / 2;
        const windowCenterY = window.innerHeight / 2;
        const dialogCenterX = rect.left + rect.width / 2;
        const dialogCenterY = rect.top + rect.height / 2;
        
        console.log('Fallback modal center check:');
        console.log('Dialog center:', dialogCenterX, dialogCenterY);
        console.log('Window center:', windowCenterX, windowCenterY);
        console.log('X offset:', Math.abs(dialogCenterX - windowCenterX));
        console.log('Y offset:', Math.abs(dialogCenterY - windowCenterY));
      }
    }, 50);
    
    // Close modal when clicking close button
    const closeButtons = modalElement.querySelectorAll('[data-bs-dismiss="modal"], .btn-close');
    closeButtons.forEach(btn => {
      // Remove existing listeners to avoid duplicates
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      
      newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        hideModalFallback(modalElement);
      });
    });
    
    // Close modal on Escape key
    const escapeHandler = function(e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        hideModalFallback(modalElement);
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);
  }

  /**
   * Fallback function to hide modal manually
   */
  function hideModalFallback(modalElement) {
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
    modalElement.style.zIndex = '';
    // Set aria-hidden to true only after removing focus
    setTimeout(() => {
      modalElement.setAttribute('aria-hidden', 'true');
    }, 100);
    modalElement.removeAttribute('aria-modal');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    
    // Remove backdrop
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.classList.remove('show');
      setTimeout(() => {
        if (backdrop.parentNode) {
          backdrop.remove();
        }
      }, 150);
    }
    
    // Restore floating buttons
    const whatsappBtn = document.querySelector('.whatsapp-button');
    const chatbot = document.querySelector('.chatbot-container, .chatbot-toggle');
    if (whatsappBtn) {
      whatsappBtn.style.zIndex = '';
      whatsappBtn.style.opacity = '';
      whatsappBtn.style.pointerEvents = '';
    }
    if (chatbot) {
      chatbot.style.zIndex = '';
      chatbot.style.opacity = '';
      chatbot.style.pointerEvents = '';
    }
  }

  // Initialize modals when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initResumeModals, 100);
    });
  } else {
    setTimeout(initResumeModals, 100);
  }

  // Re-initialize after page load to ensure Bootstrap is ready
  window.addEventListener('load', function() {
    setTimeout(initResumeModals, 200);
  });

  // Fix aria-hidden and display for all modals when shown
  document.addEventListener('show.bs.modal', function(e) {
    const modal = e.target;
    if (modal.classList.contains('modal')) {
      // CRITICAL: Move modal to body if it's not already there
      if (modal.parentElement !== document.body) {
        console.log('Moving modal to body in show.bs.modal event');
        document.body.appendChild(modal);
      }
      
      // Remove aria-hidden before showing to avoid accessibility issues
      modal.removeAttribute('aria-hidden');
      
      // Pre-set styles
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.right = '0';
      modal.style.bottom = '0';
      modal.style.zIndex = '2147483647';
      modal.style.transform = 'none';
    }
  });

  document.addEventListener('shown.bs.modal', function(e) {
    const modal = e.target;
    if (modal.classList.contains('modal')) {
      // CRITICAL: Ensure modal is in body
      if (modal.parentElement !== document.body) {
        console.log('Moving modal to body in shown.bs.modal event');
        document.body.appendChild(modal);
      }
      
      // Ensure aria-hidden is false when modal is shown and has focus
      modal.setAttribute('aria-hidden', 'false');
      // Ensure flex display for centering
      if (modal.classList.contains('show')) {
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.right = '0';
        modal.style.bottom = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.zIndex = '2147483647';
        modal.style.margin = '0';
        modal.style.padding = '1rem';
        modal.style.transform = 'none';
        modal.style.inset = '0';
        
        // Verify centering
        setTimeout(() => {
          const dialog = modal.querySelector('.modal-dialog');
          if (dialog) {
            const rect = dialog.getBoundingClientRect();
            const windowCenterX = window.innerWidth / 2;
            const windowCenterY = window.innerHeight / 2;
            const dialogCenterX = rect.left + rect.width / 2;
            const dialogCenterY = rect.top + rect.height / 2;
            
            console.log('Modal shown - styles applied');
            console.log('Modal computed position:', window.getComputedStyle(modal).position);
            console.log('Modal computed z-index:', window.getComputedStyle(modal).zIndex);
            console.log('Dialog center:', dialogCenterX, dialogCenterY);
            console.log('Window center:', windowCenterX, windowCenterY);
            console.log('Offset X:', Math.abs(dialogCenterX - windowCenterX), 'px');
            console.log('Offset Y:', Math.abs(dialogCenterY - windowCenterY), 'px');
            
            if (Math.abs(dialogCenterX - windowCenterX) > 20 || Math.abs(dialogCenterY - windowCenterY) > 20) {
              console.error('❌ Modal is NOT centered! Attempting fix...');
              // Force center using transform
              const offsetX = windowCenterX - dialogCenterX;
              const offsetY = windowCenterY - dialogCenterY;
              dialog.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
              console.log('Applied transform offset:', offsetX, offsetY);
            } else {
              console.log('✅ Modal is properly centered!');
            }
          }
        }, 50);
      }
    }
  });

  // Fix aria-hidden when modal is hidden
  document.addEventListener('hide.bs.modal', function(e) {
    const modal = e.target;
    if (modal.classList.contains('modal')) {
      // Remove focus from modal before hiding
      const activeElement = document.activeElement;
      if (modal.contains(activeElement)) {
        activeElement.blur();
      }
    }
  });

  document.addEventListener('hidden.bs.modal', function(e) {
    const modal = e.target;
    if (modal.classList.contains('modal')) {
      // Set aria-hidden to true only after modal is fully hidden and focus is removed
      setTimeout(() => {
        if (!modal.classList.contains('show')) {
          modal.setAttribute('aria-hidden', 'true');
        }
      }, 150);
      
      // Restore floating buttons
      const whatsappBtn = document.querySelector('.whatsapp-button');
      const chatbot = document.querySelector('.chatbot-container, .chatbot-toggle');
      if (whatsappBtn) {
        whatsappBtn.style.zIndex = '';
        whatsappBtn.style.opacity = '';
        whatsappBtn.style.pointerEvents = '';
      }
      if (chatbot) {
        chatbot.style.zIndex = '';
        chatbot.style.opacity = '';
        chatbot.style.pointerEvents = '';
      }
    }
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Initialize LinkedIn Links for Testimonials
   * Reads data-linkedin-url attribute and sets the href
   */
  function initLinkedInLinks() {
    const linkedinLinks = document.querySelectorAll('.testimonials .linkedin-link[data-linkedin-url]');
    linkedinLinks.forEach(link => {
      const url = link.getAttribute('data-linkedin-url');
      if (url && url !== '#') {
        link.href = url;
      }
    });
  }

  // Initialize LinkedIn links when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLinkedInLinks);
  } else {
    initLinkedInLinks();
  }

  // Also initialize after page load to ensure all content is loaded
  window.addEventListener('load', initLinkedInLinks);

  // Experience, Internships & Qualifications Tabs Functionality
  function initExperienceTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length === 0 || tabPanes.length === 0) {
      return; // Section doesn't exist on this page
    }

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Show corresponding tab pane
        const targetPane = document.getElementById(`${targetTab}-tab`);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }

  // Initialize tabs when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExperienceTabs);
  } else {
    initExperienceTabs();
  }

  // Screenshot Modal Functionality
  function initScreenshotModal() {
    const screenshotLinks = document.querySelectorAll('.screenshot-link');
    const modal = document.getElementById('screenshotModal');
    const modalImage = document.getElementById('screenshotModalImage');
    const closeBtn = document.querySelector('.screenshot-modal-close');

    if (!modal || !modalImage || screenshotLinks.length === 0) {
      return; // Modal doesn't exist or no screenshot links
    }

    // Open modal when screenshot link is clicked
    screenshotLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const screenshotPath = link.getAttribute('data-screenshot');
        if (screenshotPath) {
          modalImage.src = screenshotPath;
          modal.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
      });
    });

    // Close modal when close button is clicked
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
      });
    }

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
  }

  // Initialize screenshot modal when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScreenshotModal);
  } else {
    initScreenshotModal();
  }

})();