const FeedQuery = class {
  constructor(query) {
    Object.entries(query).forEach(([ key, value ]) => {
      switch (key) {
        case "page":
          if (typeof value !== 'number') throw 'invalid page'
          break
        case "ord": {
          if (value !== 'asc' && value !== 'desc') throw `invalid ord: ${value}`
          break
        }
        case "category":
          if (typeof value !== 'string') throw 'invalid category'
          break
        case "limit":
          if (typeof value !== 'number') throw 'invalid limit'
          break
        default:
          throw 'invalid key'
      }
    })

    this.page = query.page
    this.ord = query.ord
    this.category = query.category
    this.limit = query.limit
  }
}

export default FeedQuery
