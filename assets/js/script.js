'use strict';

document.addEventListener('DOMContentLoaded', function() {
  // element toggle function
  const elementToggleFunc = function (elem) {
    if (elem) elem.classList.toggle("active");
  }

  // sidebar variables
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // sidebar toggle functionality for mobile
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });
  }

  // testimonials variables
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  // modal variable
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  // modal toggle function
  const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  }

  // add click event to all modal items
  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      if (modalImg && modalTitle && modalText) {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        testimonialsModalFunc();
      }
    });
  });

  // add click event to modal close button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  }
  if (overlay) {
    overlay.addEventListener("click", testimonialsModalFunc);
  }

  // custom select variables
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  if (select) {
    select.addEventListener("click", function () {
      elementToggleFunc(this);
    });
  }

  // filter variables
  const filterItems = document.querySelectorAll("[data-filter-item]");

  const filterFunc = function (selectedValue) {
    filterItems.forEach(item => {
      if (selectedValue === "all" || selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // add event in all select items
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      if (select) elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });

  // add event in all filter button items for large screen
  let lastClickedBtn = filterBtn[0];

  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  // contact form variables
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // add event to all form input field
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (form && formBtn) {
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      }
    });
  });

  // page navigation variables
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  console.log("Script loaded");
  console.log("Navigation links found:", navigationLinks.length);
  console.log("Pages found:", pages.length);

  // add click events to navigation links
  navigationLinks.forEach(link => {
    console.log("Nav link text:", link.textContent);
    
    link.addEventListener('click', function() {
      console.log("Click detected on:", this.textContent);
      
      // Remove active class from all pages and links
      pages.forEach(page => {
        page.classList.remove("active");
        console.log("Removed active from:", page.dataset.page);
      });
      
      navigationLinks.forEach(navLink => {
        navLink.classList.remove("active");
      });
      
      // Add active class to clicked link
      this.classList.add("active");
      
      // Find and activate corresponding page
      const targetPage = this.textContent.toLowerCase().trim();
      console.log("Looking for page:", targetPage);
      
      const page = document.querySelector(`[data-page="${targetPage}"]`);
      if (page) {
        console.log("Found page, activating:", targetPage);
        page.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        console.log("Page not found for:", targetPage);
      }
    });
  });

  // Log each page's data-page attribute
  pages.forEach(page => {
    console.log("Page data-page:", page.dataset.page);
  });
});