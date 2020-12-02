import dynamic from "next/dynamic";
const Page = dynamic(() => import("../components/Green"));
export default Page;
