const sizing = () => {
  let windowWidth = window.outerWidth;
  let windowHeight = window.outerHeight;
  let output = "width : " + windowWidth + ", height : " + windowHeight;
  document.getElementById("outputDiv").innerHTML = output;
};
