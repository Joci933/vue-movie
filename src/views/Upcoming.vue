<template>
<div class="home">
  <PopularMovies v-bind:posts="posts" msg="Routing" />
</div>
</template>

<script>
import PopularMovies from '../components/PopularMovies.vue';

export default {
  name: 'Upcoming',
  components: {
    PopularMovies
  },
  mounted() {
    fetch(`${process.env.VUE_APP_MOVE_API_URL}movie/upcoming?api_key=${process.env.VUE_APP_MOVIE_DB_KEY}&language=${process.env.VUE_APP_MOVIE_API_LANG}&page=1`)
      .then(el => el.json())
      .then(result => {
        this.posts = result.results;
      })
  },
  data() {
    return {
      apikey: process.env.VUE_APP_MOVIE_DB_KEY,
      posts: []
    }
  },
};
</script>
