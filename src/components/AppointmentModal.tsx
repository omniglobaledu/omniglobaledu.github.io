import React, { useState } from "react";
import { X } from "lucide-react";
import emailjs from "emailjs-com";
import { EMAILJS_CONFIG } from "../config/EmailConfig"; // Ensure correct path and casing
import { CircularProgress, Snackbar, Alert } from "@mui/material";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
}: AppointmentModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [loading, setLoading] = useState(false); // New state for loading

  if (!isOpen) return null;

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading animation

    try {
      // Send the email using emailjs
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formData as Record<string, any>, // Type cast formData to Record<string, any>
        EMAILJS_CONFIG.USER_ID
      );
      console.log("Appointment request sent:", response.text);
      setSnackbar({
        open: true,
        message: "Appointment requested successfully!",
        severity: "success",
      });
      setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form after submission
      setTimeout(() => {
        onClose(); // Close after Snackbar is displayed
      },2000);
      
    } catch (error: any) {
      console.error("Error sending appointment request:", error.text);
      setSnackbar({
        open: true,
        message: "Failed to request appointment. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>

        <div className="relative bg-white rounded-lg w-full max-w-md p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Book an Appointment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-900">Name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Phone</label>
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <CircularProgress size={24} className="text-white" />
              ) : (
                "Book Appointment"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity={snackbar.severity as "success" | "error"}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          sx={{
            backgroundColor: snackbar.severity === "success" ? "#4caf50" : "#f44336", // Green for success, Red for error
            color: "white",
            fontWeight: "bold",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
