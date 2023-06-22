import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
            <Paper
              elevation={3}
              style={{
                padding: '1rem',
                height: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div style={{ flex: '1' }}>
                  <Typography variant="h6">{certificate.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Date: {certificate.date}
                  </Typography>
                </div>
                <Button variant="outlined" onClick={() => handleOpenCertificate(certificate)}>
                  View PDF
                </Button>
              </div>
              <Typography variant="caption">Institute Name -{certificate.InstituteName}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={selectedCertificate !== null}
        onClose={handleCloseCertificate}
        maxWidth="md"
        fullWidth
      >
        {selectedCertificate && (
          <>
            <DialogTitle>{selectedCertificate.title}</DialogTitle>
            <DialogContent>
              <Document file={selectedCertificate.pdfUrl}>
                <Page pageNumber={1} width={800} />
              </Document>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseCertificate}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
