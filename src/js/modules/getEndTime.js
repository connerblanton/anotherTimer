const getEndTime = timerDuration => new Date(Date.now() + (timerDuration * 60 /*minute*/ * 1000 /*second*/))

export default getEndTime