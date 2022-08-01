import React, { useState } from "react";
import { useEffect } from "react";
import { getNews } from "../service/getNews";
import moment from "moment";
import alanBtn from "@alan-ai/alan-sdk-web";
export default function () {
  const [newsData, setNewsData] = useState([]);
  const [option, setOption] = useState("");
  const alanKey =
    "ee4360ee920fde6d6f22de618f2fba422e956eca572e1d8b807a3e2338fdd0dc/stage";
  const getAllNews = async () => {
    let data = await getNews(option);
    setNewsData(data.data.articles);
  };
  const selectCategory = (e) => {
    setOption(e.target.value);
  };
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: (commandData) => {
        setOption(commandData.data);
      },
    });
  }, []);
  useEffect(() => {
    getAllNews();
  }, [option]);
  //   console.log(newsData?.data?.articles);
  return (
    <div className="main">
      <h1>Voice controlled news</h1>
      <div className="select">
        <label for="category">Choose a category:</label>

        <select
          className="select-box"
          name="category"
          id="category"
          onChange={selectCategory}
          value={option}
        >
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="sports">Sports</option>
          <option value="business">Business</option>
        </select>
      </div>
      <div className="grid-main">
        {newsData.map((news) => {
          return (
            <div className="grid-child">
              <img className="news-img" src={news?.urlToImage} />
              <p className="news-title">{news?.title}</p>
              <p className="news-content">{news?.content}</p>
              <div className="space-btw">
                <p className="news-author">
                  Author: {news?.author ? news?.author : "Author name unknown"}
                </p>
                <p className="news-date">
                  {moment(news?.publishedAt).format("ll")}
                </p>
              </div>

              <a href={news?.url} target="_blank">
                Read more..
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
