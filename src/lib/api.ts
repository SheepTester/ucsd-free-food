export const API_BASE = 'https://sheep.thingkingland.app/free-food'

export const today = new Intl.DateTimeFormat('sv-SE', {
  timeZone: 'America/Los_Angeles',
  dateStyle: 'short'
}).format(new Date())
