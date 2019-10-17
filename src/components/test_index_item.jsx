import React from "react";

class TestIndexItem extends React.Component {
  constructor(props) {
    super(props);

    const { passes, failures } = this.props;
    this.passes = passes;
    this.failures = failures;
    this.resultsText = this.getResultsText();
    this.getResults();
  }

  getResults() {
    this.passLis = this.passes.map((pass, idx) => {
      return <li key={idx}>{pass.title}</li>;
    });
    this.failLis = this.failures.map((failure, idx) => {
      return <li key={idx}>{failure.title}</li>;
    });
  }

  getResultsText() {
    const passText =
      this.passes.length === 1 ? `1 pass` : `${this.passes.length} passes`;

    const failText =
      this.failures.length === 1
        ? `1 failure`
        : `${this.failures.length} failures`;
    return `${passText} and ${failText}`;
  }

  render() {
    return (
      <div>
        <p>{this.resultsText}</p>
        {this.passLis}
        {this.failLis}
      </div>
    );
  }
}

export default TestIndexItem;
