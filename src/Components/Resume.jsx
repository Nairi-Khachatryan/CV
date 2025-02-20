import img from '../../public/img/cert.png';
import FeedIcon from '@mui/icons-material/Feed';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Divider,
  Link,
  Box,
  Dialog,
  DialogContent,
} from '@mui/material';

const Resume = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        {/* Header Section */}
        <Box
          textAlign="center"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          mb={3}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ cursor: 'pointer', '&:hover': { color: 'blue' } }}
          >
            Nairi Khachatryan
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Junior Front-End JavaScript Developer
          </Typography>
        </Box>

        {/* Modal for Image */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogContent sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={img} // Replace with your actual image URL
              alt="Profile"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </DialogContent>
        </Dialog>

        {/* Contact Information */}
        <Box textAlign="center" mb={3}>
          <Typography variant="body1">
            📞 +374 55107115 | 📍 Yerevan, Armenia
          </Typography>
          <Typography variant="body1">
            GitHub:{' '}
            <Link
              href="https://github.com/Nairi-Khachatryan"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Nairi-Khachatryan
            </Link>
          </Typography>
          <Typography variant="body1">
            LinkedIn:{' '}
            <Link
              href="https://www.linkedin.com/in/nairi-khachatryan"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/nairi-khachatryan
            </Link>
          </Typography>
          <Typography variant="body1">
            Email:{' '}
            <Link href="mailto:Nairi.Khachaatryan357@gmail.com">
              Nairi.Khachaatryan357@gmail.com
            </Link>
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* About Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Aspiring Frontend Developer with a strong interest in JavaScript and
          React. Passionate about building web applications, learning modern
          technologies, and continuously improving my skills. A quick learner
          who enjoys solving problems and exploring new tools.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Education Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Education
        </Typography>
        <Box mb={2}>
          <Typography variant="body1" fontWeight="bold">
            Armenian Code Academy
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Advanced JavaScript Course (06/2024 - 10/2024){' '}
            <FeedIcon
              variant="h4"
              fontWeight="bold"
              sx={{
                marginLeft: '10px',
                cursor: 'pointer',
                '&:hover': { color: 'blue' },
              }}
              onClick={handleOpen}
            />{' '}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1" fontWeight="bold">
            Armenian Code Academy
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            React JS Course (11/2024 - 02/2025)
            <FeedIcon
              variant="h4"
              fontWeight="bold"
              sx={{
                marginLeft: '10px',
                cursor: 'pointer',
                '&:hover': { color: 'blue' },
              }}
              onClick={handleOpen}
            />{' '}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1" fontWeight="bold">
            Mesrop Mashtots University
          </Typography>
          <Typography variant="body2">
            Management (08/2018 - 05/2022)
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Skills Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">
              Programming Languages:
            </Typography>
            <Typography variant="body2">JavaScript</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">
              Web Development:
            </Typography>
            <Typography variant="body2">
              HTML/CSS, React, Redux, Material UI
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">
              Databases:
            </Typography>
            <Typography variant="body2">MongoDB, Firebase</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">
              Version Control:
            </Typography>
            <Typography variant="body2">Git, GitHub</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Languages Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Languages
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">
              Armenian, Russian:
            </Typography>
            <Typography variant="body2">Native</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">
              English:
            </Typography>
            <Typography variant="body2">Advanced</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Resume;
