<template>
<div class="container">
  <div class="row">
    <div class="movieCardWrapper" v-for="data in result" v-bind:key="data.id">
      <MovieCard v-bind:cardDetail="data" />
    </div>
  </div>
</div>
</template>

<script>
import MovieCard from './MovieCard'

export default {
  name: 'SearchList',
  components: {
    MovieCard
  },
  props: {
    result: Array
  }
};
</script>
