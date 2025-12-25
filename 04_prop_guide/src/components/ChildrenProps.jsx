//! Ye code children props ka use karke reusable aur flexible components banana dikhata hai. Card component sirf structure aur styling handle karta hai, jabki actual content children ke through pass hota hai. Container component layout ko control karta hai, aur props ke basis par dynamic Tailwind CSS classes apply hoti hain.

import React from "react";

// default value di hai hamne color prop ko
function Card({ title, color = "blue", children }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50",
  };

  return (
    <div
      // props ke according color classes me dynamic tailwind css classes ka use kiya hai
      className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md `}
    >
      {/* Agar title exist karta hai tabhi <h3> render hoga. Agar title nahi hai then heading nahi dikhegi */}
      {title && <h3 className="font-bold">{title}</h3>}
      {/* Jo bhi <Card> ... </Card> ke andar likha hoga , Wo as-it-is yahan render ho jayega */}
      <div>{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  // same idhar bhi props me jo layout ki value aayegi uske hisab se css inject kar rahe hai
  return <div className={`${layoutClasses[layout]}`}>{children}</div>;
}

const ChildrenProps = () => {
  return (
    <section className="border rounded-md bg-white text-black p-9 ">
      <h2>Children Props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed maiores
        consequatur dolor voluptatem quo praesentium.
      </p>
      <div className="">
        <div className="">
          <h3 className="mt-2 font-semibold">Card component with children</h3>
          <div className="mt-2">
            <Container layout="grid">
              {/* Card component children hai Conatiner component ka jo bhi card component me hoga vo as it is container component me as a children jayega  */}
              <Card title="User Profile" color="blue">
                {/* jo card ke destructured parameters the title , color vo pass kar diya hai and jo content card ke andar likha hai vo children hai card component ka */}
                <div className="space-y-3 mt-3">
                  <p>
                    <strong>Name:</strong> Yash Sharma
                  </p>
                  <p>
                    <strong>Email:</strong> Yash@random.com
                  </p>
                  <p>
                    <strong>Role:</strong> Full stack developer
                  </p>
                </div>
              </Card>
              <Card title="Statistics" color="green">
                <div className="space-y-3 mt-3 ">
                  <p>
                    Total Users:
                    <strong> 89k</strong>
                  </p>
                  <p>
                    Active sessions:
                    <strong> 876</strong>
                  </p>
                  <p>
                    Revenue:
                    <strong> $77,000</strong>
                  </p>
                </div>
              </Card>
              <Card title="Quick Actions" color="purple">
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                    Create New
                  </button>
                  <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
                    View All
                  </button>
                </div>
              </Card>

              <Card title="Warning" color="red">
                <p>
                  Your trial period ends in 5 days. Please upgrade your account
                  to continue using all features.
                </p>
              </Card>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenProps;
