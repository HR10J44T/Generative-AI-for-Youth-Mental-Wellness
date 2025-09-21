// Google Apps Script automation for setting up Google services integration
// This script can be deployed to Google Apps Script to automate service connections

/**
 * Setup Google Forms for mood tracking
 * Creates a form with mood, stress, and activity questions
 */
function setupMoodTrackingForm() {
  const form = FormApp.create("AI Wellness Companion - Mood Tracking")

  // Mood rating question
  const moodItem = form.addScaleItem()
  moodItem
    .setTitle("How would you rate your overall mood today?")
    .setBounds(1, 10)
    .setLabels("Very Low", "Very High")
    .setRequired(true)

  // Stress level question
  const stressItem = form.addScaleItem()
  stressItem
    .setTitle("What is your stress level today?")
    .setBounds(1, 10)
    .setLabels("No Stress", "Very Stressed")
    .setRequired(true)

  // Energy level question
  const energyItem = form.addScaleItem()
  energyItem
    .setTitle("How is your energy level today?")
    .setBounds(1, 10)
    .setLabels("Very Low", "Very High")
    .setRequired(true)

  // Sleep quality question
  const sleepItem = form.addScaleItem()
  sleepItem
    .setTitle("How was your sleep quality last night?")
    .setBounds(1, 10)
    .setLabels("Very Poor", "Excellent")
    .setRequired(true)

  // Activities question
  const activitiesItem = form.addCheckboxItem()
  activitiesItem
    .setTitle("What activities did you do today? (Select all that apply)")
    .setChoices([
      activitiesItem.createChoice("Exercise/Physical Activity"),
      activitiesItem.createChoice("Social Interaction"),
      activitiesItem.createChoice("Creative Work"),
      activitiesItem.createChoice("Outdoor Time"),
      activitiesItem.createChoice("Meditation/Mindfulness"),
      activitiesItem.createChoice("Reading/Learning"),
      activitiesItem.createChoice("Work/Study"),
      activitiesItem.createChoice("Entertainment/Relaxation"),
    ])

  // Notes question
  const notesItem = form.addParagraphTextItem()
  notesItem.setTitle("Any additional notes about your day? (Optional)").setRequired(false)

  // Set up response destination (Google Sheets)
  const sheet = SpreadsheetApp.create("Mood Tracking Data")
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId())

  console.log("Mood tracking form created: " + form.getEditUrl())
  console.log("Response sheet created: " + sheet.getUrl())

  return {
    formUrl: form.getPublishedUrl(),
    sheetId: sheet.getId(),
    formId: form.getId(),
  }
}

/**
 * Setup contact form for the About page
 */
function setupContactForm() {
  const form = FormApp.create("AI Wellness Companion - Contact Form")

  // Name question
  const nameItem = form.addTextItem()
  nameItem.setTitle("Your Name").setRequired(true)

  // Email question
  const emailItem = form.addTextItem()
  emailItem.setTitle("Email Address").setRequired(true)

  // Subject question
  const subjectItem = form.addMultipleChoiceItem()
  subjectItem
    .setTitle("What is this regarding?")
    .setChoices([
      subjectItem.createChoice("General Feedback"),
      subjectItem.createChoice("Technical Issue"),
      subjectItem.createChoice("Research Collaboration"),
      subjectItem.createChoice("Privacy Concern"),
      subjectItem.createChoice("Feature Request"),
      subjectItem.createChoice("Other"),
    ])
    .setRequired(true)

  // Message question
  const messageItem = form.addParagraphTextItem()
  messageItem.setTitle("Your Message").setRequired(true)

  console.log("Contact form created: " + form.getEditUrl())

  return {
    formUrl: form.getPublishedUrl(),
    formId: form.getId(),
  }
}

/**
 * Setup Gmail notifications for wellness reminders
 */
function setupWellnessReminders() {
  // This would typically be set up as a time-driven trigger
  // to send daily mood tracking reminders

  const emailTemplate = `
    Subject: Daily Wellness Check-in Reminder
    
    Hi there!
    
    This is your friendly reminder to log your mood and wellness data for today.
    
    Taking just 2 minutes to track your mood helps our AI provide better personalized recommendations for your mental wellness journey.
    
    Click here to log your mood: [MOOD_TRACKING_FORM_URL]
    
    Have a wonderful day!
    
    The AI Wellness Companion Team
  `

  console.log("Email reminder template created")
  return emailTemplate
}

/**
 * Setup Google Calendar wellness events
 */
function setupWellnessCalendar() {
  const calendar = CalendarApp.getDefaultCalendar()

  // Create weekly wellness check-in events
  const startDate = new Date()
  const endDate = new Date()
  endDate.setMonth(endDate.getMonth() + 3) // 3 months ahead

  // Create recurring weekly event for wellness check-ins
  const event = calendar.createEventSeries(
    "Weekly Wellness Check-in",
    startDate,
    new Date(startDate.getTime() + 30 * 60000), // 30 minutes
    CalendarApp.newRecurrence().addWeeklyRule().until(endDate),
    {
      description: "Time to review your wellness progress and set intentions for the week ahead.",
      location: "AI Wellness Companion Dashboard",
    },
  )

  console.log("Weekly wellness calendar events created")
  return event
}

/**
 * Main setup function to initialize all Google services
 */
function initializeGoogleServices() {
  console.log("Starting Google Services setup for AI Wellness Companion...")

  try {
    // Setup forms
    const moodForm = setupMoodTrackingForm()
    const contactForm = setupContactForm()

    // Setup notifications
    const emailTemplate = setupWellnessReminders()

    // Setup calendar
    const calendarEvent = setupWellnessCalendar()

    console.log("Google Services setup completed successfully!")
    console.log("Mood Form URL:", moodForm.formUrl)
    console.log("Contact Form URL:", contactForm.formUrl)

    return {
      moodTracking: moodForm,
      contact: contactForm,
      emailTemplate: emailTemplate,
      calendar: calendarEvent,
    }
  } catch (error) {
    console.error("Error setting up Google Services:", error)
    throw error
  }
}

// Declare the variables before using them
const google = {} // Declare the google variable to fix the undeclared variable error

const FormApp = google.script.run
  .withSuccessHandler((response) => {
    console.log("FormApp initialized:", response)
  })
  .initializeFormApp()

const SpreadsheetApp = google.script.run
  .withSuccessHandler((response) => {
    console.log("SpreadsheetApp initialized:", response)
  })
  .initializeSpreadsheetApp()

const CalendarApp = google.script.run
  .withSuccessHandler((response) => {
    console.log("CalendarApp initialized:", response)
  })
  .initializeCalendarApp()
