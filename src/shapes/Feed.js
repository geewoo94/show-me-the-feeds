// date form YYYY-MM-DD
const isValidDateForm = (date) => {
  if (date.length !== 10) throw 'invalid date form'

  const currentDate = new Date()
  const [ YYYY, MM, DD ] = date.split('-').map(item => Number(item))

  if (
    typeof YYYY !== 'number' ||
    currentDate.getFullYear() < YYYY
  ) throw 'invalid year form'
  if (
    typeof MM !== 'number' ||
    MM < 1 ||
    MM > 12
  ) throw 'invalid month form'
  if (
    typeof Number(DD) !== 'number' ||
    DD < 1 ||
    DD > 31
  ) throw 'invalid date form'

  return true;
}

const Feed = class {
  constructor(item) {
    if (!item) throw 'param item is required'
    if (!item.id || typeof item.id !== 'number') throw 'invalid feed id'
    if (!item.title || typeof item.title !== 'string') throw 'invalid feed title'
    if (!item.contents || typeof item.contents !== 'string') throw 'invalid feed contents'
    if (!item.category_id || typeof item.category_id !== 'number') throw 'invalid feed category_id'
    if (!item.user_id || typeof item.user_id !== 'number') throw 'invalid feed user_id'
    if (
      !item.created_at ||
      typeof item.created_at !== 'string' ||
      !isValidDateForm(item.created_at)
    ) throw 'invalid feed created_at'
    if (
      !item.updated_at ||
      typeof item.updated_at !== 'string' ||
      !isValidDateForm(item.created_at)
    ) throw 'invalid feed updated_at'

    this.id = item.id
    this.title = item.title
    this.contents = item.contents
    this.category_id = item.category_id
    this.user_id = item.user_id
    this.created_at = item.created_at
    this.updated_at = item.updated_at
  }

  static getFormatDate(source) {
    const tempDate = new Date(source)
    const year = tempDate.getFullYear()
    const month = tempDate.getMonth() + 1
    const date = tempDate.getDate()

    return `${year}-${month}-${date}`
  }
}

export default Feed
