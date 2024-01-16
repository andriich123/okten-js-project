// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

import postService from "./post-service.js";
import { renderPostDetails, renderComments } from "./ui-render.js";

const userId = new URLSearchParams(window.location.search).get("id");

const init = async () => {
  const post = await postService.getPostById(userId);
  document.title = post.title;

  const postDetails = renderPostDetails(post);
  document.body.append(postDetails);

  const comments = await postService.getPostComments(userId);
  const commentsContainer = document.querySelector("#post-content__comments");
  const commentsList = renderComments(comments);
  commentsContainer.replaceChildren(commentsList);
};

init();
