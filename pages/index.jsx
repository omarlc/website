import Head from "next/head";
import Layout from "../components/styles/Layout.styled";
import Socials from "../components/Socials";
import Presence from "../components/Presence";
import Waving from "../components/styles/Waving.styled";
import avatar from "../public/images/Avatar.jpg";
import { useTheme } from "styled-components";
import {
  AvatarContainer,
  CenteredDiv,
  StyledAvatar,
} from "../components/styles/Avatar.styled";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Omar López</title>
      </Head>
      <Layout>
        <CenteredDiv>
          <AvatarContainer>
            <StyledAvatar
              src={avatar}
              alt="Omar &amp; Horus"
              width={250}
              height={250}
              objectFit={"contain"}
            />
            <Presence />
          </AvatarContainer>
        </CenteredDiv>
        <h1>
          Hello, I'm Omar
          <Waving />
        </h1>
        <p>Computer Systems Engineer, based in México 🇲🇽</p>
        <p style={{ color: theme.colors.primary, fontWeight: "600" }}>
          Currently, I'm looking for a job.
        </p>
        <h2>What do I do?</h2>
        <p>
          As a self-taught developer, I build web apps with JavaScript
          technologies. I have 1 year of experience in this world of tech, so I
          consider myself a <strong>Junior Developer</strong>.
        </p>
        <p>You can find me on:</p>
        <Socials />
      </Layout>
    </>
  );
}
