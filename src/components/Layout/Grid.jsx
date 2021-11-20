import styled, { css } from "styled-components";

export const Grid = (props) => {
  const { children, container, item, ...rest } = props;
  return <StyledGrid container={container} item={item} {...rest}>{children}</StyledGrid>;
};

const StyledGrid = styled.div`
  ${({ theme, container, item, xs, sm, md, lg, xl }) => {
    const gapSize = theme.spacing(1);
    return css`
      display: ${Boolean(container) && "flex"};
      gap: ${Boolean(container) && gapSize};
      width: 100%;
      flex-flow: row wrap;
      max-width: ${Boolean(item) && calcGridItemSize(xs)};

      @media screen and (min-width: ${theme.screen.sm}) {
        ${Boolean(sm) && renderMaxWidth(sm, gapSize)}
      }
      @media screen and (min-width: ${theme.screen.md}) {
        ${Boolean(md) && renderMaxWidth(md, gapSize)}
      }
      @media screen and (min-width: ${theme.screen.lg}) {
        ${Boolean(lg) && renderMaxWidth(lg, gapSize)}
      }
      @media screen and (min-width: ${theme.screen.xl}) {
        ${Boolean(xl) && renderMaxWidth(xl, gapSize)}
      }
    `;
  }}
`;

function calcGridItemSize(size, gap = "0px") {
  if (!size) return "none";
  if (size > 12 || size < 1) {
    size = 12;
  }
  return `calc(${(100 / (12 / size))}% - ${gap})`;
}

function renderMaxWidth(screenSize, gap) {
  const itemSize = calcGridItemSize(screenSize, gap);
  return css`
    max-width: ${itemSize};
  `;
}
