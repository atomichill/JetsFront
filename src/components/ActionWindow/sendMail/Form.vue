<template>
    <div class="form-wrap">
        <form action="submit">
            <input type="text" placeholder="Enter Title...">
            <input type="email" placeholder="Reciever...">
            <input type="text" placeholder="Theme...">
            <textarea name="send" id="send" cols="30" rows="10">
            </textarea>
            <div>
                <input type="file" name="file-upload" id="file" multiple>
                <input type="file" name="file-image" id="file-image" multiple accept="image/*">
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.form-wrap{
    padding: 20px;
    form{
        display: flex;
        flex-direction: column;
        input{
            margin-top: 10px;
        }
        textarea{
            margin-top: 10px;
            resize: none;
        }
    }
}
</style>