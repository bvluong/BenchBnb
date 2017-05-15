import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname.slice(1)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  return (formType === 'login') ?
  { processForm: (user) => dispatch(login(user)) } :
  { processForm: (user) => dispatch(signup(user)) };

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
