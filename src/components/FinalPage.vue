<template>
    <div>
        Are you still stressed?
        <br />
        <button class='mainbuttons' @click="hellNo">
            HELL NO
            </button>
        <br />
        <button class='mainbuttons' @click="stillStressed">
            Still pretty stressed yeah
            </button>
    </div>
</template>
<script>
export default {
    name: 'yes/no',
    methods: {
        hellNo(){
            alert("Congrats you are stressfree!")
        },
        stillStressed(){
            alert("Maybe you should play again?")
        }
    }
}
</script>