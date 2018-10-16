import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: '30',
      monthly: '',
    };
       this.handleClick = this.handleClick.bind(this);
       this.calculate   = this.calculate.bind(this);
  }
    
  calculate(balance, rate, term) {
      var rate        = parseFloat(this.state.rate) / 100 / 12;
      var term        = parseFloat(this.state.term) * 12;
      var balance     = +(parseFloat(this.state.balance));
      var monthly = balance * (rate * ((1+ rate) ** term)) / (((1 + rate) ** term) -1);
        this.setState({
         monthly:  Math.ceil(monthly * 100) /100,
        });
  };
  
    handleClick(e) {
    e.preventDefault();
    this.calculate();  
    }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <label className="col-sm-12 col text-light bg-dark">
            <h1>Mortgage Calculator</h1>
          </label>
        </div>
        <form >
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Balance in USD</label>
            <div className="col-sm-5">
              <input
                placeholder="Balance"
                value={this.state.balance}
                onChange={e => this.setState({ balance: e.target.value})}
                type="number"
                className="form-control"
                name="balance"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Interest Rate</label>
            <div className="col-sm-5">
              <input
                placeholder="Interest Rate"
                value={this.state.rate}
                onChange={e => this.setState({ rate: e.target.value})}
                type="number"
                className="form-control"
                name="rate"
                step=".01"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Loan term</label>
            <div className="col-sm-5">
              <select className="form-control" name="term" value={this.state.term} onChange={e => this.setState({ term: e.target.value})}>
                <option className="form-label" value="30">
                  30
                </option>
                <option value="15">15</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <button onClick={this.handleClick} className="btn btn-primary" name="submit">
                Calculate
              </button>
            </div>
          </div>
          <div className="form-group row" name="output" id="output" value={ this.state.monthly } >{this.state.monthly}</div>
          </form>
      </div>
    );
  }
}