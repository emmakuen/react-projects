import "./widgets.css";
import WidgetSmItem from "./WidgetSmItem";

export default function WidgetSmall() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">Contributors</h3>
      <ul className="widgetSmList">
        <div className="widgetSmListTitles">
          <span>NAME</span>
          <span>VIEW</span>
        </div>
        <WidgetSmItem />
        <WidgetSmItem />
        <WidgetSmItem />
        <WidgetSmItem isLast={true} />
      </ul>
    </div>
  );
}
