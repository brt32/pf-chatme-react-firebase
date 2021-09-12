import { useState, useEffect } from "react";
import { db } from "./firebase";

// cache => avoiding react flickering between states
const cache = {};
const pendingCache = {};

export default function useDoc(path) {
  const [doc, setDoc] = useState(cache[path]);

  useEffect(() => {
    if (doc) {
      return;
    }
    let stillmounted = true;
    const pending = pendingCache[path];
    const promise = pending || (pendingCache[path] = db.doc(path).get());
    promise.then((doc) => {
      if (stillmounted) {
        const user = {
          ...doc.data(),
          id: doc.id,
        };
        setDoc(user);
        cache[path] = user;
      }
    });
    return () => {
      stillmounted = false;
    };
  }, [path, doc]);
  return doc;
}
