import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
    // console.log(`constructor:${this.imageRef.current}`);
  }

  componentDidMount() {
    // console.log(`constructor:${this.imageRef.current}`);
    // this.imageRef.current.addEventListener("load", this.setSpans);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }

  // setSpans = () => {
  //   console.log(this.imageRef.current.clientHeight);
  // };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular}></img>
      </div>
    );
  }
}

export default ImageCard;
