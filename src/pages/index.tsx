import dynamic from "next/dynamic";
const Page = dynamic(() => import("../components/Top"));
export default Page;
