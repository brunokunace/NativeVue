<template>
    <ScrollView>
        <StackLayout >
            <repository :repository="repository" v-for="repository in repositories" :key="repository.id"/>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import Repository from './Repository.vue'
    export default {
        components: {Repository},
        name: "repositories-list",
        props: {
            repositories: Array
        }
    };
</script>

<style scoped>

</style>
