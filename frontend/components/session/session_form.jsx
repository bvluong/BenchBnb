import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateHandler(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    const { formType } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1> {formType }</h1>
        <form onSubmit={this.handleSubmit}>
          <label> username
          <input type="text" onChange={this.updateHandler("username")} />
          </label>
          <label> password
          <input type="text" onChange={this.updateHandler("password")} />
          </label>

          <input type="submit" value="Submit"/>

        </form>

      </div>
    );
  }

}

export default SessionForm;
