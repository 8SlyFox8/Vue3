<script setup>
import '@/components/TheShop/Modals/modal.css'
import { useForm } from 'vee-validate'
import * as yup from 'yup';

const isVisabilityTheNewProductModal = defineModel('isVisabilityTheNewProductModal')

function closeTheNewProductModal() {
    isVisabilityTheNewProductModal.value = false
}

const { defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    title: yup.string().required(),
    description: yup.string().required()
  }),
});

const [title, titleAttrs] = defineField('title')
const [description, descriptionAttrs] = defineField('description')
const onSubmit = handleSubmit(onSuccess, onInvalidSubmit)

function onSuccess(values) {
    alert("Типа отправлены")
}

function onInvalidSubmit({ values, errors, results }) {
    alert(JSON.stringify(errors, null, 2))
}
</script>

<template>
    <div class="modal-background">
        <div class="modal">     
            <div class="header-modal">
                <button
                    @click="closeTheNewProductModal"
                >
                    Закрыть
                </button>
            </div>
            <form @submit="onSubmit">
                 <div class="body-modal">
                    <label>
                        Имя товара
                        <input
                            v-model="title"
                            v-bind="titleAttrs"
                        />
                    </label>
                    <label>
                        Описание товара
                        <textarea
                            v-model="description"
                            v-bind="descriptionAttrs"
                        />
                    </label>
                    <button>
                        Создать товар
                    </button>
                </div>
            </form>
        </div>
    </div>    
</template>

<style scoped>
</style>
