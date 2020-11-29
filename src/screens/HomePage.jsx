import React, { useEffect } from "react";

function HomePage(props) {
  useEffect(() => {
    // const { id } = props.match.params;
    console.log(props);
  }, [props]);

  return <div>Webcome to base hospitle dambulla</div>;
}

export default HomePage;
