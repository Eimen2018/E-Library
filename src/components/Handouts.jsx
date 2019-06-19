import React, { Component } from 'react';
import Handout from "./Handout";

class Handouts extends Component {
    state = {  }
    render() { 
        return ( 
            <main>
            <section class="presentation">
            <Handout />
            </section>
            </main>
         );
    }
}
 
export default Handouts;