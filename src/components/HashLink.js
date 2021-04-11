import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { useSelector, useDispatch } from "react-redux";
import { toggle as toggleNavMenu } from "../redux/navOpen";

const HashLink = (props) => {
  const dispatch = useDispatch();

  const currentSection = useSelector((state) => state.viewSection.value);
  const style = props.name && {
    opacity:
      currentSection.toLowerCase() === props.name.toLowerCase() ? 1 : 0.7,
  };
  const Icon = props.icon;

  const onClick = () => {
    dispatch(toggleNavMenu());
  };

  return (
    <Link onClick={onClick} className="my-2" to={props.to} style={style} smooth>
      {props.name || <Icon />}
    </Link>
  );
};

export default HashLink;
