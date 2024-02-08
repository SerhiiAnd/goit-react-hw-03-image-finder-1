import React, { Component } from 'react';
import css from 'components/Modal/Modal.module.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    const { largeImageURL } = this.props;

    return (
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

// import React, { Component } from 'react';
// import css from 'components/Modal/Modal.module.css';

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleOverlayClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL } = this.props;

//     return (
//       <div className={css.overlay} onClick={this.handleOverlayClick}>
//         <div className={css.modal}>
//           <img src={largeImageURL} alt="" />
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;
