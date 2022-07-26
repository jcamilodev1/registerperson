<template>
  <article>
    <label :for="name">{{ holder }}</label>
    <input
      :type="type"
      :placeholder="holder"
      :id="name"
      :name="name"
      v-model="data"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </article>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

export default {
  name: "Input",
  props: {
    name: String,
    holder: String,
    type: String,
    modelValue: String,
    limpiar: Boolean,
  },
  
  emits: ["update:modelValue"],
  setup(props, context) {
    const data = ref("");
    const { limpiar: limpiarData } = toRefs(props);
    watch(limpiarData, () => {
      data.value = null;
    });

    return {
      data,
      limpiarData,
    };
  },
};
</script>

<style scoped>
article {
  display: grid;
  font-family: "Roboto", sans-serif;
}
article label {
  margin-bottom: 10px;
  color: white;
}
article input {
  padding: 8px 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid rgb(255, 255, 255);
  color: white;
  background: none;
  outline: none;
}
article input::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
input::placeholder {
  color: white;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>