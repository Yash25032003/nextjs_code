//!Ye code complex props ka use karke ek highly reusable UserProfileCard component banata hai. Parent component sirf data aur configuration pass karta hai, jabki child component UI render karta hai. Styling, actions aur content sab props ke through control hote hain, jo React ke unidirectional data flow aur component composition ko demonstrate karta hai.

import React from "react";

// Yahan simple props nahi, balki objects pass kiye gaye hain: jaha
// user = User ka data (name, email, role, stats etc.)
// theme = Styling control (colors, background, badges)
// actions = Button configs (label, onClick, className)
function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-6 rounded-sm ${theme.backgroundColor} ${theme.textColor}`}
    >
      <div className="flex flex-row ">
        <div
          className={`border w-12 h-12 rounded-full ${theme.avatarBg} flex items-center justify-center`}
        >
          {user.avatar}
        </div>
        <div className="ml-3 ">
          <h2 className="font-bold">{user.name}</h2>
          <div className="text-sm">
            {user.email}
            <div className="flex gap-2 text-sm">
              <span className={`px-3 py-1 rounded-full ${theme.badgeBg}`}>
                {user.role}
              </span>
              <span className={`px-3 py-1 rounded-full ${theme.badgeBg}`}>
                {" "}
                {user.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional rendering hua hai yaha agar stats exist karega tabhi div element render hoga */}
      {user.stats && (
        <div className="mt-4 pt-4 border-t border-gray-300 grid grid-cols-3 gap-4">
          {/* user.stats ek object hai, jaise: jisme hai key value pair waha key hai post , followers , following etc. */}
          {/* Object.entries() kya karta hai? */}
          {/* Convert karta hai object ko array of arrays me: */}
          {/* example 
              [
               ["posts", 145],
               ["followers", 2834],
               ["following", 421]
              ]
           */}
          {/* map() se hum har stat ko UI me convert kar rahe hain */}
          {/* key → "posts"
             value → 145 */}
          {Object.entries(user.stats).map(([key, value]) => (
            //* key={key} kyon? React ko batane ke liye ki:Ye list ka unique item hai Re-rendering fast ho
            <div key={key} className="text-center">
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-xs opacity-75 capitalize">{key}</div>
            </div>
          ))}
        </div>
      )}

      {actions && (
        <div className="mt-4 flex gap-2">
          {actions.primary && (
            <button
              onClick={actions.primary.onClick}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${actions.primary.className}`}
            >
              {actions.primary.label}
            </button>
          )}
          {actions.secondary && (
            <button
              onClick={actions.secondary.onClick}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${actions.secondary.className}`}
            >
              {actions.secondary.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

const ComplexProps = () => {
  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Starting collaboration with Bob"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
  ];
  return (
    <div className="space-y-8">
      <div>
        <h3>User profile card</h3>
        <div className="grid grid-cols-2 gap-4 ">
          {users.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplexProps;
