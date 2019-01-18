Vue.component('books', {
    data: function () {
        return {
          books: ""
        }
    },
    props: ['url'],
    methods: {
      getBooks() {
        axios.get(`http://localhost:3000/books`)
          .then((result) => {
            console.log(result, "ini bukuuuuuuuuuuuuuuu");
            this.books = result.data
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
    created() {
      this.getBooks()
    },

    template: `
    <div class="col-lg-8">
        <h3 class="card-title">PDF lists</h3>

        <div v-for="book in books" class="card-body">
        <div class="row">

            <div class="col-md-4">
            <img width="200px" height="280px" :src=book.cover
                alt="">
            <hr>
            <div><button type="button" class="btn btn-primary">Shared on twitter</button></div>
            </div

            <div class="col-md-8">
            <div class="row">
                <div class="col-md-6">

                <p class="font-weight-bold">
                    {{book.title}}
                    <span class="text-warning"></span>
                </p>
                <p class="card-text">Description - <span>{{book.description}}</span></p>
                <p class="card-text"><a :href=book.file>Download Free Now !!!</a></p>
                </div>
                <div class="col-md-6 text-right">
                <p class="card-text">
                    {{book.creator.email}}
                </p>
                <p class="card-text text-secondary">
                    {{book.createdAt.slice(0,10)}}
                </p>
                </div>
            </div>
            </div>

        </div>
        </div>


    </div>

    `
})