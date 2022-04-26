let menuOptions = document.querySelectorAll('.header__list li a');
let menuOptionsMobile = document.querySelectorAll('.nav__mobile--list li a');
let sections = [];
let sectionsMobile = [];
const toTop = () => {
  window.scrollTo({
    top: 0
  })
}
// Header 
const handleHeader = () => {
  let header = document.querySelector('.header');
  window.onload = () => {
    if (window.pageYOffset >= header.offsetHeight) {
      header.style.backgroundColor = 'black'
    }
  }
  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= header.offsetHeight) {
      header.style.backgroundColor = 'black'
    }
    else {
      header.style.backgroundColor = ''
    }
  })
}
// Language
const handleLanguage = () => {
  let langBtn = document.querySelector('.header__option--lang');
  let listLang = document.querySelector('.list__language');
  let langItem = document.querySelectorAll('.list__language li');
  let mainLanguage = document.querySelector('.language-options')
  langBtn.onclick = (e) => {
    e.stopPropagation();
    listLang.classList.toggle('active')
  }
  document.onclick = () => {
    listLang.classList.remove('active')
  }
  langItem.forEach((item) => {
    item.onclick = () => {
      let langTemp = mainLanguage.innerText;
      mainLanguage.innerText = item.innerText;
      item.innerText = langTemp;
    }
  })
}
// Menu Mobile
const handleMenu = () => {
  let menuOption = document.querySelector('.header__option--bonus');
  let iconNav = document.querySelector('.header__option--more');
  let mobileNav = document.querySelector('.nav__mobile');
  menuOption.onclick = () => {
    iconNav.classList.toggle('active');
    mobileNav.classList.toggle('active');
  }
}
// handleResize
const handleResize = () => {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      document.querySelector('.nav__mobile.active') && document.querySelector('.nav__mobile.active').classList.remove('active');
      document.querySelector('.header__option--more.active') && document.querySelector('.header__option--more.active').classList.remove('active');
    }
  })
}
// accordion
const handleAccordion = () => {
  let icon = document.querySelectorAll('.icon')
  let mainContent = document.querySelectorAll('.faq .item');
  icon.forEach((item, index) => {
    item.onclick = () => {
      mainContent[index].classList.toggle('active');
    }
  })
}

// progressbar
const handleProgress = () => {
  let progress = document.querySelector('.progressbar');
  let windowHeight = window.innerHeight;
  let bodyHeight = document.querySelector('body').clientHeight;
  window.addEventListener('scroll', () => {
    let currentValue = window.pageYOffset;
    let percent = Number(currentValue / (bodyHeight - windowHeight) * 100);
    progress.style.width = percent + '%';
  })
}

// active Tabs
const handleTabs = () => {
  let tabList = document.querySelectorAll('.tabs__list .tab');
  let newsList = document.querySelectorAll('.news__list');
  tabList.forEach((item, index) => {
    item.onclick = () => {
      if (document.querySelector('.tabs__list .tab.active')) {
        document.querySelector('.tabs__list .tab.active').classList.remove('active');
      }
      if (document.querySelector('.news__list.active')) {
        document.querySelector('.news__list.active').classList.remove('active');
      }
      item.classList.add('active');
      newsList[index].classList.add('active');
    }
  })
}
// handle click scroll menu
const handleClickMenu = (list, arr) => {
  list && list.forEach((item) => {
    let path = item.getAttribute('href').replace('#', '.');
    arr.push(document.querySelector(path));
    item.onclick = (e) => {
      e.preventDefault();
      let sectionTop = document.querySelector(path).offsetTop;
      setTimeout(() => {
        window.scrollTo({
          top: sectionTop
        })

      }, 200)
    }
  })
  let logo = document.querySelector('.header__logo a img');
  logo.onclick = (e) => {
    e.preventDefault();
    toTop();
  }
}

const handleBackToTop = () => {
  let backBtn = document.querySelector('.backtotop')
  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 600) {
      backBtn.style.display = "flex"
    }
    else {
      backBtn.style.display = "none"
    }
  })
  backBtn.onclick = () => {
    toTop();
  }
  let backbtnFooter = document.querySelector('.top__selection');
  backbtnFooter.onclick = (e) => {
    e.preventDefault();
    toTop();
  }
}

// handle Slider 
// let currentIndex = 0;
// let nextBtn = document.querySelector('.slide__btn.--next');
// let preBtn = document.querySelector('.slide__btn.--pre');
// let sliderList = document.querySelectorAll('.slider__item');
// let sliderHeading = document.querySelectorAll('.slider__item--heading');
// let pageNumber = document.querySelector('.slider__bottom--number');


// const handleNext = () => {

//   if (currentIndex >= sliderList.length - 1) {
//     currentIndex = 0;
//   }
//   else {
//     currentIndex++;

//   }
//   handleLoadPage(currentIndex);
// }
// const handleLoadPage = (param) => {
//   let page = param + 1;
//   pageNumber.innerText = page.toString().padStart(2, 0);
//   document.querySelector('.slider__item.active').classList.remove('active');
//   sliderList[param].classList.add('active');
//   sliderHeading[param].innerText = `Wooder ${page.toString().padStart(2, 0)}`
//   document.querySelector('.list-dots .dot.active').classList.remove('active');
//   dotsList[param].classList.add('active');
//   document.querySelector('.slider__item--heading.active').classList.remove('active');
// }
// const handlePrev = () => {

