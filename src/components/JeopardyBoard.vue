<template>
    <div>
    <div style="display:block">
        ${{dollaramount}}
    </div>
    <div class="rows" v-for="n in 6" v-bind:key="n">
        <HelloWorld typeofjeopardy="single"></HelloWorld>
    </div>
    </div>
</template>
<script>
import HelloWorld from './HelloWorld.vue'
export default {
    components: {
        HelloWorld
    },
    props: {
        api: String
    },
    data: function() {
        return { 
            dollaramount: 0
        }
    }
}
</script>
<style>
    .rows {
        width: calc(100%/6);
        display: inline-block;
    }
</style>