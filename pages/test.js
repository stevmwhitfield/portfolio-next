const Test = () => {
  return (
    <>
    <CustomHead
      title="Subdomain Test | Steven Whitfield"
      description=""
      url="https://www.stevenwhitfield.live/test"
    />
    <Layout>
      <div className={styles.container}>
        <h1>Hello!</h1>
        <p>This page is to test adding a microsite as a subdomain.</p>
      </div>
    </Layout>
  </>
  );
};

export default Test;
