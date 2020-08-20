<template>
  <div class="form-todo form-group">
    <h1>Comentários</h1>
    <hr>
    <input type="text" placeholder="nome" name="author" v-model="name" class="form-control">
    <br>
    <textarea placeholder="Comentário" name="message" v-model="message" class="form-control"></textarea>
    <br>
    <button v-on:click="addComment" type="submit" class="btn btn-primary">Comentar</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        message: ''
      }
    },
    methods: {
      addComment() {
        if (this.message.trim() === '') {
          return
        }

        this.name = ''
        this.message = ''
      }
    }
  }
</script>
