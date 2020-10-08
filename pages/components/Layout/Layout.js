import React, { Component } from "react";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Filter from '../Section/Filter/Filter';
import Data from '../Section/Filter/Data/Data';

class Layout extends Component {
  state = {
    url: '',
  };

    updateurl = (urlpass) => {
        this.setState({url: urlpass});
    }
    render() {
        return ( 
            <div className="layout-section">
               <Header /> 
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <Filter triggerParent={this.updateurl}/>
                            </div>
                            <div className="col-12 col-md-9">
                                <Data finalurl={this.state.url}/>
                            </div>                  
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
         );
    }
  
}
 
export default Layout;