<template>
    <div class="phone-wrap">
        <label for="phone">Connect Phone number</label>
        <div>
            <input type="text" placeholder="Phone number..." name="phone">
            <button>submit</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.phone-wrap{
    @include flex-grd;
    label{
        @include title;
    }
    input{
        @include inpt;
    }
    button{
        @include button;
    }
    ::placeholder{
        color: #BDC3C7;
    }
}
</style>