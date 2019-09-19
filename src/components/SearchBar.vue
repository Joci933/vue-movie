<template>
<div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <form class="card card-sm">
          <div class="card-body row no-gutters align-items-center">
            <div class="col-auto">
              <i class="fas fa-search h4 text-body"></i>
            </div>
            <div class="col">
              <input v-model.lazy="filmKeyword" v-debounce="400" class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords">
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
  <SearchList v-bind:result="searchResults" />
</div>
</template>

<script>
import getSlug from 'speakingurl';
import debounce from 'v-debounce';
import SearchList from './SearchList'

export default {
  name: 'SearchBar',
  components: {
    SearchList
  },
  data() {
    return {
      filmKeyword: null,
      searchResults: []
    }
  },
  watch: {
    async filmKeyword(after) {
      const getList = await this.getSearchResult(after)
      this.searchResults = getList
    }
  },
  methods: {
    encodeURL: (url) => {
      return getSlug(url);
    },
    getSearchResult: async (param) => {
      return fetch(`${process.env.VUE_APP_MOVE_API_URL}search/movie?api_key=${process.env.VUE_APP_MOVIE_DB_KEY}&language=${process.env.VUE_APP_MOVIE_API_LANG}&query=${param}&page=1`)
        .then(el => el.json())
        .then(result => {
          if ('results' in result) {
            return result.results;
          }
        })
    }
  },
  directives: {
    debounce
  }
};
</script>
