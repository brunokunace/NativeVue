<template>
    <FlexBoxLayout justifyContent="space-between" flexDirection="row" alignItems="center" class="action-bar">
        <Label class="header" text="Lista de Repositórios" />
        <Label class="header-icon fa" @tap="action" :text="'fa-user-plus' | fonticon" />
    </FlexBoxLayout>
</template>

<script>
    export default {
        name: "header",
        props: {
            action: Function
        }
    };
</script>

<style scoped>

</style>