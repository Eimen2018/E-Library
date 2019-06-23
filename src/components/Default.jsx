import React, { Component } from 'react';

class Default extends Component {
    state = {  }
    render() { 
        return ( 
            <main>
                <section className="presentation-2">
                    <div className="pagenotfound">
                    <img src="img/page_not_found.png" alt="page not found" className="pagenotfound-img" width="500px"/>
                    <h1 className="text-center">Page Not Found</h1>
                    <h4 className="text-muted text-center">The Requested URL <span className="text-danger">{this.props.location.pathname}</span> was not Found</h4>
                    </div>
                </section>
            </main>
         );
    }
}
 
export default Default;