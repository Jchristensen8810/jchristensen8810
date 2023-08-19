
let express = require("express");
let app = express();  //instance of express
let path = require("path");// a library or module of node
app.use(express.urlencoded({extended:false}));  //for the POST method in form fields (data parsing)
app.use(express.json());
app.use(express.static(__dirname + "/views"));  //tells where our static folder is

//chunk 1
app.get("/", (req, res) => {
        console.log(__dirname);
    res.sendFile(path.join(__dirname,'views', 'index.html'));//dirname so it knows where index.html is at
});

//chunk 2 
app.post('/email', (req, res) => {
    //send email here
    console.log('Data:', req.body);
    res.json({ message: 'message received!!'});
});

app.get("/jobapplication",(req,res) => { //req = request res =response
    let sFirstName = req.query.empFirst;
    let sLastName = req.query.empLast;
     console.log(sLastName); //reads through the form from above variables
    res.send("Hello from job app");
});

app.post("/jobapplication",(req,res) => { //changed get to post  route
    let sFirstName = req.body.empFirst;
    let sLastName = req.body.empLast; 
    // console.log(req); //reads through the form from above variables
    res.send("Hello from job app");
});

app.listen(5000);

