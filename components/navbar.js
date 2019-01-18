Vue.component('navbar', {
    data: function () {
        return {
          //jan
          email: '',
          password: ''
          //jan
        }
    },
    props: ['url'],
    methods: {
      login () {
        axios
          .post(`${this.url}/login`, {
            data: {
              email: this.email,
              password: this.password
            }
          })
          .then(({data}) => {
            localStorage.setItem('token', data.access_token)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    template: `
    <div class="navbar">
      <nav class="navbar navbar-expand-lg navbar-dark navbar-bg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#"><b>Lib</b>Share</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <form class="navbar-nav ml-auto" role="search">
              <div class="login-form">
                <input v-model="email" type="text" placeholder="Email">
                <input v-model="password" type="password" placeholder="Password">
                <button v-on:click.prevent="login" type="submit">Login</button>
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>

    `
})   