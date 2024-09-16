<template>
  <div class="form-container">
    <h2>Форма для участия в программе «100 Лидеров»</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group" v-for="(field, index) in fields" :key="index">
        <label :for="field.id">{{ field.label }}</label>
        <input
          :type="field.type"
          :id="field.id"
          v-model="formData[field.id]"
          :placeholder="field.placeholder"
          :required="field.required"
          :maxlength="field.maxlength"
          @input="validateField(field.id)"
        />
        <span v-if="errors[field.id]" class="error">{{ errors[field.id] }}</span>
      </div>
      <button type="submit" class="submit-button">Отправить</button>
      <p class="consent-text">
        Нажимая на кнопку, я соглашаюсь на обработку персональных данных
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheFormBlock",
  data() {
    return {
      formData: {
        surname: '',
        name: '',
        patronymic: '',
        age: '',
        email: '',
        phone: '',
        telegram: '',
        city: '',
        specialty: ''
      },
      errors: {},
      fields: [
        { id: 'surname', label: 'Фамилия', type: 'text', placeholder: 'Иванов', required: true, maxlength: 50 },
        { id: 'name', label: 'Имя', type: 'text', placeholder: 'Иван', required: true, maxlength: 50 },
        { id: 'patronymic', label: 'Отчество', type: 'text', placeholder: 'Иванович', required: false, maxlength: 50 },
        { id: 'age', label: 'Возраст', type: 'number', placeholder: '22', required: true, maxlength: 2 },
        { id: 'email', label: 'Почта', type: 'email', placeholder: 'ivan@gmail.com', required: true, maxlength: 50 },
        { id: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (999) 999-99-99', required: true, maxlength: 50 },
        { id: 'telegram', label: 'Телеграмм (@...)', type: 'text', placeholder: '@Ivan', required: true, maxlength: 50 },
        { id: 'city', label: 'Ваш город', type: 'text', placeholder: 'Сочи', required: true, maxlength: 50 },
        { id: 'specialty', label: 'Ваша специальность', type: 'text', placeholder: 'Экономика и аналитика', required: true, maxlength: 50 }
      ]
    };
  },
  methods: {
    validateField(fieldId) {
      if (fieldId === 'telegram' && !this.formData.telegram.startsWith('@')) {
        this.errors.telegram = 'Телеграмм должен начинаться с @';
      } else {
        this.errors.telegram = '';
      }

      if (fieldId === 'age' && this.formData.age.length > 2) {
        this.formData.age = this.formData.age.slice(0, 2);
      }

      if (this.formData[fieldId].length > 50) {
        this.formData[fieldId] = this.formData[fieldId].slice(0, 50);
      }
    },
    handleSubmit() {
      if (Object.values(this.errors).some(error => error)) {
        alert('Пожалуйста, исправьте ошибки в форме.');
        return;
      }
      console.log('Form submitted:', this.formData);
      // Add form submission logic here
    }
  }
};
</script>

<style scoped>
.form-container {
  background-color: #1F59B0;
  padding: 40px 16px;
  border-radius: 40px;
  color: white;
  //max-width: 400px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  box-sizing: border-box;
  color: #333;
  background-color: white;
}

.error {
  color: #ff3366;
  font-size: 12px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #ff3366;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
}

.consent-text {
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
}
</style>
