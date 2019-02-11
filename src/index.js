<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
=======
import _ from 'lodash';
import printMe from './print.js';
import './style.css';

>>>>>>> c0472fe492078edc96f91df68dc2cd73f82f7307

class Image extends React.Component {
	constructor(props) {
		super()
		this.state = {
			title: "Granite Mountains"
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>{this.props.caption}</p>
				<div id="image"></div>
			</div>
		)
	}
}

<<<<<<< HEAD
ReactDOM.render(<Image caption="Wilderness area in Lake Tahoe, California" />, 
				       document.getElementById('react-container'))
=======
    element.innerHTML = _.join(['Hola', 'webpack'], ' ');
    
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
  
    return element;
  }
  
  let element = component(); // Store the element to re-render on print.js changes
  document.body.appendChild(element);

  if(module.hot){
    module.hot.accept('./print.js', function(){
      console.log('Accepting the updated printMe module.');
      document.body.removeChild(element);
      element = component(); // Re-render the "component" to update the click handler
      document.body.appendChild(element);
    })
  }

>>>>>>> c0472fe492078edc96f91df68dc2cd73f82f7307
