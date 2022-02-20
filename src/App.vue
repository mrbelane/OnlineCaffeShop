<template>
    <div>
        <VmHeader></VmHeader>
        <main>
            <VmLoginModal></VmLoginModal>
            <VmRegistrationModal></VmRegistrationModal>
            <VmCheckoutModal></VmCheckoutModal>
        </main>
        <router-view></router-view>
        <VmFooter></VmFooter>
    </div>


</template>

<script>
    import VmHeader from '@/components/Header/Header';
    import VmFooter from '@/components/Footer/Footer';
    import VmLoginModal from '@/components/modal/Login';
    import VmRegistrationModal from '@/components/modal/Registration';
    import VmCheckoutModal from '@/components/modal/Checkout';

    export default {
        name: 'App',
        components: {
            VmHeader,
            VmFooter,
            VmLoginModal,
            VmRegistrationModal,
            VmCheckoutModal
        }
    }
</script>

<style>
    @font-face {
        font-family: Vazir;
        src: url("assets/fonts/Vazir.eot?#") format("embedded-opentype"), url("assets/fonts/Vazir.ttf") format("truetype");
    }

    @font-face {
        font-family: SOGAND;
        src: url("assets/fonts/SOGAND.ttf") format("truetype");
    }

    .font10 {
        font: 10px Vazir;
    }

    .font11 {
        font: 11px Vazir;
    }

    .font12 {
        font: 12px Vazir;
    }

    .font13 {
        font: 13px Vazir;
    }

    .font14 {
        font: 14px Vazir;
    }

    .font15 {
        font: 15px Vazir;
    }

    .font16 {
        font: 16px Vazir;
    }

    .font17 {
        font: 17px Vazir;
    }

    .font18 {
        font: 18px Vazir;
    }

    .font19 {
        font: 19px Vazir;
    }

    .fontS {
        font: 45px SOGAND;
    }

    body {
        font-size: 18px;
        font-family: Vazir;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
