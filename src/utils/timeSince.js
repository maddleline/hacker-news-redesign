/*
 * timeSince function adapted from Stack Overflow:
 * https://stackoverflow.com/a/3177838/8545523
 * takes in a unix timestamp and returns a string describing
 * the time since that timestamp using the most appropriate
 * time interval
 */
export const timeSince = (timestamp) => {
  const date = new Date(timestamp * 1000)
  var seconds = Math.floor((new Date() - date) / 1000)

  var interval = seconds / 31536000

  if (interval > 1) {
    return Math.floor(interval) + ' years'
  }

  interval = seconds / 2592000
  if (interval > 1) {
    return Math.floor(interval) + ' months'
  }

  interval = seconds / 86400
  if (interval > 1) {
    return Math.floor(interval) + ' days'
  }

  interval = seconds / 3600
  if (interval > 1) {
    return Math.floor(interval) + ' hours'
  }

  interval = seconds / 60
  if (interval > 1) {
    return Math.floor(interval) + ' minutes'
  }

  return Math.floor(seconds) + ' seconds'
}
