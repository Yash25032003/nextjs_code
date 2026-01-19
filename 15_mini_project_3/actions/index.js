"use server";

import Dbconnect from "@/lib/db";
import { Contact } from "@/models/contact";
import { revalidatePath, unstable_cache } from "next/cache";

export async function createContent(formData) {
  // action to create the content of the form means form me jo entries dal rahe hai unhe access kar rahe hai
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

export async function getContacts() {
  // backend se contacts data ko access kar rahe hai aur show karenge UI par
  try {
    await Dbconnect();
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean(); // .lean se response readable object me kar sakte hai
    return contacts.map((contact) => ({
      ...contact,
      _id: contact._id.toString(),
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
    }));
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
}

export async function UpdateContact(contactId, status) {
  // updates kar rahe hai contacts me status ke .
  try {
    await Dbconnect();
    console.log(status);
    await Contact.findByIdAndUpdate(contactId, { status });
    revalidatePath("/contacts"); //! revalidatePath() ka use kisi specific page ka cache clear karne ke liye hota hai , Pehle page static tha (cached) , Data change hua ,revalidatePath() bola ,Next request pe fresh data aayega
    return { success: true };
  } catch (error) {
    console.error("Error fetching data", error);
    return { success: false, error: "Failed to update contact" };
  }
}

export async function getContactStats() {
  const getCachedStats = unstable_cache(async () => {
    await Dbconnect();
    const total = await Contact.countDocuments();
    const newCount = await Contact.countDocuments({ status: "new" });
    const readCount = await Contact.countDocuments({ status: "read" });
    const repliedCount = await Contact.countDocuments({ status: "replied" });
    return (
      {
        total,
        newCount,
        readCount,
        repliedCount,
      },
      ["contacts-stats"],
      { tags: ["contacts-stats"] }
    );
  });
  return getCachedStats();
}
