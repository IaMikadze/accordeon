let accordeon = document.querySelectorAll(".accordeon-wraper .accordeon");
accordeon.forEach((ac) => {
  ac.onclick = () => {
    accordeon.forEach((cont) => {
      cont.classList.remove("active");
    });
    ac.classList.add("active");
  };
});
