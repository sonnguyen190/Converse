import React, { Component } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid } from '@mui/material';
class ShopByStyle extends Component {
    render() {
        return (
            <div class="grid wide">

            <div className='ShopByStyle_all'>
                   
                    <div className='content_ShopByStyle'>
                        <span className='Shopbystyle_span'>Shop By Style</span> <br />
                        <ArrowForwardIcon/>
                        <a className='Shopbystyle_link' href="">Shop All New Arrivals</a>
                    </div>
                   
            </div>
          
            </div>
        );
    }
}

export default ShopByStyle;