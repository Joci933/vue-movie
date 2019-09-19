<template>
  <div class="about">
    <h1>Second page</h1>
    {{apikey}}
  </div>
</template>

<script>


export default {
  data(){
    return {
      apikey: process.env.VUE_APP_MOVIE_DB_KEY
    }
  }
}
</script>

