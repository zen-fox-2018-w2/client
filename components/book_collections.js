Vue.component('book_collections', {
  data: function () {
    return {
      title: "",
      description: "",
      file: "",
      bookCollections: []
    }
  },
  props: ['url'],
  methods: {
    // find the user data and get the booklist
    remove(id) {
      console.log(id, '====== id')

      // let temp = this.dummyData.filter(function (element) {
      //   return element.id !== id
      // })
      // this.dummyData = temp

      // let index = this.dummyData.findIndex(x => x.id == id)
      // this.dummyData.splice(index, 1)

        axios.delete(`${this.url}/books/${id}`)
          .then(({data}) => {
            let index = this.bookCollections.findIndex(x => x.id == data._id)
            this.bookCollections.splice(index, 1)
            // console.log(data)
          })
          .catch(err => {
            console.log(err)
          })
    },
    get_file(event) {
      this.file = event.target.files[0]
    },
    add_file() {

      let access_token = localStorage.getItem('token')
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("description", this.description);
      formData.append("title", this.title);


      axios({
        method: "POST",
        url: "http://localhost:3000/books",
        data: formData,
        headers: {
          token: localStorage.token
        }

      }).then((result) => {
        this.title = ""
        this.description = ""
        this.cover = ""
        this.file = ""

      }).catch((err) => {
        console.log(err);
      });

    },
    get_ownBook() {
      axios.get(`${this.url}/books`)
        .then(({data}) => {
          this.bookCollections = data
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  created () {
    this.get_ownBook()
  },
  template: `

    <div class="col-lg-4">

    <div class="card">
      <div class="card-header">
        Add Book
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="add_file">
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input v-model="title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="title">
            <small id="emailHelp" class="form-text text-muted">Input your book title as unique as possible.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
            <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">File</label>
            <input @change="get_file" type="file" class="form-control-file" id="exampleFormControlFile1">
          </div>
          <button  type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    <hr>
    <div class="card">
      <div class="card-body">
        <p class="font-weight-bold">Book Collections</p>
        <div v-for="book in bookCollections" class="row">
          <div class="col-lg-6 mb-3">

              {{ book.title }}

          </div>
          <div class="col-lg-6">

            <button v-on:click="remove(book._id)">remove</button>

          </div>
        </div>
      </div>
    </div>

  </div>    `
})