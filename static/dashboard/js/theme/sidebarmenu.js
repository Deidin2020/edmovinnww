var at = document.documentElement.getAttribute("data-layout");
if ((at = "vertical")) {
  function findMatchingElement() {
    var currentUrl = window.location.href;
    var anchors = document.querySelectorAll("#sidebarnav a");
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].href === currentUrl) {
        return anchors[i];
      }
    }

    return null; // Return null if no matching element is found
  }
  var elements = findMatchingElement();

  // Do something with the matching element
  if(elements){
    elements.classList.add("active");
  }

  document
    .querySelectorAll("ul#sidebarnav ul li a.active")
    .forEach(function (link) {
      link.closest("ul").classList.add("in");
      link.closest("ul").parentElement.classList.add("selected");
    });

  document.querySelectorAll("#sidebarnav li").forEach(function (li) {
    const isActive = li.classList.contains("selected");
    if (isActive) {
      const anchor = li.querySelector("a");
      if (anchor) {
        anchor.classList.add("active");
      }
    }
  });
  document.querySelectorAll("#sidebarnav a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      const isActive = this.classList.contains("active");
      const parentUl = this.closest("ul");
      if (!isActive) {
        // hide any open menus and remove all other classes
        parentUl.querySelectorAll("ul").forEach(function (submenu) {
          submenu.classList.remove("in");
        });
        parentUl.querySelectorAll("a").forEach(function (navLink) {
          navLink.classList.remove("active");
        });

        // open our new menu and add the open class
        const submenu = this.nextElementSibling;
        if (submenu) {
          submenu.classList.add("in");
        }

        this.classList.add("active");
      } else {
        this.classList.remove("active");
        parentUl.classList.remove("active");
        const submenu = this.nextElementSibling;
        if (submenu) {
          submenu.classList.remove("in");
        }
      }
    });
  });
}
if ((at = "horizontal")) {

  function findMatchingElement() {
    var currentUrl = window.location.href;
    var anchors = document.querySelectorAll("#sidebarnavh ul#sidebarnav a");
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].href === currentUrl) {
        return anchors[i];
      }
    }

    return null; // Return null if no matching element is found
  }
  var elements = findMatchingElement();

  if(elements){
    elements.classList.add("active");
  }
  document
    .querySelectorAll("#sidebarnavh ul#sidebarnav a.active")
    .forEach(function (link) {
      link.closest("a").parentElement.classList.add("selected");
      link.closest("ul").parentElement.classList.add("selected");
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    // Function to handle hover event
    function handleHover() {
        const icon = this.querySelector('img');
        const src = icon.getAttribute('src');
        
        const newSrc = src.includes('-active.svg') ? src : src.replace('.svg', '-active.svg');
        
        icon.setAttribute('data-src', src); // store original src in data-src attribute
        icon.setAttribute('src', newSrc); // Change src to hover icon
    }

    // Function to handle mouseout event
    function handleMouseOut() {
        const icon = this.querySelector('img');
        const src = icon.getAttribute('data-src'); // get original src from data-src attribute
        icon.setAttribute('src', src); // Change src back to original
    }

    // Function to handle click event (for setting active state)
    function handleClick() {
        // Remove active class from all sidebar items
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to clicked sidebar item
        this.classList.add('active');
    }

    // Add event listeners to each sidebar item
    sidebarItems.forEach(item => {
        item.addEventListener('mouseenter', handleHover);
        item.addEventListener('mouseleave', handleMouseOut);
        item.addEventListener('click', handleClick);
    });

});

window.addEventListener("load", function() {
    const sidebarLinks = document.querySelectorAll('a.sidebar-link.active');
    sidebarLinks.forEach(link => {
        const icon = link.querySelector('img');
        if (icon) {
            const src = icon.getAttribute('src');
            if (src) {
                icon.setAttribute('data-src', src); // store original src in data-src attribute
                icon.setAttribute('src', src.replace('.svg', '-active.svg')); // Change src to hover icon
            }
        }
    });
});

