import React from "react";
import UserProfileCard from "./components/UserProfileCard";
import type { User } from "./components/UserProfileCard";
import "./App.css";

const App: React.FC = () => {
  const users: User[] = [
    {
      id: 1,
      name: "Alice Wonderland",
      email: "alice@wonderland.com",
      isOnline: true,
      avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "CSS", level: "Beginner" }
      ]
    },
    {
      id: 2,
      name: "Bob The Builder",
      email: "bob@construction.com",
      isOnline: false,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      skills: [
        { name: "Project Management", level: "Advanced" },
        { name: "Construction", level: "Advanced" }
      ]
    },
    {
      id: 3,
      name: "Charlie Chaplin",
      email: "charlie@comedy.com",
      isOnline: true,
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      skills: [
        { name: "Acting", level: "Advanced" },
        { name: "Comedy", level: "Intermediate" }
      ]
    }
  ];

  const handleViewDetails = (id: number) => {
    alert(`View details for user ID: ${id}`);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">User Profile Cards</h1>
      <div className="cards-container">
        {users.map(user => (
          <UserProfileCard 
            key={user.id} 
            user={user} 
            onViewDetails={handleViewDetails} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;