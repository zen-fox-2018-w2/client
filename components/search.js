Vue.component('search', {
    data: function () {
        return {

        }
    },
    props: [],
    methods: {
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
                <input type="text" class="form-control mb-2" id="job-desc" placeholder="Search PDF title">
              </div>
              <div class="col-auto">
                <label>&nbsp;</label>
                <div class="">
                  <button type="submit" class="btn btn-primary mb-2">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
})   