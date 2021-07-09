import express from "express";
import channelRoute from "./routes/channel.routes";
import emoteRoute from "./routes/emotes.routes";

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/v2/channel", channelRoute);
app.use("/v2/emotes", emoteRoute);

app.all("/v1/*", (req, res) => {
    res.status(400).json({
        error: "Depracated",
        message: "Use API v2 instead v1."
    })
});

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Listening at http://${process.env.HOST}:${process.env.PORT}/`);
});