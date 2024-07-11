import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const You = () => {
  return (
    <div
      style={{
        backgroundColor: "pink",
        padding: "2rem",
        borderRadius: "8px",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          gender: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("First Name is required.")
            .max(30, "Name must be at max 30 characters.")
            .trim(),
          lastName: Yup.string()
            .required("Last Name is required.")
            .max(30, "Name must be at max 30 characters.")
            .trim(),
          email: Yup.string()
            .email("Must be a valid email.")
            .max(50, "Email must be at max 50 characters.")
            .required("Email is required."),
          password: Yup.string()
            .required("Password is required.")
            .trim(),
          gender: Yup.string()
            .oneOf(["male", "female"], "Gender must be male or female.")
            .required("Gender is required."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              padding: "2rem",
              backgroundColor: "#9ba9b4",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h4" gutterBottom>
              You
            </Typography>

            <FormControl>
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <TextField
                id="firstName"
                label="First Name"
                {...formik.getFieldProps("firstName")}
                variant="outlined"
                fullWidth
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="lastName">Last Name</InputLabel>
              <TextField
                id="lastName"
                label="Last Name"
                {...formik.getFieldProps("lastName")}
                variant="outlined"
                fullWidth
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <FormHelperText error>{formik.errors.lastName}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="email">Email</InputLabel>
              <TextField
                id="email"
                label="Email"
                type="email"
                {...formik.getFieldProps("email")}
                variant="outlined"
                fullWidth
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <TextField
                id="password"
                label="Password"
                type="password"
                {...formik.getFieldProps("password")}
                variant="outlined"
                fullWidth
                error={formik.touched.password && Boolean(formik.errors.password)}
              />
              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                {...formik.getFieldProps("gender")}
                variant="outlined"
                fullWidth
                error={formik.touched.gender && Boolean(formik.errors.gender)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
              {formik.touched.gender && formik.errors.gender ? (
                <FormHelperText error>{formik.errors.gender}</FormHelperText>
              ) : null}
            </FormControl>

            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default You;