//   if (currentIndex <= 0) {
//     currentIndex = sliderList.length - 1;
//   }
//   else {
//     currentIndex--;

//   }
//   handleLoadPage(currentIndex);
// }
// const handleSlider = () => {

//   nextBtn.onclick = (e) => {
//     e.preventDefault();
//     handleNext();
//   }
//   preBtn.onclick = (e) => {
//     e.preventDefault();
//     handlePrev();
//   }
//   dotsList.forEach((dot, index) => {
//     dot.onclick = () => {
//       if (currentIndex === index) return;

//       currentIndex = index;
//       handleLoadPage(currentIndex);

//     }
//   })
// }
// Slider 

window.addEventListener("DOMContentLoaded", function () {
  let dotsList = document.querySelectorAll('.list-dots .dot');
  let mainCara = document.querySelector('.slider__top');
  let sliderHeading = document.querySelectorAll('.slider__item--heading');
  var flkty = new Flickity(mainCara, {
    // options
    // autoPlay:1500,
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: 2000,
    on: {
      ready: function () {

      }
    }
  });
  // pre
  document.querySelector('.--pre').onclick = (e) => {
    e.preventDefault();
    flkty.previous();
  }
  // next
  document.querySelector('.--next').onclick = (e) => {
    e.preventDefault();
    flkty.next();
  }
  // dots 
  dotsList.forEach((item, index) => {
    item.onclick = () => {
      flkty.select(index);
    }
  })
  flkty.on('change', function (index) {
    let page = index + 1;
    let pageMain = document.querySelector('.slider__bottom--number');
    pageMain.innerText = page.toString().padStart(2, 0);
    document.querySelector('.list-dots .dot.active').classList.remove('active')
    dotsList[index].classList.add('active');
    sliderHeading[index].innerHTML = `Wooder ${page.toString().padStart(2, 0)}`
  });

  // element argument can be a selector string
  //   for an individual element
  let sliderFooter = document.querySelector('.bottom__slider');
  var footerflic = new Flickity(sliderFooter, {
    // options
    cellAlign: 'left',
    contain: true,
    groupCells: '80%',
    draggable: true,
    fullscreen: true,
    prevNextButtons: false,
    pageDots: false,
    on: {
      ready: function () {

      }
    }
  });
  let dragline = document.querySelector('.drag__line .line');
  footerflic.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    dragline.style.width = progress * 100 + '%';
  });
})

// handleVideo

let playBtnList = document.querySelectorAll('.playvideo');
playBtnList.forEach((item) => {
  const handleVideo = () => {
    let videoSource = item.getAttribute('youtube-id');
    let modal = document.querySelector('.modal');
    let modalChild = document.createElement('div');
    modalChild.classList.add('modal-child');
    modalChild.innerHTML = `
    <div class="modal-child">
    <iframe class="responsive-iframe" src="https://www.youtube.com/embed/${videoSource}?autoplay=1" frameborder="0" allowfullscreen allow='autoplay'></iframe>
            <div class="close-btn">X</div>
          </div>
    `
    modal.appendChild(modalChild);
    modal.style.display = "block";
    let closeBtn = document.querySelector('.close-btn');
    closeBtn.onclick = () => {
      modal.removeChild(modalChild);
      modal.style.display = "none";
    }
  }
  item.addEventListener('click', handleVideo);
})
// handle scrollSection 

const handleScrollSection = () => {
  window.onscroll = () => {
    let currentScroll = window.pageYOffset + 200;
    sections.forEach((section, index) => {
      if (currentScroll > section.offsetTop && currentScroll < section.offsetTop + section.offsetHeight) {
        menuOptions[index].classList.add('active');
      }
      else {
        menuOptions[index].classList.remove('active');
      }
    })
  }
}
const handleNav = () => {
  menuOptionsMobile.forEach((item) => {
    let path = item.getAttribute('href').replace('#', '.');
    sectionsMobile.push(document.querySelector(path));
    item.onclick = (e) => {
      document.querySelector('.nav__mobile.active') && document.querySelector('.nav__mobile.active').classList.remove('active');
      document.querySelector('.header__option--more.active') && document.querySelector('.header__option--more.active').classList.remove('active');
      e.preventDefault();
      let sectionTop = document.querySelector(path).offsetTop;
      setTimeout(() => {
        window.scrollTo({
          top: sectionTop
        })
      }, 200)
    }
  })
}
const start = () => {
  // handleSlider();
  handleHeader();
  handleLanguage();
  handleMenu();
  handleAccordion();
  setTimeout(() => {
    handleProgress();
  }, 500)
  handleTabs();
  handleBackToTop();
  handleScrollSection();
  handleResize();
  handleClickMenu(menuOptions, sections);
  handleNav();
}
start();
// Loading
let loading = document.querySelector('.main-loading')
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loading.style.display = "none";
  }, 1800)
});

// fancyapps
Fancybox.bind('[data-fancybox="image"]', {
  infinite: true,
});

// AOS
AOS.init();