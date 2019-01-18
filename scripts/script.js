
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


var app = new Vue({
    el: '#app',
    name: "LibShare",
    data: {
        url: 'http://localhost:3000',
        books: "",
        pages: "login"
    },
    methods: {
        get_books() {
            axios.get(`http://localhost:3000/books`)
                .then((result) => {
                    this.books = result.data
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        is_login() {

            if (localStorage.token) {
                this.pages = "home"
            }
            else {
                this.pages = "login"
            }
        },
        logout() {
            localStorage.removeItem('token')
            this.pages = "login"
        }

    },
    created() {
        this.get_books()
        this.is_login()
    }
})