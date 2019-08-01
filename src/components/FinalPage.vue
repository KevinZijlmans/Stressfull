<template>
    <div>
        Are you still stressed?
        <br />
        <button @click="hellNo">
            HELL NO
            </button>
        <br />
        <button @click="stillStressed">
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