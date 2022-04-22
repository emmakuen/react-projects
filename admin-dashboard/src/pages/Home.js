import "./home.css";
import FeaturedInfo from "../components/FeaturedInfo/FeaturedInfo";
import Chart from "../components/Chart/Chart";
import { WidgetSmall, WidgetLarge } from "../components/Widgets";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
