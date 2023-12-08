<script>
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  props: {
    person: {
      id: 0,
      name: '',
      surname: '',
      img_url: '',
      description: ''
    }
  },

  data() {
    return {
      person: {}
    }
  },

  mounted() {
    this.getPerson()
  },

  methods: {
    async getPerson() {
      let result = await axios.get('/people/' + this.$route.params.id)
      this.person = result.data
    },

    async deletePerson() {
      await axios.delete('/people/' + this.person.id)
      this.$router.push("/people")
    }
  }
})
</script>

<template>
  <div class="container">
    <div class="content" v-if="person">
      <div class="center">
        <img :src="person.img_url" alt="">
        <h1>{{ person.name }} {{ person.surname }}</h1>

        <p>{{ person.description }}</p>

        <button class="btn btn-danger" @click="deletePerson">Видалити</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-height: 500px;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}

.content {
  display: flex;
  width: 100%;
  justify-content: center;
}

.center {
  text-align: center;
}
</style>