import React, { Component } from "react";

class Data extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
  
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }

  componentDidUpdate(prevState, prevProps){
    if(prevState.finalurl !== this.props.finalurl){
       fetch(`https://api.spaceXdata.com/v3/launches?limit=100&${this.props.finalurl}` )
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
    }
   
  }
  

  render() {
    const { data } = this.state;
   
    return (
      <React.Fragment>
        <div className="data-section">
          <div className="row data-row">
            {this.state.data &&
              this.state.data.map((maps, index) => {
                return (
                  <div
                    key={index}
                    className="col-sm-12 col-md-6 col-lg-3 data-column"
                  >
                    <div className="data-block">
                      <img
                        src={maps.links.mission_patch_small}
                        className="img-fluid mission-image"
                        alt=""
                      />
                      <p className="mission-name">
                        {maps.mission_name} # {maps.flight_number}
                      </p>
                      <div className="data-content">
                        <span>Mission Ids:</span>
                        <p>{maps.mission_id}</p>
                      </div>
                      <div className="data-content">
                        <span>Launch Year:</span>
                        <p>{maps.launch_year}</p>
                      </div>
                      <div className="data-content">
                        <span>Successful Launch:</span>
                        <p>{maps.launch_success.toString()}</p>
                      </div>
                      <div className="data-content">
                        <span>Successful landing:</span>
                        <p>{maps.rocket.first_stage.cores.land_success}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Data;
