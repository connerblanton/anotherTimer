import settings from './modules/settings'
import startTimer from './modules/startTimer'

document.getElementById('startTimer').addEventListener('click', () => {
  startTimer('work')
})

document.querySelectorAll('.setting').forEach(setting => {
  setting.addEventListener('change', () => {
    console.log(`Updated ${setting.id} to ${setting.value}`)
    settings[setting.id].time = setting.value
    if (setting.id === 'work') {
      document.getElementById('minutes').innerText = setting.value
    }
  })
})