// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

import userService from "./user-service.js";
import { renderUsers } from "./ui-render.js";

const init = async () => {
  const users = await userService.getUsers();
  document.body.append(renderUsers(users));
};

init();
