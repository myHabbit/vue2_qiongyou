<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: "App",
  // mounted(){
  //   axios.get('/api/aj/getcitycode')
  //   .then(response=>{
  //     console.log(response.data)
  //   })
  //   .catch(error=>{
  //     console.log(error)
  //   })
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
