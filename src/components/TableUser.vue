<template>
  <section>
    <h1>Tabla Usuarios</h1>
    <article class="table">
      <div>
        <p>Id</p>
        <p>Nombre(s)</p>
        <p>Apellido(s)</p>
        <p>Email</p>
        <p>Fecha nacimiento</p>
      </div>
      <div>
        <p>555</p>
        <p>Juan camilo</p>
        <p>Garcia Ardila</p>
        <p>prueba@prueba.com</p>
        <p>13/1999/08</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "TableUser",
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
    div {
      font-family: "Roboto", sans-serif;
      font-size: 15px;
      color: white;
      display: grid;
      grid-template-columns: 40px 100px 100px auto 130px;
      &:first-child{
        p{
          border-top: 1px solid rgb(255, 255, 255);
        }
      }
      p{
        height: 40px;
        border-right: 1px solid rgb(255, 255, 255);
        border-bottom: 1px solid rgb(255, 255, 255);
        padding-left: 5px;
        padding-top: 5px;
        &:first-child{
          border-left: 1px solid rgb(255, 255, 255);
        }
      }
    }
  }
}
</style>