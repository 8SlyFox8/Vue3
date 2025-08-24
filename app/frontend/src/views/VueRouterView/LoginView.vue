<script setup>
import '@/components/TheShop/Modals/modal.css'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'

const router = useRouter()

const { defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    login: yup.string().required(),
    password: yup.string().required()
  }),
});

const [login, loginAttrs] = defineField('login')
const [password, passwordAttrs] = defineField('password')
const onSubmit = handleSubmit(onSuccess, onInvalidSubmit)

function onSuccess(values) {
    goToUserView()
}

function onInvalidSubmit({ values, errors, results }) {
    alert(JSON.stringify(errors, null, 2))
}

function goToUserView() {
  router.push({name: 'user', params: {userName: login.value}})
}
</script>

<template>
  <form @submit="onSubmit">
    <div class="login">
      <label>
          Логин
          <input
              v-model="login"
              v-bind="loginAttrs"
          />
      </label>
      <label>
          Пароль
          <input
              type="password"
              v-model="password"
              v-bind="passwordAttrs"
          />
      </label>
      <button>
          Войти
      </button>
    </div>
  </form>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
