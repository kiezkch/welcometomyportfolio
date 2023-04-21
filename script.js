var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-nav');

mobileMenu.onclick = function() {
  select('body').classList.toggle('mobile-nav-active')  
}

/**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }
  
var filter = document.getElementsByClassName("filter");
var all = document.getElementsByClassName("all");
var viewer_img = document.getElementById("viewer_img");
var view_img = document.getElementById("view_image");


for (var i = 0; i < filter.length; i++) {
    filter[i].addEventListener("click", function(e) {
        var target = e.currentTarget.getAttribute("data-target");
        var selected = document.getElementsByClassName(target);

        //TO hide all images
        for (var x = 0; x < all.length; x++) {
            all[x].style.display = "none";
        }

        //To show selected images
        for (var y = 0; y < selected.length; y++) {
            selected[y].style.display = "block";
        }

        // to remove active class from all Element
        for (var z = 0; z < filter.length; z++) {
            filter[z].classList.remove("active");
        }

        //To add active class to currenct element
        e.currentTarget.classList.add("active");
    });
}

//For Modal Images
for (var i = 0; i < all.length; i++) {
    all[i].addEventListener("click", function(e) {
        var source = e.currentTarget.getAttribute("data-target");
        viewer_img.setAttribute("src", source);
        view_img.style.display = "block";
    });
}


//Function to hide the modal image

function exit() {
    view_img.style.display = "none";
}