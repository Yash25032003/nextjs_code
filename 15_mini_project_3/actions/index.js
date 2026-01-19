"use server";

import Dbconnect from "@/lib/db";
import { Contact } from "@/models/contact";

export async function createContent(formData) {
  try {
    await Dbconnect();
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required",
      };
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });
    return {
      success: true,
      message: "Message sent successfully",
      contactId: contact._id,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to send message",
    };
  }
}
