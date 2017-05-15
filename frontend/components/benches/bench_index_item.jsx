import React from 'react';

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { description } = this.props.bench;
    return (
      <div>
        {description}
      </div>
    );
  }
}

export default BenchIndexItem;
