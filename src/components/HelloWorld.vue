<template>
  <div class="hello" v-if="clues.length > 0">
    <h1>{{category}}</h1>
    <div v-for="(clue, index) in clues" v-bind:key="clue.message">
      <div v-if="clue.question">
        <h1>{{clue.value}}</h1>
        <div>{{clue.question}}</div>
        <input v-model="input[index]" v-on:keyup.enter="checkAnswer(index)">
        <div v-if="clue.message">{{clue.message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    api: String
  },
  data: function() {
    return { 
      clue: '',
      clues: [],
      input: [],
      message: '',
      category: ''
    }
  },
  mounted: function() {
  },
  methods: {
    checkAnswer: function(index) {
      const cleanedinput = this.input[index].toLowerCase();
      const cleanedanswer = this.clues[index].answer.toLowerCase();
      console.log(cleanedinput)
      console.log(cleanedanswer)
      if (cleanedinput == cleanedanswer){
        this.$set(this.clues[index], 'message', 'Correct!')
      } else {
        this.$set(this.clues[index], 'message', 'Incorrect! Try again!')
      }
      console.log(this.clues[index])
    }
  },
  created: function () {
    const randomnumber = parseInt(Math.random()*100);
    console.log(randomnumber)
    axios.get(this.api + randomnumber).then((response) => {
      // handle success
      this.clues = response.data.clues;
      this.category = response.data.title;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
