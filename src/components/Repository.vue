<template>
    <GridLayout columns="100, *" rows="*, *, *" class="card" >
        <Image row="0" col="0" rowSpan="2" :src="repository.owner.avatar_url" class="avatarRepository"/>
        <Label row="0" col="1":text="repository.name" class="nameRepository"></Label>
        <Label row="1" col="1" :text="repository.description" class="descriptionRepository" textWrap="true"></Label>
        <GridLayout row="2" col="0" colSpan="2" columns="*, *, *" rows="20" class="footerRepository">
            <Label row="0" col="0" fontSize="small" >
                <FormattedString>
                    <Span class="fa" :text="'fa-star' | fonticon" />
                    <Span :text="repository.stargazers_count" />
                </FormattedString>
            </Label>
            <Label row="0" col="1" fontSize="small">
                <FormattedString>
                    <Span class="fa" :text="'fa-code-fork' | fonticon" />
                    <Span :text="repository.forks_count" />
                </FormattedString>
            </Label>
            <Label row="0" col="2" fontSize="small">
                <FormattedString>
                    <Span class="fa" :text="'fa-exclamation-circle' | fonticon" />
                    <Span :text="repository.open_issues_count" />
                </FormattedString>
            </Label>
        </GridLayout>
    </GridLayout>
</template>

<script>
    export default {
        name: "repository",
        props: {
            repository: Object
        }
    };
</script>

<style scoped>

</style>
