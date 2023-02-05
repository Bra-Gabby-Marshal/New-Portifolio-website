import Link from 'next/link';
import Layout from '../components/Layout';
import { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <Layout title="About">
        <h1>About</h1>
        <Link href="/">Go to home</Link> 
        <p>A JaveScript Programmer</p>
        <img src="/static/javascript-logo.jpg" alt="javascript-logo" height="200px"/>
    </Layout>
        );
    }
}