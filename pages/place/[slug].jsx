import { useRouter } from "next/router";
import Layout from "../../app/common/Layout";

const Place = () => {
    const {query : {slug}} = useRouter()

    return (
        <Layout> Place {slug} </Layout>
    );
};

export default Place;