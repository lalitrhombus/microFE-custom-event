import React, {useEffect} from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles';

import useProducts from '../../state/product/hooks/useProducts';

const Layout = ({ children }) => {
  const classes = useStyles();
  const [product] = useProducts();
  useEffect(() => {
    console.log("i am rendring in app", product);
  }, [product]);
  console.log("i am in app.jsx", product);
  return (
    <Container className={classes.root}>
      <Grid container>
        <CssBaseline />
        {children}
      </Grid>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
