import styled, { css } from "styled-components";

import Logo from "../../../assets/images/logo-branca.svg";

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.main.colors.guia.blueDark};
    height: ${theme.main.sizes.leftMenu.height};

    .projectName {
      display: block;
      height: ${theme.main.sizes.leftMenu.height};
      background-image: url(${Logo});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 8rem;
    }
  `}
`;

export default Wrapper;
