# AI Youth Wellness Companion

A comprehensive web application designed to support youth mental wellness through AI-powered insights, mood tracking, and curated resources. Built entirely using Google services for security, reliability, and seamless integration.

## 🌟 Features

- **Mood Tracking**: Intuitive daily mood logging with Google Forms integration
- **AI Suggestions**: Personalized wellness recommendations powered by Google Vertex AI
- **Wellness Resources**: Curated mental health resources stored in Google Drive
- **Smart Notifications**: Automated reminders via Gmail and Google Calendar
- **Visual Analytics**: Interactive dashboards powered by Looker Studio
- **Privacy-First**: Secure data handling with Google's enterprise infrastructure

## 🚀 Live Demo

Experience the application: [AI Youth Wellness Companion](https://your-domain.com)

## 🛠️ Technology Stack

### Frontend
- **HTML5/CSS3**: Modern, responsive design
- **JavaScript (ES6+)**: Interactive functionality
- **Chart.js**: Data visualization
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Typography

### Backend
- **Google Apps Script**: Serverless backend logic
- **Google Sheets**: Data storage and management
- **Google Forms**: Mood tracking data collection
- **Google Drive**: Resource storage and sharing
- **Google Calendar**: Notification scheduling
- **Gmail**: Automated email notifications
- **Google Vertex AI**: AI-powered suggestions
- **Looker Studio**: Advanced analytics and reporting

## 📋 Prerequisites

Before setting up the application, ensure you have:

1. Google Cloud Platform account with billing enabled
2. Google Workspace or personal Google account
3. Basic knowledge of HTML, CSS, JavaScript
4. Familiarity with Google Apps Script

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Generative-AI-for-Youth-Mental-Wellness.git
cd Generative-AI-for-Youth-Mental-Wellness
```

### 2. Google Cloud Setup

1. **Create a Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing one
   - Note your project ID

2. **Enable Required APIs**:
   ```bash
   gcloud services enable aiplatform.googleapis.com
   gcloud services enable script.googleapis.com
   gcloud services enable sheets.googleapis.com
   gcloud services enable drive.googleapis.com
   ```

3. **Setup Vertex AI**:
   - Navigate to Vertex AI in Google Cloud Console
   - Enable the Vertex AI API
   - Note your project location (e.g., us-central1)

### 3. Google Sheets Setup

1. **Create Mood Tracking Sheet**:
   - Create a new Google Sheet
   - Add headers: `Timestamp`, `Mood`, `Energy`, `Sleep`, `Stress`, `Notes`, `User ID`, `Session ID`
   - Note the Sheet ID from the URL

2. **Create Contact Submissions Sheet**:
   - Create another Google Sheet
   - Add headers: `Timestamp`, `Name`, `Email`, `Subject`, `Message`
   - Note the Sheet ID

### 4. Google Forms Setup

1. **Create Mood Tracking Form**:
   - Create a new Google Form
   - Add fields matching your sheet structure
   - Link to your mood tracking sheet
   - Note the form ID and field entry IDs

### 5. Google Apps Script Deployment

1. **Create Apps Script Project**:
   - Go to [script.google.com](https://script.google.com)
   - Create new project
   - Replace Code.gs with content from `google-apps-script/main.gs`

2. **Configure Script Properties**:
   ```javascript
   // In Apps Script editor, go to Project Settings > Script Properties
   MOOD_SHEET_ID: "your_mood_sheet_id"
   CONTACT_SHEET_ID: "your_contact_sheet_id"
   VERTEX_AI_PROJECT_ID: "your_gcp_project_id"
   ```

3. **Deploy as Web App**:
   - Click Deploy > New Deployment
   - Choose "Web app" as type
   - Set execute as "Me"
   - Set access to "Anyone"
   - Note the deployment URL

### 6. Frontend Configuration

1. **Update API URLs**:
   Edit `js/main.js` and replace placeholder URLs:
   ```javascript
   const scriptUrl = 'YOUR_APPS_SCRIPT_DEPLOYMENT_URL';
   const formUrl = 'YOUR_GOOGLE_FORMS_URL';
   ```

2. **Configure Google Forms Integration**:
   Update form field IDs in the mood tracking submission function.

### 7. Looker Studio Setup

1. **Create Data Source**:
   - Go to [Looker Studio](https://lookerstudio.google.com)
   - Create new data source
   - Connect to your Google Sheets

2. **Create Dashboard**:
   - Design charts for mood trends, distributions
   - Add filters and date controls
   - Share with appropriate permissions

### 8. Google Drive Resource Setup

1. **Create Resource Folders**:
   - Create folders for different resource categories
   - Upload wellness resources (PDFs, videos, etc.)
   - Set appropriate sharing permissions

2. **Update Resource Links**:
   Replace placeholder URLs in `resources.html` with actual Drive file/folder URLs.

## 🔧 Configuration

### Environment Variables

Create a configuration object in your Apps Script:

```javascript
const CONFIG = {
  MOOD_SHEET_ID: 'your_sheet_id',
  CONTACT_SHEET_ID: 'your_contact_sheet_id',
  VERTEX_AI_PROJECT_ID: 'your_project_id',
  VERTEX_AI_LOCATION: 'us-central1',
  ADMIN_EMAIL: 'admin@yourdomain.com'
};
```

### Privacy Settings

Ensure all Google services are configured with appropriate privacy settings:
- Limit sheet access to necessary users
- Use secure sharing settings for Drive resources
- Configure proper OAuth scopes in Apps Script

## 📱 Mobile Responsiveness

The application is fully responsive and works on:
- Desktop computers (1024px+)
- Tablets (768px - 1023px)
- Mobile phones (320px - 767px)

## 🔒 Security Features

- **Data Encryption**: All data encrypted in transit and at rest
- **Access Controls**: Granular permissions for different resources
- **Privacy Compliance**: GDPR and COPPA considerations
- **Secure Authentication**: Google OAuth integration
- **No Third-Party Tracking**: Privacy-first design

## 🧪 Testing

### Manual Testing

1. **Mood Tracking**:
   - Submit mood entries with various combinations
   - Verify data appears in Google Sheets
   - Check dashboard updates

2. **AI Suggestions**:
   - Test different mood/concern combinations
   - Verify fallback suggestions work when AI is unavailable

3. **Contact Form**:
   - Submit contact forms
   - Verify emails are sent
   - Check data storage in sheets

### Automated Testing

```bash
# Run basic functionality tests
npm test  # If you add Jest or another testing framework
```

## 📊 Analytics and Monitoring

### Google Analytics 4

Add GA4 tracking to monitor:
- Page views and user engagement
- Feature usage patterns
- User retention metrics

### Apps Script Logging

Monitor backend performance through:
- Cloud Logging in Google Cloud Console
- Apps Script execution logs
- Error reporting and alerting

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow consistent coding style
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation as needed

## 📚 Additional Resources

### Mental Health Resources

- [National Suicide Prevention Lifeline](https://suicidepreventionlifeline.org/): 988
- [Crisis Text Line](https://www.crisistextline.org/): Text HOME to 741741
- [NAMI](https://www.nami.org/): National Alliance on Mental Illness
- [Teen Line](https://teenlineonline.org/): 1-800-852-8336

### Technical Documentation

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Google Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)
- [Looker Studio Help](https://support.google.com/looker-studio)

## 🚨 Important Disclaimers

### Not a Substitute for Professional Care

This platform provides wellness support tools and is **not intended to replace professional mental health treatment**. Always consult with qualified healthcare providers for serious mental health concerns.

### Crisis Support

If you or someone you know is experiencing a mental health emergency:
- **Call 911** for immediate emergencies
- **Call or text 988** for the Suicide & Crisis Lifeline
- **Text HOME to 741741** for Crisis Text Line support

### Age Considerations

This platform is designed for youth aged 13-25. Users under 18 should have parental or guardian awareness of their participation, in accordance with local laws and regulations.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For support and questions:

- **Technical Issues**: [Create an issue](https://github.com/your-username/repo/issues)
- **General Questions**: Contact us through the app's contact form
- **Security Concerns**: Email security@yourdomain.com

## 🙏 Acknowledgments

- Google for providing the comprehensive cloud platform
- Mental health professionals who informed our evidence-based approach
- The open-source community for inspiration and tools
- Youth mental health advocates and organizations

---

**Built with ❤️ for youth mental wellness**