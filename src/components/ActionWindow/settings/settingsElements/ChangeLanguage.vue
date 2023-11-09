<template>
    <div>
        <form action="submit" class="form">
            <h1>Change Interface Language</h1>
            <div class="rad">
                <label for="ENG">ENG</label>
                <input type="radio" id="ENG" name="language" value="ENG">
            </div>
            <div class="rad">
                <label for="GEO">GEO</label>
                <input type="radio" id="GEO" name="language" value="GEO">
            </div>
            <div class="rad">
                <label for="RUS">RUS</label>
                <input type="radio" id="RUS" name="language" value="RUS">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.form{
    width: 200px;
    @include flex-grd;
    h1{
        @include title;
    }
    button{
        @include button;

        &:hover{
            color: $txtActiveClr;
        }
    }
    .rad{
        display: flex;

        label{
            @include text;
        }

    }
}
</style>