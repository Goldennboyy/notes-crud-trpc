import { type NextPage } from "next";
import NoteInput from "~/components/NoteInput";
import Layout from "~/components/Layout";
import Notes from "~/components/Notes";

const Home: NextPage = () => {
  return (
    <div>
      <Layout data-theme="night" page="Notes-TRPC">
        <NoteInput />
        <Notes />
      </Layout>
    </div>
  );
};

export default Home;
