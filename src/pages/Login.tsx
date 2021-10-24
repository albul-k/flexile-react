import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField
} from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';

// Localization
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Login = ({ setToken }: { setToken: any  }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  if (loading) {
    return (
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress  />
      </Box>
    )
  }

  return (
    <>
      <Helmet>
        <title>{i18next.t('Login | Flexile')}</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              login: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              login: Yup.string().max(255).required(i18next.t('Login is required')),
              password: Yup.string().max(255).required(i18next.t('Password is required'))
            })}
            onSubmit={(values, actions) => {
              console.log('user', values);
              setLoading(true);
              setTimeout(() => {
                setToken({ 'token': 'some token' });
                setLoading(false);
                navigate('/flexile/dashboard', { replace: true });
              }, 1000);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  error={Boolean(touched.login && errors.login)}
                  fullWidth
                  helperText={touched.login && errors.login}
                  label={i18next.t("Login")}
                  margin="normal"
                  name="login"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="login"
                  value={values.login}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label={i18next.t("Password")}
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {i18next.t("Sign in now")}
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
