// import nodemailer from "nodemailer";
// import { MongoClient } from 'mongodb';

// let client;
// let db;
// let isConnected = false;

// // Initialize MongoDB connection
// async function connectToDatabase() {
//   if (isConnected && db) return db;
  
//   if (!process.env.MONGODB_URI) {
//     throw new Error('MONGODB_URI is not defined in environment variables');
//   }
  
//   try {
//     client = new MongoClient(process.env.MONGODB_URI, {
//       serverSelectionTimeoutMS: 5000, // 5 second timeout
//       socketTimeoutMS: 5000, // 5 second socket timeout
//       maxPoolSize: 10, // Maintain up to 10 socket connections
//     });
//     await client.connect();
//     db = client.db('reavyn'); // Use default database from URI
//     isConnected = true;
//     console.log("MongoDB connection established");
//     return db;
//   } catch (error) {
//     console.error("MongoDB connection failed:", error.message);
//     isConnected = false;
//     throw error;
//   }
// }

// export async function POST(req) {
//   try {
//     const { name, email, service, message } = await req.json();

//     if (!name || !email || !message) {
//       return new Response(
//         JSON.stringify({ error: "Name, email, and message are required." }),
//         { status: 400 }
//       );
//     }

//     // Save to MongoDB first (but don't fail if DB is unavailable)
//     try {
//       const database = await connectToDatabase();
//       const contacts = database.collection('contacts');
      
//       const contactData = {
//         name,
//         email,
//         service: service || "",
//         message,
//         createdAt: new Date()
//       };
      
//       await contacts.insertOne(contactData);
//       console.log("Contact saved to MongoDB");
//     } catch (dbError) {
//       console.error("Database Error (continuing with email):", dbError.message);
//       // Don't fail the request if DB save fails, continue with email
//     }

//     // Create transporter using SMTP
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT || 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//       // Add connection timeout
//       connectionTimeout: 60000,
//       greetingTimeout: 30000,
//       socketTimeout: 60000,
//     });

//     // Verify connection
//     try {
//       await transporter.verify();
//       console.log("SMTP connection verified");
//     } catch (verifyError) {
//       console.error("SMTP connection failed:", verifyError);
//       return new Response(
//         JSON.stringify({ error: "Failed to connect to email server" }),
//         { status: 500 }
//       );
//     }

//     // Prepare email data
//     const mailData = {
//       from: process.env.SMTP_USER,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <h2>Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
//         <p><strong>Message:</strong><br/> ${message}</p>
//       `,
//     };

//     // Send email
//     const info = await transporter.sendMail(mailData);
//     console.log("Email sent successfully:", info.messageId);

//     return new Response(
//       JSON.stringify({ message: "Email sent successfully!" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     // Detailed error logging
//     console.error("Nodemailer Error:", error);
//     return new Response(
//       JSON.stringify({ 
//         error: "Failed to send email",
//         details: error.message 
//       }),
//       { status: 500 }
//     );
//   }
// }

// import nodemailer from "nodemailer";
// import { MongoClient } from 'mongodb';

// let client;
// let db;
// let isConnected = false;

// // MongoDB connection helper
// async function connectToDatabase() {
//   if (isConnected && db) return db;
//   if (!process.env.MONGODB_URI) {
//     throw new Error('MONGODB_URI is not defined');
//   }
//   client = new MongoClient(process.env.MONGODB_URI, {
//     serverSelectionTimeoutMS: 5000, socketTimeoutMS: 5000, maxPoolSize: 10,
//   });
//   await client.connect();
//   db = client.db(); // Use default from URI
//   isConnected = true;
//   return db;
// }

// export async function POST(req) {
//   try {
//     const { name, email, service, message } = await req.json();

//     if (!name || !email || !message) {
//       return new Response(
//         JSON.stringify({ error: "Name, email, and message are required." }),
//         { status: 400, headers: { "Content-Type": "application/json" } }
//       );
//     }
//     // Save to DB (don't fail if DB fails)
//     try {
//       const database = await connectToDatabase();
//       await database.collection('contacts').insertOne({
//         name, email, service: service || "", message, createdAt: new Date()
//       });
//     } catch (dbError) {
//       // DB failure won't break email
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT) || 587,
//       secure: false,
//       auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
//       connectionTimeout: 60000, greetingTimeout: 30000, socketTimeout: 60000,
//     });

//     try { await transporter.verify(); } 
//     catch (verifyError) {
//       return new Response(
//         JSON.stringify({ error: "Failed to connect to email server" }),
//         { status: 500, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     const mailData = {
//       from: process.env.SMTP_USER,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <h2>Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
//         <p><strong>Message:</strong><br/> ${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailData);

//     // Always send valid JSON with headers
//     return new Response(
//       JSON.stringify({ message: "Email sent successfully!" }),
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ error: "Failed to process request", details: error.message }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }

// // Optionally handle other methods
// export async function GET() {
//   return new Response(
//     JSON.stringify({ error: "GET is not supported." }),
//     { status: 405, headers: { "Content-Type": "application/json" } }
//   );
// }


import nodemailer from "nodemailer";
import { MongoClient } from 'mongodb';

let client;
let db;
let isConnected = false;

async function connectToDatabase() {
  if (isConnected && db) return db;
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI missing');
  client = new MongoClient(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000, socketTimeoutMS: 5000, maxPoolSize: 10
  });
  await client.connect();
  db = client.db(); // Use default db from URI
  isConnected = true;
  return db;
}

export async function POST(req) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    try {
      const database = await connectToDatabase();
      await database.collection('contacts').insertOne({ name, email, service: service || "", message, createdAt: new Date() });
    } catch (dbError) {
      // log but continue
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 60000, greetingTimeout: 30000, socketTimeout: 60000
    });

    try { await transporter.verify(); }
    catch (verifyError) {
      return new Response(
        JSON.stringify({ error: "Failed to connect to email server" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `<h2>Contact Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Service Interest:</strong> ${service || "Not specified"}</p><p><strong>Message:</strong><br/> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to process request", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ error: "GET not supported." }),
    { status: 405, headers: { "Content-Type": "application/json" } }
  );
}
