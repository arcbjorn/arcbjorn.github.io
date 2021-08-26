import * as React from "react";
import { Helmet } from "react-helmet";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-regular-svg-icons";

import "../styles/tailwind.css";
import Layout from "layouts/Layout";
import Terminal from "components/terminal/Terminal";

library.add(faLinkedin, faGithub, faTelegramPlane, faEnvelope, faFileAlt);

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>Oleg Luganskiy</title>
      </Helmet>
      <Terminal />
    </Layout>
  );
};

export default IndexPage;
