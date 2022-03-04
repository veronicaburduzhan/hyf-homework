(async function () {
  try {
    const responseUserAlina = await fetch(
      "https://api.github.com/search/repositories?q=user:alina-kho"
    );
    const userAlina = await responseUserAlina.json();
    const responseUserRebecca = await fetch(
      "https://api.github.com/search/repositories?q=user:rebeccahockley"
    );
    const userRebecca = await responseUserRebecca.json();
    const responseUserOleksandra = await fetch(
      "https://api.github.com/search/repositories?q=user:oleksandra-lavryk"
    );
      const userOleksandra = await responseUserOleksandra.json();
      
    const usersGitHub = Promise.all([userAlina, userRebecca, userOleksandra]).then(
      (usersGitHub) => {
        const usersUl = document.getElementById("users");
        for (let i = 0; i < usersGitHub.length; i++) {
          const userField = document.createElement("li");
          const repoOwner = document.createElement("p");
          const repoUrl = document.createElement("p");
          const repoName = document.createElement("p");
          repoOwner.innerHTML = `${usersGitHub[i].items[0].owner.login}`;
          repoName.innerHTML = `${usersGitHub[i].items[0].full_name}`;
          repoUrl.innerHTML = `${usersGitHub[i].items[0].html_url}`;
          userField.appendChild(repoOwner);
          userField.appendChild(repoName);
          userField.appendChild(repoUrl);
          usersUl.appendChild(userField);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
})();
