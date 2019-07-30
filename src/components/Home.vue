<template>
    <div>
        Are you Stressed?
        <br />
        <button type="button" @click="onYes">
        Yes
        </button>
        <button>
        No
        </button>
    </div>
</template>
<script>
function onYes() {
    this.$router.go({name: 'second'});
}
export default {
    
}
</script>
