<template>
<div class="wrapper">
  <div class="itemToPurchase">
    <div v-if="this.$root.$data.selected.length === 0" class="isEmpty">
      <h1>Go purchase some more items!</h1>
    </div>
    <div class="selected" v-for="item in this.$root.$data.selected" :key="item.id">
      <div class="image">
        <img :src="'/images/'+item.image">
      </div>
      <div class="info">
        <h1>Are you sure you would like to purchase "{{item.name}}" for {{item.price}}?</h1>
      </div>
      <div class="buttons">
        <button @click="yes(item)" class="auto">YES</button>
        <button @click="no(item)" class="auto">NO</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'CufflinkList',
  props: {
    selected: Array
  },
  methods:{
   yes(item){
     const index = this.$root.$data.selected.indexOf(item);
     if (index > -1) {
       this.$root.$data.selected.splice(index, 1);
     }
   },
   no(item){
     const index = this.$root.$data.selected.indexOf(item);
     if (index > -1) {
       this.$root.$data.selected.splice(index, 1);
     }
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

.itemToPurchase {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.selected {
  margin: 10px;
  margin-top: 50px;
  width: 800px;
}

.selected img {
  height: 600px;
  width: 500px;
  object-fit: cover;
}

.selected .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #000;
  padding: 10px 30px;
  height: 150px;
  text-align: center;
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

.buttons {
  align-content: center;
  margin-left: 285px;
  margin-top: -70px;
}
button {
  height: 50px;
  width: 80px;
  background: #000;
  color: white;
  border: none;
  margin-right: 40px;
}

.auto {
  margin-left: auto;
}
</style>
