import dynamic from "next/dynamic";
const Page = dynamic(() => import("../components/Red"));
export default Page;
