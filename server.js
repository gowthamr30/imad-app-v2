var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var shop={
     book:{
    title:'book section',
    heading:'what type of book you want',
    date:'feb 12',
    content:` <p>
                 love yoursef and make others to lovelove yoursef and make others to lovelove yoursef and make others to lovelove yoursef and make others to lovelove yoursef and make others to love
             </p>
              <p>
                 love yoursef and make others to lovelove yoursef and make others to lovelove yoursef and make others to lovelove yoursef and make others to lovelove yoursef and make others to love
             </p>
              <p>
                 love yoursef and make others to lovelove yoursef and make others to lovelove yoursef and make others to lovelove yoursef and make others to lovelove yoursef and make others to love
             </p>`
},
     electronics:{
        title:'electronic section',
        heading:'what type of electronic item you want',
        date:'feb 13',
        content:` <p>
                 <p>
                  asus rog,alienware,msi,predator are the best gaming laptops we suggested for you....
             </p>
              <p>
                asus rog,alienware,msi,predator are the best gaming laptops we suggested for you....
             </p>
              <p>
                asus rog,alienware,msi,predator are the best gaming laptops we suggested for you....
             </p>`

    },
     clothings: {
         
           title:'clothing section',
           heading:'what type of cloth item you want',
           date:'feb 14',
             content:` <p>
                   pencil fit,bairava dress are available...
                         order soon 
                   home delivery within a day...!!! 
               </p>
              <p>
                 pencil fit,bairava dress are available...
                         order soon 
                   home delivery within a day...!!! 
             </p>
              <p>
                pencil fit,bairava dress are available...
                         order soon 
                   home delivery within a day...!!! 
             </p>`}
    
};

function createtemplate (data) {
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
    var htmltemplate = `
 <html>
 <head>
     <title>
         ${title} 
     </title>
     <meta name="viewport" content="width=device-width, inital=scale-1" />
     <link href="/ui/style.css" rel="stylesheet" />
 </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
             <hr/>
            <h2>
                ${heading}
            </h2>
            <div>
                ${date}
            </div>
            <div>
             ${content}
             </div>
        </div>
    </body>
</html>

`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/book', function (req, res) {
   res.send(createtemplate(book));
});

app.get('/electronics', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'electronics.html'));
});

app.get('/clothings', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'clothings.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
