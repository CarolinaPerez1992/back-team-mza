const { creatorResponse, fileNotFoundResponse } = require("../config/response");

const verifyUser = model => [
    async (req, res, next) => {
        let activity = await model.findOne({ _id: req.params.id });
        console.log(activity);
        if (activity) {
            if (Array.isArray(activity.userId)) {
                let response = activity.userId.find(user => user.equals(req.user.id))
                if (response) {
                    return next()
                } else {
                    return creatorResponse(req, res);
                }
            } else {
                if (activity.userId.equals(req.user.id)) {
                    return next()
                } else {
                    return creatorResponse(req, res);
                }
            }
        }
        return fileNotFoundResponse(req, res);
    },
];


module.exports = verifyUser;


// {open ? (
//     <div>
//         {comments?.map((item) => {
//             function deleteFunc() {
//                 Swal.fire({
//                     icon: "question",
//                     title: " Do you want to post a comment?",
//                     showConfirmButton: true,
//                     iconColor: "#01344f",
//                     confirmButtonColor: "#01344f",
//                     confirmButtonText: "Yes",
//                     showCancelButton: true,
//                 }).then(async (result) => {
//                     if (result.isConfirmed) {
//                         await dispatch(deleteComment({ idComment: item._id, token }));
//                     }
//                     setReload(!reload);
//                 });
//             }
//             return (
//                     <div className={
//                         item.userId.logged === true ? ("containerCard-logged")
//                     : ("containerCard2")}>
//                         <div>
//                             <div className="flex g-25 align-center">
//                                 <div>
//                                     <img src={item?.userId?.photo}  className="img-coment"/>
//                                 </div>
//                                 <div>
//                                     <h6>{item?.userId?.name} </h6>
//                                 </div>
//                             </div>
//                             <div className="flex column g-25">
//                                 <p className="comment-text">{item.comment}</p>
//                                 {item?.userId?._id === id ? (
//                                     <div className="flex justify-end w-100 g-25">
//                                         <div className="delete edit-B">
//                                             <h5 onClick={handleOpen2}>
//                                                 {open2 ? "Close" : ""}
//                                                 <img src="../img/editarIcon.png" width="50px" alt="img" />
//                                             </h5>
//                                             <div>
//                                                 {open2 ? (
//                                                     <form className=" textarea" ref={information}>
//                                                         <div className="div-edit">
//                                                             <input
//                                                                 defaultValue={comments?.comment}
//                                                                 type="text "
//                                                                 className=" textarea2"
//                                                                 name="comment"
//                                                                 ref={comment}
//                                                             />
//                                                             <div>
//                                                                 <div class="flex g-25">
//                                                                     <input
//                                                                         type="submit"
//                                                                         value="Edit comment"
//                                                                         className="delete"
//                                                                         onClick={editComments}
//                                                                         name={item._id}
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </form>
//                                                 ) : null}
//                                             </div>
//                                         </div>
//                                         <div className="delete">
//                                             <img
//                                                 src="../img/tacho.png"
//                                                 width="50px"
//                                                 alt="img"
//                                                 onClick={deleteFunc}
//                                             />
//                                         </div>
//                                     </div>
//                                 ) : null}
//                             </div>
//                         </div>
//                     </div>
//             );
//         })}
//     </div>
// ) : null}