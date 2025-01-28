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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

import { IconButton } from "@mui/material";

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
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Add Additional Enemy Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            {enemySkills.map((skill, index) => (
              <Grid size={{ xs: 6, sm: 3, md: 2, xl: 1 }} key={index}>
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
      <Grid container spacing={1} style={{ marginTop: "20px" }}>
        {enemySkills.map(
          (skill, index) =>
            toggled[index] && (
              <Grid size={{ xs: 12 }} key={index}>
                <div style={{ position: "relative" }}>
                  <IconButton
                    size="small"
                    onClick={() => handleToggle(index)}
                    style={{
                      position: "absolute",
                      right: 5,
                      top: 5,
                      zIndex: 1,
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <EnemySkillCards
                    title={skill.title}
                    ability={skill.hoverText}
                    link={skill.filePath}
                  />
                </div>
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
};

export default SkillSelector;
