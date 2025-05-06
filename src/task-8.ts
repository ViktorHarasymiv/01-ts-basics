import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

setTimeout(() => {
  console.log("Task - 8");
  fetchPosts().then((posts) => {
    console.log(posts[0].title);
  });
}, 1200);

export function taskEight() {
  return;
}
