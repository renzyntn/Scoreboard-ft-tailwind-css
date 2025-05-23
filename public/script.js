let homeScore = 0;
let guestScore = 0;

let homePts = document.getElementById("h-score");
let guestPts = document.getElementById("g-score");
let prevScore = document.getElementById("prev-score");

const home1PtFx = document.getElementById("h-1pt");
const home2PtFx = document.getElementById("h-2pt");
const home3PtFx = document.getElementById("h-3pt");

const guest1PtFx = document.getElementById("g-1pt");
const guest2PtFx = document.getElementById("g-2pt");
const guest3PtFx = document.getElementById("g-3pt");

const resetFx = document.getElementById("reset-btn");
const homeMinusFx = document.getElementById("homeminus-btn");
const guestMinusFx = document.getElementById("guestminus-btn");
let isBtnClicked = false;


home1PtFx.addEventListener("click", function() {
    homeScore += 1;
    homePts.innerText = formatScore(homeScore);
    prevScore.innerText = "Previous: H – " + formatScore(homeScore);

    if (!isBtnClicked) {
        home1PtFx.classList.add('bg-green-700');
        isBtnClicked = true;
    
        setTimeout(() => {
            home1PtFx.classList.remove('bg-green-700');
            isBtnClicked = false;
        }, 100);
    }
});

home2PtFx.addEventListener("click", function() {
    homeScore += 2;
    homePts.innerText = formatScore(homeScore);
    prevScore.innerText = "Previous: H – " + formatScore(homeScore);

    if (!isBtnClicked) {
        home2PtFx.classList.add("bg-green-700");
        isBtnClicked = true;

        setTimeout(() => {
            home2PtFx.classList.remove("bg-green-700");
            isBtnClicked = false;
        }, 100);
    }
});

home3PtFx.addEventListener("click", function() {
    homeScore += 3;
    homePts.innerText = formatScore(homeScore);
    prevScore.innerText = "Previous: H – " + formatScore(homeScore);

    if (!isBtnClicked) {
        home3PtFx.classList.add("bg-green-700");
        isBtnClicked = true;

        setTimeout(() => {
            home3PtFx.classList.remove("bg-green-700");
            isBtnClicked = false;
        }, 100);
    }
});

guest1PtFx.addEventListener("click", function() {
    guestScore += 1;
    guestPts.innerText = formatScore(guestScore);
    prevScore.innerText = "Previous: G – " + formatScore(guestScore);

    if (!isBtnClicked) {
        guest1PtFx.classList.add("bg-green-700");
        isBtnClicked = true;

        setTimeout(() => {
            guest1PtFx.classList.remove("bg-green-700");
            isBtnClicked = false;
        }, 100);
    }
});

guest2PtFx.addEventListener("click", function() {
    guestScore += 2;
    guestPts.innerText = formatScore(guestScore);
    prevScore.innerText = "Previous: G – " + formatScore(guestScore);

    if (!isBtnClicked) {
        guest2PtFx.classList.add("bg-green-700");
        isBtnClicked = true;

        setTimeout(() => {
            guest2PtFx.classList.remove("bg-green-700");
            isBtnClicked = false;
        }, 100);
    }
});

guest3PtFx.addEventListener("click", function() {
    guestScore += 3;
    guestPts.innerText = formatScore(guestScore);
    prevScore.innerText = "Previous: G – " + formatScore(guestScore);

    if (!isBtnClicked) {
        guest3PtFx.classList.add("bg-green-700");
        isBtnClicked = true;

        setTimeout(() => {
            guest3PtFx.classList.remove("bg-green-700");
            isBtnClicked = false;
        }, 100);
    }
});

resetFx.addEventListener("click", function() {
    homeScore = 0;
    guestScore = 0;

    homePts.innerText = formatScore(homeScore);
    guestPts.innerText = formatScore(guestScore);
    prevScore.innerText = "Previous:";

    if (!isBtnClicked) {
        resetFx.classList.add("bg-sky-600");
        isBtnClicked = true;

        setTimeout(() => {
            resetFx.classList.remove("bg-sky-600");
            isBtnClicked = false;
        }, 100);
    }
});

function formatScore(score) {
    return score.toString().padStart(2, "0");
}

homeMinusFx.addEventListener("click", function() {
    if (homeScore > 0) {
        homeScore -= 1;
        homePts.innerText = formatScore(homeScore);
        prevScore.innerText = "Previous: H – " + formatScore(homeScore);
    } else {
        
    }

    if (!isBtnClicked) {
        homeMinusFx.classList.add("bg-sky-600");
        isBtnClicked = true;

        setTimeout(() => {
            homeMinusFx.classList.remove("bg-sky-600");
            isBtnClicked = false;
        }, 100);
    }
});

guestMinusFx.addEventListener("click", function() {
    if (guestScore > 0) {
        guestScore -= 1;
        guestPts.innerText = formatScore(guestScore);
        prevScore.innerText = "Previous: G – " + formatScore(guestScore);
    } else {
        
    }

    if (!isBtnClicked) {
        guestMinusFx.classList.add("bg-sky-600");
        isBtnClicked = true;

        setTimeout(() => {
            guestMinusFx.classList.remove("bg-sky-600");
            isBtnClicked = false;
        }, 100);
    }
});