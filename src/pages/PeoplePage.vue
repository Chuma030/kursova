<script>
import {defineComponent} from "vue";
import axios from "axios";
import AddPersonModal from "@/components/AddPersonModal.vue";

export default defineComponent({
  components: {AddPersonModal},
  data() {
    return {
      people: []
    }
  },
  methods: {
    async getPeople() {
      let result = await axios.get("/people")
      this.people = result.data
    }
  },

  mounted() {
    this.getPeople()
  }
});
</script>

<template>
  <div class="container">
      <div v-for="person in people" class="card" style="width: 18rem;">
      <img class="card-img-top" :src="person.img_url" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ person.name }} {{ person.surname }}</h5>
        <p class="card-text">{{ person.description.slice(0, 300) + '...' }}</p>
        <a :href="'/person/' + person.id" class="btn btn-primary">Передивитися</a>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Ім'я Прізвище</h5>
        <p class="card-text">Опис</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Добавити
        </button>
      </div>
    </div>

  </div>

  <add-person-modal></add-person-modal>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  margin-top: 50px;
  background-color: #ddd;
  padding: 20px;
  text-align: center;
}
</style>