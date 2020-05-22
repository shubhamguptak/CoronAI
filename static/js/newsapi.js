console.log("this is index. js file ");

let source = "coronavirus";
let apiKey = "a00deb5416394bf39a6f3ccad63fcbe6";

let newsApi = document.getElementById("newsApi");

const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?q=${source}&apiKey=${apiKey}`, true)
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&q=coronavirus&apiKey=a00deb5416394bf39a6f3ccad63fcbe6`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);

    console.log(json);

    let articles = json.articles;

    let articlesArr = articles.slice(0, 3);

    console.log(articlesArr.length);

    let newsHtnl = "";
    articlesArr.forEach(function (element, index) {
      let news = `  <div class="owl-item" style="width: 365px;padding:10px; margin-right:12px;">
                <div class="item">
                    <div class="protect_box text_align_center">
                        <div class="desktop">
                            <i><img src="${
                              element["urlToImage"]
                            }" style="height: 200px;  alt="#"></i>
                          <h5><b> ${element["title"].substring(0, 62)}</b> </h5>
                            <span>  <p class="card-text">
                <a href="${
                  element["url"]
                }" target='_blank'>Read more</a></p> </span>
                        </div>

                    </div>
                </div>
            </div>`;

      newsHtnl += news;
    });

    newsApi.innerHTML = newsHtnl;
  } else {
    console.log("some error ocuured");
  }
};
xhr.send();