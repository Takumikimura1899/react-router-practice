import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  return (
    <div>
      <h1>Page1</h1>
      <br />
      <hr />
      <h2>To Page1 DetailA</h2>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <hr />
      <h2>To Page1 DetailB</h2>
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};
