import {
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
  Box,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import api from "../services/api";

import { preferenceSchema } from "../schemas/preferenceSchema";
import type { PreferenceFormData } from "../schemas/preferenceSchema";

const PreferenceForm = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PreferenceFormData>({
    resolver: zodResolver(preferenceSchema),
    defaultValues: {
      name: "",
      email: "",
      department: "",
      meeting_time: "",
      remote_preference: "",
    },
  });

  const onSubmit = async (data: PreferenceFormData) => {
    try {
      const response = await api.post("/preferences", data);

      console.log(response.data);

      alert("Preference Saved Successfully");

      reset();
    } catch (error: any) {
      console.log(error);

      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Cannot connect to FastAPI");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Employee Preference Form
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        {/* Email */}
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        {/* Department */}
        <TextField
          fullWidth
          label="Department"
          margin="normal"
          {...register("department")}
          error={!!errors.department}
          helperText={errors.department?.message}
        />

        {/* Meeting Time */}
        <Controller
          name="meeting_time"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Meeting Time"
              margin="normal"
              error={!!errors.meeting_time}
              helperText={errors.meeting_time?.message}
            >
              <MenuItem value="">Select Time</MenuItem>
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Afternoon">Afternoon</MenuItem>
              <MenuItem value="Evening">Evening</MenuItem>
            </TextField>
          )}
        />

        {/* Remote Preference */}
        <Controller
          name="remote_preference"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Remote Preference"
              margin="normal"
              error={!!errors.remote_preference}
              helperText={errors.remote_preference?.message}
            >
              <MenuItem value="">Select Preference</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
            </TextField>
          )}
        />

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default PreferenceForm;