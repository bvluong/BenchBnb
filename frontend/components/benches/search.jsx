import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <BenchMap/>
      <BenchIndex fetchBenches={this.props.fetchBenches}
        benches={this.props.benches}
        />
    </div>
  );}
}

export default Search;
