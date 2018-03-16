import React, { Fragment, Component } from "react";
import moment from "moment";

const DATE_FORMAT = "YYYY-M-D";
const DEFAULT_DATE = "1980-1-1";

class Date extends Component {
  constructor(props) {
    super(props);
    let {  input: { value = DEFAULT_DATE } } = this.props;

    let date = moment(value, DATE_FORMAT);
    this.state = {
      date,
      day: date.date(),
      month: date.format("MMMM"),
      year: date.year()
    }
  }

  handleDayChange = ({ target: { value }}) => {
    this.setState({ day: value });
  };

  handleMonthChange = ({ target: { value }}) => {
    this.setState({ month: value });
  };

  handleYearChange = ({ target: { value }}) => {
    this.setState({ year: value });
  };

  handleBlur = () => {
    let { day, year, month } = this.state;
    let { input: { onChange } } = this.props;
    onChange(moment(`${year}-${month}-${day}`, "YYYY-MMMM-D").format(DATE_FORMAT));
  };

  render() {
    let { meta: { touched, error }, placeholder } = this.props;
    let { day, month, year } = this.state;
    return (
      <Fragment>
        <label className="label">{placeholder}</label>
        <div className="field has-addons">
          <div className="control">
            <input type="number" className="input" min={1} max={32} value={day} onChange={this.handleDayChange} onBlur={this.handleBlur}/>
          </div>
          <div className="control">
            <div className="select">
              <select name="month" value={month} onChange={this.handleMonthChange} onBlur={this.handleBlur}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
          </div>
          <div className="control is-expanded">
            <input type="number" className="input" value={year} onChange={this.handleYearChange} onBlur={this.handleBlur}/>
          </div>
          {touched && error && <p className="help is-white">{error}</p>}
        </div>
      </Fragment>
    )
  }
}

export default Date;