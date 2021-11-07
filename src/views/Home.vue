<template>
<div>
  <WatchList :watches="watches" />
</div>
</template>

<script>
import WatchList from "../components/WatchList.vue"
export default {
  name: 'Home',
  components: {
    WatchList
  },
  data() {
    return {
    }
  },
  computed: {
    watches() {
      return this.$root.$data.watches;
    }
  },
}
</script>
