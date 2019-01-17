Vue.component('navbar', {
    data: function () {
        return {

        }
    },
    props: [],
    methods: {
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
              <input type="text" placeholder="Email">
              <input type="password" placeholder="Password">
              <button type="submit">Login</button>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>

    `
})   