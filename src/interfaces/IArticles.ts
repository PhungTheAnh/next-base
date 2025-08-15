
export interface IImage {
    alt: string;
    url: string;
}
export interface IArticle {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    pageviews: string;
    author: string;
    post_type: string;
    visibility: string;
    keywords: string[];
    created_at: string;
    url: string;
    image: IImage;
    video_duration?: string;
    video_url?: string;

}
