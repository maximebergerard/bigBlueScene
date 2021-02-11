const $start_button = document.querySelector("#start--test");
const $next_button = document.querySelector("#b-next");
const $step_0 = document.querySelector("#step0");
const $step_1 = document.querySelector("#step1");

const $steps = document.querySelectorAll(".step");

const $responses = document.querySelectorAll(".response");

const $illu_ame = document.querySelector("#illu--ame");

const $link_dl = document.querySelector("#link-dl");

const imagesSrc = ["assets/images/soul1.png", "assets/images/soul2.png"];

$responses.forEach((response) => {
  response.addEventListener("click", () => {
    if (response.classList.contains("response--active")) {
      response.classList.remove("response--active");
    } else {
      response.classList.add("response--active");
      $next_button.classList.remove("d-none");
    }
  });
});

let position = 0;

$start_button.addEventListener("click", () => {
  nextStep();
});

$next_button.addEventListener("click", () => {
  nextStep();
  $next_button.classList.add("d-none");
});

const nextStep = () => {
  if (position === 0) {
    let index = Math.round(Math.random());
    $illu_ame.setAttribute("src", imagesSrc[index]);
    $link_dl.setAttribute("href", imagesSrc[index]);

    $step_0.classList.remove("step--center");
    $step_0.classList.add("step--left");
    $step_1.classList.remove("step--right");
    $step_1.classList.add("step--center");
  } else {
    let $step_center = document.querySelector(`#step${position}`);
    let $step_right = document.querySelector(`#step${position + 1}`);

    $step_center.classList.remove("step--center");
    $step_center.classList.add("step--left");
    $step_right.classList.remove("step--right");
    $step_right.classList.add("step--center");
  }

  position++;
};
