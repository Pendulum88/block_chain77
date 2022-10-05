// function mousemove(event) {
//   console.log(
//     "pageX: ",
//     event.pageX,
//     "pageY: ",
//     event.pageY,
//     "clientX: ",
//     event.clientX,
//     "clientY:",
//     event.clientY
//   );
// }

// window.addEventListener("mousemove", mousemove);

const canon = document.getElementById("canon");

addEventListener("mousemove", function (e) {
  canon.style.left = e.clientX - 50 + "px";
});
