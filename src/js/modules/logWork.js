import workLog from './workLog'
import settings from './settings'

const logWork = () => {
  const label = document.getElementById('label') || 'Undefined'

  workLog[label] =+ settings.work.time * settings.sessionsComplete

  console.log(workLog)
}

export default logWork