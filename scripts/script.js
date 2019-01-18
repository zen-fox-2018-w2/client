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
    }
})