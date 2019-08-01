<template>
    <div>
        <p>I am afraid you failed!</p>
        <p>Still stressed!?</p>
        <router-link to="/">
        <p>Try Again!</p>
        </router-link>
        {{ alertFailure() }}
        {{ alertFailure() }}
        {{ alertFailure() }}
        {{ alertFailure() }}
        {{ alertFailure() }}
        {{ alertFailure() }}
        {{ alertFailure() }}
        {{ alertFailure() }}
        {{ alertFailure() }}
        {{ alertFailure() }}
    </div>
</template>
<script>
export default {
    name:"Failure",
    methods: {
        alertFailure(){
            alert("YOU FAIL")
        }
    }
}
</script>