<template>
    <div class="contact-wrap">
        <h1>Contact creators via:</h1>
        <div class="info-container">
            <div class="info">
                <span class="pi pi-linkedin"/>
                <p>LinkedIn</p>
            </div>
            <div class="info">
                <span class="pi pi-google"/>
                <p>Gmail</p>
            </div>
            <div class="info">
                <span class="pi pi-telegram"/>
                <p>Telegram</p>
            </div>
            <div class="info">
                <span class="pi pi-github"/>
                <p>Github</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contact-wrap{
    h1{
        @include title;
    }
    .info-container{
        .info{
            display: flex;
            margin-top: 10px;
            font-size: 20px;
            color: $txtActiveClr;
            font-family: 'Tilt Neon';
            p{
                margin-left: 10px
            }
        }
    }
}
</style>