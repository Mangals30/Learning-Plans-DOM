const getDate = () => {
  const now = new Date()
  let month = getMonthName(now.getMonth())
  let date = twoDigitsDate(now.getDate())
  let year = twoDigitsDate(now.getFullYear())
  let hours = twoDigitsDate(now.getHours())
  let minutes = twoDigitsDate(now.getMinutes())
  let seconds = twoDigitsDate(now.getSeconds())
  return {
    month,
    date,
    year,
    hours,
    minutes,
    seconds
  }
}


const getMonthName = (number) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let month = months[number - 1]
  return month
}
const twoDigitsDate = (number) => {
  return (number < 10 ? '0' + number : number)
}