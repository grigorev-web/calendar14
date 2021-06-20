import { BsClock } from "react-icons/bs";

export default function EventDiv(props) {
  /*
  return(
    <div> Event date: {props.ev.toLocaleString()}</div>
  )
*/

  if (!Array.isArray(props.event.category)) return null;

  return (
    <div className="post post_medium">
      <div className="post__image-content">
        <a href={props.event.permalink}>
          <img
            className="post__image"
            src={props.event.image}
            data-spai="1"
            alt=""
            data-spai-upd="374"
          />
        </a>
      </div>
      <div className="post__content post__content_small post__content_high">
        {props.event.category.map((cat, key) => {
          return (
            <a
              key={key}
              className="link post__tag"
              href="https://russoft.org/our-events/?events-cat=russoft-events"
            >
              {cat.name}
            </a>
          );
        })}{" "}
        <a
          href={props.event.permalink}
          className="link post__name post__name_small"
        >
          {props.event.title}{" "}
        </a>
        <div className="post__description">{props.event.short_description}</div>
        <div className="post__date">
          <BsClock />
          <span className="post__time">{props.event.date} </span>
        </div>
      </div>
    </div>
  );
}
