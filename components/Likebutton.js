import React, { Component } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';



class Likebutton extends Component {
    state = {
        likes: 0
      };

      addLike = () => {
        let newCount = this.state.likes + 1;
         this.setState({
         likes: newCount
         });
      };

    
    render() {

        const likes = this.state.likes;
        if (likes === 0) {
        return (
            <div>
                
                <button
            className="like-button"
            onClick={this.addLike}
            type="button"
          >
            <ThumbUpIcon style={{ color: "#33c3f0" }}></ThumbUpIcon>
          </button>
         
        </div>
      );
    }
    if (likes === 1) {
      return (
        <div>
          <button className="like-button" type="button" onClick={this.addLike}>
            <ThumbUpIcon className="fa fa-thumbs-up" style={{ color: "red" }}></ThumbUpIcon>
          </button>
        </div>
      );
    }
    if (likes > 1) {
      return (
        <div>
          <button type="button" className="like-button" onClick={this.addLike}>
            <ThumbUpIcon style={{ color: "red" }}></ThumbUpIcon>{" "}
            {likes}
          </button>
          
        </div>
      );
      
    }
  }
}
            

export default Likebutton;

