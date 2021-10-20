
const anotherApp = {
    data() {
      return {
        result: undefined,
        app: 0,
        books: [],
        bookForm: {}
      }
    },
    computed: {
    },
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBookData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        // postBook(evt) {
        //   console.log ("Test:", this.selectedBook);
        // if (this.selectedBook) {
        //     this.postEditBook(evt);
        // } else {
        //     this.postNewBook(evt);
        //   }
        // },
        // postEditOffer(evt) {
        //   // this.offerForm.id = this.selectedOffer.id;
        //   // this.offerForm.studentId = this.selectedStudent.id;        
          
        //   // console.log("Editing!", this.offerForm);
  
        //   fetch('api/offer/update.php', {
        //       method:'POST',
        //       body: JSON.stringify(this.bookForm),
        //       headers: {
        //         "Content-Type": "application/json; charset=utf-8"
        //       }
        //     })
        //     .then( response => response.json() )
        //     .then( json => {
        //       console.log("Returned from post:", json);
        //       // TODO: test a result was returned!
        //       this.books = json;
              
        //       // reset the form
        //       this.handleResetEdit();
        //     });
        // },
        postNewBook(evt) {
            // this.bookForm.Title = this.selectedBook.Title;        
            // console.log("Posting:", this.bookForm);
            // alert("Posting!");
    
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.bookForm = {};
              });
          }
    },
    created() {
        this.fetchBookData();
    }

  }
  Vue.createApp(anotherApp).mount('#anotherApp');