<template>
  <main class="bg-[url('/src/assets/backgroundLogin2023.jpg')] bg-no-repeat bg-cover bg-center">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 min-h-screen">
      <Form @submit="login">
        <div class="space-y-12 flex justify-center">
          <div class="max-w-sm rounded-xl overflow-hidden bg-[#e8e8e8] shadow-lg m-16 p-8">
            <h2 class="text-3xl font-semibold leading-7 text-gray-900 text-center">
              Inicia sesión
            </h2>
            <div class="flex justify-center">
              <div class="mt-10 grid grid-cols-1 gap-x-6 sm:grid-cols-12">
                <div class="sm:col-span-12">
                  <label
                    for="username"
                    class="block text-sm font-medium leading-6 text-gray-500 ml-2"
                    >Usuario</label
                  >
                  <div class="mt-2">
                    <div
                      class="bg-white flex rounded-full shadow-sm ring-1 ring-inset ring-[#002F87] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                    >
                      <Field
                        type="text"
                        v-model="username"
                        :rules="{ required: true }"
                        name="username"
                        class="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <ErrorMessage name="username" v-slot="{ message }">
                    <p class="text-red-600 pl-4">El campo no puede estar vacio</p>
                  </ErrorMessage>
                </div>

                <div class="sm:col-span-12">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-500 ml-2"
                    >Contraseña</label
                  >
                  <div>
                    <div
                      class="bg-white flex rounded-full shadow-sm ring-1 ring-inset ring-[#002F87] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                    >
                      <Field
                        type="password"
                        name="password"
                        v-model="password"
                        :rules="{ required: true }"
                        class="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <ErrorMessage name="password" v-slot="{ message }">
                    <p class="pl-4 text-red-600">El campo no puede estar vacio</p>
                  </ErrorMessage>
                </div>

                <div class="sm:col-span-12 flex justify-center mt-2">
                  <button
                    type="submit"
                    class="px-8 rounded-full bg-[#002F87] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00000014] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Ingresar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'

defineRule('required', required)

const username = ref('')
const password = ref('')
const store = useStore()
const router = useRouter()

const login = () => {
  store
    .dispatch('login', {
      username: username.value,
      password: password.value
    })
    .then(() => {
      router.push({ name: 'home' })
    })
}
</script>
