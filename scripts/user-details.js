// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

import userService from "./user-service.js";
import { renderUserDetailsItem, renderUserPosts } from "./ui-render.js";

const userId = new URLSearchParams(window.location.search).get("id");

const handlePostsBtnClick = async (userId) => {
  const posts = await userService.getUserPosts(userId);
  const postsContainer = document.querySelector("#user-content__posts");
  postsContainer.replaceChildren(renderUserPosts(posts));
};

const init = async () => {
  const user = await userService.getUserById(userId);
  document.title = user.name;

  const userDetails = renderUserDetailsItem(user, () =>
    handlePostsBtnClick(user.id)
  );

  document.body.append(userDetails);
};

init();
