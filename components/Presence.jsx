import { StyledPresence } from "./styles/Presence.styled";
import { useLanyard } from "react-use-lanyard";
import ReactTooltip from "react-tooltip";

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
        {lanyard?.data?.data?.discord_status.charAt(0).toUpperCase() +
          lanyard?.data?.data?.discord_status.slice(1)}
      </ReactTooltip>
    </>
  );
};

export default Presence;
