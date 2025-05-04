import { Avatar, Stack, Typography, useColorScheme } from "@mui/joy";
import { useMemo } from "react";
import vader from "@/components/utils/123.svg";
import vaderMin from "@/components/utils/123.svg";
import { RiOpenSourceLine } from "react-icons/ri";
import { Parallax } from "react-scroll-parallax";
import ProgressiveImage from "@/components/ProgressiveImage";
import { Default, Mobile, useMobileMode } from "@/components/Responsive";

export default function OpenSource() {
  const { colorScheme } = useColorScheme();
  const dark = useMemo(() => colorScheme === "dark", [colorScheme]);

  const mobile = useMobileMode();

  const flickerAnimation = useMemo(
    () => ({
      "@keyframes flicker": Object.fromEntries(
        [...Array(10).keys()]
          .map(() => Math.random() * 100)
          .sort()
          .map((p) => [
            [`${p - 1}%`, { opacity: 1 }],
            [`${p}%`, { opacity: 0 }],
            [`${p + 1}%`, { opacity: 1 }],
          ])
          .flat()
      ),
    }),
    []
  );

  return (
    <Stack
      p="20px"
      sx={{ position: "relative" }}
      marginBottom={mobile ? "5rem" : 0}
    >
      <Stack
        sx={{
          width: "100%",
          height: mobile ? "45rem" : "900px",
          // overflow: 'hidden',
        }}
      >
        <Stack
          sx={{
            position: "absolute",
            top: "-20px",
            gap: 3,
            textAlign: mobile ? "center" : "right",
            ...(mobile
              ? {
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                  alignItems: "center",
                }
              : {
                  right: "0",
                  alignItems: "flex-end",
                }),
          }}
        >
          <Mobile>
            <Avatar
              color="success"
              sx={(theme) => ({
                position: "relative",
                border: "none",
                outline: `2px solid ${theme.palette.success[500]}`,
                boxShadow: `0 0 40px 5px rgba(${theme.palette.success.mainChannel} / 0.4)`,
                overflow: "visible",
                marginTop: "3rem",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-5rem",
                  height: "5rem",
                  width: "2px",
                  background: `linear-gradient(to bottom, transparent, ${theme.palette.success[400]})`,
                },
              })}
            >
              <RiOpenSourceLine />
            </Avatar>
          </Mobile>
          <Typography
            level="h2"
            sx={{
              position: "relative",
            }}
          >
            <Typography color="success" fontWeight="xl">
              What Drives My Work
            </Typography>
            
            <Default>
              <Avatar
                color="success"
                sx={(theme) => ({
                  position: "absolute",
                  top: "0",
                  right: "-50px",
                  transform: "translateX(50%)",
                  border: "none",
                  outline: `2px solid ${theme.palette.success[500]}`,
                  boxShadow: `0 0 40px 5px rgba(${theme.palette.success.mainChannel} / 0.4)`,
                })}
              >
                <RiOpenSourceLine />
              </Avatar>
            </Default>
          </Typography>
          <Typography
            level="h6"
            textColor="text.tertiary"
            sx={{
              maxWidth: "500px",
            }}
          >
            <Typography textColor="text.primary">Teamwork</Typography> 
            <br />
            Teamwork is crucial in the development for a project. By working together, a team can overcome challenges, share knowledge, and ensure that the final product meets the desired standards. Communication and collaboration are key to success.
          </Typography>
          <Typography
            level="h6"
            textColor="text.tertiary"
            sx={{
              maxWidth: "500px",
            }}
          >
            <Typography textColor="text.primary">Innovation</Typography> 
            <br />
            Innovation is the heartbeat of progress-the spark that ignites change and transforms the ordinary into the extraordinary. It’s about daring to dream, pushing boundaries, and embracing the unkonw. Join me in exploring the endless possibilities of innovation, where ideals become reality and curiosity fuels our journey towards a brighter tomorrow.
          </Typography>
          <Typography
            level="h6"
            textColor="text.tertiary"
            sx={{
              maxWidth: "500px",
            }}
          >
            <Typography textColor="text.primary">Creativity</Typography> 
            <br />
            Where ideas bloom, perspectives shift. Let’s explore this colorful world tougher, crafting new horizons with every stroke of imagination.
          </Typography>
          <Typography
            level="h6"
            textColor="text.tertiary"
            sx={{
              maxWidth: "500px",
            }}
          >
            <Typography textColor="text.primary">Excellence</Typography> 
            <br />
            Excellence is not just a goal-it’s a way of life. It’s the relentless pursuit of perfection, the dedication to surpass expectations. Join me in embracing excellence, where every endeavor is a step towards greatness.
          </Typography>
        </Stack>
        <Parallax
          speed={10}
          opacity={[0, 1]}
          easing="ease"
          disabled={mobile}
          style={
            mobile
              ? {
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "25rem",
                  zIndex: 1,
                  animation: "float 20s ease-in-out infinite",
                }
              : {
                  position: "absolute",
                  right: "calc(350px + 20%)",
                  top: "2rem",
                  zIndex: 1,
                  animation: "float 20s ease-in-out infinite",
                }
          }
        >
          <ProgressiveImage
            src={vader}
            placeholder={vaderMin}
            alt="Darth vader"
            style={{
              ...(mobile
                ? {
                    height: "350px",
                  }
                : {
                    height: "500px",
                  }),
              
            }}
          />

          
        </Parallax>
      </Stack>
    </Stack>
  );
}
