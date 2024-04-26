const lights = document.querySelectorAll(".traffic_light");
const switchButton = document.querySelector(".switch_btn");
let lightIndex = 0;
switchButton.addEventListener("click", () => {
  lights.forEach((light) => {
    light.classList.remove("active");
  });

  lights[lightIndex].classList.add("active");
  lightIndex = (lightIndex + 1) % lights.length;
});
