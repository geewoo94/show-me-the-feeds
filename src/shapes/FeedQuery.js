const FeedQuery = class {
  constructor(query) {
    query && Object.entries(query).forEach(([ key, value ]) => {
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

    this.page = query?.page ?? 1
    this.ord = query?.ord ?? "asc"
    this.category = query?.category ?? "1"
    this.limit = query?.limit ?? 10
  }
}

export default FeedQuery
