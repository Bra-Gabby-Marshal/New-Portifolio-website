import Layout from "../components/Layout";

export default({ statusCode}) => (
    <Layout title="Error!!!">
        {statusCode ? `could not load your data: status code ${statusCode}`
         : `Couldn't get the page, sorry!`}
    </Layout>
);