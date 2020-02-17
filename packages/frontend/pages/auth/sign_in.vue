<template>
  <vc-container>
    <h3>Welcome to Vue</h3>
    <form @submit="handleSubmit">
      <vc-input
        label="Email"
        name="email"
        v-model="form.email"
        class="mb-3"
      />
      <vc-input
        label="Password"
        name="password"
        type="password"
        v-model="form.password"
        class="mb-3"
      />
      <vc-button
        variant="primary"
        block
      >
        Sign in
      </vc-button>
    </form>
  </vc-container>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    handleSubmit(e: Event) {
      e.preventDefault()
      console.log('hello world', this.form)
    },
  },
})
</script>
