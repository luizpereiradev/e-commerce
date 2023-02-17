import TabsDesktop from "./TabsDesktop";
import TabsMobile from "./TabsMobile";
import useWindowDimensions from "../../hooks/useWindowsDimension";
export default function Tabs() {
  const { width } = useWindowDimensions();

  return <>{width <= 640 ? <TabsMobile /> : <TabsDesktop />}</>;
}
