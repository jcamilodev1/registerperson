<template>
  <section>
    <h1>Tabla Usuarios</h1>
    <article class="table">
      <div>
        <p>Id</p>
        <p>Nombre(s)</p>
        <p class="last_name">Apellido(s)</p>
        <p class="email">Email</p>
        <p class="birthday">Fecha nacimiento</p>
      </div>
      <div v-for="element in data" :key="element.id">
        <p>{{ element.id }}</p>
        <p>{{ element.first_name }}</p>
        <p class="last_name">{{ element.last_name }}</p>
        <p class="email">{{ element.email }}</p>
        <p class="birthday">{{ element.birthday }}</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "TableUser",
  setup(props, { root }) {
    let data = JSON.parse(localStorage.getItem("personData"));
    return {
      data,
    };
  },
};
</script>

<style scoped lang="scss">
section {
  > h1 {
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    margin-bottom: 20px;
    color: white;
  }
  .table {
    max-height: 600px;
    overflow-y: scroll;
    @media (max-width: 700px){
      max-height: 100%;
      overflow: auto;
    }
    &::-webkit-scrollbar {
      width: 8px; 
      height: 8px; 
    }
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #b3b3b3;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-thumb:active {
      background-color: #999999;
    }
    div {
      font-family: "Roboto", sans-serif;
      font-size: 15px;
      color: white;
      display: grid;
      grid-template-columns: 40px 100px 100px auto 130px;
      @media (max-width: 700px){
          grid-template-columns: 40px 100px 100px 100px;
        }
      &:first-child {
        p {
          border-top: 1px solid rgb(255, 255, 255);
        }
      }
      p {
        min-height: 40px;
        border-right: 1px solid rgb(255, 255, 255);
        border-bottom: 1px solid rgb(255, 255, 255);
        padding-left: 5px;
        padding-top: 5px;
        overflow-wrap: break-word;
        &:first-child {
          border-left: 1px solid rgb(255, 255, 255);
        }
      }
      .birthday{
        @media (max-width: 700px){
          display: none;
        }
      }
    }
  }
}
</style>