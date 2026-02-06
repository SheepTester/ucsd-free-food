export const API_BASE = 'https://sheep.thingkingland.app/free-food'

const fmt = new Intl.DateTimeFormat('sv-SE', {
  timeZone: 'America/Los_Angeles',
  dateStyle: 'short'
})
export const today = fmt.format(new Date())
export const like30DaysAgo = fmt.format(
  new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
)
