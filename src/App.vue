<template>
<div id="app">
  <div id="menu">
    <div id="side">
      <router-link to="/">
        <div class="menu-item">
          <p>Watches</p>
        </div>
      </router-link>
    </div>
    <div id="brand">
      <router-link to="/">
        <img src="/watchLogo.jpg">
      </router-link>
    </div>
    <div id="middle">
      <router-link to="/cufflinks">
        <div class="menu-item">
          <p>Cufflinks</p>
        </div>
      </router-link>
    </div>
    <div id="right">
    <router-link to="/purchase">
      <div class="menu-item">
        <p>Purchase</p>
      </div>
    </router-link>
    </div>
  </div>
  <router-view />
  <div class="footer">
    <a href="https://github.com/tfells/creativeProject3">GITHUB LINK</a>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "brand middle side right";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  padding-top: 65px;
  margin-left: 110px;
  display: flex;
  justify-content: flex-start;
}

#right {
  padding-top: 65px;
  display: flex;
  justify-content: center;
}

#middle {
  padding-top: 65px;
  display: flex;
  justify-content: center;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
