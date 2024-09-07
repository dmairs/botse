import React from 'react';
import skillLines from '@site/src/assets/json/skillLines.json';
import addTooltips from './addTooltips.js';

interface Skill {
    name: string;
    svg: string;
    description: string;
}

interface SkillLineProps {
    id: string;
}

const SkillLine: React.FC<SkillLineProps> = ({ id }) => {
    const skillLine = skillLines.find((line) => line.id === id);

    if (!skillLine) {
        return <div>Skill line not found</div>;
    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2} style={{ textAlign: 'left' }}>{skillLine.name}</th>
                    </tr>
                </thead>
                <tbody>
                    {skillLine.skills.map((skill, index) => (
                        <tr key={index}>
                            <td width="10%" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                <img src={skill.svg} alt='Skill Icon' />
                            </td>
                            <td>{addTooltips(skill.description)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SkillLine;