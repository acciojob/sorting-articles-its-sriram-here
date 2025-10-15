const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function strip(article) {
  return article.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.slice().sort((a, b) => {
  const nameA = strip(a).toLowerCase();
  const nameB = strip(b).toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

const bandUl = document.getElementById('band');
bandUl.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
