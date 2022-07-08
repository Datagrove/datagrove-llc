<template>
    <div class="footer-container light-scheme">
        <p class="footer-text"><a href="/terms/">Terms and Conditions</a>
        | Copyright © 2022 Datagrove, Inc.</p>
    </div>
</template>

<script>

</script>


<style scoped>
    .footer-container {
        /* border: 2px solid black; */
        position: fixed;
        bottom: 0px;
        width: 100%;
        margin-top: 15px;
    }

    .footer-text {
        text-align: center;
        padding: 10px;
        font-weight: bold;
        /* color: #777777; */
    }

    @media (prefers-color-scheme: light) {
        .light-scheme { color: #812458; }
    }

    @media (prefers-color-scheme: dark) {
        .light-scheme { color: white; }
    }

</style>