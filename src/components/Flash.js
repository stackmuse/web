import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Flash.css";

function Flash() {
  const location = useLocation();
  useEffect(() => {});
  if (location && location.state && location.state.flash) {
    const flashCls = location.state.flash.class;
    const flashMsg = location.state.flash.message;
    location.state.flash = {};

    return (
      <div className={`flash flash-${flashCls}`}>
        <p>{flashMsg}</p>
      </div>
    );
  }
  return <></>;
}

export default Flash;
