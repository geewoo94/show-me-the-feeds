import Vue from 'vue'
import Vuex from 'vuex'

import shapes from '../shapes'
import { commento } from '../utils/api'

Vue.use(Vuex)

export const INIT_FEEDS = 'feeds/INIT_FEEDS'
export const UPDATE_FEEDS = 'feeds/UPDATE_FEEDS'
export const UPDATE_FEED_QUERY = 'feedQuery/UPDATE_FEED_QUERY'

const store = new Vuex.Store({
  state: {
    feeds: [],
    feedQuery: {}
  },
  mutations: {
    [INIT_FEEDS]: () => {
      store.commit(UPDATE_FEED_QUERY, new shapes.FeedQuery({
        page: 1,
        ord: "asc",
        category: "1",
        limit: 10,
      }))
    },
    [UPDATE_FEEDS]: (state, feeds) => {
      state.feeds = feeds
    },
    [UPDATE_FEED_QUERY]: (state, query) => {
      if (!(query instanceof shapes.FeedQuery)) throw 'invalid Feed Query'
      state.feedQuery = query
    }
  },
  actions: {
  },
  modules: {
  }
})

store.subscribe(({ type, payload }) => {
  if (type.startsWith("feedQuery/")) {
    (async () => {
      if (!(payload instanceof shapes.FeedQuery)) throw 'invalid Feed Query'
      const [{ data }, { category }] = await Promise.all(
        [
          commento.getFeeds(payload),
          commento.getCategoryNames(),
        ]
      )

      const categoryNames = category.reduce((acc, cur) =>
        (acc[cur.id] = cur.name, acc), {})

      const denormalizedData = data.map(item => {
        item.category_name = categoryNames[item.category_id]
        item.created_at = shapes.Feed.getFormatDate(item.created_at)
        item.updated_at = shapes.Feed.getFormatDate(item.updated_at)

        return new shapes.Feed(item)
      })

      store.commit(UPDATE_FEEDS, denormalizedData)
    })()
  }
});

export default store
