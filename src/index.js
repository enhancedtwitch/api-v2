import cors from "cors";
import express from "express";
import channelRoute from "./routes/channel.routes";
import emoteRoute from "./routes/emotes.routes";

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        callback(null, ["https://twitch.tv", "https://www.twitch.tv", "http://enhancedtwitch.com", "https://enhancedtwitch.com", "http://www.enhancedtwitch.com", "https://www.enhancedtwitch.com", "http://static.enhancedtwitch.com", "https://static.enhancedtwitch.com"]);
    }
}))

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
