import React from 'react';

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { description, lat, lng } = this.props.bench;
    return (
      <div>
        <span>{description}</span>
        <br></br>
        <span>{lat}</span>
        <br></br>
        <span>{lng}</span>
      </div>
    );
  }
}

export default BenchIndexItem;
