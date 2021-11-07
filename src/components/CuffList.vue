<template>
<div class="wrapper">
  <div class="cufflinks">
    <div class="cufflink" v-for="cufflink in cufflinks" :key="cufflink.id">
      <div class="image">
        <img :src="'/images/'+cufflink.image">
      </div>
      <div class="column">
        <div class="info">
          <h1>{{cufflink.name}}</h1>
          <p>These high end cufflinks are inspired by: {{cufflink.source}}</p>
        </div>
        <div class="price">
          <h2>{{cufflink.price}}</h2>
          <button @click="purchase(cufflink)" class="auto">PURCHASE</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'CufflinkList',
  props: {
    cufflinks: Array
  },
  methods:{
   purchase(cufflink){
     this.$root.$data.selected.push(cufflink);
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

.cufflinks {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.cufflink {
  display: flex;
  margin: 10px;
  margin-top: 50px;
  width: 500px;
}

.cufflink img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.cufflink .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #000;
  padding: 10px 30px;
  height: 150px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 12px;
}


.price {
  display: flex;
  padding-left: 30px;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
  margin-right: 40px;
}

.auto {
  margin-left: auto;
}
</style>
