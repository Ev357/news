// @ts-expect-error
import Parser from 'rss-parser/dist/rss-parser.min.js';
import type RSSParser from 'rss-parser';

export type Feed = { foo: string };
export type Item = {
  author: string;
  content: string;
  contentSnippet: string;
  id: string;
  isoDate: string;
  link: string;
  pubDate: string;
  title: string;
};

export interface PostImage {
  src: string;
  alt: string;
}

export interface Post extends Item {
  image: PostImage | undefined;
  description: string | undefined;
}

export const fetchPosts = async () => {
  const parser: RSSParser<Feed, Item> = new Parser();
  const feed = await parser.parseURL('https://www.theverge.com/rss/index.xml');

  return feed.items.map((item) => {
    const post: Post = {
      ...item,
      image: getPostImage(item.content),
      description: getPostDescription(item.content)
    };
    return post;
  });
};

function getPostImage(content: string) {
  const div = document.createElement('div');
  div.innerHTML = content;
  const img: HTMLImageElement | null = div.querySelector('figure > img');
  if (!img) return;
  const postImage: PostImage = {
    src: img.src,
    alt: img.alt
  };
  return postImage;
}

function getPostDescription(content: string) {
  const div = document.createElement('div');
  div.innerHTML = content;
  const p = div.querySelector('p');
  if (!p) return;
  return p.innerText;
}
