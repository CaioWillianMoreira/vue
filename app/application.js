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
      <button type="submit" class="btn btn-primary">Comentar</button>
    </div>
    <div class="list-group">
      <div class="list-group-item">
        <span class="comment__author">Autor: <strong>Caio</strong></span>
        <p>Mensagem de texto</p>
        <div>
          <a href="#" title="Excluir">Excluir</a>
        </div>
      </div>
    </div>
  </div>
  `
})
