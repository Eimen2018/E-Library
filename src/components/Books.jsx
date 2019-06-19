import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
    state = {  }
    render() { 
        return ( 
            <main>
                <section class="presentation">
                    <Book />
                </section>
            </main>
         );
    }
}
 
export default Books;