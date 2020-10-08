import React, { Component } from "react";

class Filter extends Component {
  state = {
    data: [],
    year: "",
    land: "",
    launch: "",
    url: "https://api.spaceXdata.com/v3/launches?limit=100&",
    str: "",
  };

  filterfunction(type, value) {
    this.setState({ [type]: value });
    let strin = type + "=" + value + "&";

    if (type == "launch_year") {
      if (this.state.year) {
        const regex = /(.*launch_year=)\d{4}(.*)/;
        const replaceYear = this.state.str.replace(regex, `$1${value}$2`);
        this.setState({ str: replaceYear, year: value });
        this.props.triggerParent(replaceYear);
      } else  {
        this.setState({ str: this.state.str + strin, year: value });
        this.props.triggerParent(this.state.str + strin);
      }
    } else if (type == "launch_success") {
      if (this.state.launch) {
        const regex = /(.*launch_success=)\w{4}(.*)/;
        const replacelaunch = this.state.str.replace(regex, `$1${value}$2`);
        this.setState({ str: replacelaunch, launch: value });
        this.props.triggerParent(replacelaunch);
      } else  {
        this.setState({ str: this.state.str + strin, launch: value });
        this.props.triggerParent(this.state.str + strin);
      }
    } else if (type == "land_success") {
      if (this.state.land) {
        const regex = /(.*land_success=)\w{4}(.*)/;
        const replaceland = this.state.str.replace(regex, `$1${value}$2`);
        this.setState({ str: replaceland, launch: value });
        this.props.triggerParent(replaceland);
      } else {
        this.setState({ str: this.state.str + strin, land: value });
        this.props.triggerParent(this.state.str + strin);
      }
    }
    fetch(this.state.url + strin)
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="filter-section">
          <h4 className="filter-headin">Filters</h4>
          <div className="filter-year">
            <p>Launch Year</p>
            <div className="row filter-row">
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2006)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2006
                </button>
              </div>
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2007)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2007
                </button>
              </div>
            </div>
            <div className="row filter-row">
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2008)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2008
                </button>
              </div>
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2009)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2009
                </button>
              </div>
            </div>
            <div className="row filter-row">
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2010)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2010
                </button>
              </div>
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2011)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2011
                </button>
              </div>
            </div>
            <div className="row filter-row">
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2012)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2012
                </button>
              </div>
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2013)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2013
                </button>
              </div>
            </div>
            <div className="row filter-row">
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2014)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2014
                </button>
              </div>
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2015)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2015
                </button>
              </div>
            </div>
            <div className="row filter-row">
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2016)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2016
                </button>
              </div>
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2017)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2017
                </button>
              </div>
            </div>
            <div className="row filter-row">
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2018)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2018
                </button>
              </div>
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2019)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2019
                </button>
              </div>
            </div>
            <div className="row filter-row">
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_year", 2020)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  2020
                </button>
              </div>
            </div>
          </div>
          <div className="successful-launch">
            <p>Successful Launch</p>
            <div className="row filter-row">
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_success", true)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  True
                </button>
              </div>
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("launch_success", false)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  False
                </button>
              </div>
            </div>
          </div>
          <div className="successful-launch">
            <p>Successful Land</p>
            <div className="row filter-row">
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("land_success", true)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  True
                </button>
              </div>
              <div className="col filter-column">
                <button
                  onClick={() => this.filterfunction("land_success", false)}
                  type="button"
                  name=""
                  id=""
                  className="btn btn-primary year-button"
                >
                  False
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
