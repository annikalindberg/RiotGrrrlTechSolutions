// pages/posts/[slug].js
import { useRouter } from 'next/router';
import { getAllPostSlugs, fetchPostBySlug } from '../../../lib/sanityPosts';

export async function getStaticPaths() {
    const paths = await getAllPostSlugs();
    return {
        paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = await fetchPostBySlug(slug);

    if (!post) {
        // Return a 404 page if the post is not found
        return { notFound: true };
    }
    return {
        props: {
            post,
        },
        revalidate: 60 * 60, // 1 hour
    };
}

const Post = ({ post }) => {
    const router = useRouter();

    // The loading state for fallback pages
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    // Render post content
    return (
        <article>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
        </article>
    );
};

export default Post;