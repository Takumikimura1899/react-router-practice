import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <br />
      <hr />
      <h2>To Page1 DetailA</h2>
      <Link to="/page1/detailA">DetailA</Link>
      <hr />
      <h2>To Page1 DetailB</h2>
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};
