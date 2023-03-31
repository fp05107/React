import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import AddCommentIcon from "@mui/icons-material/AddComment";
const Profile = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  function commentAdded() {
    setComments([...comments,comment])
  }
  return (
    <div className="Profile">
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/63995316?s=64&v=4/AAEL6si03UrW8lPNDOv9n_0uYSHgmIuBf4ygs3b1uzefdQ=s32-c-mo"
          alt=""
        />
        <p>Subham Sahoo</p>
        <div>
          <button onClick={() => setLike(like+1)}>
            <ThumbUpIcon />
            {like}
          </button>
          <button  onClick={() => setDislike(dislike+1)}>
            <ThumbDownIcon />
            {dislike}
          </button>
          <input type="text" value={comment} onChange={(event) => setComment(event.target.value)} />
          <button onClick={commentAdded}>
            <AddCommentIcon />
          </button>
          <ul>
            {
                comments.map((el) =>{
                    return (
                        <li>{el}</li>
                    )
                })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Profile;
