const DUMMY_DATA = [
  {
    title: "Next js",
    slug: "next-js",
    excerpt: "Next js excerpt",
    content: "## Next js excerpt",
    image: "getting-started-nextjs.jpg",
    date: "2021-04-08"
  },
  {
    title: "Next js 1",
    slug: "next-js-1",
    excerpt: "Next js excerpt",
    content: "## Next js *excerpt*",
    image: "getting-started-nextjs.jpg",
    date: "2021-04-08"
  },
  {
    title: "Next js 2",
    slug: "next-js-2",
    excerpt: "Next js excerpt",
    content: "# Next js **excerpt**",
    image: "getting-started-nextjs.jpg",
    date: "2021-04-08"
  }
];

export default DUMMY_DATA;

export function getPosts() {
  return DUMMY_DATA;
}

export function getPostBySlug(slug) {
  return DUMMY_DATA.find((post) => post.slug === slug);
}
