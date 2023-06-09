import { m } from 'framer-motion';
import * as Yup from 'yup';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Typography, Stack, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MotionViewport, varFade } from '../../components/animate';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import { useSnackbar } from '../../components/snackbar';

// ----------------------------------------------------------------------

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQ3NzJkOGYzMzVkMTU3NzQ2YzI5NjEiLCJpYXQiOjE2ODMyODAzOTB9._y7blvuD0nneXBOUUMOwtsCCOcplLzPHF6O0mNO3sjA';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function ContactForm() {
  const [userData, setUserData] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('First name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    phone: Yup.string()
      .required('required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'too short')
      .max(10, 'too long'),
    message: Yup.string().required('Message is required'),
  });

  const defaultValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    const { name, email, phone, message } = data;
    try {
      const Response = await axios.post(
        `${process.env.HOST_API_KEY}/api/contact-us`,
        {
          name,
          email,
          phone,
          message,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': [
              'https://designwithsatya.vercel.app',
              'http://localhost:3031',
            ],
          },
        }
      );
      const resultdata = await Response;
      if (!resultdata) {
        console.log('somthing went wrong?');
      } else {
        enqueueSnackbar('Messages sent successfully!');
      }
    } catch (error) {
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message || error,
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${process.env.HOST_API_KEY}/api/getdata`, {
        withCredentials: true,
        crossDomain: true,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': [
            'https://designwithsatya.vercel.app',
            'http://localhost:3031',
          ],
        },
      });
      const resultdata = await response.data;
      setUserData(resultdata);
      if (resultdata.status !== 200) {
        const error = new Error(resultdata.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userData, userData.name);

  return (
    <Stack component={MotionViewport} spacing={5}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h3">Feel free to contact us.</Typography>
      </m.div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Stack sx={{ mb: 5 }} spacing={3}>
          <m.div variants={varFade().inUp}>
            <RHFTextField name="name" fullWidth label="Name" />
          </m.div>

          <m.div variants={varFade().inUp}>
            <RHFTextField name="email" fullWidth label="Email" />
          </m.div>
          <m.div variants={varFade().inUp}>
            <RHFTextField name="phone" fullWidth label="Phone Number" />
          </m.div>

          <m.div variants={varFade().inUp}>
            <RHFTextField
              name="message"
              fullWidth
              label="Enter your message here."
              multiline
              rows={4}
            />
          </m.div>
        </Stack>
        <m.div variants={varFade().inUp}>
          <LoadingButton
            fullWidth
            color="inherit"
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitSuccessful || isSubmitting}
            sx={{
              bgcolor: 'text.primary',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
              '&:hover': {
                bgcolor: 'text.primary',
                color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
              },
            }}
          >
            Send Message
          </LoadingButton>
        </m.div>
      </FormProvider>
    </Stack>
  );
}
