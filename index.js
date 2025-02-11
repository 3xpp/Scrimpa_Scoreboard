function updateScore(team, points) {
    let scoreElement = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}
