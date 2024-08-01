"use strict";
const ScoreTitle = document.querySelector(".Score");
const ButtonIncrementScore = document.querySelector(".Button");
const ControlForm = document.getElementById("ControlForm");
const InputInitialScore = document.querySelector(".InputInitialScore");
const ControlPanel = {
    InitialScore: 0,
};
document.addEventListener("DOMContentLoaded", () => {
    ButtonIncrementScore?.setAttribute("disabled", "true");
    if (ScoreTitle) {
        ScoreTitle.textContent = ControlPanel.InitialScore.toString();
    }
    InputInitialScore?.addEventListener("change", (event) => {
        if (event.target instanceof HTMLInputElement && event.target) {
            let InputValue = parseInt(event.target.value);
            if (!isNaN(InputValue)) {
                ControlPanel.SetInitialScore?.(InputValue);
            }
        }
    });
    ControlForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        ButtonIncrementScore?.removeAttribute("disabled");
        if (InputInitialScore) {
            InputInitialScore.value = "";
        }
    });
    ButtonIncrementScore?.addEventListener("click", (event) => {
    });
});
