// import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState('');
  const [filteredMonsters, setFilteredMonster] = useState(monsters);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users)
    );
  }, []);

  useEffect(() => {
    const newilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonster(newilteredMonsters);
  }, [monsters, searchField]);
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const onTitleChange = (event) => {
    const titleFieldString = event.target.value.toLocaleLowerCase();
    setTitle(titleFieldString);
  };
  
  return(
    <div className="App">
        <h1 className='app-title'>{title}</h1>
        <SearchBox 
          className='monsters-search-box'
          onChangeSearchHandler={onTitleChange} 
          placeholder='Change Title'
        />
        <br />
        <SearchBox 
          className='monsters-search-box'
          onChangeSearchHandler={onSearchChange} 
          placeholder='Search Monsters'
        />
        
        
        <CardList monsters={filteredMonsters}/>
      </div>
  )
  
}

// class App extends Component {
//   constructor(){
//     super();
    
//     this.state = {
//       monsters:[],
//       searchField:''
//     };
//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => 
//       this.setState(
//         () => {
//           return { monsters : users};
//         }
//       )
//     );
//   }
//   onSearchChange = (event) => {
//     //console.log(event.target.placeholder);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//     });
//   };
//   render(){
//     console.log('Render form APPs');
//     const {monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box'
//           onChangeSearchHandler={onSearchChange} 
//           placeholder='Search Monsters'
//         />
        
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
  
// }

export default App;
