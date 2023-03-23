import { type NextPage } from "next";
import AddNote from "~/components/AddNote";
import Layout from "~/components/Layout";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from Emmanuel" });

  return (
    <div>
      <Layout page="notes app w/ TRPC">
        <AddNote />
      </Layout>
    </div>
  );
};

export default Home;
