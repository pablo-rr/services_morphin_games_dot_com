async function generateTrackingUrl(fastify, options) {
    fastify.get("/", async (request, reply) => {
        return { text: "hello" }
    })
}

export default generateTrackingUrl;