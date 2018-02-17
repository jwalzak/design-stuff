const m_word = 'walzak'
const m_host = 'gmail'
const dateObject = new Date()
const day = dateObject.getDay()
const date = dateObject.getDate()
const month = dateObject.getMonth()

const contentObject = {
  weekDay: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  month: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  words: [
  'PHP',
  'JavaScript',
  'Java',
  'ASP.NET',
  'WordPress',
  'AWS',
  'HTML',
  'CSS',
  'Security',
  'React',
  'NodeJS',
  'npm',
  'CSS Grid',
  'ES6',
  'TypeScript',
  'Laravel',
  'Agile',
  'VSCode',
  'Sublime Text',
  'Vim',
  'Bash',
  'Linux',
  'git',
  'Github',
  'Agile',
  'MySQL',
  'NoSQL',
  'Front End / Back End',
]
}

const dayOfWeek = contentObject.weekDay[day]
const monthOfYear = contentObject.month[month]

function dateApplication(dayOfWeek, monthOfYear) {
  const dayClass = document.querySelector('.day')
  const dateClass = document.querySelector('.date')
  const monthClass = document.querySelector('.month')

  dayClass.textContent = dayOfWeek
  dateClass.textContent = `${date}.`
  monthClass.textContent = monthOfYear
}

dateApplication(dayOfWeek, monthOfYear)

const container = document.querySelector('.sub-profession')

for (var x = 0, ln = contentObject.words.length; x < ln; x++) {
  setTimeout(
    function(y) {
      container.textContent = contentObject.words[y]
    },
    x * 800,
    x
  ) // we're passing x
}
