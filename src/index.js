const express = require("express");


const setupAndStartServer = async ()=>{

    //created the express object
    const app = express();
    const PORT=3000;
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
       
    });

}

setupAndStartServer();