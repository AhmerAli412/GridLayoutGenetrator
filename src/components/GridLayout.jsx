import React from "react";

function GridLayout({ children, columns, rows }) {
  const styles = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridGap: "15px"
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
}

export default GridLayout;