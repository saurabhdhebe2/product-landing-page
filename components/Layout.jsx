import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Demo App</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
