import TabsDesktop from "./TabsDesktop";
import TabsMobile from "./TabsMobile";
import useWindowDimensions from "../../../hooks/useWindowsDimension";

export default function Tabs(
  { atributes }: { atributes: { name: string; value_name: string; }[] },
) {
  const { width } = useWindowDimensions();

  return <>{width <= 640 ? <TabsMobile atributes = { atributes } /> : <TabsDesktop atributes = { atributes } />}</>;
}
