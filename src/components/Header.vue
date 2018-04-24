<template>
    <FlexBoxLayout justifyContent="space-between" flexDirection="row" alignItems="center" class="action-bar">
        <Label class="header" text="Lista de Repositórios" />
        <Label class="header-icon fa" @tap="$emit('action')" :text="'fa-user-plus' | fonticon" />
    </FlexBoxLayout>
</template>

<script>
    export default {
        name: "header"
    };
</script>

<style scoped>

</style>