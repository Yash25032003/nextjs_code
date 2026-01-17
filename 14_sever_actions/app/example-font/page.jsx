import React from "react";
import { Roboto } from "next/font/google";

// fonts jo hum apply karna chahte hai
const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subset: ["latin"],
});

const FontExample = () => {
  return (
    <div>
      <h1 className={`text-4xl ${roboto.className} `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        consequuntur!
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        soluta aspernatur fugiat at et eius alias autem, dignissimos fugit ipsam
        cupiditate. Magnam eos facilis a temporibus aperiam. Ratione
        perspiciatis eius similique nobis laudantium beatae repellat magni
        quibusdam. Aliquid enim beatae laudantium, facilis similique optio non,
        iusto hic tenetur distinctio dolorum est quod rem ipsam illo eos
        expedita! Officiis nam quas itaque odit qui! Maxime quod tempora ipsam
        sit. Maiores possimus suscipit rerum totam vero nihil rem doloribus
        blanditiis, veniam repellendus inventore, laborum officiis ducimus sint
        cumque veritatis maxime?
      </p>
    </div>
  );
};

export default FontExample;
