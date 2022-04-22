import "./widgets.css";
import { AccountBox } from "@material-ui/icons";

export default function WidgetSmItem(props) {
  const { imgUrl, name, title } = props;
  return (
    <li className="widgetSmListItem">
      <div className="widgetSmItemInfo">
        <img src={imgUrl} alt={name} className="widgetSmImg" />
        <span className="widgetSmItemName">{name}</span>
        <span className="widgetSmItemType">{title}</span>
      </div>
      <button className="widgetSmButton">
        <AccountBox className="widgetSmIcon" />
      </button>
    </li>
  );
}
