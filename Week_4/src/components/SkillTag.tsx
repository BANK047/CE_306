import type React from "react";
import './SkillTag.css';

interface SkillTagProps {
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

const SkillTag: React.FC<SkillTagProps> = ({ name, level }) => {
    return (
        <span className={`skill ${level ? level.toLowerCase() : ''}`}> 
            {name} {level && `(${level})`}
        </span>            
    );
};

export default SkillTag;