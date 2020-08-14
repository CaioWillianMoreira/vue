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
### ex :

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

__v-for="comment in comments"__

- Passar variáveis como parâmetro

__{{ variável }}__


## Sintáxe do template para se comunicar com a camada de dados

### interpolação: __{{ variavel }}__

### diretivas: __<a v-bind:href="url">...</a>__

- VueJs é reativo, é capaz de alterar toda a camada da aplicação




