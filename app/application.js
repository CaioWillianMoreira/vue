new Vue ({
  el: '#app',
  template: `
    <div class="container">
      <div class="form-todo form-group">
        <h1>Comentários</h1>
        <hr>
        <input type="text" placeholder="nome" name="author" class="form-control">
        <br>
        <textarea placeholder="Comentário" name="message" class="form-control"></textarea>
        <br>
        <button v-on:click="addComment" type="submit" class="btn btn-primary">Comentar</button>
      </div>
      <div class="list-group">
        <div class="list-group-item" v-for="comment in comments">
          <span class="comment__author">Autor: <strong>{{comment.name}}</strong></span>
          <p>{{comment.message}}</p>
          <div>
            <a href="#" title="Excluir">Excluir</a>
          </div>
        </div>
      </div>
    </div>
  `,
  data () {
    return {
      comments: [
        {
          name: 'Caio',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
      ]
    }
  },
  methods: {
    addComment() {
      console.log("Cliquei!")
    }
  }
})

