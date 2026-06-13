require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || process.env.VITE_MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || 'portfolio';
const CONTACT_COLLECTION = process.env.CONTACT_COLLECTION || 'contact_messages';

if (!MONGODB_URI) {
  console.error('Missing MONGODB_URI environment variable. See .env.example');
  process.exit(1);
}

let db;
async function connectDb() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  db = client.db(DB_NAME);
  console.log('Connected to MongoDB');
}

// Setup nodemailer transport
function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    console.warn('SMTP configuration missing. Emails will not be sent. See .env.example');
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

const transporter = createTransport();

function validatePayload(payload) {
  const { name, subject, email, message } = payload || {};
  if (!name || typeof name !== 'string') return 'Name is required';
  if (!subject || typeof subject !== 'string') return 'Subject is required';
  if (!email || typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'Valid email is required';
  if (!message || typeof message !== 'string') return 'Message is required';
  return null;
}

app.post('/contact', async (req, res) => {
  try {
    const err = validatePayload(req.body);
    if (err) return res.status(400).json({ error: err });

    const doc = {
      name: req.body.name,
      subject: req.body.subject,
      email: req.body.email,
      message: req.body.message,
      is_read: false,
      created_at: new Date().toISOString(),
    };

    const col = db.collection(CONTACT_COLLECTION);
    const result = await col.insertOne(doc);

    // Send notification email if transport available
    if (transporter) {
      const mailOptions = {
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to: process.env.EMAIL_TO || process.env.SMTP_USER,
        subject: process.env.EMAIL_SUBJECT || `New contact message: ${doc.subject}`,
        text: `Name: ${doc.name}\nEmail: ${doc.email}\nSubject: ${doc.subject}\n\n${doc.message}`,
      };
      transporter.sendMail(mailOptions).catch((e) => console.error('Failed to send notification email', e));
    }

    return res.status(201).json({ id: result.insertedId });
  } catch (error) {
    console.error('Contact endpoint error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/health', (req, res) => res.json({ ok: true }));

const PORT = parseInt(process.env.PORT || '4000', 10);
connectDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
  })
  .catch((e) => {
    console.error('Failed to connect to DB', e);
    process.exit(1);
  });
