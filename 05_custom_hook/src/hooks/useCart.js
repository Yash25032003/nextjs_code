import { useMemo } from "react";
import { useState, useEffect } from "react";

// how to do clean up in useEffect? : In the return statement we can write the cleanup statement or we can do the cleanup
export function useCart() {
  // Why function inside useState? : Ye lazy initialization hai , Sirf first render par execute hota hai, Performance better hoti hai

  const [cart, setCart] = useState(() => {
    try {
      // if localstorage me data exist karta hai to variable me store kar lo
      // localstorage me data key value pair ke form me store hota yaha "cart key hai"
      // data string me rehta hai
      const savedCart = localStorage.getItem("cart");
      // string se array me convert
      //! JSON.parse() ek JavaScript method hai jo JSON format ki string ko normal JavaScript object ya array mein convert karta hai.
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("failed to load cart from localstorage", error);
      // if localstorage me data nahi hai to empty array send karenge
      return [];
    }
  });

  useEffect(
    () => {
      // why try catch? : Invalid JSON app crash kar sakta hai
      try {
        // localstorage me cart data update karenge and using JSON.stringify() se data ko string me convert kar rahe hai
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error("failed to save cart to localstorage", error);
      }
    },
    // dependency array ke andar hai cart aur jab bhi cart me changes honge to useEffect re-render hoga
    [cart]
  );

  // sync across tabs
  useEffect(() => {
    // *ye function ka main kaam hai safely parse karna newValue ko from the localStorage
    const handleStorage = (e) => {
      if (e.key === "cart") {
        try {
          // agar newValue exist karegi to usse string me convert kar ke newCart me store kar liya hai agar newValue nahi karti exist then "[]" empty array string ke form me.
          const newCart = JSON.parse(e.newValue || "[]");
          // updating the cart state
          setCart(newCart);
        } catch (error) {
          console.error("failed to parse cart from localstorage", error);
        }
      }
    };
    // Browser ka storage event sun rahe hain , Jab bhi localStorage change hota hai ya kisi dusre tab / Tab handleStorage function call hota hai window me
    window.addEventListener("storage", handleStorage);

    // Ye cleanup function hai
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const addToCart = (product) => {
    setCart((currentCart) => {
      // Cart me same product hai ya nahi check
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? // Agar hai → quantity +1
              { ...item, quantity: item.quantity + 1 }
            : // bina match waale as it is
              item
        );
      }
      // Agar nahi → new product add karenge with quantity 1
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const RemoveFromCart = (productId) => {
    setCart((currentCart) =>
      // filter me jo id match kar jayegi vo array me store nahi hogi
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    // agar quantity 1 se kam hai matlab list me nahi hai item to update nahi kar sakte
    if (quantity < 1) {
      return;
    }
    // map se item find karo id compare karke item match hua to jo quantity aai hai update kar do. match nahi hui to as it is item rehne do
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // This is not required in react 19
  const total = useMemo(() => {
    return Number(
      cart
        .reduce((sum, item) => {
          const itemTotal = item.price * (item.quantity || 0);
          return sum + itemTotal;
        }, 0)
        .toFixed(2)
    );
  }, [cart]);

  return {
    cart,
    addToCart,
    RemoveFromCart,
    updateQuantity,
    total,
  };
}
