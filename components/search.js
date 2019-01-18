Vue.component('search', {
    data: function () {
        return {
          keyword : '',
          dummyData: ['Harry Potter', 'Dragon Ball', 'One Piece', 'Superman', 'Batman', 'Spiderman', 'Iron Man']
        }
    },
    props: [],
    methods: {
      searchTitle () {
        let keyword = new RegExp(this.keyword.toLowerCase())
        // console.log(keyword)
        let searchedData = this.dummyData.filter(function(elemet) {
          return elemet.toLowerCase().match(keyword)
        })
        // console.log(searchedData, '======= searched')
      }
    },
    template: `
    <div class="search">
        <div class="row">

          <div class="col-md-8">
          </div>

          <div class="col-md-4">
            <div class="form-row align-items-center">
              <div class="col-md-8">
                <hr>
                <input v-model="keyword" type="text" class="form-control mb-2" id="job-desc" placeholder="Search PDF title">
              </div>
              <div class="col-auto">
                <label>&nbsp;</label>
                <div class="">
                  <button v-on:click="searchTitle" type="submit" class="btn btn-primary mb-2">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
})   