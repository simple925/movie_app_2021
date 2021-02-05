// import PropTypes from "prop-types";
// react application은 한 번에 하나의 component만 redering 할 수 있다는 점
import React from "react";
import axios from "axios";
import Movie from "./Movie";
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.poster}
                />
              );
            })}
      </div>
    );
  }
}
export default App;

// constructor(props) {
//   super(props);
//   console.log("constructor");
// }

// state = {
//   count: 0,
// };

// add = () => {
//   // this.setState((c) => ({ count: c.count + 1 }));
//   this.setState(function (c) {
//     return { count: c.count + 1 };
//   });
//   console.log(this);
// };
// minus = () => {
//   this.setState((current) => ({ count: current.count - 1 }));
// };
// componentDidMount() {
//   console.log("component rendered");
// }
// componentDidUpdate() {
//   console.log("component updated");
// }
// componentWillUnmount() {
//   console.log("bye component");
// }
// render() {
//   console.log("I'm redering");
//   return (
//     <div>
//       <h1>The number is: {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>
//   );
// }
