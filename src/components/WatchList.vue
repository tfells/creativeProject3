<template>
<div class="wrapper">
  <div class="watches">
    <div class="watch" v-for="watch in watches" :key="watch.id">
      <div class="image">
        <img :src="'/images/'+watch.image">
      </div>
      <div class="info">
        <h1>{{watch.name}}</h1>
        <p>Produced mainly with: {{watch.metal}}</p>
      </div>
      <div class="price">
        <h2>{{watch.price}}</h2>
      </div>
      <div class="buyNow">
        <button @click="purchase(watch)" class="auto">PURCHASE</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'WatchList',
  props: {
    watches: Array
  },
  methods:{
   purchase(watch){
     this.$root.$data.selected.push(watch);
     this.$router.push('/purchase');
   }
  }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.watches {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.watch {
  margin: 10px;
  margin-top: 50px;
  width: 600px;
  padding-bottom: 60px;
}

.watch img {
  height: 600px;
  width: 500px;
  object-fit: cover;
}

.watch .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #000;
  padding: 3px 30px;
  height: 80px;
  text-align: center;
}

.info h1 {
  font-size: 19px;
}

.info h2 {
  font-size: 17px;
}

.info p {
  margin: 0px;
  font-size: 16px;
}


.price {
  text-align: center;
}

.buyNow {
  margin-left: 253px;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
