import { useRouter } from "next/router";

function BlogPostPage(params) {
  const router = useRouter();
  console.log(router.query);
  return <h1>Blog Post Page</h1>;
}

export default BlogPostPage;
