<template>
  <section>
    <h1>Registro</h1>
    <article>
      <Input type="text" name="name" holder="Nombre(s)" v-model="form.first_name"></Input>
      <Input type="text" name="lastName" holder="Apellido(s)" v-model="form.last_name"></Input>
      <Input type="date" name="birth" holder="Fecha nacimiento" v-model="form.birthday"></Input>
      <Input type="Email" name="email" holder="Email" v-model="form.email"></Input>
      <button>Enviar datos</button>
    </article>
  </section>
</template>

<script>
import Input from '@/components/inputs/Input.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'Form',
  components: {
    Input
  },
  setup(props, context) {
    const form = ref({})
    const name = ref('')
    return {
      form,
      name
    }
  }
}
</script>

<style scoped>
  section > h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    margin-bottom: 20px;
    color: white;
  }
  section > article{
    padding: 20px;
    border: 1px solid white;
    border-radius: 8px;
  }
  section > article button{
    width: 40%;
    padding: 8px 10px;
    border-radius: 8px;
    border: none;
    outline: none;
    color: white;
    font-weight: 700;
    background-color: rgb(50, 139, 87);
    cursor: pointer;
    transition: all 1s;
  }
  section > article button:hover{
    background-color: rgb(28, 85, 52);
  }
</style>