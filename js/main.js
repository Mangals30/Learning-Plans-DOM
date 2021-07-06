const currentYear = document.querySelector('#year')
const dates = document.querySelector('#dates')
const courses = document.querySelector('.courses')
const about = document.querySelector('.about')

const {
  month,
  date,
  year,
  hours,
  minutes,
  seconds
} = getDate()
dates.textContent = `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`
currentYear.textContent = year

setInterval(() => {
  currentYear.style.color = hexaDecimalColor()
  dates.style.background = hexaDecimalColor()
}, 1000);

const {
  keywords,
  author,
  challenges
} = myLearnings
for (const {
    name,
    topics,
    status,
    udemyURL
  } of challenges) {
  const courseDiv = document.createElement('div')
  createCourse(courseDiv, name, udemyURL)
  createTopics(courseDiv, topics)
  createLearnStatus(courseDiv, status)
  courses.appendChild(courseDiv)
}

const {
  firstName,
  lastName,
  titles,
  qualifications,
  socialLinks,
  skills,
  bio
} = author
const authorName = document.createElement('h3')
authorName.textContent = firstName + ' ' + lastName

const socialDiv = document.createElement('div')
socialDiv.setAttribute('class', 'icons')
for (const {
    url,
    fontawesomeIcon
  } of socialLinks) {
  const social = document.createElement('a')
  social.setAttribute('href', url)
  social.innerHTML = fontawesomeIcon
  social.style.marginRight = '1rem'
  socialDiv.appendChild(social)
}

const bioPara = document.createElement('p')
bioPara.textContent = bio
const bioGrid = document.createElement('div')
bioGrid.setAttribute('class', 'bio-grid')

createDiv('Titles', 'bio-info', titles, '<i class="fas fa-fire"></i>', bioGrid)
createDiv('Skills', 'bio-info', skills, '<i class="fas fa-check-square"></i>', bioGrid)
createDiv('Qualifications', 'bio-info', qualifications, '<i class="fas fa-book"></i>', bioGrid)

const keyWordsDiv = document.createElement('div')
keyWordsDiv.setAttribute('class', 'keywords-flex')
const keyWordHeading = document.createElement('h3')
keyWordHeading.textContent = 'Keywords'
keyWordsDiv.appendChild(keyWordHeading)
const wordsDiv = document.createElement('div')
wordsDiv.setAttribute('class', 'keywords')
for (const keyword of keywords) {
  const word = document.createElement('p')
  word.setAttribute('class', 'keyword')
  word.textContent = keyword
  wordsDiv.appendChild(word)
  word.style.background = hexaDecimalColor()
}
keyWordsDiv.appendChild(wordsDiv)

about.appendChild(authorName)
about.appendChild(socialDiv)
about.appendChild(bioPara)
about.appendChild(bioGrid)
about.appendChild(keyWordsDiv)