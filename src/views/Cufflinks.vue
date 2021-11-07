<template>
<div>
  <CuffList :cufflinks="cufflinks" />
</div>
</template>

<script>
import CuffList from "../components/CuffList.vue"
export default {
  name: 'Cufflinks',
  components: {
    CuffList
  },
  data() {
    return {
    }
  },
  computed: {
    cufflinks() {
      return this.$root.$data.cufflinks;
    }
  },
}
</script>
