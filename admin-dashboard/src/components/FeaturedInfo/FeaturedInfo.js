import "./featuredInfo.css";
import FeaturedItem from "./FeaturedItem";
import { data } from "./data";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      {data.map((item) => (
        <FeaturedItem {...item} key={item.id} />
      ))}
    </div>
  );
}
