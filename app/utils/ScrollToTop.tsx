import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

type ScrollToTopProps = {
  history: History;
};

function ScrollToTop({ history }: ScrollToTopProps) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  });

  return null;
}

export default withRouter(ScrollToTop);
