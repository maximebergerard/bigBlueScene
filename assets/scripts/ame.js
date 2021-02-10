const $start_button = document.querySelector("#start--test");
const $next_button = document.querySelector("#b-next");
const $step_0 = document.querySelector("#step0");
const $step_1 = document.querySelector("#step1");

const $steps = document.querySelectorAll(".step");

let position = 0;

$start_button.addEventListener("click", () => {
  nextStep();
});
$next_button.addEventListener("click", () => {
  nextStep();
});

const nextStep = () => {
  if (position === 0) {
    $step_0.classList.remove("step--center");
    $step_0.classList.add("step--left");
    $step_1.classList.remove("step--right");
    $step_1.classList.add("step--center");
    $next_button.classList.remove("d-none");
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
