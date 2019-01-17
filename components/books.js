Vue.component('books', {
    data: function () {
        return {

        }
    },
    props: [],
    methods: {
    },
    template: `
    <div class="col-lg-8">
        <h3 class="card-title">PDF lists</h3>

        <div class="card-body">
        <div class="row">

            <div class="col-md-4">
            <img width="200px" height="280px" src="https://cdn.waterstones.com/bookjackets/large/9781/7853/9781785301544.jpg"
                alt="">
            <hr>
            <div><button type="button" class="btn btn-primary">Shared on twitter</button></div>
            </div>

            <div class="col-md-8">
            <div class="row">
                <div class="col-md-6">

                <p class="font-weight-bold">
                    Data Engineering Lead
                    <span class="text-warning"></span>
                </p>
                <p class="card-text">Description - <span>bla bla bla</span></p>
                </div>
                <div class="col-md-6 text-right">
                <p class="card-text">
                    Patria
                </p>
                <p class="card-text text-secondary">
                    January 3, 2019
                </p>
                </div>
            </div>
            </div>

        </div>
        </div>


    </div>
    
    `
})   