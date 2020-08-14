## Curso vueJs

- Instancia um componente vue

```
new Vue ({
})
```
- Propriedade __el__ diz onde é o container que a sua aplicação está inserida, parecido com "querySelector"

```
  el: '#pp'
```

- Template que será ultilizado

```
template: `seu HTML`
```
__ex__ :

```
new Vue ({
  el: '#app',
  template: `<html>Seu HTML</html>`
})
```
- A função data() vai retornar um objeto disponível dentro do template

Escrita convencional
```
data: function () {
    return {
      comments: [
        {
          name: 'Caio',
          message: 'Lorem Ipsum'
        }
      ]
    }
  }
```
- Escrita reduzida
```
data () {
    return {
      comments: [
        {
          name: 'Caio',
          message: 'Lorem Ipsum'
        }
      ]
    }
  }
```
- Diretiva para iterar sobre o objeto

```v-for="comment in comments"```

- Passar variáveis como parâmetro

```{{ variável }```

- Sintáxe do template para se comunicar com a camada de dados

__interpolação:__ ```{{ variavel }}```

__diretivas:__ ```<a v-bind:href="url">...</a>```

- VueJs é reativo, por tanto é capaz de alterar toda a camada da aplicação através de um evento disparado

- Diretiva evento click
```
v-on:click="addComment"
```

- Crio todos os métodos disponibilizado no template através das diretivas
```
methods: {
  addComment() {
    console.log("Cliquei!")
  }
}
```

