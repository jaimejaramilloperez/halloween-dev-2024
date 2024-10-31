/**
 * @param {string} whisper
 * @param {string[]} suspects
 * @returns {string}
 */
export function findTheKiller (whisper, suspects) {
  let formattedPattern = whisper.replace(/~/g, '.')
  if (!formattedPattern.endsWith('$')) formattedPattern += '+'

  const regex = new RegExp('^' + formattedPattern, 'ig')

  return suspects
    .filter((suspect) => suspect.match(regex) !== null)
    .join(',')
}
