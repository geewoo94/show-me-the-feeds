import FeedQuery from "../shapes/FeedQuery"

export const commento = {
  baseUrl: 'https://problem.comento.kr',
  Error: class CommentoError extends Error {
    constructor(msg) {
      super(msg)
    }
  }
}

commento.getFeeds = async (query) => {
  if (!query) {
    query = new FeedQuery({ page: 1, ord: "asc", category: "1", limit: 10 })
  }
  const { page, ord, category, limit} = query
  const response = await fetch(
    `${commento.baseUrl}/api/list?page=${page}&ord=${ord}&category%5B%5D=${category}&limit=${limit}`,
    {
      headers:
      {
        Accept: "application/json",
        'Content-Type': "application/json",
      }
    })

  if (!response.ok) throw new commento.Error('api call error')

  return await response.json()
}

commento.getCategoryNames = async () => {
  const response = await fetch(
    `${commento.baseUrl}/api/category`,
    {
      headers:
      {
        Accept: "application/json",
        'Content-Type': "application/json",
      }
    })

  if (!response.ok) throw new commento.Error('api call error')

  return await response.json()
}
