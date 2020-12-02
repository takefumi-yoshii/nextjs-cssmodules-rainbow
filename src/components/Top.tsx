import Nav from "./Nav";
import shared from "../styles/shared.module.css";
import colors from "../styles/colors.module.css";
import common from "../styles/common.module.css";
// _____________________________________________________________________________
//
const Component = () => (
  <div className={`${common.red} ${colors.green} ${shared.blue}`}>
    <h1>Rainbow</h1>
    <Nav />
  </div>
);
// _____________________________________________________________________________
//
export default Component;
