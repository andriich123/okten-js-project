export const renderUsers = (users) => {
  const usersList = document.createElement("ul");
  usersList.classList.add("users-list");

  users.forEach((user) => {
    const { id, name } = user;

    const userCard = document.createElement("li");
    userCard.classList.add("user-content");

    const userContent = ` 
      <div className="user-content__info">
        <span>${id}.</span>
        <span>${name}</span>
      </div>

      <a href="user-details.html?id=${id}" class="user-content__link">See details</a>
    `;

    userCard.innerHTML = userContent;
    usersList.append(userCard);
  });

  return usersList;
};

export const renderUserDetailsItem = (user, onPostBtnClick) => {
  const { id, name, username, email, address, phone, website, company } = user;

  const userCard = document.createElement("div");
  userCard.classList.add("user-content");

  const userContent = `
      <div class="user-content__header">
        <span>${name}</span>
      </div>
        
      <div class="user-content__main">
        <div class="user-content__personal">
          <h2 class="user-content__title">Personal</h2>
          <p>Id: ${id}</p>
          <p>Username: ${username}</p>
          <p>Email: <a href="mailto:${email}">${email}</a></p>
          <p>Phone number:<a href="tel:${phone}">${phone}</a></p>
          <p>Check out the website:<a href="${website}">${website}</a></p>
        </div>

        <div class="user-content__company"> 
          <h2 class="user-content__title">Company</h2>
          <p>Company name: ${company.name}</p>
          <p>Catch phrase: ${company.catchPhrase}</p>
          <p>Bs: ${company.bs}</p>
        </div>
        
        <div class="user-content__address"> 
          <h2 class="user-content__title">Address</h2>
          <p>Street: ${address.street}</p>
          <p>Suite: ${address.suite}</p>
          <p>City: ${address.city}</p>
          <p>Zipcode: ${address.zipcode}</p>
        </div>
      </div>
  `;

  userCard.innerHTML = userContent;

  const userPostsBtn = document.createElement("button");
  userPostsBtn.classList.add("show-posts-btn");
  userPostsBtn.innerText = "Posts of current user";
  userPostsBtn.addEventListener("click", onPostBtnClick);

  userCard.append(userPostsBtn);

  const postsContainer = document.createElement("div");
  postsContainer.id = "user-content__posts";

  userCard.append(postsContainer);

  return userCard;
};

export const renderUserPosts = (posts) => {
  const postsList = document.createElement("ul");
  postsList.classList.add("posts-list");

  posts.forEach((post) => {
    const postElement = `
      <li class="post-item">
        <h3>${post.title}</h3>
        <a href="post-details.html?id=${post.id}">See details</a>
      </li>
    `;

    postsList.innerHTML += postElement;
  });

  return postsList;
};

export const renderPostDetails = (post) => {
  const { userId, id, title, body } = post;

  const postCard = document.createElement("div");
  postCard.classList.add("post-content");

  const postContent = `
    <h1>Post ${id}. ${title}. User ${userId}</h1>
    <p>${body}</p>
  `;

  postCard.innerHTML = postContent;

  const commentsContainer = document.createElement("div");
  commentsContainer.id = "post-content__comments";

  postCard.append(commentsContainer);

  return postCard;
};

export const renderComments = (comments) => {
  const commentsList = document.createElement("ul");
  commentsList.classList.add("comments-list");

  comments.forEach((comment) => {
    const commentElement = `
      <li class="comment-item">
        <p class="comment-item__name">${comment.name}</p>
        <p class="comment-item__email">${comment.email}</p>
        <p>${comment.body}</p>
      </li>
    `;

    commentsList.innerHTML += commentElement;
  });

  return commentsList;
};
