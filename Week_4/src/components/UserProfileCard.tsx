import React from "react";
import SkillTag from "./SkillTag";
import "./UserProfileCard.css";

export type Skill = {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
};

export type User = {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
  isOnline: boolean;
  skills: Skill[];
};

type Props = {
  user: User;
  onViewDetails: (id: number) => void;
};

const UserProfileCard: React.FC<Props> = ({ user, onViewDetails }) => {
  return (
    <div className="card">
      <div className="header">
        <img
          src={user.avatarUrl || "https://via.placeholder.com/40"}
          alt={user.name}
          className="avatar"
        />
        <div className="user-info">
          <h3>{user.name}</h3>
          <p className="email">{user.email}</p>
          <div className={`status ${user.isOnline ? 'online' : 'offline'}`}>
            <div className={`status-dot ${user.isOnline ? 'online' : 'offline'}`}></div>
            <span>{user.isOnline ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>

      <div className="skills-header">
        Skills:
      </div>
      <div className="skill-container">
        {user.skills.map((skill, i) => (
          <SkillTag key={i} {...skill} />
        ))}
      </div>
      <button 
        className="view-details-btn"
        onClick={() => onViewDetails(user.id)}
      >
        View Details
      </button>
    </div>
  );
};

export default UserProfileCard;