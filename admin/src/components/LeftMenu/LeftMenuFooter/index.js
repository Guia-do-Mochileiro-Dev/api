/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import { FormattedMessage } from "react-intl";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <FormattedMessage
          id="poweredby"
          defaultMessage="Powered by"
          key="poweredBy"
        />{" "}
        <a
          key="website"
          href="https://github.com/Guia-do-Mochileiro-Dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guia do Mochileiro Dev
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
