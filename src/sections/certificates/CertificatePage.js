import React, { useState } from 'react';
import { Grid, Typography, Button, Dialog, DialogActions, Box, Card } from '@mui/material';
import { PDFViewer, Document, Page } from '@react-pdf/renderer';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Iconify from '../../components/iconify';

const certificates = [
  {
    id: 1,
    title: 'UI Development',
    date: '25-08-2018',
    InstituteName: ' NareshIT Software Training Institute of Hyderabad',
    pdfUrl: '/assets/pdf/ui.pdf',
  },
  {
    id: 2,
    title: 'JavaScript',
    date: '23-05-2021',
    InstituteName: 'Online Udemy',
    pdfUrl: '/assets/pdf/javascript.pdf',
  },
  {
    id: 3,
    title: 'Adobe',
    date: '27-05-2021',
    InstituteName: 'Online Udemy',
    pdfUrl: '/assets/pdf/adobe.pdf',
  },
  {
    id: 4,
    title: 'Oracle DataBase',
    InstituteName: ' NareshIT Software Training Institute of Hyderabad',
    date: '28-12-2019',
    pdfUrl: '/assets/pdf/orcle.pdf',
  },
  {
    id: 5,
    title: 'Angular-8',
    InstituteName: ' NareshIT Software Training Institute of Hyderabad',
    date: '05-09-2019',
    pdfUrl: '/assets/pdf/angular.pdf',
  },
  {
    id: 6,
    title: 'Next JS | Node JS | Mongo DB',
    date: '18-02-2023',
    InstituteName: 'Online Udemy',
    pdfUrl: '/assets/pdf/next.pdf',
  },
];

export default function CertificatePage() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <Grid container spacing={2}>
        {certificates.map((certificate) => (
          <Grid item xs={12} sm={6} md={4} key={certificate.id}>
            <Card sx={{ p: 3 }}>
              <Box
                sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}
              >
                <div style={{ flex: '1' }}>
                  <Typography variant="h6">{certificate.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Date: {certificate.date}
                  </Typography>
                </div>
                <Stack
                  spacing={3}
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'flex-end', sm: 'center' }}
                  sx={{ mb: { xs: 3, md: 5 } }}
                >
                  <Stack direction="row" spacing={1} flexGrow={1} sx={{ width: 1 }}>
                    <Tooltip title="View">
                      <IconButton onClick={() => handleOpenCertificate(certificate)}>
                        <Iconify icon="solar:eye-bold" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Download">
                      <a
                        href={certificate.pdfUrl}
                        download={`${certificate.title}.pdf`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tooltip title="Download">
                          <IconButton>
                            <Iconify icon="eva:cloud-download-fill" />
                          </IconButton>
                        </Tooltip>
                      </a>
                    </Tooltip>
                  </Stack>
                </Stack>
              </Box>
              <Typography variant="subtitle2">
                Institute Name - {certificate.InstituteName}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={selectedCertificate !== null} onClose={handleCloseCertificate} fullScreen>
        {selectedCertificate && (
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <DialogActions sx={{ p: 1.5 }}>
              <Button color="inherit" variant="contained" onClick={handleCloseCertificate}>
                Close
              </Button>
            </DialogActions>

            <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
              <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
                <Document file={selectedCertificate.pdfUrl}>
                  <Page pageNumber={1} />
                </Document>
              </PDFViewer>
            </Box>
          </Box>
        )}
      </Dialog>
    </>
  );
}
