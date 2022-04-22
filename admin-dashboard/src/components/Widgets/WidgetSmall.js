import "./widgets.css";
import WidgetSmItem from "./WidgetSmItem";
import { contributors } from "../../data/contributorData";

export default function WidgetSmall() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">Contributors</h3>
      <ul className="widgetSmList">
        <div className="widgetSmListTitles">
          <span>CONTRIBUTOR</span>
          <span>VIEW</span>
        </div>
        {contributors.map((contributor) => (
          <WidgetSmItem key={contributor.id} {...contributor} />
        ))}
      </ul>
    </div>
  );
}
