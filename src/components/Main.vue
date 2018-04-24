<template>
  <Page ref="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <StackLayout>
      <header  @action="addUsernameRepo"/>

      <StackLayout v-if="repositories" class="selectedUsername" >
        <Label text="Limpar todos os repositórios" horizontalAlignment="center" @tap="clearAllData"/>
      </StackLayout>

      <StackLayout class="container">
          <ActivityIndicator :busy="loading" v-if="loading"  horizontalAlignment="center" verticalAlignment="center" height="100%"/>
          <repositories-list v-if="repositories" :repositories="repositories" />

          <StackLayout v-else horizontalAlignment="center" verticalAlignment="center" height="100%">
            <Label textWrap="true" text="Selecione um usuário no botão acima, para listar os repositórios" class="noRepositoriesLabel"></Label>
          </StackLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
    import { getAllRepositories } from '../services/githubRepositories/repositories'
    import Header from './Header.vue'
    import RepositoriesList from './repositoriesList.vue'

  export default {
    name: "main",
    components: { Header, RepositoriesList },
    data () {
      return {
        repositories: '',
        loading: false

      };
    },
    methods: {
        addUsernameRepo() {
            prompt({
                title: "Adicione um nome de usuário",
                okButtonText: "Adicionar",
                cancelButtonText: "Cancelar"
            })
            .then(result => {
                if(result.result) {
                    this.loading = true
                    getAllRepositories(result.text)
                        .then(response => {
                            this.repositories = [...response.data]
                            this.loading = false
                        })
                        .catch(err => {
                            console.log(err.message)
                            alert({
                                title: "Usuário não encontrado",
                                okButtonText: 'OK'
                            })
                            .then(() => {
                                this.clearAllData()
                            })
                        })
                }
            })
        },
        clearAllData() {
            Object.assign(this.$data, this.$options.data())
        }
    }
  };
</script>
