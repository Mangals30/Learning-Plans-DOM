const createCourse = (courseDiv, name, udemyURL) => {
  courseDiv.setAttribute('class', 'course')
  const link = document.createElement('a')
  link.setAttribute('href', udemyURL)
  link.textContent = name
  courseDiv.appendChild(link)
}

const createTopics = (courseDiv, topics) => {
  const topicsDiv = document.createElement('div')
  const subTopics = document.createElement('div')
  subTopics.style.marginLeft = '1rem'
  topicsDiv.setAttribute('class', 'topics')
  const right = document.createElement('a')
  right.innerHTML = '<i class="fas fa-chevron-right"></i>'
  subTopics.style.display = 'none'
  right.setAttribute('href', '#')
  right.addEventListener('click', (e) => {
    e.preventDefault()
    subTopics.style.display == 'block' ? subTopics.style.display = 'none' : subTopics.style.display = 'block'
  })
  const topic = document.createElement('p')
  topic.textContent = topics[0]
  for (const topic of topics) {
    const subTopic = document.createElement('p')
    subTopic.textContent = topic
    subTopics.appendChild(subTopic)
  }
  topicsDiv.appendChild(right)
  topicsDiv.appendChild(topic)
  topicsDiv.appendChild(subTopics)
  courseDiv.appendChild(topicsDiv)
}

const createLearnStatus = (courseDiv, status) => {
  const learningStatus = document.createElement('div')
  learningStatus.textContent = status
  if (status.toLowerCase() == 'learned') {
    courseDiv.style.background = '#5bbc7a'
  } else if (status.toLowerCase() == 'learning') {
    courseDiv.style.background = '#f7dc5c'
  } else {
    courseDiv.style.background = '#eb695b'
  }
  courseDiv.appendChild(learningStatus)
}

const createDiv = (heading, bioClass, bios, fonts, bioGrid) => {
  const bioDiv = document.createElement('div')
  const bioHeading = document.createElement('h3')
  bioHeading.textContent = heading
  bioHeading.className = bioClass
  bioDiv.appendChild(bioHeading)
  for (const bio of bios) {
    const bioName = document.createElement('div')
    const bioIcon = document.createElement('div')
    bioIcon.innerHTML = fonts
    bioName.setAttribute('class', bioClass)
    const bioInfo = document.createElement('p')
    bioInfo.textContent = bio
    bioInfo.style.marginLeft = '0.5rem'
    bioName.appendChild(bioIcon)
    bioName.appendChild(bioInfo)
    bioDiv.appendChild(bioName)
  }
  bioGrid.appendChild(bioDiv)
}