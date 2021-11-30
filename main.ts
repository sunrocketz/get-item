/**
 * Get array item at index
 * @param array
 * @param index Positive or negative number
 * @returns The item at the provided index. If index is negative, the last item is at `-1`, continue `-2, -3` to the left
 */
const getItem = <T = any>(array: T[], index: number) =>
  index >= 0 ? array[index] : array[array.length + index]

export default getItem
