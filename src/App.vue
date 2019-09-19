<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/top-rated">Top rated movies</router-link> | 
      <router-link to="/upcoming">Upcoming</router-link>
    </div>
    <router-view/>
  </div>
</template>
