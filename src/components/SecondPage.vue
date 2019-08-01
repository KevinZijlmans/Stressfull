<template>
<div>
    <div>
        <p>
            Please press the red button!
        </p>
    </div>
<br />
<div>
    <router-link to="/failure">
        <button class='green'>Red Red Wine</button>
        <button class='red'>The Reddest </button>
        <button class='yellow'>Red Bull Racing</button>
        <button class='mauve'>Simply Red</button>
    </router-link>
        <router-link to="/thirdpage">
            <button class='right'>It's this one idiot</button>
        </router-link>
    </div>
</div>

</template>
<script>
export default {
    
}
</script>
