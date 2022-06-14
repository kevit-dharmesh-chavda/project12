app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    const userCount = 10;
    res.send(`Hello GET. Users are: ${userCount}`);
 })