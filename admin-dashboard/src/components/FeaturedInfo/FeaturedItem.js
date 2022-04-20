import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { convertToAbsPercentage } from "../../utils/formatters";

export default function FeaturedItem(props) {
  const { name, amount, change } = props;
  const isPositive = change >= 0;
  return (
    <div className="featuredItem">
      <h4 className="featuredTitle">{name}</h4>
      <div className="featuredStatContainer">
        <p className="featuredStat">{amount}</p>
        <div className={`featuredChange${isPositive ? " up" : " down"}`}>
          {isPositive ? (
            <ArrowUpward className="featuredArrow up" />
          ) : (
            <ArrowDownward className="featuredArrow down" />
          )}
          {convertToAbsPercentage(change)}{" "}
        </div>
      </div>
    </div>
  );
}
