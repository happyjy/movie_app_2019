import React from 'react';
import PropTypes from "prop-types";

// import Potato from './potato';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.8
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.4
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4
  },
  {
    id: 5,
    name: "Kimbap",
    image: "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.3
  }
];

function Food({name, picture, rating}) {
  // console.log("### Food component arguments: ", arguments);
  return (
    <div>
      <h1> I like {name}</h1>
      <h2> RATING : {rating}/5</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}


//component에서 필요한 props를 전달 안해주거나, props type을 잘 못 작성하면 console에서 에러를 보여준다.
//isRequired 제거 후 type체크만, isRequired 호출로 type, required를 동시에 체크 해줄 수 있다. 
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>  
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
