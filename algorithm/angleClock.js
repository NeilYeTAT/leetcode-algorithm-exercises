const angleClock = function (hour, minutes) {
  const diff = Math.abs(minutes * 6 - ((hour % 12) * 30 + minutes / 2))
  return diff > 180 ? 360 - diff : diff
}
