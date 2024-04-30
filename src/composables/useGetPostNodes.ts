import { ofetch } from 'ofetch';
import type { Post } from '@/composables/useGetPosts';

export const useGetPostNodes = async (post: Post) => {
  const postHtml: string = await ofetch('https://corsproxy.io/?' + post.link);
  return parsePost(postHtml);
};

function parsePost(postHtml: string) {
  let div = document.createElement('div');
  div.innerHTML = postHtml;
  const articleDiv: HTMLDivElement | null = div.querySelector(
    'article[id=content] > div:nth-child(2) > div > div'
  );
  if (!articleDiv) return;
  div = document.createElement('div');
  div.innerHTML = articleDiv.innerText;
  const test = Array.from(div.childNodes).reduce<ChildNode[]>((nodes, node) => {
    const addNode = () => {
      nodes.push(node);
      return nodes;
    };

    const lastNode: ChildNode | undefined = nodes[nodes.length - 1];
    if (!(node instanceof HTMLImageElement) || !(lastNode instanceof HTMLImageElement)) {
      return addNode();
    }

    if (node.src !== lastNode.src) {
      return addNode();
    }

    return nodes;
  }, []);

  return test;
}
