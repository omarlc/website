import dynamic from "next/dynamic";
import { StyledPresence } from "./styles/Presence.styled";
import { useLanyard } from "react-use-lanyard";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

const Presence = () => {
  const lanyard = useLanyard({
    userId: process.env.NEXT_PUBLIC_DISCORD_USER_ID,
  });
  return (
    <>
      <StyledPresence
        status={lanyard?.data?.data?.discord_status}
        data-for="DiscordPresence"
        data-tip
      />
      <ReactTooltip
        id="DiscordPresence"
        place="right"
        type="dark"
        effect="solid"
        textColor="#FFF"
      >
        Discord Presence:{" "}
        {lanyard?.data?.data?.discord_status.charAt(0).toUpperCase() +
          lanyard?.data?.data?.discord_status.slice(1)}
      </ReactTooltip>
    </>
  );
};

export default Presence;
