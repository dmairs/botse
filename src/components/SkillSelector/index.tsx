import React, { useState } from "react";
import EnemySkillCards from "../EnemySkillCards";
import enemySkills from "../../data/enemySkills.json";

import Grid from "@mui/material/Grid2";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";

const SkillSelector: React.FC = () => {
  const [toggled, setToggled] = useState<boolean[]>(
    Array(enemySkills.length).fill(false)
  );

  const handleToggle = (index: number) => {
    const newToggled = [...toggled];
    newToggled[index] = !newToggled[index];
    setToggled(newToggled);
  };

  return (
    <div className="theme-doc-markdown markdown" style={{ padding: 20 + "px" }}>
      <header>
        <h1>Enemy Skills Tracker</h1>
      </header>
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography>Add Additional Enemy Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {enemySkills.map((skill, index) => (
              <Grid size={{ xs: 4, sm: 3, md: 2, xl: 1 }} key={index}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        id={`switch-${index}`}
                        checked={toggled[index]}
                        onChange={() => handleToggle(index)}
                        color="primary"
                      />
                    }
                    label={skill.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  />
                </FormGroup>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {enemySkills.map(
          (skill, index) =>
            toggled[index] && (
              <Grid size={{ xs: 12 }} key={index}>
                <EnemySkillCards
                  title={skill.title}
                  ability={skill.hoverText}
                  link={skill.filePath}
                />
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
};

export default SkillSelector;
