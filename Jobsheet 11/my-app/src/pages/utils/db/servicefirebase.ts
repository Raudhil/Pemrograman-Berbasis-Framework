import { 
  getFirestore, 
  collection, 
  getDocs, 
  getDoc, 
  doc,
  limit,
  query,
  where
} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataByID(
  collectionName: string, 
  id: string
) {
  const snapshot = await getDoc(doc(db, collectionName, id));

  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }

  const fallbackQuery = query(
    collection(db, collectionName),
    where("id", "==", id),
    limit(1)
  );
  const fallbackSnapshot = await getDocs(fallbackQuery);

  if (fallbackSnapshot.empty) {
    return null;
  }

  const foundDoc = fallbackSnapshot.docs[0];
  return {
    id: foundDoc.id,
    ...foundDoc.data(),
  };
}