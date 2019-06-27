import React, { Component } from 'react';

class Search extends Component {
    state = { 
        search:this.props.location.state.search,
     }
    render() { 
        return ( 
            <main>
                <section className="presentation">
                    <h6>Search Results:{this.state.search}</h6>
                </section>
            </main>
         );
    }
}
 
export default Search;