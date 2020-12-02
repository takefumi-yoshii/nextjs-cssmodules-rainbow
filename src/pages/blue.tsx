import dynamic from "next/dynamic";
const Page = dynamic(() => import("../components/Blue"));
export default Page;
