import getEndTime from './getEndTime'

const startTimer = stage => {
  const endTime = getEndTime(document.getElementById(stage).value) //date object

  setInterval(() => {
    let timeDifference = getDifference(endTime, new Date())
    
    let minutes = `0${Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2)
    let seconds = `0${Math.floor((timeDifference % (1000 * 60)) / 1000)}`.slice(-2)

    console.log(`${minutes}:${seconds}`)
  }, 1000)
}

export default startTimer