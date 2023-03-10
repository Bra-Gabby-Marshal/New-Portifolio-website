import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
    <Layout title="Home">
        <h1>Home</h1>
        <Link href="/about">Go to About Page</Link>
        <p>Welcome to the home page</p>
    </Layout>
);

export default Index;