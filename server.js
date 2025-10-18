import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/me", async (req, res) => {
    try{
        //Fetch Cat Fact
        const {data} = await axios.get("https://catfact.ninja/fact", {timeout : 5000});

        //Send Response
        res.status(200).json({
            status : "success",
            user : {
                email : "Ahmerd196@gmail.com",
                name : "Ahmad Abdurrahman Muhammad",
                stack : "node.js/express",
            },
            timestamp : new Date().toISOString(),
            fact : data.fact,
        });
    }catch (error) {
        res.status(500).json({
            status : "error",
            message : "Could not fetch cat fact, try again later.",
            timestamp : new Date().toISOString(),
        });
    }
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));