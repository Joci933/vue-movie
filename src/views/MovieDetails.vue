<template>
<div v-if="post.status_code !== 34" class="about">
  <div class="details-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="details">
            <div class="details-movie">
              <div class="img">
                <img v-bind:src="`http://image.tmdb.org/t/p/w185/${post.poster_path}`" alt="Card image">
              </div>
              <div class="content">
                <h2 class="name">{{post.title}}</h2>
                <div class="reviews">
                  <div class="rating clearfix">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <p class="review">({{post.vote_count}} Reviews(S)</p>
                </div>
                <ul class="info">
                  <li>Actor : Priti kapel, Justin orjun </li>
                  <li>Genre : Drama, Action</li>
                  <li>Release : {{post.release_date}}</li>
                  <li>Language : {{post.original_language}}</li>
                </ul>
                <div class="share">
                  <span class="label">Share:</span>
                  <ul class="social">
                    <li class="facebook">
                      <a href="#" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="twitter">
                      <a href="#" target="_blank">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="instagram">
                      <a href="#" target="_blank">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li class="pinterest">
                      <a href="#" target="_blank">
                        <i class="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li class="vimeo">
                      <a href="#" target="_blank">
                        <i class="fab fa-vimeo-v"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <router-link class="all trailer-preview" :to="{ name : 'home'}">
                  Back to home
                </router-link>
              </div>
            </div>
            <div class="details-content">
              <h2 class="title">Description :</h2>
              <p class="text">{{post.overview}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<h1 v-else>Oh no 😢, movie not found</h1>
</template>

<script>
export default {
  mounted() {
    fetch(`${process.env.VUE_APP_MOVE_API_URL}movie/${this.$route.query.mg}?api_key=${process.env.VUE_APP_MOVIE_DB_KEY}&language=${process.env.VUE_APP_MOVIE_API_LANG}`)
      .then(el => el.json())
      .then(result => {
        this.post = result;
      })
  },
  data() {
    return {
      apikey: process.env.VUE_APP_MOVIE_DB_KEY,
      moveId: this.$route.params.id,
      post: {}
    }
  }
}
</script>
