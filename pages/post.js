import Layout from "../components/Layout";

const Post = ({ url }) => (
    <Layout title={url.query.title}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam interdum libero vel leo feugiat, et commodo lectus rhoncus. 
            Donec in malesuada sem. Sed ac venenatis ex. Nam vel velit vel velit 
            efficitur fringilla. Nunc luctus commodo congue. Aliquam erat volutpat.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Aliquam auctor metus quis mi commodo, id egestas dui 
            tincidunt. Integer ac mauris quis elit convallis bibendum a vitae erat.
            In hac habitasse platea dictumst. Nunc ac tortor euismod, fringilla sem a, tincidunt nisi.
            Phasellus non semper lorem. Sed auctor, tellus non faucibus tincidunt, justo enim blandit magna, 
            et accumsan diam nibh vel est. Nam bibendum libero vel velit bibendum, eu euismod enim semper. 
            Nunc malesuada fringilla lectus, in molestie sapien. Integer dictum, magna eget iaculis congue, 
            erat est commodo dui, et dapibus sem magna at magna.Proin consectetur laoreet leo, et molestie purus 
            convallis vel. Donec vel justo vel velit commodo rutrum id a erat. Nulla facilisi. Nam euismod scelerisque 
            nisi, eget facilisis nunc tincidunt a. Nam auctor, tellus ac bibendum congue, quam enim mol
        </p>
    </Layout>
);

export default Post;