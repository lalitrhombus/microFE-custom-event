import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from "react-router-dom";

import Products from '../Products';
import Cart from '../Cart';
import useStyles from './styles';
import Toolbar from '@material-ui/core/Toolbar';

import 'stencil-component-poc';
import useProducts from '../../state/product/hooks/useProducts';

const Body = () => {
  const classes = useStyles();
  const [product] = useProducts();

  useEffect(() => {
    console.log("i am rendring", product);
  }, [product]);

  return (
    <main className={classes.main}>
      <Grid className={classes.content} >
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
        <Toolbar>
        <my-component
          first="Stencil"
          last={`Loaded inside react and i say we have ${product.cart} product in cart`}
        ></my-component>
        </Toolbar>
      </Grid>
    </main>
  );
};

export default Body;
