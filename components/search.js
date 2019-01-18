Vue.component('search', {
  data: function () {
    return {
      keyword: '',
      dummyData: ""
    }
  },
  props: ['books'],
  methods: {
    search_title() {
      console.log(this.books, "=>>>");
      let keyword = new RegExp(this.keyword.toLowerCase())
      let searchedData = this.books.filter(function (element) {
        return dummyData.title.toLowerCase().match(keyword)
      })
    },
    dummy() {
      console.log("hello");

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
                  <button @click="dummy" type="submit" class="btn btn-primary mb-2">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
})   