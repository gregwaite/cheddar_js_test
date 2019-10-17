import React from "react";
import TestIndexItem from "./test_index_item";

class TestIndex extends React.Component {
  constructor(props) {
    super(props);

    this.results = this.parseTests();
    this.indexItems = this.getIndexItems();
  }

  parseTests() {
    const { allPasses, allFailures } = this.props;
    const results = {};
    allPasses.forEach(pass => {
      const test = pass.fullTitle.split(" ", 2).join(" ");
      if (!results[test]) {
        results[test] = { passes: [], failures: [] };
      }
      results[test].passes.push(pass);
    });
    allFailures.forEach(failure => {
      const test = failure.fullTitle.split(" ", 2).join(" ");
      if (!results[test]) {
        results[test] = { passes: [], failures: [] };
      }
      results[test].failures.push(failure);
    });

    return results;
  }

  getIndexItems() {
    const tests = Object.keys(this.results);
    return tests.map((testName, idx) => {
      const { passes, failures } = this.results[testName];
      return (
        <div key={idx}>
          <u>
            <p className="test-name">{testName}</p>
          </u>
          <TestIndexItem passes={passes} failures={failures}></TestIndexItem>
        </div>
      );
    });
  }

  render() {
    const { stats } = this.props;
    return (
      <div>
        <div className="totals">{`${stats.passes} Passed | ${stats.failures} Failed`}</div>
        {this.indexItems}
      </div>
    );
  }
}

export default TestIndex;

// I decided not to use component did mount or state, as it involved (an) unnecessary rerender(s)

// import React from "react";

// class TestIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       results: {},
//       tests: []
//     };

//     this.parseTests = this.parseTests.bind(this);
//   }

//   componentDidMount() {
//     this.parseTests();
//   }

//   parseTests() {
//     const { allPasses, allFailures, stats } = this.props;
//     const results = {};
//     allPasses.forEach(pass => {
//       const test = pass.fullTitle.split(" ", 2).join(" ");
//       if (!results[test]) {
//         results[test] = { passes: [], failures: [] };
//       }
//       results[test].passes.push(pass);
//     });
//     allFailures.forEach(failure => {
//       const test = failure.fullTitle.split(" ", 2).join(" ");
//       if (!results[test]) {
//         results[test] = { passes: [], failures: [] };
//       }
//       results[test].failures.push(failure);
//     });
//     const tests = Object.keys(results);
//     this.setState({ results: results, tests: tests });
//   }

//   render() {
//     return <div></div>;
//   }
// }

// export default TestIndex;
