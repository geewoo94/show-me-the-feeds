import Vue from 'vue'
import Vuex from 'vuex'

import shapes from '../shapes'
import FeedQuery from '../shapes/FeedQuery'
import { commento } from '../utils/api'

Vue.use(Vuex)

export const INIT_FEEDS = 'feeds/INIT_FEEDS'
export const GET_FEEDS = 'feeds/GET_FEEDS'
export const UPDATE_FEEDS = 'feeds/UPDATE_FEEDS'
export const UPDATE_FEED_QUERY = 'feedQuery/UPDATE_FEED_QUERY'

const store = new Vuex.Store({
  state: {
    feeds: [],
    feedQuery: {
      page: 1,
      ord: "asc",
      category: "1",
      limit: 10,
    }
  },
  mutations: {
    [UPDATE_FEEDS]: (state, feeds) => {
      state.feeds = feeds
    },
    [UPDATE_FEED_QUERY]: (state, query) => {
      if (!(query instanceof shapes.FeedQuery)) throw 'invalid Feed Query'
      state.feedQuery = query
    }
  },
  actions: {
    [INIT_FEEDS]: async (state) => {
      const query = new FeedQuery()
      state.dispatch(GET_FEEDS, query)
    },
    [GET_FEEDS]: async (state, query) => {
      if (!(query instanceof FeedQuery)) throw 'invalid Feed Query'

      const [{ data }, { category }] = await Promise.all(
        [
          commento.getFeeds(query),
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
      store.commit(UPDATE_FEED_QUERY, query)
    },
  },
  modules: {
  },
  getters: {
    isAscending: (state) => state.feedQuery.ord === 'asc',
    feeds: (state) => state.feeds,
  }
})

export default store
