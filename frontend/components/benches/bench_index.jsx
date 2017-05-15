import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    console.log(this.props);
    const benchmap = this.props.benches.map( bench =>
    <BenchIndexItem key={bench.id} bench={bench}/>);
    return (
      <div>
        {benchmap}
      </div>
    );
  }
}

export default BenchIndex;
