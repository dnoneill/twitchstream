<template>
  <div class="hello" v-if="clues.length > 0">
    <h1 class="boxcss">{{category}}</h1>
    <div v-for="(clue, index) in clues" v-bind:key="clue.message">
      <div v-if="clue.question" class="boxcss">
        <h2 class="cluevalue">
        <button v-if="cluetracker[clue.value] != 'shown'" v-on:click="flipCard(clue.value)" :disabled="cluetracker[clue.value] == 'answered'">
          ${{clue.value}}
        </button>
        </h2>
        <div v-if="cluetracker[clue.value] == 'shown'">
          <div>{{clue.question}}</div>
          <input v-model="input[index]" v-on:keyup.enter="checkAnswer(index)">
          <div v-if="clue.message">{{clue.message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data: function() {
    return { 
      clue: '',
      clues: [],
      input: [],
      message: '',
      category: '',
      cluetracker: {}
    }
  },
  props: {
    typeofjeopardy: String
  },
  mounted: function() {
  },
  methods: {
    flipCard: function(cluevalue) {
      this.$set(this.cluetracker, cluevalue, 'shown')
    },
    // Method checking a typed answer
    checkAnswer: function(index) {
      const cleanedinput = this.input[index].toLowerCase();
      const cleanedanswer = this.clues[index].answer.toLowerCase();
      console.log(cleanedinput)
      console.log(cleanedanswer)
      if (cleanedinput == cleanedanswer){
        this.$set(this.cluetracker, this.clues[index].value, 'answered')
        alert('Correct!')
        this.$parent.dollaramount += this.clues[index].value;
      } else {
        this.$parent.dollaramount -= this.clues[index].value;
        this.$set(this.cluetracker, this.clues[index].value, 'answered')
        alert('Wrong!')
      }
      console.log(this.clues[index])
    },
    getJeopardyClues: function(){
      const randomnumber = parseInt(Math.random()*100);
      axios.get(this.$parent.api + randomnumber).then((response) => {
        // handle success
        const clues = response.data.clues;
        var typeFiltered;
        if (this.typeofjeopardy == 'single'){
          typeFiltered = clues.filter(clue => clue['value'] == 500);
        } 
        console.log(clues)
        console.log(typeFiltered.length)
        const cluenumber = Math.floor(Math.random() * (typeFiltered.length - 1) + 0);
        const getDate = clues[cluenumber]['airdate'];
        const filteredClues = clues.filter(clue => clue['airdate'] == getDate);
        this.clues = filteredClues;
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
  },
  created: function () {
    this.getJeopardyClues();
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

.boxcss {
  border: 5px solid black;
  background: blue;
  color: yellow;
}

.cluevalue button{
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.cluevalue button:disabled {
  color: grey;
  pointer-events: none;
}
</style>
