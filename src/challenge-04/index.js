/**
 * @param {string} whisper
 * @param {string[]} suspects
 * @returns {string}
 */
export function findTheKiller (whisper, suspects) {
  const initialPattern = whisper.replaceAll('~', '.')
  const endsWithDollar = initialPattern.endsWith('$')

  const finalPattern = endsWithDollar
    ? initialPattern.slice(0, -1)
    : initialPattern

  const endOfPattern = endsWithDollar || !finalPattern.endsWith('.') ? '$' : '.*$'
  const regex = new RegExp(`^${finalPattern}${endOfPattern}`, 'i')

  return suspects
    .filter((suspect) => regex.test(suspect))
    .join(',')
}
