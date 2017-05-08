// import React, {Component} from "react";
// import {connect} from "react-redux";
// import {listOwnership} from "../../reducers/thank/ownership.actions";
// import Resource from "../Resource";
//
// class Verification extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <p className="title">{this.props.ownership.type}</p>
//                 <Resource resource={this.props.ownership.resource}/>
//             </div>
//         );
//     }
// }
//
// const Verifications = ({ own }) => {
//     return (
//         <div>
//             {own.map(ownership => <Verification key={ownership.resource.uri} verification={verification}/>)}
//         </div>
//     );
// };
//
// const mapStateToProps = ({thank: { verification }}, {id}) => {
//     let verification = verification && verification[id] ? verification[id] : [];
//     return {
//         verification
//     };
// };
//
// const mapDispatchToProps = (dispatch, {id}) => {
//     dispatch(listOwnership(id));
//     return {}
// };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Verifications);
