import { client } from './sanity';

export async function getAllPostSlugs() {
    const query = `*[_type == "post"]{ "slug": slug.current }`;
    const posts = await client.fetch(query);
    return posts.map(post => ({
        params: { slug: post.slug }
    }));
}

export async function fetchPostBySlug(slug) {
    const query = `*[_type == "post" && slug.current == $slug][0]`;
    const post = await client.fetch(query, { slug });
    return post;
}
