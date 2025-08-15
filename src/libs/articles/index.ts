import createApiServer from "../apiServer";

export async function getHotPosts(limit?: number, page?: number) {
    const apiServer = createApiServer(); // Tạo instance Axios

    try {
        const res = await apiServer.get("/posts", {
            params: {
                limit: limit || 10,
                page: page || 1,
                selections: "featured",
            },
        });

        return res.data.data;
    } catch (error) {
        console.error("Error fetching new getPosts:", error);
        return null; // Tránh lỗi làm crash app
    }
}