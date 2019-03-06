const getEndTime = timerDuration => new Date(Date.now() + (timerDuration * 60 /*minute*/ * 1000 /*second*/) + 1000)

export default getEndTime