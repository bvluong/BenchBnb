import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import BenchIndex from './bench_index';
import { SelectAllBenches } from '../../reducers/selector';

const mapStateToProps = (state) => ({
  benches: SelectAllBenches(state.benches)
});

const mapDispatchToProps = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches)
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
