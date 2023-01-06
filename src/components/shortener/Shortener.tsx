// react libraries
import { useState } from "react";

// api
import { apiEndpoint } from "../../api";

// styles
import styles from "./shortener.module.css";

// main URL shortener component
const Shortener = () => {
  const [urlList, setUrlList] = useState([]);
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  /**
   * handles user input
   * @param evt
   */
  const handleInput = (evt: any) => {
    setLongUrl(evt.target.value);
  };

  /**
   * makes API call to get shortened url
   */
  const fetchUrl = async () => {
    const result = await apiEndpoint.getUrl(longUrl);
    // valid url : result.data, result.status
    console.log("result", result.response);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.input_bar}>
        <input
          value={longUrl}
          onChange={(evt: any) => handleInput(evt)}
          placeholder="Shorten a link here..."
          className={styles.input}
        />
        <button onClick={fetchUrl} className={styles.cta_btn}>
          Shorten it!
        </button>
      </section>
      <section>
        {urlList &&
          urlList.length > 0 &&
          urlList.map((url, index) => (
            <section key={index}>
              <section></section>
              <section></section>
            </section>
          ))}
      </section>
    </div>
  );
};

export default Shortener;
