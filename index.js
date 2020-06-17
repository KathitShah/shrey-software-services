window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("hide-header").style.display = "none";
    document.getElementById("hide-header2").style.display = "none";
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.top = "-2vh";
    document.getElementById("navbar").style.margin = "0";
    document.getElementById("navbar").style.padding = "1rem 19rem 0.4rem 7rem";
    document.getElementById("request-demo").style.right = "-17.3%";
    document.getElementById("request-demo").style.top = "0.9vh";
    document.getElementById("request-demo").style.paddingRight = "18%";
    document.getElementById("triangle").style.top = "11%";
    document.getElementById("triangle").style.right = "11.9%";
  } else {
    document.getElementById("hide-header").style.display = "flex";
    document.getElementById("hide-header2").style.display = "flex";
    document.getElementById("navbar").style.position = "absolute";
    document.getElementById("navbar").style.top = "9rem";
    document.getElementById("navbar").style.margin = "1% 6% 0";
    document.getElementById("navbar").style.margin = "0.5rem 5rem 0";
    document.getElementById("navbar").style.padding =
      "0.5rem 18rem 0.4rem 1.5rem";
    document.getElementById("request-demo").style.right = "-1.5%";
    document.getElementById("request-demo").style.top = "0";
    document.getElementById("request-demo").style.padding = "3.13vh 1% 2.8vh 0";
    document.getElementById("triangle").style.top = "0";
    document.getElementById("triangle").style.right = "11.7%";
  }
}
function ex() {
  document.getElementById("qtp-description").classList.remove("no-display");
  document.getElementById("qtp-description").classList.add("inline");
  document.getElementById("up-qtp").classList.add("up-q");
}
function exOut() {
  document.getElementById("qtp-description").classList.remove("inline");
  document.getElementById("qtp-description").classList.add("no-display");
  document.getElementById("up-qtp").classList.remove("up-q");
}
function ex2() {
  document.getElementById("qa-description").classList.remove("no-display");
  document.getElementById("qa-description").classList.add("inline");
  document.getElementById("up-qa").classList.add("up-q");
}
function exOut2() {
  document.getElementById("qa-description").classList.remove("inline");
  document.getElementById("qa-description").classList.add("no-display");
  document.getElementById("up-qa").classList.remove("up-q");
}
