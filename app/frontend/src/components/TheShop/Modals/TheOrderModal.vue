<script setup>
import '@/components/TheShop/Modals/modal.css'
import { httpbin } from '@/services/api'
import { useForm, FieldArray, Field } from 'vee-validate'
import * as yup from 'yup';

const theOrderModalProps = defineProps(['checkProducts'])

const isVisabilityTheOrderModal = defineModel('isVisabilityTheOrderModal')

function closeTheOrderModal() {
    isVisabilityTheOrderModal.value = false
}

function parseDateOfBirth(value, originalValue) {
  if (originalValue instanceof Date) {
    return originalValue;
  }

  const parts = originalValue.split('-');
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const date = new Date(year, month, day);
    if (!isNaN(date.getTime())) {
      return date;
    }
  }
  return new Date(NaN);
}

function parseDateOfCard(value, originalValue) {
  if (originalValue instanceof Date) {
    return originalValue;
  }

  const parts = originalValue.split('/');
  if (parts.length === 2) {
    const month = parseInt(parts[0], 10) - 1;
    const year = parseInt(parts[1], 10);
    const date = new Date(year, month);
    if (!isNaN(date.getTime())) {
      return date;
    }
  }
  return new Date(NaN);
}

const { defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required(),
    dateOfBirth: yup.date().transform(parseDateOfBirth).required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    country: yup.string().required(),
    cardNumber: yup.string().length(16).required(),
    cardDate: yup.date().transform(parseDateOfCard).required(),
    cvc: yup.string().length(3).required(),
    agreement: yup.boolean().required(),
    productIds: yup.array().min(1).required()
  }),
});

const [name, nameAttrs] = defineField('name')
const [dateOfBirth, dateOfBirthAttrs] = defineField('dateOfBirth')
const [email, emailAttrs] = defineField('email')
const [address, addressAttrs] = defineField('address')
const [country, countryAttrs] = defineField('country')
const [cardNumber, cardNumberAttrs] = defineField('cardNumber')
const [cardDate, cardDateAttrs] = defineField('cardDate')
const [cvc, cvcAttrs] = defineField('cvc')
const [agreement, agreementAttrs] = defineField('agreement')
const [productIds, productIdsAttrs] = defineField('productIds')
const onSubmit = handleSubmit(onSuccess, onInvalidSubmit)

function onSuccess(values) {
    sendOrder(values)
    closeTheOrderModal()
}

function onInvalidSubmit({ values, errors, results }) {
    alert(JSON.stringify(errors, null, 2))
}

function sendOrder(values) {
    httpbin.post('/post', values).then(
        () => {
            alert("Товар создан")
        }
    ).catch(
        (error) => {
            alert(error)    
        }
    )
}
</script>

<template>
    <div class="modal-background">
        <div class="modal">
            <div class="header-modal">
                <button
                    @click="closeTheOrderModal"
                >
                    Закрыть
                </button>
            </div>
            <form @submit="onSubmit">
                <div class="body-modal">
                    <label>
                        ФИО
                        <input
                            v-model="name"
                            v-bind="nameAttrs"
                        />
                    </label>
                    <label>
                        Дата рождения
                        <input
                            type="date"
                            v-model="dateOfBirth"
                            v-bind="dateOfBirthAttrs"
                        />
                    </label>
                    <label>
                        Email
                        <input
                            v-model="email"
                            v-bind="emailAttrs"
                        />
                    </label>
                    <label>
                        Адрес
                        <input
                            v-model="address"
                            v-bind="addressAttrs"
                        />
                    </label>
                    <label>
                        Страна
                        <select
                            v-model="country"
                            v-bind="countryAttrs"
                        >
                            <option disabled >Выберите страну</option>
                            <option>Россия</option>
                            <option>Не Россия</option>
                        </select>
                    </label>
                    <label>
                        Номер карты
                        <input
                            v-model="cardNumber"
                            v-bind="cardNumberAttrs"
                        />
                    </label>
                    <label>
                        Месяц/Год
                        <input
                            v-model="cardDate"
                            v-bind="cardDateAttrs"
                            placeholder="MM/YYYY"
                        />
                    </label>
                    <label>
                        CVC
                        <input
                            v-model="cvc"
                            v-bind="cvcAttrs"
                        />
                    </label>
                    <label>
                        Со всем согласен
                        <input
                            type="checkbox"
                            v-model="agreement"
                            v-bind="agreementAttrs"
                        />
                    </label>
                    <FieldArray
                        name="productIds"
                        v-model="productIds"
                        v-bind="productIdsAttrs"
                    >
                        <div
                            v-for="(productId, index) in theOrderModalProps.checkProducts"
                            :key="productId"
                        >
                            <Field
                                type="hidden"
                                :name="`productIds[${index}]`"
                                :value="productId"
                            />
                        </div>
                    </FieldArray>
                    <button>
                        Заказать
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>
