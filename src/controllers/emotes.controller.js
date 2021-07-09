import TwitchFetcher from "twitch-fetcher";

const fetcher = new TwitchFetcher({
    twitchClientID: process.env.TWITCH_CLIENT_ID,
    twitchOAuth: process.env.TWITCH_OAUTH
});

export async function getEmotes (req, res) {
    const { username, id } = req.query;

    let emotes = null;

    if (username) {
        emotes = await fetcher.getEmotesByName(username, req.query);
    } else if (id) {
        emotes = await fetcher.getEmotesByID(id, req.query);
    } else {
        throw new Error("You must specify an Username or ID");
    }

    res.status(200).json({
        statusCode: 200,
        emotes
    });
}