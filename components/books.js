Vue.component('books', {
    data: function () {
        return {
            books: ""
        }
    },
    props: ['url', 'books'],
    methods: {

    },
    created() {
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

           
            <div class="fb-share-button" :data-href="book.file" data-layout="button_count">
            </div>
          
          
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