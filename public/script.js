let homeScore = 0;
let guestScore = 0;

let homePts = document.getElementById("h-score");
let guestPts = document.getElementById("g-score");
let prevScore = document.getElementById("prev-score");

function addHome1Point() {
    homeScore += 1;
    homePts.innerText = formatScore(homeScore);
    prevScore.innerText = "Previous: H – " + formatScore(homeScore);
}

function addHome2Point() {
    homeScore += 2;
    homePts.innerText = formatScore(homeScore);
    prevScore.innerText = "Previous: H – " + formatScore(homeScore);
}

function addHome3Point() {
    homeScore += 3;
    homePts.innerText = formatScore(homeScore);
    prevScore.innerText = "Previous: H – " + formatScore(homeScore);
}

function addGuest1Point() {
    guestScore += 1;
    guestPts.innerText = formatScore(guestScore);
    prevScore.innerText = "Previous: G – " + formatScore(guestScore);
}

function addGuest2Point() {
    guestScore += 2;
    guestPts.innerText = formatScore(guestScore);
    prevScore.innerText = "Previous: G – " + formatScore(guestScore);
}

function addGuest3Point() {
    guestScore += 3;
    guestPts.innerText = formatScore(guestScore);
    prevScore.innerText = "Previous: G – " + formatScore(guestScore);
}

function resetPoints() {
    homeScore = 0;
    guestScore = 0;

    homePts.innerText = formatScore(homeScore);
    guestPts.innerText = formatScore(guestScore);
    prevScore.innerText = "Previous:";
}

function formatScore(score) {
    return score.toString().padStart(2, "0");
}

function minusHomePts() {
    if (homeScore > 0) {
        homeScore -= 1;
        homePts.innerText = formatScore(homeScore);
        prevScore.innerText = "Previous: H – " + formatScore(homeScore);
    } else {
        
    }
}

function minusGuestPts() {
    if (guestScore > 0) {
        guestScore -= 1;
        guestPts.innerText = formatScore(guestScore);
        prevScore.innerText = "Previous: G – " + formatScore(guestScore);
    } else {
        
    }
}