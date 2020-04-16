import * as React from 'react';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return <div>{name} Giphy Search Test</div>;
  }
}

export default App;
