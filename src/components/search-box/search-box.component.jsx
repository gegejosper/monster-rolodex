import '../search-box/search-box.styles.css';
const SearchBox = ({ placeholder, onChangeSearchHandler, className }) => (
    <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder} 
        onChange= {onChangeSearchHandler}
    />
);


export default SearchBox;


//code below is the Class Component

// import { Component } from "react";
// import '../search-box/search-box.styles.css';
// class SearchBox extends Component {

//     render(){
//         const { placeholder, onChangeSearchHandler, className } = this.props; 
//         return(
//             <input 
//                 className={`search-box ${className}`}
//                 type='search' 
//                 placeholder={placeholder} 
//                 onChange= {onChangeSearchHandler}
//             />
//         );
//     }
// }

// export default SearchBox;