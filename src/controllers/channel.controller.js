import TwitchFetcher from "twitch-fetcher";

const fetcher = new TwitchFetcher({
    twitchClientID: process.env.TWITCH_CLIENT_ID,
    twitchOAuth: process.env.TWITCH_OAUTH
});

export async function getChannel (req, res) {
    if (req.query.username == null && req.query.id == null) {
        throw new Error("You must specify an ID or Username.");
    };

    let data = await fetcher.getUserData(req.query);
    res.status(200).json({
        statusCode: 200,
        data
    });
}