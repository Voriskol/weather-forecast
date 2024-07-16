const PRESSURE_UNITS = 0.750062

export const capitalize = (str) => {
  if (str) {
    return str[0].charAt(0).toUpperCase() + str.slice(1)
  } else {
    return ''
  }
}

export const getPressure = (pressure) => {
  return Math.round(pressure * PRESSURE_UNITS)
}

export const getTime = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' })
}
