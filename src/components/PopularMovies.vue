<template>
<div class="container">
  <div class="row ">
    <div class="movieCardWrapper" v-for="post in posts" :key="post.key">
      <MovieCard v-bind:cardDetail="post" />
    </div>
  </div>
</div>
</template>

<script>
import getSlug from 'speakingurl';
import MovieCard from './MovieCard'

export default {
  name: 'PopularMovies',
  components: {
    MovieCard
  },
  props: {
    msg: String,
    posts: Array
  },
  methods: {
    encodeURL: (url) => {
      return getSlug(url);
    }
  }
};
</script>
