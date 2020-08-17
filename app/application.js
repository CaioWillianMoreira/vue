new Vue ({
  el: '#app',
  template: `
    <div class="container">
      <div class="form-todo form-group">
        <h1>Comentários</h1>
        <hr>
        <input type="text" placeholder="nome" name="author" v-model="name" class="form-control">
        <br>
        <textarea placeholder="Comentário" name="message" v-model="message" class="form-control"></textarea>
        <br>
        <button v-on:click="addComment" type="submit" class="btn btn-primary">Comentar</button>
      </div>
      <div class="list-group">
        <div class="list-group-item" v-for="(comment, index) in comments">
          <span class="comment__author">Autor: <strong>{{comment.name}}</strong></span>
          <p>{{comment.message}}</p>
          <div>
            <a href="#" title="Excluir" v-on:click.prevent="removeComments(index)">Excluir</a>
          </div>
        </div>
      </div>
    </div>
  `,
  data () {
    return {
      comments: [],
      name: '',
      message: '',
    }
  },
  methods: {
    addComment() {
      if (this.name.trim() === '' || this.message.trim() === '') {
        return
      }
      this.comments.push({
        name: this.name,
        message: this.message
      })

      this.name = ''
      this.message = ''
    },
    removeComments (index) {
      this.comments.splice(index, 1)
    }
  }
})

