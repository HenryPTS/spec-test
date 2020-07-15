function humaniseDate(dateStr: string): string {
  const date = new Date(dateStr)
  const D = ('0' + date.getDate()).slice(-2),
    M = ('0' + (date.getMonth() + 1)).slice(-2),
    YYYY = date.getFullYear(),
    HH = ('0' + date.getHours()).slice(-2),
    MM = ('0' + date.getMinutes()).slice(-2)
  return `${D}.${M}.${YYYY} at ${HH}:${MM}`
}

export default humaniseDate