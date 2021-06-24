import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import "./HizmetTekli.css";
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 460,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

export const MusicCardDemo = React.memo(function MusicCard({ link, proje }) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card
      className={cx(styles.root, shadowStyles.root)}
      style={{ marginBottom: 10 }}
    >
      <CardMedia className={cx(styles.media, mediaStyles.root)} image={link} />
      <CardContent className="title">
        <TextInfoContent
          classes={textCardContentStyles}
          color="#95d5b2"
          heading={proje}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </CardContent>
    </Card>
  );
});
export default MusicCardDemo;
