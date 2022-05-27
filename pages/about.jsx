import Link from "next/link";
import Head from "next/head";

import Layout from "../components/styles/Layout.styled";
import { Main } from "../components/styles/Main.styled";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <Main>
        <p>
          Hi! I am a self-taught developer who graduated from{" "}
          <Link href="https://tesci.edomex.gob.mx/" passHref>
            <a target="_blank">TESCI</a>
          </Link>{" "}
          as a Computer Systems Engineer. I am currently looking for a job where
          I can develop professionally and contribute with my knowledge to make
          an impact on society.
        </p>
        <p>
          I consider myself a continuous learner because I like to learn always
          new things, either in the area of technology, such as photography,
          video games, and knowledge in general.
        </p>
      </Main>
    </Layout>
  );
};

export default About;
