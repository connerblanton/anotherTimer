import getEndTime from './getEndTime'
import getDifference from './getDifference'

const startTimer = stage => {
  const endTime = getEndTime(document.getElementById(stage).value) //date object

  let currentTimer = setInterval(() => {
    let timeDifference = getDifference(endTime, new Date())
    
    let minutes = `0${Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2)
    let seconds = `0${Math.floor((timeDifference % (1000 * 60)) / 1000)}`.slice(-2)

    document.getElementById('minutes').innerText = minutes
    document.getElementById('seconds').innerText = seconds

    if (minutes == 0 && seconds == 0) {
      clearInterval(currentTimer)
      startTimer('work')
    }
  }, 1000)
}

export default startTimer