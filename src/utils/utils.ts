export function timeAgo(timestamp: number) {
    const now = Date.now();
    const difference = Math.floor((now - timestamp * 1000) / 1000);

    if (difference < 60) return "Vừa xong";
    if (difference < 3600) return `${Math.floor(difference / 60)} phút trước`;
    if (difference < 86400) return `${Math.floor(difference / 3600)} giờ trước`;
    if (difference < 172800) return "Hôm qua";
    if (difference < 2592000) return `${Math.floor(difference / 86400)} ngày trước`; // Dưới 30 ngày

    // Tạo 2 đối tượng Date
    const dateNow = new Date();
    const dateThen = new Date(timestamp * 1000);

    const monthsDiff =
        dateNow.getMonth() - dateThen.getMonth() +
        (12 * (dateNow.getFullYear() - dateThen.getFullYear()));
    if (monthsDiff < 12) return `${monthsDiff} tháng trước`;

    const yearsDiff = dateNow.getFullYear() - dateThen.getFullYear();
    return `${yearsDiff} năm trước`;
}

export function formatTimestamp(timestamp: number) {
    // Tính toán cộng thêm 7 giờ (7 * 60 * 60 giây)
    const date = new Date((timestamp + 7 * 3600) * 1000);

    // Sử dụng các phương thức UTC để tránh phụ thuộc vào múi giờ server
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}
