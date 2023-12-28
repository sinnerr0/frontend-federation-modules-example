import { css } from "@emotion/react";

const style = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: white;
  color: red;
  padding: 12;
`;

const ErrorPage = () => <div css={style}>Page Error</div>;

export default ErrorPage;
