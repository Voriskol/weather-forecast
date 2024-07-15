export const capitalize = (str) => {
  if (str) {
    return str[0].charAt(0).toUpperCase() + str.slice(1)
  } else {
    return ''
  }
}
