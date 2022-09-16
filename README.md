# Install SASS and restart server

    npm install sass

# React Developer Tool

    Console > Components

image.png


# State

    class App extends React.Component {

    state = {
      opened: true,
      baseAmount: 3.28,
      currency: 'United States Dollar',
    }
  
    toggle = () => {
      const { opened } = this.state;
      this.setState({
        opened: !opened,
      });
    }
  
    render() {
      const { opened, baseAmount, currency } = this.state;
      return (
        <div className="app">
          <Toggler opened={opened} onButtonClick={this.toggle} />
          {
            opened && <Currencies currencies={data} todoOnClick={() => { }} />
          }
        </div>
      );
    }
  }


>avant, pour gerer les states, on devait le faire dans une classe. on pouvait pas le faire dans une fonction 




