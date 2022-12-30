const app = require("./app.js");
const PORT = process.env.PORT || 1000;

app.listen(PORT , ()=>{
    console.log(`app is running at http://localhost:${PORT}`);
});