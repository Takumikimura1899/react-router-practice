import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        // render関数にはpropsとしてroutingに関するpropsがわたってくる。
        // プロパティのmatchの中のurlを取り出す。
        render={({ match: { url } }) => (
          <Switch>
            {/* 試しに出力 */}
            {console.log(url)}
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/Page1DetailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/Page1DetailB`}>
              <Page1DetailB />
            </Route>
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
