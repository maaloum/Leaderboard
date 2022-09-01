import './style.css';

// GameID : EEOK6HDsrV9GBtJdvBFP
const tableData = document.querySelector('.tableData');
const userName = document.querySelector('.user');
const userScore = document.querySelector('.score');
const refresh = document.querySelector('.refresh');
const btnSubmit = document.querySelector('.btnSubmit');
const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EEOK6HDsrV9GBtJdvBFP/scores/';

const getScores = async () => {
  const response = await fetch(gameUrl);
  const data = await response.json();
  return data.result;
};

const postScore = async () => {
  const response = await fetch(gameUrl, {
    method: 'POST',
    body: JSON.stringify({ user: userName.value, score: userScore.value }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data.result;
};

const refreshScores = async () => {
  const scores = await getScores();
  tableData.innerHTML = '';
  scores.forEach((score) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${score.user}</td>
      <td>${score.score}</td>
    `;
    tableData.appendChild(row);
  });
};

refresh.addEventListener('click', refreshScores);

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  postScore(userName, userScore);
  refreshScores();
  userName.value = '';
  userScore.value = '';
});
refreshScores();
