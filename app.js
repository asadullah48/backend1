const express = require ('express');
const app = express ();
const userModel = require ('./usermodel');
const path = require ('path');

app.set("view engine", "ejs");
app.use(express.json() );
app.use(express.urlencoded ({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("app.ejs")
});
app.get('/create', async (req, res) => {
let createduser = await userModel.create({
    name:"Asadullah Shafique",
    username:"asad",
    email:"asadullahshafique@hotmail.com"
})
res.send(createduser)
});

app.get('/read', async (req, res) => {
    let users = await userModel.find()
    res.send(users)
    });

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate(
        {name:"Asadullah Shafique"},
        {username:"asadullah"},
        {new:true},
        {email:"asadullahshafique@hotmail.com"}
        
    )
    res.send(updateduser)
    });

    app.get('/delete', async (req, res) => {
        let deleteduser = await userModel.findOneAndDelete(
            {name:"Asadullah Shafique"},
            {username:"asadullah"},
            {new:true},
            {email:"asadullahshafique@hotmail.com"}
            
        )
        res.send(updateduser)
        });
console.log("Assalaam O alikum");



app.listen(3000)