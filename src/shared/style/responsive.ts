// medie query 사용법
// ex)
// const Container = styled.div`
//   ${({ theme }) => css`
//     ${theme.responsive.mobile} {
//       //...
//     }
//   `}
// `;

const responsive = {
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px',
    xxl: '2000px',
    uhd: '3000px'
  },
  mobile: '@media screen and (max-width: 768px)'
};

export default responsive;
