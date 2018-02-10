const dateObject = new Date();
const day = dateObject.getDay();
const date = dateObject.getDate();
const month = dateObject.getMonth();

const dateArray = {
  weekDay: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  month: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};

const dayOfWeek = dateArray.weekDay[day];
const monthOfYear = dateArray.month[month];

function dateApplication(dayOfWeek, monthOfYear) {
  const dayClass = document.querySelector(".day");
  const dateClass = document.querySelector(".date");
  const monthClass = document.querySelector(".month");

  dayClass.textContent = dayOfWeek;
  dateClass.textContent = `${date}.`;
  monthClass.textContent = monthOfYear;
}

dateApplication(dayOfWeek, monthOfYear);

const words = [
  "PHP",
  "JavaScript",
  "Java",
  "ASP.NET",
  "WordPress",
  "AWS",
  "HTML",
  "CSS",
  "Security",
  "React",
  "NodeJS",
  "npm",
  "CSS Grid",
  "ES6",
  "TypeScript",
  "Laravel",
  "Vue",
  "Agile",
  "VSCode",
  "Sublime Text",
  "Vim",
  "Bash",
  "Linux",
  "git",
  "Github",
  "Agile",
  "MySQL", 
  "Firebase",
  
];

const container = document.querySelector(".sub-profession");

for (var x = 0, ln = words.length; x < ln; x++) {
  setTimeout(
    function(y) {
      container.textContent = words[y];
    },
    x * 1000,
    x
  ); // we're passing x
}
