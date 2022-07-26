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
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Home",

  setup() {
    const getperson = async () => {
      const data = await fetch(`https://reqres.in/api/users?page=1`);
      const res = await data.json();
      return res.data;
    };
    onMounted(async () => {
      const data = await getperson();
      if (localStorage.getItem("personData") === null) {
        localStorage.setItem("personData", JSON.stringify(data));
      }
    });
    return {};
  },
};
</script>

<style scoped>
#Home {
  min-height: 100vh;
  background: rgb(63, 94, 251);
  background: linear-gradient(
    90deg,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 700px) {
  #Home {
    padding-top: 30px;
  }
}
#Home > article {
  width: 60%;
  max-width: 600px;
}
#Home > article a {
  color: white;
  text-decoration: none;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  text-align: center;
  width: 50%;
  margin-bottom: 20px;
}
#Home > article a:hover {
  text-decoration: underline;
}
@media (max-width: 700px) {
  #Home > article {
    width: 90%;
    max-width: 600px;
  }
}
</style>