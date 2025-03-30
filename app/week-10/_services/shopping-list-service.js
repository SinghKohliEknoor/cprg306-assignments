import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Firestore collection reference
const shoppingListRef = collection(db, "shopping-list");

// Function to fetch shopping list items from Firestore
export async function fetchShoppingList() {
  try {
    const querySnapshot = await getDocs(shoppingListRef);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching shopping list:", error);
    return [];
  }
}

// Function to add an item to Firestore
export async function addShoppingItem(item) {
  try {
    await addDoc(shoppingListRef, item);
  } catch (error) {
    console.error("Error adding item:", error);
  }
}
