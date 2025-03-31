import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


export async function fetchShoppingList(userId) {
  if (!userId) return []; 

  try {
    const userItemsRef = collection(db, "users", userId, "items"); 
    const querySnapshot = await getDocs(userItemsRef);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching shopping list:", error);
    return [];
  }
}

export async function addShoppingItem(userId, item) {
  if (!userId) return;

  try {
    const userItemsRef = collection(db, "users", userId, "items");
    await addDoc(userItemsRef, item);
  } catch (error) {
    console.error("Error adding item:", error);
  }
}
