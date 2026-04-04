import React, { useState } from "react";
import statusDice from "../../data/statusDice.json";

import Grid from "@mui/material/Grid2";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Tooltip,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

interface DieInTrack {
  id: string;
  name: string;
  icon: string;
  trackKey: number;
}

const MAX_TRACK_SIZE = 13;

const CooldownTracker: React.FC = () => {
  const [track, setTrack] = useState<DieInTrack[]>([]);
  const [nextKey, setNextKey] = useState<number>(0);

  const addDie = (die: (typeof statusDice)[number]) => {
    setTrack((prev) => {
      // Per game rules: if the same status die is already in the track,
      // remove it and add the new one at the end (leftmost open position).
      const filtered = prev.filter((d) => d.id !== die.id);

      if (filtered.length >= MAX_TRACK_SIZE) {
        return prev;
      }

      const newDie: DieInTrack = {
        id: die.id,
        name: die.name,
        icon: die.icon,
        trackKey: nextKey,
      };
      return [...filtered, newDie];
    });
    setNextKey((k) => k + 1);
  };

  const removeDie = (trackKey: number) => {
    setTrack((prev) => prev.filter((d) => d.trackKey !== trackKey));
  };

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="status-dice-panel-content"
          id="status-dice-panel-header"
        >
          <Typography>Add Status Dice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            {statusDice.map((die) => {
              const trackWithoutDie = track.filter((d) => d.id !== die.id);
              const isTrackFull = trackWithoutDie.length >= MAX_TRACK_SIZE;
              return (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={die.id}>
                <Tooltip title={die.hoverText} arrow>
                  <Paper
                    onClick={() => addDie(die)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "12px 8px",
                      cursor: isTrackFull ? "not-allowed" : "pointer",
                      opacity: isTrackFull ? 0.5 : 1,
                      "&:hover": {
                        backgroundColor: "action.hover",
                      },
                      userSelect: "none",
                    }}
                    elevation={2}
                  >
                    <img
                      src={die.icon}
                      alt={`${die.name} Icon`}
                      style={{ width: 40, height: 40, objectFit: "contain" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ marginTop: "6px", textAlign: "center" }}
                    >
                      <a
                        href={die.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {die.name}
                      </a>
                    </Typography>
                  </Paper>
                </Tooltip>
              </Grid>
              );
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ marginTop: "24px" }}>
        <Typography variant="h6" gutterBottom>
          Cooldown Track ({track.length}/{MAX_TRACK_SIZE})
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            padding: "12px",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "4px",
            minHeight: "80px",
            alignItems: "center",
          }}
        >
          {track.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              No dice in the cooldown track. Add status dice above.
            </Typography>
          ) : (
            track.map((die) => (
              <Box
                key={die.trackKey}
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "4px",
                  padding: "8px",
                  minWidth: "64px",
                }}
              >
                <IconButton
                  size="small"
                  onClick={() => removeDie(die.trackKey)}
                  sx={{ position: "absolute", top: -8, right: -8, padding: 0 }}
                  aria-label={`Remove ${die.name} die`}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
                <img
                  src={die.icon}
                  alt={`${die.name} die`}
                  style={{ width: 36, height: 36, objectFit: "contain" }}
                />
                <Typography
                  variant="caption"
                  sx={{ marginTop: "4px", textAlign: "center" }}
                >
                  {die.name}
                </Typography>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </div>
  );
};

export default CooldownTracker;
