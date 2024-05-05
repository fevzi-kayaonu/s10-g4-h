import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { notlariAlAPI } from "../store/actions";

const PostList = () => {
  const notlar = useSelector((store) => {
    console.log("store.notlar", store.notlar);
    return store.notlar;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(notlariAlAPI());
  }, []);

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
