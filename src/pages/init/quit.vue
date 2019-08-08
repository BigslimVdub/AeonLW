<template>
<q-page>
    <div class="init-screen-page text-center">
        <div class="absolute-center">
            <img src="statics/aeonwallet.svg" width="400" class="q-mb-md">

            <div class="q-mt-xl q-mb-lg">
                <q-spinner color="primary" :size="60" />
            </div>

            <div class="message">
                Thank you for using Aeon LW: Closing...
            </div>
        </div>
    </div>
</q-page>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.init-screen-page {
    height: 100vh;
    position: relative;
}
</style>
