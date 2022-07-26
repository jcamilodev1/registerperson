<template>
  <section>
    <h1>Registro</h1>
    <article>
      <div :class="{ error: v$.first_name.$errors.length }">
        <Input
          type="text"
          name="name"
          holder="Nombre(s)"
          v-model="form.first_name"
          :limpiar="limpiar"
        ></Input>
        <div
          class="input-errors"
          v-for="error of v$.first_name.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">Campo requerido</div>
        </div>
      </div>
      <div :class="{ error: v$.last_name.$errors.length }">
        <Input
          type="text"
          name="lastName"
          holder="Apellido(s)"
          v-model="form.last_name"
          :limpiar="limpiar"
        ></Input>
        <div
          class="input-errors"
          v-for="error of v$.last_name.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">Campo requerido</div>
        </div>
      </div>
      <div :class="{ error: v$.birthday.$errors.length }">
        <Input
          type="date"
          name="birth"
          holder="Fecha nacimiento"
          v-model="form.birthday"
          :limpiar="limpiar"
        ></Input>
        <div
          class="input-errors"
          v-for="error of v$.birthday.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">Campo requerido</div>
        </div>
      </div>
      <div :class="{ error: v$.email.$errors.length }">
        <Input
          type="Email"
          name="email"
          holder="Email"
          v-model="form.email"
          :limpiar="limpiar"
        ></Input>
        <div
          class="input-errors"
          v-for="error of v$.email.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">Campo requerido</div>
        </div>
      </div>
      <button @click="addForm">Enviar datos</button>
    </article>
  </section>
</template>

<script>
import Input from "@/components/inputs/Input.vue";
import { reactive, ref } from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { computed } from "@vue/runtime-core";
import { notify } from "@kyvg/vue3-notification";
export default {
  name: "Form",
  components: {
    Input,
  },
  setup(props, { root }) {
    let form = reactive({
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    const limpiar = ref(false);
    
    const rules = computed(() => {
      return {
        first_name: { required }, 
        last_name: { required }, 
        email: { required }, 
        birthday: { required }, 
      };
    });
    const v$ = useVuelidate(rules, form);
    const addForm = async () => {
      v$.value.$validate()
      if (!v$.value.$error) {
        let data = JSON.parse(localStorage.getItem("personData"));
        form.id = data.length + 1;
        data.push(form);
        localStorage.setItem("personData", JSON.stringify(data));
        form = {
          id: 0,
          email: null,
          first_name:null,
          last_name:  null,
          birthday: null
        };
        notify({
          title: "Usuario guardado con exito",
          type: 'success',
        });
        console.log(data)
        limpiar.value = !limpiar.value;
        v$.value.$touch()
      } else {
        notify({
          title: "Rellena los campos obligarotios",
          type: 'error',
        });
      }
    };

    return {
      form,
      limpiar,
      v$,
      addForm,
    };
  },
};
</script>

<style scoped>
section > h1 {
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  margin-bottom: 20px;
  color: white;
}
section > article {
  padding: 20px;
  border: 1px solid white;
  border-radius: 8px;
}
section > article button {
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
section > article button:hover {
  background-color: rgb(28, 85, 52);
}
.error-msg {
  font-family: "Roboto", sans-serif;
  color: rgb(253, 216, 216);
  font-size: 12px;
  margin-bottom: 5px;
}
@media (max-width: 700px){
section > article button {
  width: 100%;
  
}
}
</style>