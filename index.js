const header = document.querySelector("header");
const aElment = document.querySelectorAll("header a");
const App = {
  start: () => {
    App.handleEvent.scrollScreen();
    App.handleEvent.changeTab();
  },
  handleEvent: {
    scrollScreen: () => {
      window.onscroll = () => {
        if (window.scrollY > 200) {
          header.classList.add("bg-black");
          header.classList.add("text-white");
        } else {
          header.classList.remove("bg-black");
          header.classList.remove("text-white");
        }
      };
    },
    changeTab: () => {
      aElment.forEach((item) => {
        item.onclick = () => {
          if(document.querySelector(".active")) {
            document.querySelector(".active").classList.remove("active");
          }
          item.classList.add("active");
        };
      });
    },
  },
};
App.start();
