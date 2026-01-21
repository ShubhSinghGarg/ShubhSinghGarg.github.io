// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // In a real implementation, you would:
    // 1. Send an email using a service like SendGrid, AWS SES, etc.
    // 2. Store the contact message in a database
    // 3. Handle any additional processing like notifications

    // For now, we'll just return success
    // Example code for using a mail service (commented out)
    /*
    // Using SendGrid example
    await sendgrid.send({
      to: 'your-email@example.com',
      from: 'your-site@example.com',
      subject: `Contact form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });
    */

    // Return success
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error in contact API:', error);
    return res.status(500).json({ message: 'Failed to send message', error: error.message });
  }
}
