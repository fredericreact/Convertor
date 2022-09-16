# Install SASS and restart server

    npm install sass

# React Developer Tool

    Console > Components

![image](https://user-images.githubusercontent.com/104289891/190589702-beccb53b-a613-42c8-a1fe-c3369a5f2123.png)



# State using Class (Before)

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

# State 

> Je mets mon state dans App pou qu'il soit disponible dans tous les composants. Si je mets ls tate dans un composant, il ne sera disponible quand dans ce composant et ses enfants, mais pas dans les autres composants.
Et je sais que tout est gere dans App.

# Declarative Programming vs Imperative Programming

    Declarative Programming : Mon app depend d'un state et va s'ajuster selon un state
<br>

    Imperative Programming : Je dis a mon app quoi faire directement

# Alternative a if

    a && b
