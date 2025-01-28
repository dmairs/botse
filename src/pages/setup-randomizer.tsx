import React, { useRef } from "react";
import Layout from "@theme/Layout";
import Randomizer from "../components/Randomizer";
import { races, skills, classes, provinces, guilds } from "../data/data";
import { Casino as DiceIcon } from "@mui/icons-material";
import { Container, Stack, Paper, Button } from "@mui/material";

export default function SetupRandomizer(): JSX.Element {
  const raceRef = useRef<HTMLButtonElement>(null);
  const skillRef = useRef<HTMLButtonElement>(null);
  const classRef = useRef<HTMLButtonElement>(null);
  const provinceRef = useRef<HTMLButtonElement>(null);
  const guildRef = useRef<HTMLButtonElement>(null);

  const randomizeAll = () => {
    if (raceRef.current) raceRef.current.click();
    if (skillRef.current) skillRef.current.click();
    if (classRef.current) classRef.current.click();
    if (provinceRef.current) provinceRef.current.click();
    if (guildRef.current) guildRef.current.click();
  };

  return (
    <Layout
      title={`BOTSE Helper`}
      description="References and Guides for Betrayal of the Second Era."
    >
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack spacing={4} alignItems="center">
          <h1>Setup Randomizer</h1>

          <Button
            onClick={randomizeAll}
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<DiceIcon />}
            sx={{ mb: 2 }}
          >
            Randomize All
          </Button>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
          >
            <Paper elevation={3} sx={{ p: 2, minWidth: 250 }}>
              <Randomizer ref={raceRef} outcomes={races} title="Race" />
            </Paper>
            <Paper elevation={3} sx={{ p: 2, minWidth: 250 }}>
              <Randomizer ref={classRef} outcomes={classes} title="Class" />
            </Paper>
            <Paper elevation={3} sx={{ p: 2, minWidth: 250 }}>
              <Randomizer
                ref={skillRef}
                outcomes={skills}
                title="Basic Skill Line"
              />
            </Paper>
            <Paper elevation={3} sx={{ p: 2, minWidth: 250 }}>
              <Randomizer
                ref={provinceRef}
                outcomes={provinces}
                title="Province"
              />
            </Paper>
            <Paper elevation={3} sx={{ p: 2, minWidth: 250 }}>
              <Randomizer ref={guildRef} outcomes={guilds} title="Guild" />
            </Paper>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}
