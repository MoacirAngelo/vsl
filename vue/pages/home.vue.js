const home = {
    template: `
    <v-jumbotron color="grey lighten-2">
        <v-container fill-height>
            <v-layout align-center>
                <v-flex>
                    <h3 class="display-3">Welcome to the site</h3>
                    <span class="subheading">Lorem ipsum dolor met,
                    <v-divider class="my-3"></v-divider>
                    <div class="title mb-3">Check out our newest features!</div>
                    <v-btn large color="primary" class="mx-0">See more</v-btn>
                    {{ propriedateTeste }}
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>
  `,
  data() {
    return {
      propriedateTeste: 'testeValor',
    }
  }
}

