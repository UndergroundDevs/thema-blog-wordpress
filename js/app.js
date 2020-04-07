var express = require('express');
var app = express();

/*==============================
            HOME
  ==============================*/
app.get('/',function (req,res){
    res.sendFile(__dirname+'/index.php')
});

/*==============================
            ABOUT
  ==============================*/
app.get('/assest/about',function (req,res){
    res.sendFile(__dirname+'/assest/about/index.html')
});
app.get('/assest/about/allan-kardec', function(req, res) {
    res.sendFile(__dirname + '/assest/about/allankardec.html')
});
app.get('/assest/about/eric-binsfeld', function(req, res) {
    res.sendFile(__dirname + '/assest/about/ericbinsfeld.html')
});
app.get('/assest/about/kevson-filipe', function(req, res) {
    res.sendFile(__dirname + '/assest/about/kevsonfilipe.html')
});
app.get('/assest/about/pablo-miranda', function(req, res) {
    res.sendFile(__dirname + '/assest/about/pablomiranda.html')
});
app.get('/assest/about/wanghley-martins', function(req, res) {
    res.sendFile(__dirname + '/assest/about/wanghleymartins.html')
});

/*==============================
            ERRORS
  ==============================*/

app.get('/error/404',function (req,res){
    res.sendFile(__dirname+'/assest/error/404.html')
});


/*==============================
          Static Files
  ==============================*/
app.use('/img',express.assest(__dirname + '../img'));
app.use('/css',express.assest(__dirname + '../css'));
app.use('/js',express.assest(__dirname + '../js'));
app.use('/fonts',express.assest(__dirname + '../fonts'));
app.use('/js',express.assest(__dirname + '../js'));
app.use('/error',express.assest(__dirname + ''));
app.get('/about/about.css',function (req,res){
    res.sendFile(__dirname+'/about/CSS/about.css')
});

app.use((req, res, next) => {
    res.status(404).redirect('/error/404')
  });
  
  // error handler middleware
  app.use((error, req, res, next) => {
      res.status(error.status || 500).send({
        error: {
          status: error.status || 500,
          message: error.message || 'Internal Server Error',
        },
      });
    });

app.listen(process.env.PORT || 5000,function(){
    console.log('Running done!')
});

/*app.get('*', function(req, res){
    res.status(404).redirect('/error/404')
  });*/