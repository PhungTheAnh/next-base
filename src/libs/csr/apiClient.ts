export async function apiClient<T>(
    path: string,
    options: RequestInit & { data?: unknown } = {}
): Promise<T> {
    const { data, ...rest } = options;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API}${path}`, {
        ...rest,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-AppApiToken": process.env.NEXT_PUBLIC_API_KEY || "",
            ...(rest.headers || {}),
        },
        body: data ? JSON.stringify(data) : undefined,
        cache: "no-store",
    });

    // if (!res.ok) {
    //     const errText = await res.text();
    //     throw new Error(`API error ${res.status}: ${errText}`);
    // }

    return res.json();
}
