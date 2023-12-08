<script>
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      person: {
        name: '',
        surname: '',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png',
        description: ''
      }
    }
  },

  methods: {
    async createPerson() {
      await axios.post('/people', this.person)
      this.$router.go()
    }
  }
});

</script>

<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Добавити</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <img class="card-img-top" :src="person.img_url" alt="Card image cap">
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Ім'я</span>
            <input v-model="person.name" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Прізвище</span>
            <input v-model="person.surname" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
          <div class="input-group">
            <span class="input-group-text">Опис</span>
            <textarea v-model="person.description" class="form-control" aria-label="With textarea"></textarea>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Зображення посилання</span>
            <input v-model="person.img_url" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
          <button type="button" @click="createPerson" class="btn btn-primary">Зерегти</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>