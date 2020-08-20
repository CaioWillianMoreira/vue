## CURSO VUE
__link__: https://www.youtube.com/watch?v=cSa-SMVMGsE

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
- VUE utiliza-se de __Two way data binding__ podemos alterar de 2 formas 2 caminhos.

1) - pode alterar um valor através do input do usuário, altera um dado no model e ele reflete automaticamente pra você.

2) - Se alterar a camada do módel ele também reflete pra você, "um caminho de mão dupla" portanto, se conecta automaticamente com o módel!

- Passo objetos dentro do return para iteragir com o campo
```
return {
  comments: [
    {
      name: 'Caio',
      message: 'Lorem Ipsum
    }
  ],
  name: '',
  message: '',
}
```

__diretivas:__ v-model="name" && v-model="message"

__herança através do this:__ console.log(this.name)

```
methods: {
    addComment() {
      this.comments.push({
        name: this.name,
        message: this.message
      })
    }
  }
```

- this.name && this.message refletem no módel, sendo possível assim fazer atualizações na interface.
```
methods: {
  addComment() {
    this.comments.push({
      name: this.name,
      message: this.message
    })

    this.name = '';
    this.message = '';
  }
}
```
- Com parenteses é possível adicionar um index __v-for="(comment, index)__

- Método de remover um item list
```
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
```
- Remoção do prevent default
__v-on:click.prevent__


- Disponibiliza variáveis e valores para serem renderizados no template, assim como a propriedade __data__ porém, o data está muito mais relacionado com a camada de models e o computed está mais relacionado com a interface.

```
computed: {

}
```

- Consegue monitorar alteração em qualquer propriedade.

```
watch: {

}
```

### single file components vue

- É possível criar arquivos do tipo VUE

```
npm install -g @vue/cli
```

- Entre dentro da pasta do projeto e execute o comando
```
vue ui
```

-> clique em criar novo projeto
-> npm
-> próximo
-> pre devinição padrão
-> criar projeto

- acesse a pasta __vuejs-cli__ pelo terminal e execute o comando
__npm run server__
