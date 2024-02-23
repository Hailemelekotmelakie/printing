import React from "react";
import "./app.css";

export default function App() {
  return (
    <div className="container">
      <div className="bodyContainer">
        <div className="imageAndLabelContainer">
          <img className="imageLogo" src="/female.png" alt="Noge" />
          <div>
            <h2 style={{ fontSize: 20, padding: "2px 100px" }}>
              በአማራ ብሔራዊ ክልላዊ መንግስት የስራ ስልጠና ቢሮ
            </h2>
            <h2 style={{ fontSize: 18, padding: "2px 10px" }}>
              AMHARA LABOUR AND TRADIND BUREAU
            </h2>
            <h2 style={{ fontSize: 20, padding: "2px 10px" }}>
              ኢልርጀኦኢፍር ፎኤርን ፎኢንረ ፎኢርን ግፍልሬግ ልረንጅጎ፤ር እግ ኢርል
            </h2>
          </div>
          <img className="imageLogo" src="/female.png" alt="Noimage" />
        </div>
        <div className="leftLabelsUpper">
          <p>
            Ykfhkdf dh:{" "}
            <span className="nbspacingSpan">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
          <p>
            ኃይለማርያም አዲሱ:{" "}
            <span className="nbspacingSpan">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
        </div>
        <p className="paragraphLong">
          lerom You can now view dorm in the browser. Local:
          http://localhost:3000 On Your Network: http://172.25.112.1:3000 Note
          that the development build is not optimized. cessfully that the
          development build is not optimized. To create create a production
          build, use npm run build{" "}
          <span className="nbspacingSpan">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          rl grek uugru uyyg g{" "}
          <span className="nbspacingSpan">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          ኮሌጅ፡
        </p>
        <ul>
          {[1, 2, 3, 4, 5].map((value) => {
            return (
              <li key={value}>
                በ
                <span className="nbspacingSpan">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                የሙያ አይነት በ{" "}
                <span className="nbspacingSpan">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>{" "}
                ደረጃ፡ የቀን፡{" "}
                <span className="nbspacingSpan">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>{" "}
                የማታ{" "}
                <span className="nbspacingSpan">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>{" "}
                ሰልጣኞችን፤
              </li>
            );
          })}
        </ul>
        <p className="paragraphLong">
          lerom You (
          <span className="nbspacingSpan">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          ) can now view dorm (
          <span className="nbspacingSpan">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          ) in the browser. Local: On Your Network: Note that the development
          build is not optimized. cessfully that the development
          <span className="nbspacingSpan">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          build is
          <span className="nbspacingSpan">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          not optimized.
        </p>
        <h1 className="noticeAtt">Notice:-</h1>
        <ul itemType="square">
          {[
            "ኢሉህዲ እኢፍደኢጅፍህ እኢ ህ ግፊኡ ርዊኡህግ ፊርው ፊርው ህጊኡፍ ርውህግልፊር ልግ  እኢ ህ ግፊኡ ርዊኡህግ ፊርው ፊርው ህጊኡፍ ርውህግልፊር ልግ ርው።",
            "ል ጅጀ ህሌህ ልፊ ሀፍ ኡኦኤ ፍ ሄውህ ፎኢሀውጅፍ  ሊህፊለው ሊፍህ እውሊፍ ለ ህሊፍህል ኤዊእወ።",
            "ኢጅፍ እ ፎኢጀፍጅ ኦእው ፊልህ እኢልህፍ ኡእግርህፉኦኢውይሮዌድጅክስድ ችልክህDሽ  ጅፋ ፍል ካጅፍልህ ፍግ ህሊክህጅ ላፍልልክድህፍ ኦክፍህል ህ ወሊፍህ እል ርፍህ ኦ እአውፍልሃክልህ ግለራ ርልልግፊአል ሂግል ግ ህግግምር።",
            "ፍጅ ኦኦሪጅፍጅ ርኝክ ርግ ጆጅ ርግ ኦጅሪ ጅግ ጆኢርጅግጅርግልክ  ኦእግሪጅግ ፤ኦረጅጎ  ግሮኢግ  ሎኢርጅግ ኦኢጅርግ፤ኦጅግ "
          ].map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
        <h1 className="noticeAtt">ፈቃዱን የሰጡ ጅት ጎኢጅት ህ ትህጅት ህ ኦኢጅት </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="nameSignAndAuthority">
            <h1>
              1. ስም፡{" "}
              <span className="nbspacingSpan">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
            </h1>
            <h1 style={{ paddingLeft: 20 }}>
              የስራ ኃላፊነት፡{" "}
              <span className="nbspacingSpan">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
              firma፡{" "}
              <span className="nbspacingSpan">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
            </h1>
          </div>
          <div className="nameSignAndAuthority">
            <h1>
              2. ስም፡{" "}
              <span className="nbspacingSpan">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
            </h1>
            <h1 style={{ paddingLeft: 20 }}>
              የስራ ኃላፊነት፡{" "}
              <span className="nbspacingSpan">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
              firma፡{" "}
              <span className="nbspacingSpan">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
