//get input and assign to variables

const submit = document.getElementById('submit');

submit.onclick = function () {
  const cleanDate = document.getElementById('clean-date').value;
  const d = new Date(cleanDate);

  const currentDate = new Date();

  const results = currentDate - d;
  const resultsDays = Math.ceil(results/1000/60/60/24);
  const resultYears = Math.floor(resultsDays / 365);
  
  const resultRemainderMonths = Math.floor((resultsDays % 365)/31);
  
  const resultRemainderDays = (resultsDays - ((resultYears*365) + (resultRemainderMonths * 30)) - d.getDate());

  const days = document.getElementById('days');
    days.innerText = `You have been clean for ${resultsDays} days`;
  
  const years = document.getElementById('years');
    years.innerText = `You have been clean for ${resultYears} years, ${resultRemainderMonths} months and ${resultRemainderDays} days`;
};