Vue.component('book_collections', {
    data: function () {
        return {
          dummyData: [
            { id: 1, name: 'aaaaaa' },
            { id: 2, name: 'bbbbbb' },
            { id: 3, name: 'cccccc' },
            { id: 4, name: 'dddddd' },
            { id: 5, name: 'eeeeee' },
            { id: 6, name: 'ffffff' },
            { id: 7, name: 'gggggg' },
            { id: 8, name: 'hhhhhh' },
            { id: 9, name: 'iiiiii' },
          ]
        }
    },
    props: ['url'],
    methods: {
      // find the user data and get the booklist
      remove (id) {
        console.log(id, '====== id')

        // let temp = this.dummyData.filter(function(element) {
        //   return element.id !== id
        // })
        // this.dummyData = temp

        // let index = this.dummyData.findIndex(x => x.id == id)
        // this.dummyData.splice(index, 1)

        //   axios.delete(`${url}/books`)
      //     .then(({data}) => {
      //       console.log(data)
      //     })
      //     .catch(err => {
      //       console.log(err)
      //     })
      }
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
        <div v-for="dummy in dummyData" class="row">
          <div class="col-lg-6 mb-3">
            
              {{ dummy.name }}
            
          </div>
          <div class="col-lg-6">
          
            <button v-on:click="remove(dummy.id)">remove</button>
          
          </div>
        </div>
      </div>
    </div>

  </div>    `
})   