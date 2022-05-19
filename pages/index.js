import styled from "styled-components";
import Head from "next/head";
import Layout from "./components/Layout";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Omar López</title>
      </Head>
      <Layout>
        <Title>Hello I'm Omar 👋</Title>
        <p>computer systems engenieer, based on México 🇲🇽 </p>
        <p>
          i like to learn new things and build projects with that knowledge.
        </p>
      </Layout>
    </>
  );
}
