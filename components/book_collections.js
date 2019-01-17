Vue.component('book_collections', {
    data: function () {
        return {

        }
    },
    props: [],
    methods: {
    },
    template: `
    
    <div class="col-lg-4">

    <div class="card">
      <div class="card-header">
        Add Book
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="title">
            <small id="emailHelp" class="form-text text-muted">Input your book title as unique as possible.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Cover</label>
            <input type="file" class="form-control-file" >

          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">PDF File</label>
            <input type="file" class="form-control-file">

          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    <hr>
    <div class="card">
      <div class="card-body">
        <p class="font-weight-bold">Book Collections</p>
        <ul>
          <li>Senior Front End Developer</li>
          <li>Senior Software Engineer, Server-Side Technologies</li>
          <li>Lead Front End Developer</li>
        </ul>
      </div>
    </div>

  </div>    `
})   