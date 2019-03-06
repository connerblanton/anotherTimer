import settings from './settings'
import getEndTime from './getEndTime'
import getDifference from './getDifference'
import logWork from './logWork'

const startTimer = stage => {
  console.log(`starting ${stage}`);
  const endTime = getEndTime(settings[stage].time) //date object

  let currentTimer = setInterval(() => {
    let timeDifference = getDifference(endTime, new Date())
    
    let minutes = `0${Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2)
    let seconds = `0${Math.floor((timeDifference % (1000 * 60)) / 1000)}`.slice(-2)

    document.getElementById('minutes').innerText = minutes
    document.getElementById('seconds').innerText = seconds

    if (minutes == 0 && seconds == 0) {
      clearInterval(currentTimer)
      if (stage === 'break') settings.sessionsComplete++;
      if (settings.sessionsComplete === settings.sessions) {
        // we done
        logWork();
      } else {
        startTimer(settings[stage].next)
      }
    }
  }, 1000)
}

export default startTimer