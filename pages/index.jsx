import styled from "styled-components";
import Head from "next/head";
import Layout from "../components/styles/Layout.styled";
import Socials from "../components/Socials";
import Presence from "../components/Presence";
import Waving from "../components/styles/Waving.styled";

import avatar from "../public/images/Avatar.jpg";
import Image from "next/image";
import {
  AvatarContainer,
  StyledAvatar,
} from "../components/styles/Avatar.styled";

const MainContainer = styled.main`
  background-color: #121213;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 3.75rem;
    color: white;
  }

  p {
    color: white;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Omar López</title>
      </Head>
      <Layout>
        <MainContainer>
          <AvatarContainer>
            <StyledAvatar
              src={avatar}
              alt="Omar &amp; Horus"
              width={250}
              height={250}
              objectFit={"contain"}
            />
          </AvatarContainer>
          <h1>
            Hello I'm Omar
            <Waving />
            <Presence />
          </h1>
          <p>computer systems engenieer, based on México 🇲🇽 </p>
          <p>
            i like to learn new things and build projects with that knowledge.
          </p>
          <Socials />
        </MainContainer>
      </Layout>
    </>
  );
}
