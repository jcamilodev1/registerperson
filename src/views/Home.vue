<template>
  <section id="Home">
    <article>
      <router-link to="/">Registro</router-link>
      <router-link to="/usuarios">Usuarios</router-link>
      <router-view></router-view>
    </article>
  </section>
</template>

<script>

export default {
  name: 'Home',
  setup(){
    return{
      
    }
  }
}
</script>

<style scoped>
#Home{
    min-height: 100vh;
    background: rgb(63,94,251);
    background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
#Home > article{
  width: 60%;
  max-width: 600px;
}
#Home > article a {
  color: white;
  text-decoration: none;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  width: 50%;
  margin-bottom: 20px;
}
#Home > article a:hover{
  text-decoration: underline;
}
</style>