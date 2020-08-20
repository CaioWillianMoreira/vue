<template>
  <div class="container">
    <FormTodo />
    <div class="list-group">
      <div class="list-group-item" v-bind:key=index v-for="(comment, index) in allComments">
        <span class="comment__author">Autor: <strong>{{comment.name}}</strong></span>
        <p>{{comment.message}}</p>
        <div>
          <a href="#" title="Excluir" v-on:click.prevent="removeComments(index)">Excluir</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormTodo from './FormTodo'
export default {
  components: {
    FormTodo
  },
  data () {
    return {
      comments: []
    }
  },
  methods: {
    removeComments (index) {
      this.comments.splice(index, 1)
    }
  },
  computed: {
    allComments() {
      return this.comments.map(comment => ({
        ...comment,
        name: comment.name.trim() === '' ? 'Anônimo' : comment.name
      }))
    }
  },
  watch: {
    comments(val) {
      console.log('val', val)
    }
  }
}
</script>
