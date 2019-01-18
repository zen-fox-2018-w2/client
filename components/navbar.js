Vue.component('navbar', {
    data: function () {
        return {
          email: "",
          password: "",
          successReg: false,
          failedReg: false
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
            this.email = ""
            this.password = ""
            console.log(data)
          })
          .catch(err => {
            console.log(err)
            this.email = ""
            this.password = ""
          })
      },

      register() {

        let obj = {
          email: this.email,
          password: this.password
        }

        axios.post(`${this.url}/register`, obj)
          .then((response) => {
            this.successRegister()
            this.email = ""
            this.password = ""
          })
          .catch((error) => {
            this.failedRegister()
            this.email = ""
            this.password = ""
            console.log(error.message);
          })
      },

      successRegister() {
        this.successReg = !this.successReg
      },

      failedRegister() {
        this.failedReg = !this.failedReg
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
              <button v-on:click.prevent="register()" type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </nav>
    <div v-if="successReg" class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Yeaaaaay !!!</strong> Successfully registered an account.
      <button v-on:click="successRegister()" type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div v-if="failedReg" class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Oppps !!!</strong> Failed to register new account.
      <button v-on:click="failedRegister()" type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
    `
})