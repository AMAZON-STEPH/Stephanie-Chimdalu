 const menuBtn = document.getElementById('menu-btn');
 const sidebar = document.getElementById('sidebar');
 const  hamburger = document.getElementById("hamburger")
 const ham1 = document.getElementById("ham1")
 const ham2 = document.getElementById("ham2")
 const ham3 = document.getElementById("ham3")
 const Qualifications = document.getElementById("Qualifications")
 const theQualifications = document.getElementById("theQualifications")
 const closeQualification = document.getElementById("closeModal");
 const hide = document.querySelector(".hide");
 const home = document.querySelector(".home");
 const loader = document.getElementById("loader")




   function lockScroll() {
         document.body.style.overflow = "hidden";
     }

       function unlockScroll() {
        document.body.style.overflow = "";
      }

    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');

       if (sidebar.classList.contains("-translate-x-full")) {
          unlockScroll();
        } else {
          lockScroll();
        }
     });

    
      hamburger.addEventListener("click", () => {
        ham1.classList.toggle("rotate-[-45deg]");
        ham1.classList.toggle("translate-y-[7px]");

        ham2.classList.toggle("opacity-0");

        ham3.classList.toggle("rotate-[45deg]");
        ham3.classList.toggle("-translate-y-[7px]");
      })

      function resetHamburger() {
        ham1.classList.remove("rotate-[-45deg]", "translate-y-[7px]");
        ham2.classList.remove("opacity-0");
        ham3.classList.remove("rotate-[45deg]", "-translate-y-[7px]");
      }


    Qualifications.addEventListener("click", () => {

      theQualifications.classList.remove("hidden")
      lockScroll();
      document.body.classList.add("overflow-hidden");

      // Qualifications.classList.add("text-white")
      sidebar.classList.add("-translate-x-full");

      resetHamburger();
    });

    closeQualification.addEventListener("click", () => {
      theQualifications.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
      unlockScroll();
    });

    theQualifications.addEventListener("click", (e) => {
      if (e.target === theQualifications) {
        theQualifications.classList.add("hidden");
        unlockScroll();
        // document.body.classList.remove("overflow-hidden");
      }
    });

    hide.addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
      resetHamburger();
      unlockScroll();
    })

    home.addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
     resetHamburger();
     unlockScroll();
    })

    function Loading() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
          setTimeout(resolve, 1200); 
        }, 5000);
      });
    }

  Loading().then(() => {
    loader.style.display = "none";
    portfoilo.classList.remove("hidden");
  });
