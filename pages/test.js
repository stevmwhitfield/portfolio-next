import CustomHead from "../components/Head";
import Layout from "../components/Layout";

const Test = () => {
  return (
    <>
        <CustomHead
        title="Subdomain Test | Steven Whitfield"
        description=""
        url="https://www.stevenwhitfield.live/test"
        />
        <Layout>
            <h1>Hello!</h1>
            <p>This page is to test adding a microsite as a subdomain.</p>
        </Layout>
    </>
  );
};

export default Test;
