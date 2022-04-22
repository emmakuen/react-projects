import "./widgets.css";
import { AccountBox } from "@material-ui/icons";

export default function WidgetSmItem(props) {
  return (
    <>
      <div className="widgetSmItemLine" />
      <li className="widgetSmListItem">
        <div className="widgetSmItemInfo">
          <img
            src="https://images.unsplash.com/photo-1649817691459-cf2da24120a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="name"
            className="widgetSmImg"
          />
          <span className="widgetSmItemName">Sherlie Green</span>
          <span className="widgetSmItemType">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <AccountBox className="widgetSmIcon" />
        </button>
      </li>
    </>
  );
}
