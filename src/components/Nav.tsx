import * as React from "react";
import Link from "next/link";
// _____________________________________________________________________________
//
interface Props {
  className?: string;
}
// _____________________________________________________________________________
//
const Component = (props: Props) => (
  <ul>
    <li>
      <Link href="/">
        <a>Rainbow</a>
      </Link>
    </li>
    <li>
      <Link href="/red">
        <a>Red</a>
      </Link>
    </li>
    <li>
      <Link href="/green">
        <a>Green</a>
      </Link>
    </li>
    <li>
      <Link href="/blue">
        <a>Blue</a>
      </Link>
    </li>
  </ul>
);
// _____________________________________________________________________________
//
export default Component;
