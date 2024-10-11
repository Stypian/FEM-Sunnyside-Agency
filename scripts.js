onload = function() {
   
    const menuToggle = () => {
        const menu = document.querySelector(".sunnyside__mobile-nav");
        const drop = document.querySelector(".sunnyside__mobile-menu");

        menu.addEventListener("click", function() {
            drop.classList.toggle("sunnyside__show-menu");
        })
    }

    menuToggle();


    const addAnimations = (a, b) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.5) {
              entry.target.classList.add(b);
            }
          });
        }, { threshold: 0.5 });
      
        document.querySelectorAll(a).forEach(element => {
          observer.observe(element);
        });
      };
      
      addAnimations('.sunnyside__text-ani', 'sunnyside__ani-bot');
      addAnimations('.sunnyside__img-ani', 'sunnyside__ani-op');
          









































}