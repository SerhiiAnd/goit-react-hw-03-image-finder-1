// import React from 'react';
// import ProgressBar from 'react-loader-spinner';

// const Loader = () => {
//   return (
//     <div className="loader">
//       <ProgressBar type="TailSpin" color="#00BFFF" height={50} width={50} />
//     </div>
//   );
// };

// export default Loader;
import React, { Component } from 'react';
import { DNA } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  }
  //     <Grid
  //       visible={true}
  //       height="80"
  //       width="80"
  //       color="#4fa94d"
  //       ariaLabel="grid-loading"
  //       radius="12.5"
  //       wrapperStyle={{
  //         position: 'fixed',
  //         top: '50%',
  //         left: '50%',
  //       }}
  //       wrapperClass="grid-wrapper"
  // />
  // );
  // }
}
