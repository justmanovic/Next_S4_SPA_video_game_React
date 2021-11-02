const KEY = process.env.KEY;

function Home(argument = "", selectedPlatform = "") {
  const selectPlatform = document.querySelector("select");
  const welcomeMessage = document.querySelector(".welcome-message");

  welcomeMessage.classList.remove("hidden");
  selectPlatform.classList.remove("hidden");

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";
    let searchedPage = 1;
    let showMoreButton = document.querySelector("#show-more");
    let nbTimesBtnClicked = 0;

    showMoreButton.addEventListener("click", () => {
      searchedPage += 1;
      nbTimesBtnClicked += 1;
      fetchList("https://api.rawg.io/api/games", cleanedArgument, searchedPage);

      if (nbTimesBtnClicked > 1) showMoreButton.classList.add("hidden");
    });

    const fetchList = (url, argument, page) => {
      let finalURL =
        `${url}?dates=2021-01-01,2021-12-31&key=${KEY}&page=${page}&page_size=9`;
      if (argument) {
        finalURL =
          `${url}?search=${argument}&search_precise=true&key=${KEY}&page=${page}&page_size=9`;
      }
      // console.log("url final :", finalURL)

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let countResults = response.count;
          console.log(countResults);
          let articleList = response.results;
          if (selectedPlatform !== "") {
            articleList = articleList.filter((article) =>
              article.platforms
                .map((platformObject) => platformObject.platform.name)
                .includes(selectedPlatform)
            );
          }
          console.log("articleList", articleList);

          articleList.forEach((article) => {
            let tabConsoleLogo = [];
            if (article.parent_platforms !== undefined) {
              let tabConsole = article.parent_platforms.map(
                (platform) => platform.platform.name
              );

              tabConsole.forEach((console) => {
                if (console === "PC")
                  tabConsoleLogo.push('<i class="fab fa-windows"></i>');
                else if (console === "PlayStation")
                  tabConsoleLogo.push('<i class="fab fa-playstation"></i>');
                else if (console === "Xbox")
                  tabConsoleLogo.push('<i class="fab fa-xbox"></i>');
                else if (console === "Nintendo")
                  tabConsoleLogo.push("Nintendo");
                else if (console === "Apple Macintosh")
                  tabConsoleLogo.push('<i class="fas fa-apple-alt"></i>');
              });
            }
            articles += `
                  <div class="cardGame">
                      <a href="#pagedetail/${article.id}">
                        <div class="div-img-cardgame">
                          <span class="rating">${article.rating}/5 - ${
              article.ratings_count
            } votes</span>
                          <img src=${article.background_image}>
                        </div>
                      </a>
                      <h1>${article.name}</h1>
                    <p>${tabConsoleLogo.join("")}</p>
                  </div>
                `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
        });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument, searchedPage);
  };

  const render = () => {
    pageContent.innerHTML = `
      
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
      <button class="show-more" id="show-more" >Show more</button>
    `;

    preparePage();
  };

  render();
}

export default Home;
