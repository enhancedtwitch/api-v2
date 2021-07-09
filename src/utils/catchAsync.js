export default function (module) {
    return (req, res, next) => {
        module(req, res, next).catch((e) => {
            res.status(400).json({
                statusCode: 400,
                message: e.message
            })
        });
    }
}