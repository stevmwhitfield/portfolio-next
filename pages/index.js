const Test = () => {
  return (
    <>
      <h1>Hello!</h1>
      <p>This page was added to the main site by assigning a subdomain.</p>
      <p>The specific steps are as follows:</p>
      <ul>
        <li>Create a new Git branch for the microsite.</li>
        <li>Add content to the branch.</li>
        <li>In Vercel, add the subdomain and assign the branch to it.</li>
        <li>Push the branch to GitHub to deploy.</li>
        <li>Go to the subdomain to confirm it worked.</li>
      </ul>
      <hr />
      <p>Something to keep in mind...</p>
      <p><em>Since this website uses Next.js, the branch must also use Next.js, even if the page is extremely simple.</em></p>
      <p><em>Attempting to use a vanilla HTML page did not display the page despite not showing errors in deployment.</em></p>
    </>
  );
};

export default Test;
