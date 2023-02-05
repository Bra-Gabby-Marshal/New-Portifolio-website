import Layout from "../components/Layout";
import Link from "next/link";

export default () => (
    <Layout title="My Blog">
        <ul>
            <li>
                <Link href="/post?title=React" legacyBehavior>
                    <a>React Post</a>
                </Link>
            </li>
        </ul>
    </Layout>
)