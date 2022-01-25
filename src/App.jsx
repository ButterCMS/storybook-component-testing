import React, { useEffect, useState } from "react";
import LandingPage from "./pages/landingPage";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.buttercms.com/v2/pages/*/storybook-demo/?locale=en&preview=1&auth_token=6aa4e6cb6fb959f2dba4323c61710ad900b647d3"
      );
      const data = await response.json();

      setData(data);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <LandingPage {...data} />;
}

export default App;
