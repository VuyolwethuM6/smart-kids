import { getBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import BlogPostClient from './BlogPostClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export type PageProps = {
  params: { 
    slug: string 
  } & Promise<any>;
};

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient initialPost={post} />;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}
