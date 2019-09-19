<template>
<div class="single-top-movie">
  <div class="img">
    <router-link class="trailer-preview" :to="{ name : 'movie', params: { id: cardDetail.id, slug:encodeURL(cardDetail.title) }}">
      <img class="card-img" v-bind:src="`http://image.tmdb.org/t/p/w185/${cardDetail.poster_path}`" alt="Card image">
    </router-link>
  </div>
  <span class="view-counter">{{cardDetail.vote_count}} Votes</span>

  <div class="content">
    <h2 class="name">
      <router-link class="trailer-preview" :to="{ name : 'movie', params: { id: cardDetail.id, slug:encodeURL(cardDetail.title) }}">
        {{cardDetail.title}}
      </router-link>
    </h2>
    <div class="rating clearfix">
      {{roundRate(cardDetail.vote_average)}}
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <div class="star star-half"></div>
    </div>
    <p class="date">{{cardDetail.release_date}}</p>
    <p class="duration">Total ratings:{{cardDetail.vote_count}}</p>
  </div>

</div>
</template>

<script>
import getSlug from 'speakingurl';

export default {
  name: 'MovieCard',
  props: {
    cardDetail: Object
  },
  methods: {
    encodeURL: url => {
      return getSlug(url);
    },
    roundRate: rating => {
      return Math.round( (rating) )
    }
  }
};
</script>
