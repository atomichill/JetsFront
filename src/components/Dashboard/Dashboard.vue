<template>
    <div class="dashboard-container">
        <div class="dashboard-wrap">
            <Profile/>
            <Inbox/>
            <ActionWindow/>
        </div>
    </div>
</template>

<script>
import Inbox from '../Inbox/Inbox.vue';
import Profile from '../Profile/Profile.vue';
import ActionWindow from '../ActionWindow/ActionWindow.vue'
export default {
    name: 'Dashboard',
    setup(props) {
    },
    components: { Profile, Inbox , ActionWindow}
}
</script>

<style lang="scss" scoped>
.dashboard-container{
    max-width: 1360px;
    margin: 0 auto;
    .dashboard-wrap{
    display: flex;
    }
}
</style>